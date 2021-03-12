import axios from "axios";
import { API_USERNAME, API_PASSWORD } from "../secrets";
import { errorLogger, requestLogger, responseLogger } from "axios-logger";
import {
  RequestLogConfig,
  ResponseLogConfig,
} from "axios-logger/lib/common/types";

/**
 * Wrapper to be extended by all endpoints.
 * Handles authentication and logging.
 */
export default class Api {
  // API credentials, parsed from enviroment variables.
  private credentials = {
    username: API_USERNAME,
    password: API_PASSWORD,
  };

  // Axois endpoint to use for all requests.
  // We specify the base URL here to be able
  // to use relative paths for requests.
  protected endpoint = axios.create({
    baseURL: "https://collections.thulb.uni-jena.de/api/v1",
    auth: this.credentials,
  });

  constructor() {
    const logConfig: RequestLogConfig & ResponseLogConfig = {
      prefixText: "API",
      dateFormat: "HH:MM:ss",
      data: false,
      url: true,
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
