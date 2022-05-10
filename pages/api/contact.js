import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
  });

  const result = await transporter.sendMail({
    from: email,
    to: process.env.to,
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