<template>
  <div class="student-card">
    <h3 class="student-card-header">Fantasy Kingdom</h3>
    <button class="student-work-btn btn">
      <nuxt-link to="StudentWork" class="link">Learn More</nuxt-link>
    </button>
    <img
      class="student-img"
      src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_800/v1613933809/Fantasy%20Kingdom/Screenshot_2021-02-21_Galgudd_lorm1c.jpg"
      alt=""
    />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.student-card {
  margin: 3rem auto;
  position: relative;
  height: 30rem;
  width: 50rem;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: var(--level-2);
}
.student-card-header {
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-transform: uppercase;
  z-index: 2;
}
.student-work-btn {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.student-img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0.4;

  transition: all 0.4s ease;
}
.student-card:hover img {
  transform: scale(1.5);
  opacity: 1;
}
</style>
