import axios from "axios";

const BASE_API_URL = "http://localhost:8080/api/nacao";

class CountryService {
  getCountries() {
    return axios.get(BASE_API_URL + "/nomes");
  }
  getCountryPairs() {
    return axios.get(BASE_API_URL + "/desc");
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CountryService();
