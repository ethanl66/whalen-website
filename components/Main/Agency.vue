<template>
  <section class="agency">
    <h2 class="text-dark agency-header">Encouraging Student Agency</h2>
    <div class="flex-row-two agency-content">
      <div class="flex-col">
        <img
          class="agency-image"
          src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_800/v1613089564/Fire%20Emblem/firednap2_ou4uat.png"
          alt="Fire Emblem Multiplayer Game"
        />
      </div>

      <div class="flex-col">
        <h3 class="text-dark agency-text">Students Build What They Want</h3>
        <h4 class="text-dark agency-text">
          Students are given the freedom and skills to choose their projects
        </h4>
        <h4 class="text-dark agency-text">
          Students are guided towards solutions and are encouraged to explore
        </h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.agency {
  height: 90vh;
  width: 90vw;
  margin: 0 auto;
}
.agency-header {
  margin: 5rem auto;
  text-transform: uppercase;
  font-size: var(--h1);
}
.agency-content {
  margin: 10rem auto;
}
.agency-image {
  width: 100%;
}
.agency-text {
  padding: 1rem;
}
</style>
