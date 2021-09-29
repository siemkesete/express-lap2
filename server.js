// Require Dependencies
const express = require('express');
const app = express()
const port = 3000
const magic = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
app.get('/greeting/:name', (req, res) => {
    res.send('Hi ' + req.params.name + ". How are you?")
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tip = req.params.tipPercentage/100 * req.params.total
    res.send(`${tip}`)

});

app.get('/magic/:question ', (req, res) => {
    let tip = req.params.question + ", Will i be a Millonaire"
    res.send(`${magic}`)

app.listen(port, () => {
    consol.log('Express is running on ' + port)
})
