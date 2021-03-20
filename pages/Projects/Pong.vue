<template>
  <section class="mockup-container section">
    <h1 class="mockup-header">Tennis Reworked</h1>
    <video autoplay muted loop playsinline class="mockup-video">
      <source
        src="https://res.cloudinary.com/dbopxlpuy/video/upload/c_scale,f_auto,w_1200/v1615669843/Pong/jiangRTranslucent_qgofci.mov"
      />
    </video>
    <div class="author-banner">
      <h4 class="mockup-created">Created By</h4>
      <div class="authors-list">
        <div class="mockup-author-container">
          <h3 class="mockup-author">Brian Jiang</h3>
          <h5 class="graduation">Northeastern</h5>
        </div>
      </div>

      <p class="mockup-desc">
        Tennis Reworked was developed for the 2020 AP CSP create task. The
        project is built on Vanilla JavaScript, HTML and CSS. Brian is currently
        studying physics.
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
      window.open(`https://github.com/BrianJ-Code/PongGame`, '_blank')
    },
    onClickSite() {
      window.open(`https://tennisreworked.netlify.app/`, '_blank')
    },
  },
}
</script>

<style lang="scss"></style>
