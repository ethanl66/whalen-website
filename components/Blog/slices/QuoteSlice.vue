<template>
  <div>
    <h4 class="block-quotation">
      <span>"</span>
      {{ $prismic.asText(slice.primary.quote) }}
      <span>"</span>
    </h4>
  </div>
</template>

<script>
export default {
  props: ["slice"],
  name: "quote-slice"
};
</script>

<style lang="scss" >
</style>