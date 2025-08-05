import axios from 'axios';

const BASE_API_URL = "http://localhost:8080/api/patrocinios";


class MemberService {
    getMembers() {
        return axios.get(BASE_API_URL);
    }

    createMember(member) {
        return axios.post(BASE_API_URL, member);
    }

    getMemberById(sponsorId) {
        return axios.get(`${BASE_API_URL}/${sponsorId}`);
    }

    updateMember(sponsor, sponsorId) {
        return axios.put(`${BASE_API_URL}/${sponsorId}`, sponsor);
    }

    deleteMember(member, sponsorId) {
        return axios.delete(`${BASE_API_URL}/${sponsorId}`, {
          data:member 
        });
               
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new MemberService();