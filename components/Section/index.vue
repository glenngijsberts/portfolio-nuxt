<script lang="ts" setup>
const { title } = defineProps<{
  title: string
}>()
</script>

<template>
  <section>
    <h2>{{ title }}</h2>
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding-inline: 16px;
  padding-block: 32px;

  h2 {
    font-size: 32px;
  }

  @media (min-width: 1024px) {
    padding-inline: 80px;
    padding-block: 96px;
    max-width: 944px;
    margin: 0 auto;

    h2 {
      font-size: 48px;
    }
  }

  @media (min-width: 1440px) {
    max-width: 1280px;
  }
}
</style>
