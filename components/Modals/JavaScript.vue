<template>
  <div @click="makeHidden" class="modal-container">
    <h2 class="modal-header">ES6 and Modern JavaScript</h2>
    <div class="modal-flex-row">
      <div class="modal-flex-col">
        <img
          src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094438/Logos/js_yjli5z.png"
          alt="JavaScript Logo "
          class="modal-logo"
        />
        <p class="modal-text-content">
          Students begin learning modern javaScript in term two of computer
          science. with an emphasis on dry code (don’t repeat yourself),
          students are given the tools to begin developing projects usinge
          external aPI’s of their choosing using Asynchronous JavaScript.
          students use indsutry standard tools like parcel, ESModules and Node
          Package Manager to bundle their projects
        </p>
      </div>
      <div class="modal-flex-col">
        <img
          class="modal-image"
          src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_800/v1613337501/Jack21/Screenshot_2021-02-14_Jack_Twenty-One_pncx2g.png"
          alt="Blackjack game developed by Nick Melkadze"
        />
      </div>
    </div>
    <button class="modal-btn btn">Close</button>
  </div>
</template>

<script>
export default {
  props: ['JS'],

  methods: {
    makeHidden: function () {
      this.$emit('hide')
    },
  },
}
</script>

<style lang="scss">
.modal-container {
  background-color: black;
  margin: 0 auto;
  color: #fff;
  height: 100%;
  width: 80%;
  text-align: center;
  z-index: 3;
}
.modal-header {
  text-transform: uppercase;
  margin: 3rem auto;
}
.modal-flex-row {
  @include flex-row;
  justify-content: space-around;
  width: 90%;
  margin: 10rem auto;
}
.modal-flex-col {
  @include flex-col;
  width: 40%;
  justify-content: space-around;
}
.modal-logo {
  width: 30%;
}
.modal-image {
  width: 100%;
}
.modal-text-content {
  margin-top: 10rem;
  font-size: var(--h4);
  padding: 1rem;
  text-align: left;
}
@include tablet {
  .modal-container {
    background-color: black;
    margin: 0 auto;
    color: #fff;
    height: auto;
    width: 85%;
    padding: 1rem;
    text-align: center;
    z-index: 3;
  }
  .modal-flex-row {
    flex-direction: column;
    height: auto;
    width: 100%;
    margin: 3rem auto;
  }
  .modal-flex-col {
    width: 90%;
  }
  .modal-image {
    width: 50%;
  }
  .modal-logo {
    width: 20%;
  }
  .modal-text-content {
    margin: 2rem auto;
    text-align: center;
  }
}
</style>
