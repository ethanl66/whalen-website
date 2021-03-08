<template>
  <section class="mockup-container section">
    <h1 class="mockup-header">Jack Twenty-One</h1>
    <video autoplay muted loop playsinline class="mockup-video">
      <source
        src="https://res.cloudinary.com/dbopxlpuy/video/upload/c_scale,f_auto,w_1200/v1615064448/Jack21/BlackJackTranslucent_gdtty2.mov"
      />
    </video>
    <div class="author-banner">
      <h4 class="mockup-created">Created By</h4>
      <div class="authors-list">
        <div class="mockup-author-container">
          <h3 class="mockup-author">Nick Melkadze</h3>
          <h5 class="graduation">CUNY Hunter</h5>
        </div>
      </div>

      <p class="mockup-desc">
        Jack Twenty-One uses Vanilla JS, CSS and HTML to create a single player
        black-jack game. Thias was developed for the AP CSP create task. Nick
        graduated from SITHS in 2020 and is currently attending CUNY Hunter for
        Computer Science. Room C-56 at SITHS features the Nick Melkadze Memorial
        Dining Hall.
      </p>

      <div class="mockup-links">
        <button
          class="mockup-button-link"
          v-on:click="onClickSite"
          aria-label="Link to the project site"
        >
          Visit
        </button>
        <button
          class="mockup-button-link"
          @click="onClickGit"
          aria-label="Link to the project's Git repo"
        >
          Github
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    onClickGit() {
      window.open(`https://github.com/melkadze/jack-twentyone`, '_blank')
    },
    onClickSite() {
      window.open(
        `https://melkadze.com/jack-twentyone/dist/index.html`,
        '_blank'
      )
    },
  },
}
</script>

<style lang="scss"></style>
