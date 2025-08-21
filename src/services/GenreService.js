import axios from "axios";

const BASE_API_URL = "http://localhost:8080/api/generos";

class GenreService {
  getGenres() {
    return axios.get(BASE_API_URL);
  }
  getGenrePairs() {
    return axios.get(BASE_API_URL + "/desc");
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new GenreService();
