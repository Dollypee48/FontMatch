import axios from 'axios';

export const fetchGoogleFonts = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/fonts');
    return response.data;
  } catch (error) {
    console.error('Error fetching fonts:', error);
    return [];
  }
};
