<template>
  <section class="mockup-container section">
    <h1 class="mockup-header">Jang Foods</h1>
    <video autoplay muted loop playsinline class="mockup-video">
      <source
        src="https://res.cloudinary.com/dbopxlpuy/video/upload/c_scale,f_auto,w_1200/v1615066190/Jang%20Foods/Jang_Translucent_wsziz7.mov"
      />
    </video>
    <div class="author-banner">
      <h4 class="mockup-created">Created By</h4>
      <div class="authors-list">
        <div class="mockup-author-container">
          <h3 class="mockup-author">Carlo Dugo</h3>
          <h5 class="graduation">Northeastern 2024</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Dejon Kurti</h3>
          <h5 class="graduation">MIT 2024</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Bryan Boyd</h3>
          <h5 class="graduation">Princeton 2024</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Brian Jiang</h3>
          <h5 class="graduation">Northeastern 2024</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Cornelia Murja</h3>
          <h5 class="graduation">Macauley Baruch 2024</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Andrew Bishay</h3>
          <h5 class="graduation">SITHS 2021</h5>
        </div>
      </div>

      <p class="mockup-desc">
        Jang Foods was developed for the 2020 Full-Stack competition in AP CSP.
        The application is meant to serve as online ordering system for the
        school's Tech Life Cafe. The application uses MongoDB and NodeJS to form
        the backend API. Students used HTML, CSS and Vanilla JS for the
        front-end as well as the Stripe API to handle credit cards. The site is
        hosted on Heroku via the free tier.
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
      window.open(`https://github.com/cdugo/jang-foodcart`, '_blank')
    },
    onClickSite() {
      window.open(`https://jang-food.herokuapp.com/`, '_blank')
    },
  },
}
</script>

<style lang="scss"></style>
