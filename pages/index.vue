<script lang="ts" setup>
const { data } = await useAsyncGql({
  operation: 'getWebsiteConfig',
  variables: {
    id: '62C5afb2dP7sdqOEbKLsdS',
  },
})

if (!data.value?.website?.title) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const title = data.value.website.title
</script>

<template>
  <Header :title="title" />
</template>
