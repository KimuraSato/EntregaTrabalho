import axios from 'axios';

const BASE_API_URL = "http://localhost:8080/api/patrocinios";


class SponsorService {
    getSponsors() {
        return axios.get(BASE_API_URL);
    }

    createSponsor(sponsor) {
        return axios.post(BASE_API_URL, sponsor);
    }

    getSponsorById(sponsorId) {
        return axios.get(`${BASE_API_URL}/${sponsorId}`);
    }

    updateSponsor(sponsor, sponsorId) {
        return axios.put(`${BASE_API_URL}/${sponsorId}`, sponsor);
    }

    deleteSponsor(sponsor, sponsorId) {
        return axios.delete(`${BASE_API_URL}/${sponsorId}`, {
          data:sponsor 
        });
               
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new SponsorService();