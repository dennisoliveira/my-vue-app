<template>
  <div>
    <a class="waves-effect waves-light btn" @click="callUsers">
      Call Users
    </a>
    <a class="waves-effect waves-light btn" @click="countUsers">
      <i class="material-icons left">cloud</i>Count Users
    </a>
    <a class="waves-effect waves-light btn">
      <i class="material-icons right">cloud</i>button
    </a>

    <hr>

    <pre>
      {{ users }}
    </pre>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        users: null
      }
    },
    methods: {

      callUsers: function() {
        this.$http({ url: '/users.json', method: 'GET' }).then(function(response) {
          this.users = response.data
        }, function(response){
          console.log(response)
          Materialize.toast(`Erro: ${response.status} ${response.statusText}`, 2000)
        })
      },

      countUsers: function() {
        Materialize.toast(this.users.length, 2000)
      }
    }
  }
</script>

