<template>
  <div id='nav'>
    <router-link to='/' id='logo-url'>
      <img :src='logo' :alt='alt' id="logo">
    </router-link>
    <h1 id='title-center'>Calculadora de Honorários Advocáticios</h1>
    <router-link to='/'>Home</router-link>
    <router-link to='/register'>Cadastrar-se</router-link>
  </div>
</template>

<script src="./Navbar.js"></script>

<style src="./Navbar.css" scoped></style>
