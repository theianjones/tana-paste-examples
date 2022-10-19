import axios from "axios";

const TANA_URL = "https://europe-west1-tagr-prod.cloudfunctions.net";

export type TanaResponse = string | { err: string };

const nodeApi = axios.create({
  baseURL: TANA_URL,
  headers: {
    authorization: `Bearer ${await env("TANA_API_TOKEN")}`,
  },
});

export default nodeApi;
