<template>
  <NuxtLayout :name="layout">
    <ContentRenderer v-if="page" :key="page._id" :value="page">
      <template #empty="{ value }">
        <DocumentDrivenEmpty :value="value" />
      </template>
    </ContentRenderer>
    <DocumentDrivenNotFound v-else />
  </NuxtLayout>
</template>

<script setup>
const { contentHead } = useRuntimeConfig().public.content;
const { page, layout } = useContent();

// Page not found, set correct status code on SSR
if (!page.value && process.server) {
  const event = useRequestEvent();
  event.res.statusCode = 404;
}

if (contentHead) {
  useContentHead(page);
}
</script>
