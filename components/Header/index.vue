<script lang="ts" setup>
const { title } = defineProps<{
  title: string
  srcset: string
}>()
</script>

<template>
  <header>
    <img
      class="avatar"
      src="/images/glenngijsberts_medium.webp"
      :srcset="srcset"
      sizes="(max-width: 768px) 240px, (max-width: 1440px) 1280px, 100vw"
      alt="Glenn Gijsberts"
    />

    <div class="content">
      <h1>{{ title }}</h1>

      <slot />
    </div>
  </header>
</template>

<style lang="scss">
header {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  img {
    border-radius: 50%;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 16px;

    h1 {
      font-size: 48px;
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0px;

    img {
      border-radius: unset;
      height: 100vh;
      object-fit: cover;
    }

    .content {
      padding: 48px;
      justify-content: center;
      height: 100vh;
      gap: 16px;

      h1 {
        margin-bottom: 0;
        font-size: 64px;
      }
    }
  }

  button {
    margin-top: 16px;
    color: $primary;
    background-color: transparent;
    border: 1px solid $primary;
    border-radius: 4px;
    padding: 16px 24px;
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;
    width: fit-content;
    font-family: 'Inter', sans-serif;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      background-color: lighten($primary, 33%);
    }
  }

  .buttons {
    display: grid;
    gap: 32px;
  }
}
</style>
