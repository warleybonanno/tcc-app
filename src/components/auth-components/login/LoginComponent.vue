<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <p class="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus gravida scelerisque viverra. Curabitur mattis
          ornare enim, quis pharetra nibh efficitur eu. Ut molestie
          justo tortor, at vulputate erat rutrum at.Praesent malesuada
          mollis nisi id interdum. In auctor, arcu nec ultrices congue,
          risus tellus convallis tellus, eu scelerisque metus felis sed
          sapien. Fusce feugiat lorem sit amet sem venenatis, sed facilisis
          sapien porttitor. Morbi egestas non est quis elementum. Nullam
          gravida tortor et lobortis mattis. Ut tortor odio, tincidunt vitae
          vulputate vitae, dictum nec dolor. Integer accumsan risus justo, id
          porta magna imperdiet in. Suspendisse fringilla mauris vitae ex blandit,
          in eleifend nulla gravida. Curabitur erat est, vehicula id orci vitae,
          tincidunt consequat augue.<br><br>

          Phasellus convallis turpis sit amet risus scelerisque, nec consectetur
          risus aliquet. Morbi efficitur ornare euismod. Pellentesque aliquet dui
          at tellus interdum, a tincidunt ante tincidunt. Suspendisse lorem tortor,
          porta ut posuere sed, interdum vel eros. Proin sed velit rutrum, aliquet
          massa et, maximus erat. Cras vulputate nisl tristique, laoreet mi ut, accumsan
          risus. Vestibulum tempor at nulla nec elementum.<br><br>

          Phasellus nisl metus, tristique vitae cursus ac, consequat nec justo.
          Sed rutrum hendrerit arcu, sit amet semper odio facilisis ut. Nullam semper
          nisl vitae sapien dictum sollicitudin eu quis ante. Vivamus eu pulvinar augue,
          sed vestibulum lacus. Curabitur cursus est ut ligula egestas, a tempor magna euismod.
          Nulla hendrerit risus vel vulputate ornare. Mauris non neque nisi. Donec tincidunt,
          eros id ullamcorper tristique, ipsum velit tincidunt nisl, in tristique
          quam mauris et est. Aliquam erat volutpat. Duis placerat scelerisque erat in iaculis.
          Fusce malesuada erat eget congue lobortis.
          </p>
      </div>
      <div class="col-4">
        <form
          class="text-center p-5"
          v-on:submit.prevent="loginSubmitUserForm()"
        >
        <h2 class="login-text">Login</h2>
        <!--INICIO BLOCO: E-MAIL-->
          <MazInput
            v-model="loginForm.email"
            placeholder="E-mail"
            type="email"
            class="w-100 rounded mb-3"
            left-icon-name="email"
            dark
            :class="{
              'is-invalid': isSubmitted && $v.loginForm.email.$error,
            }"
          />
          <div
            v-if="isSubmitted && $v.loginForm.email.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.loginForm.email.required">
              O campo e-mail é obrigatório!
            </span>
            <span v-if="!$v.loginForm.email.email">
              E-mail inválido!
            </span>
          </div>
        <!--FINAL BLOCO: E-MAIL-->

        <!--INICIO BLOCO: Password-->
        <MazInput
          v-model="loginForm.password"
          placeholder="Senha"
          type="password"
          class="w-100 rounded mb-3"
          left-icon-name="lock"
          dark
          :class="{
            'is-invalid': isSubmitted && $v.loginForm.password.$error,
          }"
        />
        <div
          v-if="isSubmitted && $v.loginForm.password.$error"
          class="invalid-feedback"
        >
          <span v-if="!$v.loginForm.password.required">
            O campo senha é obrigatório!
          </span>
          <span v-if="!$v.loginForm.password.minLength">
            A senha deve conter pelo menos 6 caracteres!
          </span>
        </div>
        <!--FINAL BLOCO: Password-->

        <p class="center">
          Não tem uma conta cadastrada?<br><router-link to="/register">Cadastre Aqui</router-link>
        </p>

        <!--INICIO BLOCO: Botão Submit-->
        <center>
          <button @click="submitLoginUser" class="btn btn-block w-100 my-4">
            Entrar
          </button>
        </center>
        <!--FINAL BLOCO: Botão Submit-->
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./Login.js"></script>

<style src="./Login.css" scoped></style>
