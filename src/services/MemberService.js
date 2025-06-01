import axios from 'axios';

const BASE_API_URL = "http://localhost:8080/api/integrantes";


class MemberService {
    getMembers() {
        return axios.get(BASE_API_URL);
    }

    createMember(member) {
        console.log("member:",member);
        return axios.post(BASE_API_URL, member);
    }

    getMemberById(productId) {
        return axios.get(`${BASE_API_URL}/${productId}`);
    }

    updateMember(product, productId) {
        return axios.put(`${BASE_API_URL}/${productId}`, product);
    }

    deleteMember(member, productId) {
        return axios.delete(`${BASE_API_URL}/${productId}`, {
          data:member 
        });
               
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new MemberService();