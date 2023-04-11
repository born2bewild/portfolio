import Button from '@/components/Button';
import Input from '@/components/Form/Input';
import Textarea from '@/components/Form/Textarea';
import axios from 'axios';
import { FormEvent } from 'react';
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
  const handleSubmit = (event: FormEvent<ResumeFormElement>) => {
    event.preventDefault();
    const { name, email, message } = event.currentTarget.elements;
    axios({
      method: 'post',
      url: '/api/contact',
      data: {
        name: name.value,
        email: email.value,
        message: message.value,
      },
    }).then(response => {
      console.log(response);
    });
  };
  return (
    <form tw="w-full" onSubmit={handleSubmit}>
      <div tw="">
        <div tw="grid grid-cols-1 gap-6">
          <Input
            type="text"
            name="name"
            placeholder="John Doe"
            label="Full name"
          />
          <Input
            type="email"
            name="email"
            placeholder="john@example.com"
            label="Email address"
          />
          <Textarea name="message" rows={4} label="Message" />
          <div tw="block">
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
