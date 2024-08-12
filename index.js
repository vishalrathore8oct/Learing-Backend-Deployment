require('dotenv').config()
const express = require('express')

const app = express()

// const port = 3000
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send("Hello Mr. Vishal Rathore")
})

app.get('/login', (req, res) => {
    res.send("<h1>You are logged In our Server</h1>")
})

app.get('/api/jokes', (req, res) => {

    const jokes = [
        {
          id: 1,
          joke: `टीचर: तुम क्लास में सो क्यों रहे हो? बच्चा: आपकी आवाज इतनी प्यारी है मैम, नींद आ गई!`
        },
        {
          id: 2,
          joke: `पति: तुम्हारे बिना जिंदगी अधूरी है! पत्नी: अरे वाह, आज इतने प्यार से क्यों बोल रहे हो? पति: क्योंकि आज तेरा मायके जाने का दिन है!`
        },
        {
          id: 3,
          joke: `डॉक्टर: आपको क्या परेशानी है? मरीज: डॉक्टर साहब, मेरी बीवी बहुत बीमार है! डॉक्टर: ओह, तो आप खुश हैं या दुखी?`
        },
        {
          id: 4,
          joke: `गब्बर: अरे ओ सांभा, कितना इनाम रखा है सरकार ने हम पर? सांभा: सरदार, इतना कि आप खुद जाकर सरेंडर कर दें!`
        },
        {
          id: 5,
          joke: `पति: मेरी शर्ट का बटन टूट गया है। पत्नी: तो मैं क्या करूँ? पति: तुम अपने हाथ से जोड़ दो!`
        },
        {
          id: 6,
          joke: `टीचर: तुम्हारी कॉपी इतनी गंदी क्यों है? बच्चा: मैम, आप ही तो कहती हो कि सफाई जरूरी है, तो मैंने सफाई से लिखना छोड़ दिया!`
        },
        {
          id: 7,
          joke: `बच्चा: मम्मी, मुझे नई साइकिल चाहिए। मम्मी: पहले तुम साइकिल चलाना तो सीख लो!`
        }
      ];
      

    res.send(jokes)
      
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}/`);
})