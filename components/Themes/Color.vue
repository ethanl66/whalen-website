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
  color: var(--white);
  list-style: none;
  margin: 1rem auto;
  transition: all 0.3s;
  display: flex;

  z-index: 3;
  //border: 1px solid white;
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
