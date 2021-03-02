import axios from "axios";
import { API_USERNAME, API_PASSWORD } from "../secrets";

export default class Api {
  protected endpoint = axios.create({
    baseURL: "https://collections.thulb.uni-jena.de/api/v1",
    auth: {
      username: API_USERNAME,
      password: API_PASSWORD,
    },
  });
}
