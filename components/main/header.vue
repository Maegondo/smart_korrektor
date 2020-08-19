<template>
  <div>
    <b-navbar fixed="top" class="ck-navbar">
      <div class="navbar-inner-container">
        <h1 class="ck-navbar-brand">
          <span class="ck-navbar-brand-strong" :class="{'to-lowercase': !lowercaseActive }">Dein</span> smarter Korrektor für Anreden
        </h1>
        <div class="ck-main-menu">
          <a href="#">Wie es funktioniert</a>
          <a href="#" class="ck-menu-highlight">Unterstütze mich</a>
        </div>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    lowercaseActive () {
      return this.$store.state.uppercase
    }
  }
}
</script>

<style lang="scss" scoped>

@import "./assets/css-constants.scss";

.navbar-inner-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: $inner-container-size;
}

.ck-navbar {
  height: 80px;
  background-color: $dark-background-color;
}

.ck-navbar-brand {
  color: $light-text-color;
  font-weight: 200;
}

.ck-navbar-brand-strong {
  font-weight: 800;
}

.to-lowercase {
  text-transform: lowercase;
}

.ck-main-menu a {
  color: $light-text-color;
  font-weight: 700;
}

.ck-main-menu a:hover {
  text-decoration: none;
}

.ck-main-menu a:not(:first-child) {
  margin-left: 20px;
}

.ck-menu-highlight {
  color: #F938B6 !important;
}
</style>
