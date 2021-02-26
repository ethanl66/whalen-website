<template>
  <div>
    <template v-if="size === 'image-full-width'">
      <div
        class="blog-header single"
        :style="{ 'background-image': 'url(' + img.url + ')' }"
      >
        <template v-if="$prismic.asText(caption) != ''">
          <div class="wrapper">
            <h5 class="caption">{{ $prismic.asText(caption) }}</h5>
          </div>
        </template>
      </div>
    </template>
    <template v-else>
      <div>
        <p class="block-img" :class="size">
          <prismic-image :field="img" class="blog-img-content" />
        </p>
        <template v-if="$prismic.asText(caption) != ''">
          <p class="label">
            <span class="image-label">{{ $prismic.asText(caption) }}</span>
          </p>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'image-caption-slice',
  data: function () {
    return {
      img: '',
      caption: '',
      size: '',
    }
  },
  created() {
    this.img = this.slice.primary.image
    this.caption = this.slice.primary.caption
    this.size = this.slice.slice_label
  },
}
</script>

<style lang="scss">
.block-img {
  width: 50vw;
  margin: 1rem auto;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 80vw;
  }
  @media screen and (max-width: 640px) {
    width: 80vw;
  }
}
.blog-img-content {
  width: auto;
  height: 20rem;
}
.wrapper {
  text-align: center;
}
.label {
  text-align: center;
}
.image-label {
  font-size: var(--h5);
  font-style: italic;
}
</style>
