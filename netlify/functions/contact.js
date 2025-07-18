const fetch = require('node-fetch');

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const body = JSON.parse(event.body);
    const response = await fetch('https://formspree.io/f/xwpqprra', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    if (response.ok) {
      return { statusCode: 200, body: JSON.stringify({ success: true, message: 'Message sent!' }) };
    } else {
      return { statusCode: 400, body: JSON.stringify({ success: false, error: data.error || 'Failed to send.' }) };
    }
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ success: false, error: 'Server error.' }) };
  }
};
