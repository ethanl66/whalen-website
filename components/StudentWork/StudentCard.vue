<template>
  <div class="student-card" v-tilt="{ speed: 200, perspective: 1200, max: 1 }">
    <div class="card-content">
      <h3 class="student-card-header">{{ title }}</h3>
      <h5 class="student-card-sub">{{ techStack }}</h5>
      <button class="student-work-btn btn">
        <nuxt-link :to="{ name: projectPage }" class="link"
          >Learn More</nuxt-link
        >
      </button>
    </div>

    <img class="student-img" :src="imgSrc" :alt="altText" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    imgSrc: String,
    altText: String,
    techStack: String,
    projectPage: String,
  },
}
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
  z-index: 1;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 100%;

  @include flex-col;
}
.student-card-header {
  width: 100%;
  text-transform: uppercase;
  z-index: 1;
}
.student-card-sub {
  width: 100%;
  font-style: italic;
  z-index: 1;
}
.student-work-btn {
  z-index: 2;
  font-size: var(--h5);
  height: 4rem;
  z-index: 1;
  padding: 0.5rem 1.4rem;
  border: 1px solid #fff;
  border-radius: 3rem;
  transition: all 0.3s;
  color: var(--background-primary);
  background-color: var(--text-primary);
}

.student-work-btn:hover {
  border: 1px solid clear;
  background-color: transparent;
  cursor: pointer;
  color: var(--text-primary);
}

.student-img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
  object-fit: cover;
  filter: grayscale(80%) brightness(0.3);

  transition: all 0.4s ease;
}
.student-card:hover img {
  transform: scale(1.1);
  filter: grayscale(0) brightness(1);
}
@include phone {
  .student-img {
    height: 50%;
    filter: grayscale(0) brightness(1);
  }
  .student-card:hover img {
    transform: scale(1);
  }
  .card-content {
    bottom: 5%;
  }
  .student-work-btn:hover {
    border: 1px solid clear;
    background-color: transparent;
    cursor: pointer;
    color: var(--text-primary);
    color: var(--background-primary);
    background-color: var(--text-primary);
  }
}
</style>
