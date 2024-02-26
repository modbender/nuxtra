<template>
  <template v-if="$colorMode === 'light'"> <ThemeLight /> </template>
  <template v-if="$colorMode === 'dark'"> <ThemeDark /> </template>
</template>

<script setup>
const config = useRuntimeConfig();

const themeConfig = computed(() => config.public.addThemeCSS ?? true);
</script>
