import Api from '../axios';
import axios from 'axios';
import { UserAdd } from '../type';

var config = {
  headers: {
    Authorization:
      'Bearer ' +
      '49cfbc9f3d1b7487340e53b685ebdb6f490089ad8efce4b79e9d79509f2c2301',
  },
};

export default {
  async getAllUser() {
    var response = await Api().get('/users', config);
    console.log(response.headers);
    return response.data;
  },

  async addUser(users: UserAdd) {
    var data = {
      name: users.name,
      gender: users.gender,
      email: users.email,
      status: users.status,
    };
    var response = await axios({
      method: 'post',
      url: '/users',
      headers: {
        Authorization:
          'Bearer ' +
          '49cfbc9f3d1b7487340e53b685ebdb6f490089ad8efce4b79e9d79509f2c2301',
      },
      data: data,
    });
    console.log(response.headers);
    return response.data;
  },

  async deleteUser(id: number) {
    var response = await Api().delete('/users/' + id, config);
    console.log(response.headers);
    return response.data;
  },
};
