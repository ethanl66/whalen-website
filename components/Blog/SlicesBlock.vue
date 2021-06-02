<template>
  <section>
    <!-- Slice section template -->
    <section v-for="(slice, index) in slices" :key="'slice-' + index">
      <!-- Text slice template -->
      <template v-if="slice.slice_type === 'text'">
        <!-- Here :slice="slice" passes the data to the component -->
        <BlogSlicesText-slice :slice="slice"></BlogSlicesText-slice>
      </template>
      <!-- Quote slice template -->
      <template v-else-if="slice.slice_type === 'quote'">
        <BlogSlicesQuote-slice :slice="slice"></BlogSlicesQuote-slice>
      </template>
      <!-- Image with caption slice template -->
      <template v-else-if="slice.slice_type === 'image_with_caption'">
        <BlogSlicesImage-caption-slice
          :slice="slice"
        ></BlogSlicesImage-caption-slice>
      </template>
    </section>
  </section>
</template>

<script>
export default {
  props: ['slices'],
}
</script>
<style></style>
