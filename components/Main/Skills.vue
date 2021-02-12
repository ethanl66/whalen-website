<template>
  <section class="skills">
    <h2 class="skills-header">Industry Standard Skills</h2>
    <div class="skills-container">
      <h5 class="skills-sub">Click To Learn More</h5>
      <div class="skills-row">
        <img
          src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094439/Logos/Sass_Logo_Color_r1mv6v.png"
          alt=""
          class="skills-img"
        />
        <img
          src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094438/Logos/js_yjli5z.png"
          alt=""
          class="skills-img"
        />
        <img
          src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094438/Logos/Vuelogo_kif8pr.png"
          alt=""
          class="skills-img"
        />
        <img
          src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094438/Logos/node2_cifopi.png"
          alt=""
          class="skills-img"
        />
        <img
          src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094438/Logos/mongo_mx4lbb.png"
          alt=""
          class="skills-img"
        />
        <img
          src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094438/Logos/firebase_zovqxa.png"
          alt=""
          class="skills-img"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.skills {
  height: 100vh;
  width: 100%;
  background-color: var(--background-primary);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.skills-header {
  font-size: var(--h1);
  text-transform: uppercase;
}
.skills-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.skills-sub {
  margin: 2rem auto;
}
.skills-row {
  background-color: var(--background-secondary);
  height: auto;
  width: 100%;
  padding: 5rem 0;
  display: flex;
  justify-content: space-around;
  align-items: ce;
}
.skills-img {
  width: 10%;
  padding: 2rem;
}
</style>
