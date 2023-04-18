import Button from '@/components/Button';
import Checkbox from '@/components/Form/Checkbox';
import Input from '@/components/Form/Input';
import Select from '@/components/Select';
import technologies, { Category } from '@/data/technologies';
import axios from 'axios';
import { FormEvent, useMemo, useRef, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { toast } from 'react-toastify';
import 'twin.macro';
import Preset from './Preset';

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  company: HTMLInputElement;
  add_gdpr_statement: HTMLInputElement;
  skills: HTMLSelectElement;
}

interface ResumeFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const DEFAULT_FILE_NAME = '__Luke_Wawrzyniak_Resume';
const FILE_EXTENSION = 'pdf';

const defaultFileName = `${DEFAULT_FILE_NAME}.${FILE_EXTENSION}`;

export const ResumeGenerator = () => {
  const [isSending, setIsSending] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [addGDPRClause, setAddGDPRClause] = useState(true);

  const [preset, setPreset] = useState<Category | 'all'>('all');

  const blobAnchorRef = useRef<HTMLAnchorElement | null>(null);

  const defaultTechs = useMemo(() => {
    if (preset === 'all') return technologies;
    return technologies.filter(tech => tech.category.includes(preset));
  }, [preset]);

  const handleChangePreset = (preset: Category | 'all') => {
    setPreset(preset);
  };

  const handleGDPRChange = () => {
    setAddGDPRClause(prev => !prev);
  };

  const handleSubmit = async (event: FormEvent<ResumeFormElement>) => {
    event.preventDefault();
    const { company, add_gdpr_statement, email, skills } =
      event.currentTarget.elements;
    if (!executeRecaptcha) {
      return;
    }

    setIsSending(true);
    const token = await executeRecaptcha('contactFormSubmit');
    if (!token) {
      toast.warning('Are you a robot?! reCaptcha thinks that you are!');
      setIsSending(false);
      return;
    }
    axios({
      method: 'post',
      url: '/api/generate-resume',
      data: {
        skills: skills.value.split(','),
        add_gdpr_statement: add_gdpr_statement.value === 'on' ? true : false,
        company: company.value,
        email: email.value,
        token,
      },
      responseType: 'blob',
    })
      .then(response => {
        toast.info('Thank you for reaching me out! Download should start now!');
        const blobUrl = URL.createObjectURL(response.data);
        blobAnchorRef.current?.setAttribute('href', blobUrl);
        blobAnchorRef.current?.click();
        blobAnchorRef.current?.setAttribute('href', '');
        URL.revokeObjectURL(blobUrl);
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          'Message is not sent! Try to reach me out via another medium!'
        );
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div tw="">
        <div tw="grid grid-cols-1 gap-6">
          <Input
            label="Email address"
            type="email"
            name="email"
            placeholder="john@example.com"
            required
          />
          <Select
            name="skills"
            multiple
            options={technologies.map(tech => ({
              label: tech.name,
              value: tech.name,
            }))}
            defaultValue={
              defaultTechs ? defaultTechs?.map(tech => tech.name) : []
            }
          />
          <Preset onChange={handleChangePreset} preset={preset} />
          <div tw="block">
            <div tw="mt-2">
              <div>
                <label tw="inline-flex items-center">
                  <Checkbox
                    onChange={handleGDPRChange}
                    type="checkbox"
                    name="add_gdpr_statement"
                  />
                  <span tw="ml-2">Add GDPR Statement?</span>
                </label>
              </div>
            </div>
          </div>
          <Input
            type="text"
            disabled={addGDPRClause}
            required={!addGDPRClause}
            name="company"
            maxLength={128}
            label="Company name"
          />
          <div tw="block">
            <Button loading={isSending} type="submit">
              Generate resume
            </Button>
          </div>
        </div>
      </div>
      <a
        href=""
        download={defaultFileName}
        className="hidden"
        ref={blobAnchorRef}
      />
    </form>
  );
};

export default ResumeGenerator;
