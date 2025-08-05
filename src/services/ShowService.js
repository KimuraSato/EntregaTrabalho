import axios from 'axios';

const BASE_API_URL = "http://localhost:8080/api/shows";


class ShowService {
    getShows() {
        return axios.get(BASE_API_URL);
    }

    createShow(show) {
        return axios.post(BASE_API_URL, show);
    }

    getShowById(showId) {
        return axios.get(`${BASE_API_URL}/${showId}`);
    }

    updateShow(show, showId) {
        return axios.put(`${BASE_API_URL}/${showId}`, show);
    }

    deleteShow(show, showId) {
        return axios.delete(`${BASE_API_URL}/${showId}`, {
          data:show 
        });
               
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ShowService();