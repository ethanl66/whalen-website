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
  background-color: var(--background-primary);
  clip-path: polygon(0 0, 100% 0%, 100% 87%, 0% 100%);
  h1 {
    text-transform: uppercase;
  }
}
.heading {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
