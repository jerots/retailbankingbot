const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('live agent page here')
})


app.get('/api/chatbot', (req, res) => {
    let text = ''
    try {
        text = JSON.parse(req.query.text);
    } catch (e) {
        console.log('error', e);
        res.send({ text: "Invalid Message" })
    }
    const response = parse(text.text);

    res.send(JSON.stringify(response));

})

app.listen(process.env.PORT || 3000, () => console.log('app listening on port 3000'))




function parse(text) {

    // Empty Text
    if (text.trim().length === 0) { return { text: "Sorry, I didn't get what you were trying to say" } }

    // Nearest branch
    if (/\b(nearest branch|where)\b/i.test(text)) { return { text: "The nearest HSBC branch to you is located at 68 Orchard Road #01-60 Plaza Singapura, 238839." } }
    if (/\b(nearest atm)\b/i.test(text)) { return { text: "The nearest HSBC ATM to you is located at 68 Orchard Road #01-60 Plaza Singapura, 238839." } }
    if (/\b(nearest)\b/i.test(text)) { return { text: "Are you looking for the nearest branch or nearest ATM?" } }

    // Account Balance
    if (/\b(balance|money left|money do i have left)\b/i.test(text)) { return { text: "Your account balance is $1833.94" } }    

    // TODO: FAQs

    // Live agent
    if (/\b(agent|speak to someone)\b/i.test(text)) { return { text: "We currently have 1 live agent. Your estimated wait time is 1 minute." } }


    // Greeting
    if (/\b(hey|yo|hello|hi|what's up|good morning)\b/i.test(text)) { return { text: "Hello, how many i help you?" } }

    // Good bye
    if (/\b(good bye|bye bye|bye|farewell|cya|see ya)\b/i.test(text)) { return { text: "Good bye!" } }


    // Fallback
    return "Sorry I could not find the answer to your question. Could you rephrase it?"
}