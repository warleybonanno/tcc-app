<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">

        <form
          class="text-center p-5"
          v-on:submit.prevent="registerSubmitUserForm()"
        >
        <h2>Cadastre-se</h2>
        <h5 class="register-text">É rápido e fácil</h5>
        <hr class="solid">
        <!-- Name Block Start -->
          <MazInput
            v-model="registerForm.name"
            placeholder="Nome Completo"
            type="text"
            class="w-100 mb-3"
            required
            dark
            :class="{
                'is-invalid': isSubmitted && $v.registerForm.name.$error,
            }"
          />
          <div
            v-if="isSubmitted && !$v.registerForm.name.required"
            class="invalid-feedback"
          >
            <span>O campo nome completo é obrigatório!</span>
          </div>
        <!-- Name Block End -->

        <!--INICIO BLOCO: E-MAIL-->
          <MazInput
            v-model="registerForm.email"
            placeholder="E-mail"
            type="email"
            class="w-100 mb-3"
            left-icon-name="email"
            dark
            :class="{
              'is-invalid': isSubmitted && $v.registerForm.email.$error,
            }"
          />
          <div
            v-if="isSubmitted && $v.registerForm.email.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.registerForm.email.required">
              O campo e-mail é obrigatório!
            </span>
            <span v-if="!$v.registerForm.email.email">
              E-mail inválido!
            </span>
          </div>
        <!--FINAL BLOCO: E-MAIL-->

        <!-- Phone Block Start -->
          <MazPhoneNumberInput
            v-model="registerForm.phone"
            placeholder="Telefone"
            class="w-100 mb-3"
            noValidation
            required
            dark
            @update="resultsExample = $event"
            :translations="{
              countrySelectorLabel: 'Código do país',
              countrySelectorError: 'Escolha um país',
              phoneNumberLabel: 'Número de telefone',
              example: 'Exemplo :'
            }"
            :class="{
                'is-invalid': isSubmitted && $v.registerForm.phone.$error,
            }"
          />
          <div
            v-if="isSubmitted && $v.registerForm.phone.required"
            class="invalid-feedback"
          >
            <span v-if="!$v.registerForm.phone.required">
              O campo telefone é obrigatório!
            </span>
            <span v-if="!$v.registerForm.phone.minLength">
              O campo telefone está incompleto!
            </span>
          </div>
        <!-- Phone Block End -->

        <!-- Password Block Start -->
          <MazInput
            v-model="registerForm.password_hash"
            placeholder="Senha"
            type="password"
            class="w-100 mb-3"
            required
            dark
            left-icon-name="lock"
            :class="{
                'is-invalid': isSubmitted && $v.registerForm.password_hash.$error,
            }"
          />
          <div
            v-if="isSubmitted && $v.registerForm.password_hash.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.registerForm.password_hash.required">
              O campo senha é obrigatório!
            </span>
            <span v-if="!$v.registerForm.password_hash.minLength">
              A senha deve conter pelo menos 6 caracteres!
            </span>
          </div>
        <!-- Password Block End -->

        <!-- Password Block Start -->
          <MazInput
            v-model="registerForm.repeatPassword"
            placeholder="Repita a Senha"
            type="password"
            class="w-100 mb-3"
            required
            dark
            left-icon-name="lock"
            :class="{
                'is-invalid': isSubmitted && $v.registerForm.repeatPassword.$error,
            }"
          />
          <div
            v-if="isSubmitted && $v.registerForm.repeatPassword.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.registerForm.repeatPassword.sameAsPassword">
              As senhas devem ser identicas!
            </span>
          </div>
        <!-- Password Block End -->

        <p class="center">
          Já possui uma conta cadastrada?<br><router-link to="/">Faça o login aqui</router-link>
        </p>

        <!--INICIO BLOCO: Botão Submit-->
        <center>
          <button @click="submitRegisterUser" class="btn btn-block w-100 my-4">
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
