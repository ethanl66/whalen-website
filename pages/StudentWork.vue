<template>
  <section class="student-work-container">
    <TextLeft
      title="Fantasy Kingdom"
      image="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_800/v1613089479/Fantasy Kingdom/Screenshot_2021-02-21_Galgudd_lorm1c"
      :authors="['Charley Baluja', 'Daniel Briskman']"
    />
    <TextRight />
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.student-work-container {
  @include flex-col;
  background-color: var(--black);
}
</style>
