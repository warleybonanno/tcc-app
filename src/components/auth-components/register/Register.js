import swal from 'sweetalert';
import { required, email, minLength } from 'vuelidate/lib/validators';
import RegisterService from '@/services/RegisterService';

export default {
  name: 'RegisterComponent',
  data() {
    return {
      registerForm: {
        name: null,
        email: null,
        phone: null,
        password_hash: null,
        role: 'User',
      },
      isSubmitted: false,
    };
  },

  validations: {
    registerForm: {
      name: { required },
      email: { required },
      phone: { required },
      password_hash: { required },
    },
  },

  methods: {
    registerSubmitUserForm() {},

    async submitRegisterUser() {
      try {
        debugger;
        this.isSubmitted = true;

        this.$v.$touch();

        if (this.$v.$invalid) {
          swal({
            title: 'Oops!',
            text: 'Você precisa incluir todos os campos obrigatórios!',
            icon: 'error',
          });
          return;
        }

        await RegisterService.registerNewUser(this.registerForm);
        this.$router.push('/');
      } catch (error) {
        debugger;
        swal({
          title: 'Oops!',
          text: 'Alguma coisa deu errado aqui!',
          icon: 'error',
        });
      }
    },
  },
};
