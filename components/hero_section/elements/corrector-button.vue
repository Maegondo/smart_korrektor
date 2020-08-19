<template>
  <div>
    <b-button block size="lg" class="button-base corrector-button" @click="buttonClicked">
      Korrigieren
      <font-awesome-icon icon="chevron-right" class="button-icon" />
    </b-button>
  </div>
</template>

<script>
export default {
  methods: {
    buttonClicked () {
      this.$store.commit('correctText')
    }
  }
}
</script>

<style lang="scss" scoped>

@import "./assets/css-constants.scss";

.corrector-button {
  background-color: $blue-highlight-color;
  border: 2px solid $blue-border-color;
}

.button-icon {
  padding-top: 3px;
  margin-left: 5px;
}

</style>
