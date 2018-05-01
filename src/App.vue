<template>
  <div id="app">
    
    <my-menu title="My App" @menu-click="onMenuClick" @button-click="onButtonClick">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </my-menu>
    
    <img src="http://vuejs.org/images/logo.png">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
  import MyMenu from './MyMenu.vue'

  export default {
    name: 'app',
    components: {
      MyMenu
    },
    data () {
      return {
        msg: 'Hello Vue.js!'
      }
    },
    methods: {
      onMenuClick: function(e) {
        // Callback que captura o evento disparado na aplicação
        alert("Menu click")
      },
      onButtonClick: function(message) {
        // Recebendo parâmetro passado pelo evento
        alert(message)
      }
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 40px;
  }

  img {
    width: 150px;
    height: 150px;
  }

  h1, h2 {
    font-weight: normal;
  }
</style>
