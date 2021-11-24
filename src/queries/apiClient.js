import { create as createApiClient } from "apisauce";

const API_KEY = process.env.REACT_APP_YNAB_API_KEY; 
const baseURL = "https://api.youneedabudget.com/v1";

const client = createApiClient({
  baseURL,
  headers: {
    Authorization: `bearer ${API_KEY}`,
  },
});

export default client;
