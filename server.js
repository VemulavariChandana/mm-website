const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
  try {
    const response = await fetch('https://formspree.io/f/xwpqprra', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    if (response.ok) {
      res.status(200).json({ success: true, message: 'Message sent!' });
    } else {
      res.status(400).json({ success: false, error: data.error || 'Failed to send.' });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
