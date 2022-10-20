import { required, email, minLength } from 'vuelidate/lib/validators';
import { MazInput } from 'maz-ui';
import swal from 'sweetalert';
import LoginService from '@/services/LoginService';

export default {
  name: 'LoginComponent',
  data() {
    return {
      loginForm: {
        email: null,
        password: null,
      },
      isSubmitted: false,
    };
  },

  components: {
    MazInput,
  },

  validations: {
    loginForm: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    },
  },

  methods: {
    loginSubmitUserForm() {},

    async submitLoginUser() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();

        if (this.$v.$invalid) {
          swal({
            title: 'Oops!',
            text: 'Você precisa incluir todos os campos obrigatórios',
            icon: 'error',
          });
          return;
        }

        const login = await LoginService.loginUser(this.loginForm);
        if (login.includes('success')) {
          this.$router.push('/home');
        } else if (login.includes('failure')) {
          swal({
            title: 'Oops!',
            text: 'E-mail ou senha inválida',
            icon: 'error',
          });
        }
      } catch (error) {
        swal({
          title: 'Oops!',
          text: 'E-mail ou senha inválida',
          icon: 'error',
        });
      }
    },
  },
};
