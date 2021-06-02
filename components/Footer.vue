<template>
  <footer>
    <a
      href="mailto:mwhalen3@schools.nyc.gov"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span class="icon footer-link"><fa icon="envelope-square" /></span
    ></a>
    <a
      href="https://www.facebook.com/michael.whalen.180"
      target="_blank"
      rel="noopener noreferrer"
      class="footer-link"
      ><span class="icon footer-link"
        ><fa :icon="['fab', 'facebook-square']" /></span
    ></a>
    <a
      href="https://twitter.com/whalensiths"
      target="_blank"
      rel="noopener noreferrer"
      class="footer-link"
      ><span class="icon footer-link"
        ><fa :icon="['fab', 'twitter-square']" /></span
    ></a>
    <a
      href="https://github.com/WhalenSITHS"
      target="_blank"
      rel="noopener noreferrer"
      class="footer-link"
      ><span class="icon footer-link"
        ><fa :icon="['fab', 'github-square']" /></span
    ></a>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
footer {
  height: 7vh;
  width: 100%;
  background-color: var(--black);
  color: var(--card-text);
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.footer-link {
  font-size: var(--h3);
  margin: 1rem 1rem;
  color: var(--footer-icon);
}
</style>
