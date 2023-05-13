<script setup lang="ts">
import { html } from './content.md'
</script>

<template>
  <div font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <main>
      <article v-html="html" />
    </main>
  </div>
</template>
