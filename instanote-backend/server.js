const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { syncData } = require('./cloudSync');

app.use(cors());
app.use(bodyParser.json());

app.post('/sync', async (req, res) => {
  const { data } = req.body;
  try {
    await syncData(data);
    res.status(200).json({ message: 'Data synced successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to sync data' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
