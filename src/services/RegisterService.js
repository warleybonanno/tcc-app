import swal from 'sweetalert';
import Api from './Api';

export default {
  async registerNewUser(newUser) {
    try {
      const response = await Api().post('/user/register', newUser);

      if (response.data.saveUser) {
        swal({
          title: 'Excelente!',
          text: 'Usuário cadastrado com sucesso!',
          icon: 'success',
        });
        return response.data.saveUser;
      }
      return response.data;
    } catch (error) {
      swal({
        title: 'Oops!',
        text: 'Erro ao criar um novo cadastro.',
        icon: 'error',
      });
      return error;
    }
  },
};
