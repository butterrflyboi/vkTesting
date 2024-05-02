// eslint-disable-next-line no-undef
const axios = require('axios');

const HACKER_NEWS_API_BASE_URL = 'https://hacker-news.firebaseio.com/v0';

async function getTopStories() {
    try {
        const response = await axios.get(`${HACKER_NEWS_API_BASE_URL}/topstories.json`);
        return response.data;
    } catch (error) {
        console.error('Error fetching top stories:', error);
        throw error;
    }
}

// eslint-disable-next-line no-undef
module.exports = { getTopStories };
