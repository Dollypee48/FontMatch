const express = require('express');
const cors = require('cors');
const app = express();
const fontsRoute = require('./routes/fontsRoute');


const PORT = 5000;

const corsOptions = {
  origin: "https://font-match-7m9t.vercel.app",
  methods: ["GET", "POST"],
  credentials: true
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("FontMatch backend is running ✅");
});

app.use('/api/fonts', fontsRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
