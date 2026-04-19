const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
app.use(express.json())

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: '4errorcode2@gmail.com',
    pass: 'ivep qthz dxqk iohg'
  }
})

app.post('/notify', async (req, res) => {
  const record = req.body.record
  const postUrl = `https://www.thisgooberis.online/:3/#/post/${record.id}`

  await transporter.sendMail({
    from: '4errorcode2@gmail.com',
    to: 'msolodukho@gmail.com',
    subject: `New meme on colon3: ${record.title}`,
    text: `
New meme posted!

Title: ${record.title}
Category: ${record.category}
${record.description ? `Description: ${record.description}` : ''}

View it here: ${postUrl}
    `
  })

  res.send('ok')
})

app.listen(3000)
