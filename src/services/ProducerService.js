import axios from 'axios';

const BASE_API_URL = "http://localhost:8080/api/produtoras";


class ProducerService {
    getProducers() {
        return axios.get(BASE_API_URL);
    }

    createProducer(producer) {
        return axios.post(BASE_API_URL, producer);
    }

    getProducerById(producerId) {
        return axios.get(`${BASE_API_URL}/${producerId}`);
    }

    updateProducer(producer, producerId) {
        return axios.put(`${BASE_API_URL}/${producerId}`, producer);
    }

    deleteProducer(producer, producerId) {
        return axios.delete(`${BASE_API_URL}/${producerId}`, {
          data:producer 
        });
               
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProducerService();