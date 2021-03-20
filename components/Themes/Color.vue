<template>
  <li class="theme-icon" @click="$colorMode.preference = color">
    <span class="icon"><fa :icon="icon" /> </span>
    <span>{{ color }}</span>
  </li>
</template>

<script>
export default {
  props: {
    icon: String,
    color: String,
  },
}
</script>

<style lang="scss">
.theme-icon {
  font-size: var(--h3);
  color: var(--text-primary);
  list-style: none;
}
</style>
