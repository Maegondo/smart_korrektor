<template>
  <div>
    <span class="ck-hero-header-alt">Dein Text</span>
    <b-form-textarea
      id="user-input-textarea"
      v-model="userInput"
      placeholder="Dein Text..."
      rows="14"
      @input="textFieldChanged"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInput: ''
    }
  },
  methods: {
    textFieldChanged () {
      this.$store.commit('setUserInput', this.userInput)
    }
  }
}
</script>

<style lang="scss" scoped>

@import "./assets/css-constants.scss";

#user-input-textarea {
  margin-top: 30px;
  background-color: $medium-background-color-2;
  padding: 30px;
  color: $light-text-color;
  border: none;
  border-radius: 25px;
  -webkit-box-shadow: 0px 0px 50px -5px rgba(0,0,0,0.17);
  -moz-box-shadow: 0px 0px 50px -5px rgba(0,0,0,0.17);
  box-shadow: 0px 0px 50px -5px rgba(0,0,0,0.17);
}

</style>
