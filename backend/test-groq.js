const Groq = require('groq-sdk');
require('dotenv').config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
console.log('Using API key:', process.env.GROQ_API_KEY ? 'Set' : 'Not Set');

groq.chat.completions.create({
  messages: [{ role: 'user', content: 'Say hello and respond in JSON format. Key: message, Value: greeting.' }],
  model: 'llama-3.1-8b-instant',
  response_format: { type: 'json_object' },
  max_tokens: 3000
})
.then(completion => {
  console.log('Success:', completion.choices[0].message.content);
})
.catch(err => {
  console.error('Error occurred:', err);
});
