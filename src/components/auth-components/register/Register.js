import swal from 'sweetalert';
import {
  required, email, minLength, sameAs,
} from 'vuelidate/lib/validators';
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
        repeatPassword: null,
        role: 'User',
      },
      isSubmitted: false,
    };
  },

  validations: {
    registerForm: {
      name: { required },
      email: { required, email },
      phone: { required, minLength: minLength(13) },
      password_hash: { required, minLength: minLength(6) },
      repeatPassword: { required, sameAsPassword: sameAs('password_hash') },
    },
  },

  methods: {
    registerSubmitUserForm() {},

    async submitRegisterUser() {
      try {
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

        const register = await RegisterService.registerNewUser(this.registerForm);
        if (Object.prototype.hasOwnProperty.call(register, 'id')) {
          this.$router.push('/');
          return;
        }
        if (Object.prototype.hasOwnProperty.call(register, 'msg')) {
          swal({
            title: 'Oops!',
            text: 'E-mail já cadastrado na base de dados!',
            icon: 'error',
          });
          return;
        }
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
