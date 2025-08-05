import axios from 'axios';

const BASE_API_URL = "http://localhost:8080/api/bandas";


class BandService {
    getBands() {
        return axios.get(BASE_API_URL);
    }

    createBand(band) {
        return axios.post(BASE_API_URL, band);
    }

    getBandById(bandId) {
        return axios.get(`${BASE_API_URL}/${bandId}`);
    }

    updateBand(band, bandId) {
        return axios.put(`${BASE_API_URL}/${bandId}`, band);
    }

    deleteBand(band, bandId) {
        return axios.delete(`${BASE_API_URL}/${bandId}`, {
          data:band 
        });
               
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new BandService();