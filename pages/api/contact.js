import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'abhishek.naik24082000@gmail.com',
      pass: 'abhishek@2000',
    },
  });

  const result = await transporter.sendMail({
    from: 'abhishek.naik24082000@gmail.com',
    to: 'naikabhi242000@gmail.com',
    subject: subject,
    html: `<p>We mail from Abhishek Naik Portfolio</p><br>
      <p><strong>Name: </strong> ${name} </p><br>
      <p><strong>Email: </strong> ${email} </p><br>
      <p><strong>Subject: </strong> ${subject} </p><br>
      <p><strong>Message: </strong> ${message} </p><br>
      `,
  });

  res.status(200).json(req.body);
}