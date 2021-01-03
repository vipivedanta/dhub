<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import {$, jQuery} from 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/dhb.css';

import Header from './views/layouts/Header';
import Footer from './views/layouts/Footer';

export default {
  name: 'App',
  components : { Header, Footer }
}
</script>

<style lang="scss">
  .st0{fill:#003D8C;}
	.st1{fill:#248141;}
	.st2{fill:#EC1B23;}
</style>
