<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">

        <form
          class="text-center border border-primary p-5"
          style="margin-top:70px;height:auto;padding-top:100px !important;"
          v-on:submit.prevent="registerSubmitUserForm()"
        >
        <h2 class="center">Cadastre-se</h2>
        <!--INICIO BLOCO: NOME-->
        <label for="name">Nome:
          <input
          type="text"
          id="name"
          name="name"
          class="form-control mb-5"
          placeholder="Digite o seu nome completo"
          v-model="registerForm.name"
          />
          <div
            v-if="isSubmitted && !$v.registerForm.name.required"
            class="invalid-feedback"> O campo nome é obrigatório!
          </div>
        </label>
        <!--FINAL BLOCO: NOME-->

        <!--INICIO BLOCO: E-MAIL-->
        <label for="email">Email:
          <input
          type="email"
          id="email"
          name="email"
          class="form-control mb-5"
          placeholder="Digite o seu e-mail"
          v-model="registerForm.email"
          />
          <div
            v-if="isSubmitted && !$v.registerForm.email.required"
            class="invalid-feedback"> O campo e-mail é obrigatório!
          </div>
        </label>
        <!--FINAL BLOCO: E-MAIL-->

        <!--INICIO BLOCO: Phone-->
        <label for="phone">Telefone:
          <input
          type="text"
          id="phone"
          name="phone"
          class="form-control mb-5"
          placeholder="Digite seu telefone"
          v-model="registerForm.phone"
          />
          <div
            v-if="isSubmitted && !$v.registerForm.phone.required"
            class="invalid-feedback"> O campo telefone é obrigatório!
          </div>
        </label>
        <!--FINAL BLOCO: Phone-->

        <!--INICIO BLOCO: Password-->
        <label for="password_hash">Senha:
          <input
          type="password"
          id="password_hash"
          name="password_hash"
          class="form-control mb-5"
          placeholder="Digite a sua senha"
          v-model="registerForm.password_hash"
          />
          <div
            v-if="isSubmitted && !$v.registerForm.password_hash.required"
            class="invalid-feedback"> O campo senha é obrigatório!
          </div>
        </label>
        <!--FINAL BLOCO: Password-->

        <p class="center">
          Já possui uma conta cadastrada?<router-link to="/">Faça o login aqui</router-link>
        </p>

        <!--INICIO BLOCO: Botão Submit-->
        <center>
          <button @click="submitRegisterUser" class="btn btn-primary btn-block w-75 my-4">
            Cadastrar
          </button>
        </center>
        <!--FINAL BLOCO: Botão Submit-->

        </form>
      </div>
    </div>
  </div>
</template>

<script src="./Register.js"></script>

<style src="./Register.css" scoped></style>
