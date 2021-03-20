<template>
  <section class="mockup-container section">
    <h1 class="mockup-header">Visit Japan</h1>
    <video autoplay muted loop playsinline class="mockup-video">
      <source
        src="https://res.cloudinary.com/dbopxlpuy/video/upload/c_scale,f_auto,w_1200/v1615669722/EthanJapan/LiangJapanTranslucent_sxrgme.mov"
      />
    </video>
    <div class="author-banner">
      <h4 class="mockup-created">Created By</h4>
      <div class="authors-list">
        <div class="mockup-author-container">
          <h3 class="mockup-author">Ethan Liang</h3>
          <h5 class="graduation">Class of 2022</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Trinity Jin</h3>
          <h5 class="graduation">Class of 2022</h5>
        </div>
      </div>

      <p class="mockup-desc">
        Visit Japan was developed using SCSS and HTML. This project was the
        winner of the 2021 SCSS Mastery Competition at Staten Island Tech. The
        site is responsive and is compliant with basic web accessability
        standards.
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
        `https://github.com/staten-island-tech/html-scss-mastery-project-jiang-1`,
        '_blank'
      )
    },
    onClickSite() {
      window.open(`https://visitjapan.netlify.app/`, '_blank')
    },
  },
}
</script>

<style lang="scss"></style>
