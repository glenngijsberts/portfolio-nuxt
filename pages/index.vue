<script lang="ts" setup>
useHead({
  title: `Glenn Gijsberts - Portfolio`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
})
</script>

<template>
  <Header
    title="Glenn Gijsberts"
    srcset="
        /images/glenngijsberts_small.webp   240w,
        /images/glenngijsberts_medium.webp  720w,
        /images/glenngijsberts_large.webp  1280w
      "
  >
    <p>
      Graduated as
      <a
        class="hhs"
        href="https://www.dehaagsehogeschool.nl/opleidingen/bachelors/communication-multimedia-design-voltijd"
        >interaction designer</a
      >, now working as front-end developer on modern and user-friendly websites and apps. Currently
      I'm working in the growth team of
      <a href="https://www.ticketswap.com" class="ticketswap">TicketSwap</a> and helping out as
      homework support volunteer at <a href="https://www.hackyourfuture.net/">HackYourFuture</a>.
    </p>

    <div class="buttons">
      <NuxtLink to="/about-me">
        <button class="resume">Learn more about me</button>
      </NuxtLink>
    </div>

    <ul class="links">
      <li>
        <a href="https://github.com/glenngijsberts">Github</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/glenn-gijsberts-0341a463/">LinkedIn</a>
      </li>
      <li>
        <a href="https://stackoverflow.com/users/5503094/giesburts">StackOverflow</a>
      </li>
      <li>
        <a href="https://twitter.com/giesburts">Twitter</a>
      </li>
    </ul>
  </Header>
</template>

<style lang="scss" scoped>
.links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  gap: 16px;
  margin-top: 16px;

  @media (min-width: 768px) {
    display: flex;
    gap: 8px;
  }
}
</style>
