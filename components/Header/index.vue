<script lang="ts" setup>
const { title } = defineProps<{
  title: string
}>()
</script>

<template>
  <header>
    <img
      class="avatar"
      src="/images/glenngijsberts_medium.webp"
      srcset="
        /images/glenngijsberts_small.webp   240w,
        /images/glenngijsberts_medium.webp  720w,
        /images/glenngijsberts_large.webp  1280w
      "
      sizes="(max-width: 768px) 240px, (max-width: 1440px) 1280px, 100vw"
      alt="Glenn Gijsberts"
    />

    <div class="content">
      <h1>{{ title }}</h1>
      <p>
        Graduated as
        <a
          class="hhs"
          href="https://www.dehaagsehogeschool.nl/opleidingen/bachelors/communication-multimedia-design-voltijd"
          >Interaction Designer</a
        >, now working as front-end developer on modern and user-friendly websites and apps.
        Currently I'm working in the Growth team of
        <a href="https://www.ticketswap.com" class="ticketswap">TicketSwap</a>.
      </p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  img {
    border-radius: 50%;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 8px;

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
}

.ticketswap {
  color: $ticketswap-blue;
}

.hhs {
  color: $hhs-green;
}
</style>
