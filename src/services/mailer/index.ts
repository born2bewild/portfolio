import sgMail, { MailService } from '@sendgrid/mail';

export class Mailer {
  private service: MailService;
  constructor() {
    const apiKey = process.env.SENDGRID_API_KEY as string;
    sgMail.setApiKey(apiKey);
    this.service = sgMail;
  }

  public async send(
    from: string,
    recipient: string,
    subject: string,
    message: string,
    htmlMessage?: string
  ) {
    const msg = {
      to: recipient,
      from,
      subject,
      text: message,
      html: htmlMessage,
    };
    return this.service.send(msg);
  }
}

export default Mailer;
