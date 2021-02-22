<template>
  <section class="student-work-container">
    <StudentCard />
    <StudentCard />
    <StudentCard />
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.student-work-container {
  @include flex-row;
}
</style>
