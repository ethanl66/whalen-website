<template>
  <section class="student-work-container">
    <StudentCard
      title="Japan"
      imgSrc="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_800/v1613933809/EthanJapan/Screenshot_2021-02-21_Visit_Japan_jr4nfj"
      altText="Japan by Ethan Liang"
      techStack="HTML, SCSS"
      projectPage="Projects-Japan"
    />
    <StudentCard
      title="Fantasy Kingdom"
      imgSrc="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_800/v1613933809/Fantasy Kingdom/Screenshot_2021-02-21_Galgudd_lorm1c"
      altText="Fantasy Kingdom by Charley Baluja and Daniel Briskman"
      techStack="HTML, SCSS"
      projectPage="index"
    />
    <StudentCard
      title="Fire Emblem"
      imgSrc="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_800/v1613933809/Fire Emblem/attack_pdyrpw"
      altText="Fire Emblem By William Anderson"
      techStack="Node, MongoDB, Socket"
      projectPage="index"
    />
    <StudentCard
      title="Fire Emblem"
      imgSrc="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_800/v1613933809/Fire Emblem/attack_pdyrpw"
      altText="Fire Emblem By William Anderson"
      techStack="Node, MongoDB, Socket"
      projectPage="index"
    />
    <StudentCard
      title="Fire Emblem"
      imgSrc="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_800/v1613933809/Fire Emblem/attack_pdyrpw"
      altText="Fire Emblem By William Anderson"
      techStack="Node, MongoDB, Socket"
      projectPage="index"
    />
    <StudentCard
      title="Fire Emblem"
      imgSrc="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_800/v1613933809/Fire Emblem/attack_pdyrpw"
      altText="Fire Emblem By William Anderson"
      techStack="Node, MongoDB, Socket"
      projectPage="index"
    />
    <StudentCard
      title="Fire Emblem"
      imgSrc="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_800/v1613933809/Fire Emblem/attack_pdyrpw"
      altText="Fire Emblem By William Anderson"
      techStack="Node, MongoDB, Socket"
      projectPage="index"
    />
    <StudentCard
      title="Fire Emblem"
      imgSrc="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_800/v1613933809/Fire Emblem/attack_pdyrpw"
      altText="Fire Emblem By William Anderson"
      techStack="Node, MongoDB, Socket"
      projectPage="index"
    />
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.student-work-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, 26%);

  justify-content: space-around;

  width: 100%;
  margin: 2rem auto;
}
@include tablet {
  .student-work-container {
    grid-template-columns: repeat(auto-fit, 40%);
  }
}

@include phone {
  .student-work-container {
    grid-template-columns: repeat(auto-fit, 80%);
  }
}
</style>
