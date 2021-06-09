<template>
  <section class="mockup-container section">
    <h1 class="mockup-header">Tech Times CMS</h1>
    <video autoplay muted loop playsinline class="mockup-video">
      <source
        src="https://res.cloudinary.com/dbopxlpuy/video/upload/c_scale,f_auto,w_1200/v1623094657/CMS/CMS_Translucent_g6pvsq.mov"
      />
    </video>
    <div class="author-banner">
      <h4 class="mockup-created">Created By</h4>
      <div class="authors-list">
        <div class="mockup-author-container">
          <h3 class="mockup-author">Edis Gonuler</h3>
          <h5 class="graduation">SITHS 2022</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Melvin Aziz</h3>
          <h5 class="graduation">SITHS 2022</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Gisele Bury</h3>
          <h5 class="graduation">Northeastern 2025</h5>
        </div>
      </div>

      <p class="mockup-desc">
        The Tech Times Headless CMS was designed by Edis Gonuler to be the home
        for all journalism content for SITHS starting in 2021-2022. The API is
        developed using NodeJS and MongoDB. TypeScript was brought in to prevent
        bugs on the backend. The API is hosted using AWS Lambda Functions and
        the API Gateway. The CMS also leverages Cloudinary (Thank you
        Cloudinary!) and Cloudflare workers. The CMS front-end application is
        developed using NuxtJS and Tailwind. Tailwind UI was used when possible
        as well. Look forward to the Tech Times News Site launching in Fall of
        2021.
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
      window.open(`https://github.com/sitechtimes/cms`, '_blank')
    },
    onClickSite() {
      window.open(`https://cms.sitechtimes.com/auth/signup`, '_blank')
    },
    onClickVideo() {
      window.open(`https://www.youtube.com/watch?v=otQgiUaYFEc`, '_blank')
    },
  },
}
</script>

<style lang="scss"></style>
