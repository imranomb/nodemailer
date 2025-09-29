const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    const transporter = nodemailer.createTransport({
       host: 'smtp.gmail.com',
       port: 587,
       secure: false,
      auth: {
        user: 'Imran2018omerbasic@gmail.com',
        pass: 'oiih divn vslz ityq'
      }
    });

    await transporter.sendMail({
      from: 'Imran2018omerbasic@gmail.com',
      to,
      subject,
      text
    });

    res.status(200).send({ message: 'Email poslan!' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error });
  }
});

app.listen(5000, () => console.log('Server radi na portu 5000'));