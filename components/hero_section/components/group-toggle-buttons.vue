<template>
  <div>
    <div class="group-toggle-buttons-wrapper">
      <div class="group-toggle-button" @click="onClickAllWordsSelector">
        Alle Auswählen
      </div>
      <div class="group-toggle-button" @click="onClickInFormalSelector">
        Nur informelle Wörter
      </div>
      <div class="group-toggle-button" @click="onClickFormalSelector">
        Nur formelle Wörter
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickFormalSelector () {
      this.$store.commit('selectOnlyFormal')
    },
    onClickInFormalSelector () {
      this.$store.commit('selectOnlyInformal')
    },
    onClickAllWordsSelector () {
      this.$store.commit('selectAllWords')
    }
  }
}
</script>

<style lang="scss" scoped>

@import "./assets/css-constants.scss";

.group-toggle-buttons-wrapper {
  margin-top: 40px;
  display: flex;
  gap: 0 20px;
}

.group-toggle-button {
  font-size: 15px;
  display: inline;
  background-color: $dark-background-color;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #595E77;
  cursor: pointer;
}

</style>
