import swal from 'sweetalert';
import Api from './Api';

export default {
  async registerNewUser(newUser) {
    try {
      debugger;
      const response = await Api().post('/user/register', newUser);
      // const { token } = response.data.saveUser;

      if (response.data.saveUser) {
        swal({
          title: 'Excelente!',
          text: 'Usuário cadastrado com sucesso!',
          icon: 'success',
        });
      }
    } catch (error) {
      swal({
        title: 'Oops!',
        text: 'Erro ao criar um novo cadastro.',
        icon: 'error',
      });
    }
  },
};
