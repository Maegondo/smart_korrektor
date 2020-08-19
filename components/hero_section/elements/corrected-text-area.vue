<template>
  <div>
    <span class="ck-hero-header-alt">Korrigierter Text</span>
    <b-form-textarea
      id="corrected-text-area"
      plaintext
      :value="finalText"
      placeholder="Dein Text..."
      rows="14"
    />
  </div>
</template>

<script>
export default {
  computed: {
    finalText () {
      return this.$store.state.correctedText
    }
  }
}
</script>

<style lang="scss" scoped>

@import "./assets/css-constants.scss";

#corrected-text-area {
  margin-top: 30px;
  background-color: $medium-background-color;
  padding: 30px;
  color: $light-text-color;
  border: none;
  outline: none;
  border-radius: 25px;
  border: 3px solid $medium-background-color-2;
}

</style>
