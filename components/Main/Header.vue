<template>
  <header>
    <div class="heading">
      <h1>Michael Whalen</h1>
      <h4>Full-Stack Educator</h4>
      <h4>Staten Island Technical High School</h4>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
header {
  height: 100vh;
  background-image: url('https://res.cloudinary.com/dbopxlpuy/image/upload/b_rgb:000000,f_auto,o_19/v1611365531/Bao/test_c6zrj6.png');
  background-size: cover;
  background-position: center;
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

.heading {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
}
</style>
