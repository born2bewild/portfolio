import Button from '@/components/Button';
import Input from '@/components/Form/Input';
import Textarea from '@/components/Form/Textarea';
import axios from 'axios';
import { FormEvent, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { toast } from 'react-toastify';
import 'twin.macro';

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLInputElement;
}

interface ResumeFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (event: FormEvent<ResumeFormElement>) => {
    event.preventDefault();
    const { name, email, message } = event.currentTarget.elements;
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

    try {
      await axios({
        method: 'post',
        url: '/api/contact',
        data: {
          name: name.value,
          email: email.value,
          message: message.value,
          token,
        },
      });
      toast.info('Thank you for reaching me out! Message is sent!');
    } catch (error) {
      toast.error(
        'Message is not sent! Try to reach me out via another medium!'
      );
    } finally {
      setIsSending(false);
    }
  };
  return (
    <form tw="w-full" onSubmit={handleSubmit}>
      <div tw="grid grid-cols-1 gap-6">
        <Input
          type="text"
          name="name"
          placeholder="John Doe"
          label="Full name"
          required
          autoComplete="name"
        />
        <Input
          type="email"
          name="email"
          placeholder="john@example.com"
          label="Email address"
          required
          autoComplete="email"
        />
        <Textarea name="message" rows={4} label="Message" required />
        <div tw="block">
          <Button loading={isSending} type="submit">
            Send
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
