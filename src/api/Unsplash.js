import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID JA3fIj6p0e33ET6-zCBUMJqL00oePMmn8LTIZLXtK6g'
      }
});