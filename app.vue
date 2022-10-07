<template>
  <NuxtPage />
</template>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
  margin-block: 0;
  margin-inline: 0;
  padding-block: 0;
  padding-inline: 0;
  border: 0;
}

::selection {
  background-color: $primary;
  color: $invertedForeground;
}

body {
  color: $foreground;
  font-family: 'Inter', sans-serif;
  line-height: 1.2;
}

p {
  line-height: 2;
}

img {
  width: 100%;
  height: auto;
}

a {
  color: $primary;
}
</style>
