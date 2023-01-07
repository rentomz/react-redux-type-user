import Api from '../axios'

export default{
  async getAllUser() {
    var response=await Api().get('/users?per_page=100');
    console.log(response);
    return response.data;
  }
}