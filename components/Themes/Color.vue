<template>
  <li class="theme-icon" @click="$colorMode.preference = color">
    <span class="icon"><fa :icon="icon" /> </span>
    <span class="color-name">{{ color }}</span>
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
  font-size: var(--h2);
  color: var(--text-primary);
  list-style: none;
  margin: 2rem auto;
  transition: all 0.3s;
}
.icon,
.color-name {
  margin: 1rem;
}
.theme-icon:hover {
  //transform: scale(1.1);

  cursor: pointer;
}
.theme-icon:hover .color-name {
  border-bottom: 3px solid white;
}
</style>
