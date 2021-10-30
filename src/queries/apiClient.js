import { create as createApiClient } from "apisauce";

const API_KEY =
  "32fe59082468840596c6e1b28e7e5d2109a9c9abf8f19efe9e9a78ea926d269f";
const baseURL = "https://api.youneedabudget.com/v1";

const client = createApiClient({
  baseURL,
  headers: {
    Authorization: `bearer ${API_KEY}`,
  },
});

export default client;
