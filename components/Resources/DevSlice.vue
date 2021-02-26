<template>
  <section
    class="card-resource"
    v-tilt="{ speed: 200, perspective: 1200, max: 2 }"
  >
    <h3 class="resource-header">{{ $prismic.asText(resource.data.name) }}</h3>
    <prismic-image class="resource-img" :field="resource.data.thumbnail" />
    <p class="resource-about">{{ $prismic.asText(resource.data.about) }}</p>
    <button class="resource-button" @click="onClickSite()">
      Take Me There
    </button>
  </section>
</template>

<script>
export default {
  name: 'DevSlice',
  props: ['resource'],
  methods: {
    onClickSite: function () {
      window.open(this.resource.data.link.url, '_blank')
    },
  },
}
</script>

<style lang="scss"></style>
