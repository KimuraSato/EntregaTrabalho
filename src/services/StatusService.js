import axios from "axios";

const BASE_API_URL = "http://localhost:8080/api/status";

class StatusService {
  getStatus() {
    return axios.get(BASE_API_URL);
  }
  getStatusPairs() {
    return axios.get(BASE_API_URL + "/desc");
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new StatusService();
