<template>
  <section class="mockup-container section">
    <h1 class="mockup-header">Loop</h1>
    <video autoplay muted loop playsinline class="mockup-video">
      <source
        src="https://res.cloudinary.com/dbopxlpuy/video/upload/c_scale,f_auto,q_auto:eco,w_1200/v1615056715/LoopBlack_psoz2w.mov"
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
        Fantasy Kingdom was developed using SCSS and HTML without the aid of
        JavaScript. The site is responsive and loads components based on screen
        size. This project is a great example of responsive design and
        accessibility in action
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
