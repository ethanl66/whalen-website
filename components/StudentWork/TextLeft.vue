<template>
  <div class="work-row">
    <img
      class="work-image"
      :src="image"
      alt="Screenshot of Fantasy Kingdom Site"
    />

    <div class="work-content">
      <h2 class="work-title">{{ title }}</h2>
      <h4 class="work-developed">Developed By</h4>
      <h4 class="author" v-for="author in authors" :key="author">
        {{ author }}
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    authors: Array,
  },
}
</script>

<style></style>
