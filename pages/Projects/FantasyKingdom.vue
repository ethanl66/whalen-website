<template>
  <section class="mockup-container section">
    <h1 class="mockup-header">Fantasy Kingdom</h1>
    <video autoplay muted loop playsinline class="mockup-video">
      <source
        src="https://res.cloudinary.com/dbopxlpuy/video/upload/c_scale,f_auto,w_1200/v1613089522/Fantasy%20Kingdom/kingdommockup_oie0ga.mov"
      />
    </video>
    <div class="author-banner">
      <h4 class="mockup-created">Created By</h4>
      <div class="authors-list">
        <div class="mockup-author-container">
          <h3 class="mockup-author">Charley Baluja</h3>
          <h5 class="graduation">Class of 2022</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Daniel Briskman</h3>
          <h5 class="graduation">Class of 2022</h5>
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
      window.open(
        `https://github.com/staten-island-tech/html-scss-mastery-project-charlaniel-brisjula`,
        '_blank'
      )
    },
    onClickSite() {
      window.open(`https://galgudd.netlify.app/`, '_blank')
    },
  },
}
</script>

<style lang="scss"></style>
