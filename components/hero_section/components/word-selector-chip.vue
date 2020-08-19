<template>
  <div class="ck-word-chip-container">
    <span class="ck-word-chip" :class="{ 'inactive': !item.selected, 'to-lowercase': uppercaseSelected }" @click="onClick(item)">
      {{ item.title }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    uppercaseSelected () {
      return this.$store.state.uppercase
    }
  },
  methods: {
    onClick (item) {
      this.$store.commit('toggle', item)
    }
  }
}
</script>

<style lang="scss" scoped>

@import "./assets/css-constants.scss";

.ck-word-chip {
    background-color: $green-background-color;
    border: 2px solid $green-highlight-color;
    padding: 5px 20px;
    font-size: 1.1rem;
    border-radius: 25px;
    cursor: pointer;
}

.ck-word-chip.inactive {
    color: grey;
    border-color: grey;
}

.ck-word-chip.to-lowercase {
  text-transform: lowercase;
}

</style>
