<template>
  <section class="mockup-container section">
    <h1 class="mockup-header">Cyberpunk Japan</h1>
    <video autoplay muted loop playsinline class="mockup-video">
      <source
        src="https://res.cloudinary.com/dbopxlpuy/video/upload/c_scale,f_auto,w_1200/v1615670019/CyberpunkJapan/CyberpunkTranslucent_ufia1q.mov"
      />
    </video>
    <div class="author-banner">
      <h4 class="mockup-created">Created By</h4>
      <div class="authors-list">
        <div class="mockup-author-container">
          <h3 class="mockup-author">Kelly Yu</h3>
          <h5 class="graduation">SITHS 2021</h5>
        </div>
      </div>

      <p class="mockup-desc">
        Cyberpunk Japan was developed using HTML and SCSS. Note that this
        project was designed without accessability in mind as the course was cut
        short due to Covid.
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
      window.open(`https://github.com/kaly955/Tokyo`, '_blank')
    },
    onClickSite() {
      window.open(`https://weebtime.netlify.app/#`, '_blank')
    },
  },
}
</script>

<style lang="scss"></style>
