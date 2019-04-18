import Airtable from 'airtable';

const API_KEY = 'keyxALvunCAzCSh97';
const BASE_ID = 'appULGZA75xh8AgWq';

export default new Airtable({ apiKey: API_KEY }).base(BASE_ID);
