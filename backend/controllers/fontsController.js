const axios = require('axios');

const getFonts = async (req, res) => {
  try {
    const response = await axios.get('https://gwfh.mranftl.com/api/fonts');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching fonts:', error.message);
    res.status(500).json({ error: 'Failed to fetch fonts' });
  }
};

module.exports = { getFonts };
