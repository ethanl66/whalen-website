<template>
  <section class="mockup-container section">
    <h1 class="mockup-header">Pokemon Battle Sim</h1>
    <video autoplay muted loop playsinline class="mockup-video">
      <source
        src="https://res.cloudinary.com/dbopxlpuy/video/upload/c_scale,f_auto,w_1200/v1615669762/Pokemon/PkmnTranslucent_opzt4k.mov"
      />
    </video>
    <div class="author-banner">
      <h4 class="mockup-created">Created By</h4>
      <div class="authors-list">
        <div class="mockup-author-container">
          <h3 class="mockup-author">William Anderson</h3>
          <h5 class="graduation">CUNY Hunter 2024</h5>
        </div>
      </div>

      <p class="mockup-desc">
        Pokemon Battle Sim was a project developed for the 2020 AP CSP create
        task by William. The project takes advantage of the pokeAPI and Vanilla
        JavaScript to run the game.
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
        `https://github.com/William-Anderson2020/Pokemon-Battle-Sim`,
        '_blank'
      )
    },
    onClickSite() {
      window.open(`https://pkmnsim.netlify.app/`, '_blank')
    },
  },
}
</script>

<style lang="scss"></style>
