<script lang="ts" setup>
useHead({
  title: `About me - Portfolio`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
})
</script>

<template>
  <Header
    title="About me"
    srcset="
        /images/glenngijsberts_small.webp   240w,
        /images/glenngijsberts_medium.webp  720w,
        /images/glenngijsberts_large.webp  1280w
      "
  >
    <p>
      I'm 27 years old and originally from
      <a href="https://en.wikipedia.org/wiki/The_Hague">The Hague</a>. I'm now living in
      <a href="https://en.wikipedia.org/wiki/Amsterdam">Amsterdam</a>, working at TicketSwap as
      front-end developer. I've started learning web development in 2012 during my studies. After
      doing several internships, I've started working as a front-end developer in 2016 at
      <a href="https://sqits.nl/">Sqits</a>.
    </p>

    <p>
      In 2020 I graduated as Interaction Designer at The Hague University. In the meantime I've kept
      working as front-end developer, gaining experience in various stacks and doing multiple
      projects. I've experience in modern technologies like
      <a href="https://stackshare.io/glenngijsberts"
        >React, Vue, TypeScript, GraphQL, Contentful, and more</a
      >.
    </p>

    <p>
      Currently I'm working at <a href="https://www.ticketswap.com">TicketSwap</a> in the growth
      team. One of the recent projects I did was the frontend implementation of Google Login for the
      TicketSwap website.
    </p>

    <div class="buttons">
      <a href="/glenngijsberts-resume.pdf">
        <button class="resume">Download my resume</button>
      </a>

      <NuxtLink to="/">&larr; Back to home</NuxtLink>
    </div>
  </Header>
</template>
