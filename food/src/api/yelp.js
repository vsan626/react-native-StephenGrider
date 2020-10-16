import axios from 'axios';
import yelpApiKey from './apiKey';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      `Bearer ${yelpApiKey}`
  }
});
