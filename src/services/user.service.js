import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/employee/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'empleado');
  }

}

export default new UserService();