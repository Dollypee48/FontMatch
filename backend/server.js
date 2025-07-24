const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

const fontsRoute = require('./routes/fontsRoute');

app.use(cors());

app.use('/api/fonts', fontsRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
