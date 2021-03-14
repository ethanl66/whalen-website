<template>
  <section class="mockup-container section">
    <h1 class="mockup-header">Loop</h1>
    <video autoplay muted loop playsinline class="mockup-video">
      <source
        src="https://res.cloudinary.com/dbopxlpuy/video/upload/c_scale,f_auto,w_1200/v1615066221/Loop/Loop_R_Translucent_l69qv0.mov"
      />
    </video>
    <div class="author-banner">
      <h4 class="mockup-created">Created By</h4>
      <div class="authors-list">
        <div class="mockup-author-container">
          <h3 class="mockup-author">Nick Melkadze</h3>
          <h5 class="graduation">CUNY Hunter 2024</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Edward Ng</h3>
          <h5 class="graduation">Stony Brook University 2024</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Veda Balte</h3>
          <h5 class="graduation">Cornell University 2024</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Brendan Gallo</h3>
          <h5 class="graduation">RIT 2024</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Thami Hamzane</h3>
          <h5 class="graduation">SITHS 2021</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Ilsa Lareb</h3>
          <h5 class="graduation">SITHS 2021</h5>
        </div>
      </div>

      <p class="mockup-desc">
        Loop was developed for the 2020 Full-Stack competition. The project uses
        Express and MongoDB for the backend API. The project is hosted on Heroku
        in the free tier.
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
      window.open(`https://github.com/melkadze/class-planner`, '_blank')
    },
    onClickSite() {
      window.open(`http://class-planner.herokuapp.com/auth/login`, '_blank')
    },
  },
}
</script>

<style lang="scss"></style>
