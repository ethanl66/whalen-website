<template>
  <section class="skills">
    <h2 class="skills-header">Industry Standard Skills</h2>
    <div class="skills-container">
      <h3 class="skills-sub">Click An Icon To Learn More</h3>

      <div class="skills-row">
        <img
          src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094439/Logos/Sass_Logo_Color_r1mv6v.png"
          alt="SCSS Logo Click To Learn About SCSS"
          class="skills-img grid-1"
          @click="displaySCSSComponent"
        />
        <img
          src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094438/Logos/js_yjli5z.png"
          alt="JavaScript Logo Click To Learn About JavaScript"
          class="skills-img grid-2"
          @click="displayJSComponent"
        />
        <img
          src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094438/Logos/Vuelogo_kif8pr.png"
          alt="VueJS Logo Click To Learn About VueJS"
          class="skills-img grid-3"
        />
        <img
          src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094438/Logos/node2_cifopi.png"
          alt="NodeJS Logo Click To Learn About NodeJS"
          class="skills-img grid-4"
        />
        <img
          src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094438/Logos/mongo_mx4lbb.png"
          alt="Mongo DB Logo Click To Learn About MongoDB"
          class="skills-img grid-5"
        />
        <img
          src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094438/Logos/firebase_byc1b1.png"
          alt="Firebase Logo Click To Learn About Firebase"
          class="skills-img grid-6"
        />
      </div>
    </div>
    <transition name="pop" appear
      ><JavaScript
        v-if="JS"
        @click="displayJSComponent"
        :JS="JS"
        @hide="hide"
        class="position"
    /></transition>
    <transition name="pop" appear
      ><SCSS
        v-if="SCSS"
        @click="displaySCSSComponent"
        :SCSS="SCSS"
        @hide="hide"
        class="position"
    /></transition>
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal"></div>
    </transition>
  </section>
</template>

<script>
export default {
  data() {
    return {
      JS: false,
      SCSS: false,
      Node: false,
      Vue: false,
      Firebase: false,
      Mongo: false,
      showModal: false,
    }
  },
  methods: {
    displayJSComponent: function () {
      if (this.JS === false) {
        this.JS = true
        this.showModal = true
        return [this.JS, this.showModal]
      } else {
        this.JS = false
        this.showModal = false
        return [this.JS, this.showModal]
      }
    },
    displaySCSSComponent: function () {
      if (this.SCSS === false) {
        this.SCSS = true
        this.showModal = true
        return [this.SCSS, this.showModal]
      } else {
        this.SCSS = false
        this.showModal = false
        return [this.SCSS, this.showModal]
      }
    },
    hide: function () {
      ;(this.JS = false),
        (this.SCSS = false),
        (this.Node = false),
        (this.Vue = false),
        (this.Firebase = false),
        (this.Mongo = false),
        (this.showModal = false)
    },
  },
}
</script>

<style lang="scss">
.skills {
  position: relative;
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
  text-decoration: underline;
}

.skills-row {
  background-color: var(--skill-background);
  height: auto;
  width: 100%;
  padding: 5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: 'grid-1 grid-2 grid-3 grid-4 grid-5 grid-6';
  align-items: center;
}
@include tablet {
  .skills-row {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'grid-1 grid-2 grid-3'
      'grid-4 grid-5 grid-6';
  }
}
.grid-1 {
  grid-area: grid-1;
}
.grid-2 {
  grid-area: grid-2;
}
.grid-3 {
  grid-area: grid-3;
}
.grid-4 {
  grid-area: grid-4;
}
.grid-5 {
  grid-area: grid-5;
}
.grid-6 {
  grid-area: grid-6;
}
.skills-img {
  width: 60%;
  padding: 2rem;
  margin: 0 auto;
}
.position {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  transition: all 0.3s;
  z-index: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.pop-enter-active,
.pop-leave-active {
  transition: transform 0.3s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.3s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
@include tablet {
  .skills-header {
    font-size: var(--h2);
  }
  .skills-sub {
    margin: 0.5rem auto;
  }

  .skills-img {
    width: 70%;
    padding: none;
  }
}
@include phone {
  .skills-img {
    width: 70%;
  }
}
.modal-overlay {
  content: '';
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: #2c3e50;
  opacity: 0.5;
  cursor: pointer;
}
</style>
