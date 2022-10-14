<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary p-5"
          style="margin-top:70px;height:auto;padding-top:100px !important;"
          v-on:submit.prevent="loginSubmitUserForm()"
        >
        <h2 class="center">Login</h2>
        <!--INICIO BLOCO: E-MAIL-->
        <label for="email">Email:
          <input
          type="email"
          id="email"
          name="email"
          class="form-control mb-5"
          placeholder="Digite o seu e-mail"
          v-model="loginForm.email"
          :class="{ 'is-invalid': isSubmitted && $v.loginForm.email.$error }"
          />
          <div
            v-if="isSubmitted && !$v.loginForm.email.required"
            class="invalid-feedback"> O campo e-mail é obrigatório!
          </div>
        </label>
        <!--FINAL BLOCO: E-MAIL-->

        <!--INICIO BLOCO: Password-->
        <label for="password">Senha:
          <input
          type="password"
          id="password"
          name="password"
          class="form-control mb-5"
          placeholder="Digite a sua senha"
          v-model="loginForm.password"
          >
        </label>
        <!--FINAL BLOCO: Password-->

        <p class="center">
          Não tem uma conta cadastrada?<router-link to="/register">Cadastre Aqui</router-link>
        </p>

        <!--INICIO BLOCO: Botão Submit-->
        <center>
          <button @click="submitLoginUser" class="btn btn-primary btn-block w-75 my-4">
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

<style src="" scoped></style>
