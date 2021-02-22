<template>
  <div
    class="student-card"
    v-tilt="{ speed: 300, perspective: 1200, glare: true, 'max-glare': 0.5 }"
  >
    <div class="card-content">
      <h3 class="student-card-header">Japan</h3>
      <button class="student-work-btn btn">
        <nuxt-link to="StudentWork" class="link">Learn More</nuxt-link>
      </button>
    </div>

    <img
      class="student-img"
      src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_800/v1613933809/EthanJapan/Screenshot_2021-02-21_Visit_Japan_jr4nfj"
      alt=""
    />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.student-card {
  transform-style: preserve-3d;
  backface-visibility: hidden;
  margin: 3rem auto;
  position: relative;
  height: 30rem;
  width: 50rem;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: var(--level-2);
  background-color: #000;
}
.card-content {
  position: absolute;

  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 100%;

  @include flex-col;
}
.student-card-header {
  transform: translateZ(50px);
  z-index: 1;
  width: 100%;
  text-transform: uppercase;
}
.student-work-btn {
  z-index: 1;
  font-size: var(--h5);
  height: 4rem;
  padding: 0.5rem 1.4rem;
  border: 1px solid #fff;
  transform: translatez(50px);
}

.btn:hover {
  border: 1px solid clear;
  background-color: var(--background-primary);
  cursor: pointer;
  color: var(--text-primary);
}

.student-work-btn:hover {
  background-color: transparent;
}
.student-img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  object-fit: cover;
  filter: grayscale(80%) brightness(0.3);
  transform: translateZ(10px);
  transition: all 0.4s ease;
}
.student-card:hover img {
  transform: scale(1.1);
  filter: grayscale(0) brightness(1);
}
</style>
