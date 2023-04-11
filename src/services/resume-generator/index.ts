import jobs, { Job } from '@/data/jobs';
import PDFDocument from 'pdfkit';

type GenerateProps = {
  skills: string[];
  addGDPRRegulations?: boolean;
  company?: string;
  generatedBy: string;
};

const NAME: string = 'Luke Wawrzyniak';
const EMAIL: string = 'l.wawrzyniak@wawit.net';
const LOCATION: string = 'Poland/Wroclaw';
const SOCIALS: string[] = [
  'https://github.com/born2bewild',
  'https://www.linkedin.com/in/lukaszwawrzyniak',
  'https://wawit.net',
];
const ABOUT_ME: string =
  "I am a full-stack web developer. I've worked as a solo developer, as team member, \
and as a lead developer, scaling up a team as needed. My recent projects have been \
built in React and NodeJS but I'm always open to new frameworks and believe that the \
technology should suit the project. I enjoy learning new languages, frameworks and technologies. \
In addition to the Web, I've written applications for Android IOS (React Native), Linux \
(CLI & Desktop environment - Gtk & Electron), and Embedded (mostly Arduino).";

export class ResumeGenerator {
  public generate({
    skills,
    addGDPRRegulations = false,
    company,
    generatedBy,
  }: GenerateProps) {
    const doc = new PDFDocument({
      size: 'A4',
      font: 'Times-Roman',
      lang: 'en',
      displayTitle: true,
      info: {
        Title: NAME + ' Resume',
        CreationDate: new Date(),
      },
    });

    doc.rect(0, 0, doc.page.width, 155).fill('#e4e4e7');

    doc
      .fontSize(20)
      .fillColor('#71717a')
      .text(NAME, {
        align: 'center',
      })
      .moveDown(0.1)
      .fontSize(12)
      .text(EMAIL, {
        align: 'center',
      })
      .moveDown(0.1)
      .font('Times-Italic')
      .fontSize(10)
      .text(SOCIALS.join(' // '), {
        align: 'center',
      })
      .moveDown(0.1);

    doc
      .text(`@${LOCATION}`, { align: 'center' })
      .moveDown(4)
      .fontSize(10)
      .fillColor('black')
      .text(ABOUT_ME)
      .moveDown(2)
      .fontSize(12)
      .text('Work experience: ')
      .moveDown(0.5)
      .fontSize(10);
    jobs.forEach((job: Job, index: number) => {
      const title: string = [job.dateRange, job.company, job.position]
        .filter(Boolean)
        .join(' · ');
      doc.text(title);
      if (job.description) {
        doc.fontSize(8).moveDown(0.05).text(job.description);
      }
      if (index + 1 !== jobs.length) doc.moveDown(0.5).fontSize(10);
    });
    doc
      .moveDown(2)
      .fontSize(14)
      .text('Skills: ')
      .moveDown(0.5)
      .fontSize(10)
      .list(skills, { columns: 4, columnGap: 15, height: 100 });

    if (addGDPRRegulations && company) {
      const template = process.env.NEXT_PUBLIC_GDPR_CONSENT_STATEMENT as string;
      const text = template.replace(
        '___COMPANY_NAME___',
        company.slice(0, 128)
      );

      doc
        .fillColor('black')
        .fontSize(8)
        .text(text, 50, doc.page.height - 60);
    }

    doc.page.margins.bottom = 0;
    doc.fontSize(8);

    const generatedByText = `Generated at https://wawit.net${
      generatedBy ? ' by ' + generatedBy : ''
    }`;
    doc.text(generatedByText, 0, doc.page.height - 30, {
      align: 'right',
    });

    return doc;
  }
}

export default ResumeGenerator;
