<template>
  <section class="student-work-container section">
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
      projectPage="Projects-FantasyKingdom"
    />
    <StudentCard
      title="Fire Emblem"
      imgSrc="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_800/v1613933809/Fire Emblem/attack_pdyrpw"
      altText="Fire Emblem By William Anderson"
      techStack="Node, MongoDB, Socket"
      projectPage="Projects-FireEmblem"
    />

    <StudentCard
      title="Loop"
      imgSrc="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_800/v1613933809/Loop/loop_dash_maxdej"
      altText="Loop by Class of 2020"
      techStack="Node, MongoDB"
      projectPage="Projects-Loop"
    />
    <StudentCard
      title="Jack Twenty-One"
      imgSrc="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_800/v1613933809/Jack21/Screenshot_2021-02-14_Jack_Twenty-One_pncx2g"
      altText="Jack 21 By Nick Melkadze"
      techStack="JavaScript, CSS"
      projectPage="Projects-Jack21"
    />
    <StudentCard
      title="Jang Foods"
      imgSrc="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_800/v1613933809/Jang Foods/Screenshot_2021-02-19_TechLife_Cafe_eavzef"
      altText="Jang Foods By Class of 2020"
      techStack="Node, MongoDB, Stripe"
      projectPage="Projects-Jang"
    />
    <StudentCard
      title="Pokemon Battle Sim"
      imgSrc="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_800/v1613933809/Pokemon/Screenshot_2020-05-25_PKMN_DUEL_nmiruw"
      altText="Pokemon By William Anderson"
      techStack="JavaScript, CSS"
      projectPage="Projects-Pkmn"
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
  margin: 4rem auto;
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
