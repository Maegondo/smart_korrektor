<template>
  <div class="ck-hero">
    <div class="configuration-section-wrapper">
      <div class="header-section-left">
        <span class="ck-hero-header">Folgende Wörter Korrigieren</span>
        <div class="ck-word-chips">
          <div v-for="word in words" :key="word.id" class="ck-word-chip-individual">
            <WordSelectorChip :item="word" />
          </div>
        </div>
        <GroupToggleButtons />
      </div>
      <div class="header-section-right">
        <CaseSelectorButtons />
      </div>
    </div>
    <ContentSection />
  </div>
</template>

<script>
import WordSelectorChip from './components/word-selector-chip.vue'
import GroupToggleButtons from './components/group-toggle-buttons.vue'
import CaseSelectorButtons from './components/case-selector-buttons.vue'
import ContentSection from './components/content-section.vue'

export default {
  components: {
    WordSelectorChip,
    GroupToggleButtons,
    CaseSelectorButtons,
    ContentSection
  },
  computed: {
    words () {
      return this.$store.state.selectedWords
    }
  }
}
</script>

<style lang="scss">

@import "./assets/css-constants.scss";

.ck-hero {
    color: $light-text-color;
}

.ck-hero-header {
    font-size: 1.2rem;
    font-weight: 700;
}

.ck-hero-header-alt {
  font-size: 1.8rem;
  font-weight: 300;
  text-transform: uppercase;
}

.ck-word-chips {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    gap: 25px 15px;
}

.configuration-section-wrapper {
  display: flex;
  gap: 0 50px;
}

.header-section-left {
  width: 50%;
}

.header-section-right {
  width: 50%;
}

</style>
