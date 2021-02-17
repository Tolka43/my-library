import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: 'tolka43.test@gmail.com', pass: 'AKLDBWHS5' },
});

export function sendMail(mailToSend) {
  return transporter.sendMail({
    from: '"My Library" <tolka43.test@gmail.com>',
    to: mailToSend,
    subject: 'Z biblioteczki',
    html: '<div style="color: blue">Pozdrowienia</div>',
  });
}

