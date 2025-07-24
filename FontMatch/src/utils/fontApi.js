import axios from 'axios';

export const fetchGoogleFonts = async () => {
  try {
    const response = await axios.get('https://font-match.vercel.app/api/fonts');
    return response.data;
  } catch (error) {
    console.error('Error fetching fonts:', error);
    return [];
  }
};
