import swal from 'sweetalert';
import Api from './Api';

export default {
  /**
   * Method responsible for login a User (new Login User)
   * (POST): localhost:3000/api/v1/
   */
  async loginUser(user) {
    try {
      const response = await Api().post('/login', user);
      const response2 = response.request.responseURL;

      // const { token } = response.data;
      // const { _id } = response.data.user;

      // localStorage.setItem('jwt', token);
      // localStorage.setItem('userId', _id);

      if (response2.includes('success')) {
        swal({
          title: 'Excelente!',
          text: 'Usuário logado com sucesso!',
          icon: 'success',
        });
        return response2;
      }
      return response2;
    } catch (error) {
      swal({
        title: 'Oops!',
        text: 'Erro ao logar no sistema!',
        icon: 'error',
      });
      this.$router.push('/');
      return error;
    }
  },
};
