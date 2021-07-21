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
  font-size: var(--h4);
  color: var(--text-primary);
  list-style: none;
  margin: 1rem auto;
  transition: all 0.3s;
  display: flex;
}
.icon,
.color-name {
  margin: 1rem;
}
.color-name {
  border-bottom: 3px solid transparent;
}
.theme-icon:hover {
  //transform: scale(1.1);

  cursor: pointer;
}
.theme-icon:hover .color-name {
  border-bottom: 3px solid white;
}
</style>
