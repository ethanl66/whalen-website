<template>
  <section class="student-work-container">
    <div class="student-row">
      <StudentCard />
      <StudentCard />
      <StudentCard />
    </div>
    <div class="student-row">
      <StudentCard />
      <StudentCard />
      <StudentCard />
    </div>
    <div class="student-row">
      <StudentCard />
      <StudentCard />
      <StudentCard />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.student-work-container {
  @include flex-col;
  width: 100%;
}
.student-row {
  @include flex-row;
  margin: 2rem auto;
  justify-content: space-between;
  width: 95%;
}
@include phone {
  .student-row {
    flex-direction: column;
  }
}
</style>
