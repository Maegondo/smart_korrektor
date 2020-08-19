<template>
  <div class="content-section-wrapper">
    <div class="input-wrapper">
      <UserInputTextArea />
    </div>
    <div class="corrector-button-wrapper">
      <CorrectorButton />
    </div>
    <div class="input-wrapper">
      <CorrectedTextArea />
    </div>
  </div>
</template>

<script>

import CorrectorButton from '../elements/corrector-button.vue'
import CorrectedTextArea from '../elements/corrected-text-area'
import UserInputTextArea from '../elements/user-input-textarea'

export default {
  components: {
    CorrectorButton,
    CorrectedTextArea,
    UserInputTextArea
  }
}
</script>

<style lang="scss" scoped>

@import "./assets/css-constants.scss";

.content-section-wrapper {
  display: flex;
  margin-top: 50px;
  align-items: center;
  gap: 0 20px;
}

.corrector-button-wrapper {
  flex-grow: 1;
}

</style>
