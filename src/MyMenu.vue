<template>
  <div>
    <h4>{{title}}</h4>
    <div @click="onMenuClick">
      <slot></slot>
    </div>
    <button @click="onButtonClick">Clique aqui</button>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },
    methods: {
      onMenuClick: function() {
        // Dispara um evento
        this.$emit("menu-click")
      },
      onButtonClick: function() {
        // Dispara evento e envia parâmetro
        this.$emit("button-click", "Emit event from button")
      }
    }    
  }
</script>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
  }
</style>