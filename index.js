function objectToString(data){
    let result = ""
    for(let x in data){
        result = result+`${x} : ${data[x]}\n`
        }
    return result || 'no data'
}
const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.post('/smiEmail',async(req,res)=>{
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'signmediaenquiry@gmail.com',
            pass: 'wysz lpie maeb ouul'
        }
    });

    // Define email options
    let mailOptions = {
        from: 'signmediaenquiry@gmail.com',
        to: 'signmediaenquiry@gmail.com',
        subject: 'subject',
        text: objectToString(req.body)
    };
    try {
        console.log('sending....',req.body, objectToString(req.body));
        await transporter.sendMail(mailOptions);
        res.sendStatus(200).send('Email sent successfully');
    } catch (error) {
        
    }
})
app.listen(3000,()=>{
    console.log('running');
})