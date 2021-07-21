<template>
  <header>
    <div class="header-flex">
      <div class="header-container">
        <div class="heading">
          <h1>Michael Whalen</h1>
          <h4>Full-Stack Educator</h4>
          <h4>Staten Island Technical High School</h4>
        </div>
        <button class="header-btn btn">
          <nuxt-link to="StudentWork" class="header-btn-link"
            >See Our Work</nuxt-link
          >
        </button>
      </div>
      <img
        src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_1200/v1613089479/Fantasy%20Kingdom/Rotato_Snapshot1_wyqziw.png"
        alt="model of Iphone with student work featured"
        class="header-img"
      />
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
header {
  position: relative;
  height: 100vh;
  background-color: #000;
  clip-path: polygon(0 0, 100% 0%, 100% 87%, 0% 100%);
  h1 {
    text-transform: uppercase;
  }
}
@include tablet {
  header {
    //background-position: center;
    background-image: url('https://res.cloudinary.com/dbopxlpuy/image/upload/b_rgb:000000,c_scale,f_auto,o_19,w_1920/v1611365531/Bao/test_c6zrj6.png');
  }
}
.header-flex {
  @include flex-row;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.header-img {
  width: 30%;
}
.heading {
  text-align: center;
  z-index: 2;
  color: #fff;
}
.header-btn {
  font-size: var(--h4);
  height: 5rem;
  color: var(--white);
  border: 1px solid #fff;
  padding: 0.5rem 2.4rem;
  text-decoration: none;
  transition: all 0.4s;
  background-color: transparent;
  border-radius: 3rem;
  transition: all 0.3s;
}
.header-btn:hover {
  border: 1px solid clear;
  background-color: var(--background-primary);
  cursor: pointer;
  color: var(--header-btn);
}
.header-btn-link,
.header-btn-link:visited,
.header-btn-link:link {
  text-decoration: none;
  color: inherit;
}
</style>
