<template>
  <div>
    <span class="ck-hero-header">Korrigieren in</span>
    <div class="uppercase-selector-wrapper">
      <div id="uppercase-button" class="case-selector-button" :class="{ 'inactive-case-button': !uppercaseIsActive }" @click="setUppercase(true)">
        Großschreibung
      </div>
      <div id="lowercase-button" class="case-selector-button" :class="{ 'inactive-case-button': uppercaseIsActive }" @click="setUppercase(false)">
        Kleinschreibung
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    uppercaseIsActive () {
      return this.$store.state.uppercase
    }
  },
  methods: {
    setUppercase (status) {
      this.$store.commit('setUppercase', status)
    }
  }
}
</script>

<style lang="scss" scoped>

@import "./assets/css-constants.scss";

.uppercase-selector-wrapper {
  margin-top: 30px;
}

.case-selector-button {
  background-color: $green-background-color;
  display: inline;
  border: 2px solid $green-highlight-color;
  font-size: 1.1rem;
  padding: 5px 20px;
  cursor: pointer;
}

#uppercase-button{
  border-radius: 25px 0 0 25px;
}

#uppercase-button.inactive-case-button{
  border-right: none;
}

#lowercase-button {
  border-radius: 0 25px 25px 0;
}

#lowercase-button.inactive-case-button {
  border-left: none;
}

.inactive-case-button {
  border-color: grey;
  color: grey;
}

</style>
