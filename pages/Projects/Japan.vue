<template>
  <div class="mockup-container">
    <h2 class="mockup-header">Fantasy Kingdom</h2>
    <video autoplay muted loop playsinline class="mockup-video">
      <source
        src="https://res.cloudinary.com/dbopxlpuy/video/upload/c_scale,f_auto,w_1200/v1613089522/Fantasy%20Kingdom/FantasyGrey_jn5hmg.mov"
      />
    </video>
    <h3 class="mockup-created">Created By</h3>
    <div class="mockup-author container">
      <h4 class="mockup-author">Charley Baluja</h4>
      <h5 class="graduation">Class of 2022</h5>
    </div>
    <div class="mockup-author container">
      <h4 class="mockup-author">Daniel Briskman</h4>
      <h5 class="graduation">Class of 2022</h5>
    </div>

    <p class="mockup-desc">
      Fantasy Kingdom was developed using SCSS and HTML without the aid of
      JavaScript. The site is responsive and loads components based on screen
      size. This project is a great example of responsive design and
      accessibility in action
    </p>
    <div class="mockup-links">
      <button class="mockup-button-link" v-on:click="onClickSite">Visit</button>
      <button class="mockup-button-link" @click="onClickGit">Github</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickGit() {
      window.open(
        `https://github.com/staten-island-tech/html-css-mastery-project-repository-dontcallmebread`,
        '_blank'
      )
    },
    onClickSite() {
      window.open(`https://youthful-ride-d607dc.netlify.app/`, '_blank')
    },
  },
}
</script>

<style lang="scss">
.mockup-container {
  height: 90vh;
  margin: 3rem auto;
  @include flex-col;
  justify-content: space-around;
  align-items: center;
}
.mockup-header {
  font-size: var(--h1);
}
.mockup-video {
  width: 30vw;
  margin: 0 auto;
}
.graduation {
  font-style: italic;
}
.mockup-desc {
  font-size: var(--h4);
  width: 40%;
  text-align: center;
}
</style>
