import axios from "axios";

const BASE_URL = "https://book-server-yhaw.onrender.com"

export class LivrosService {
    static getLivros() {
        return axios.get(BASE_URL + '/books');
    }

    static getLivro(id) {
        return axios.get(`${BASE_URL}/book/${id}`);
    }

    static createLivro(body) {
        return axios.post(`${BASE_URL}/book`, body);
    }

    static updateLivro(id, body) {
        return axios.put(`${BASE_URL}/book/${id}`, body);
    }

    static deleteLivro(id) {
        return axios.delete(`${BASE_URL}/book/${id}`);
    }

}