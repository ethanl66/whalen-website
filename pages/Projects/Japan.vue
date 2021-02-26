<template>
  <div class="mockup-container">
    <h2>Fantasy Kingdom</h2>
    <video autoplay muted loop playsinline class="mockup-video">
      <source
        src="https://res.cloudinary.com/dbopxlpuy/video/upload/c_scale,f_auto,w_1200/v1613089522/Fantasy%20Kingdom/kingdommockup_oie0ga.mov"
      />
    </video>
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
.mockup-video {
  width: 30vw;
  margin: 0 auto;
}
</style>
