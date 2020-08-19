<template>
  <div class="container">
    <Header />
    <div class="ck-hero-section">
      <HeroSection />
    </div>
  </div>
</template>

<script>
import Header from '../components/main/header.vue'
import HeroSection from '../components/hero_section/hero_section.vue'

export default {
  components: {
    Header,
    HeroSection
  }
}
</script>

<style lang="scss">

/* Importing Montserrat font family from Google Webfonts */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

@import "./assets/css-constants.scss";

body {
  font-family: 'Montserrat', sans-serif;
  background-color: $medium-background-color;
}

.container {
  display: flex;
  justify-content: center;
  min-width: 100%;
  padding: 0;
}

.ck-hero-section {
  margin-top: 80px;
  padding: 60px 0;
  width: $inner-container-size;
}

.button-base {
  font-weight: 700;
  border-radius: 15px;
}

.input-wrapper {
  flex-grow: 6;
}

</style>
