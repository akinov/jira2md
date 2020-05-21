<template>
  <div id="layout">
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">Jira2MD</a>
      </div>
      <!-- <div class="navbar-menu">
        <div class="navbar-start">
          <b-navbar-item to="usage">使い方</b-navbar-item>
        </div>
      </div> -->
    </nav>

    <section class="main-content">
      <nuxt />
    </section>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          created by
          <a href="https://twitter.com/kuronekopunk" target="_blank"
            >@kuronekopunk</a
          >.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
