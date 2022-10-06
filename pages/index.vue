<script lang="ts" setup>
  const { data } = await useAsyncGql({
    operation: 'getWebsiteConfig',
    variables: {
      id: process.env.CONTENTFUL_WEBSITE_ENTRY as string,
    },
  });

  if (!data.value?.website?.title) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
  }

  const title = data.value.website.title;
</script>

<template>
  <h1>{{ title }}</h1>
</template>
