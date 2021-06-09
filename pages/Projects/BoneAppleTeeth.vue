<template>
  <section class="mockup-container section">
    <h1 class="mockup-header">Bone Apple Teeth</h1>
    <video autoplay muted loop playsinline class="mockup-video">
      <source
        src="https://res.cloudinary.com/dbopxlpuy/video/upload/c_scale,f_auto,w_1200/v1622854760/Richard/BAT1Translucent_xcbobc.mov"
      />
    </video>
    <div class="author-banner">
      <h4 class="mockup-created">Created By</h4>
      <div class="authors-list">
        <div class="mockup-author-container">
          <h3 class="mockup-author">Richard So</h3>
          <h5 class="graduation">Georgia Tech 2025</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Iram Liu</h3>
          <h5 class="graduation">Cornell 2025</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Junshen Gao</h3>
          <h5 class="graduation">FIT 2025</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Derek Dong</h3>
          <h5 class="graduation">Boston University 2025</h5>
        </div>
      </div>

      <p class="mockup-desc">
        Bone Apple Teeth is a fullstack application designed for sharing and
        viewing recipes. B.A.T. utilizes Vuesax for styling, NuxtJS for a
        front-end framework and Firebase for data storage. Bone Apple Teeth is
        hosted on Heroku in order to persit authentication and maintain the
        server-side rendering in Nuxt.
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
        <button
          class="mockup-button-link"
          @click="onClickVideo"
          aria-label="Link to the project's Git repo"
        >
          Video
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    onClickGit() {
      window.open(
        `https://github.com/staten-island-tech/full-stack-2021-asian-squad`,
        '_blank'
      )
    },
    onClickSite() {
      window.open(`https://bone-apple-teeth.herokuapp.com`, '_blank')
    },
    onClickVideo() {
      window.open(`https://www.youtube.com/watch?v=HW5gmYyIBzI`, '_blank')
    },
  },
}
</script>

<style lang="scss"></style>
