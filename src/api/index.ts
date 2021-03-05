import axios from "axios";
import { API_USERNAME, API_PASSWORD } from "../secrets";
import { errorLogger, requestLogger, responseLogger } from "axios-logger";
import {
  RequestLogConfig,
  ResponseLogConfig,
} from "axios-logger/lib/common/types";

export default class Api {
  protected endpoint = axios.create({
    baseURL: "https://collections.thulb.uni-jena.de/api/v1",
    auth: {
      username: API_USERNAME,
      password: API_PASSWORD,
    },
  });

  constructor() {
    const logConfig: RequestLogConfig & ResponseLogConfig = {
      prefixText: "API",
      dateFormat: "HH:MM:ss",
      data: false,
    };
    this.endpoint.interceptors.request.use(
      (request) => requestLogger(request, logConfig),
      (error) => errorLogger(error)
    );
    this.endpoint.interceptors.response.use(
      (response) => responseLogger(response, logConfig),
      (error) => errorLogger(error)
    );
  }
}
