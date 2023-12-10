<template>
  <AppLayout
    id="app"
    :class="route.name"
    :sidebar-top-items="[]"
    :sidebar-hidden="true"
    :navbar-hidden="false"
  >
    <Table />
  </AppLayout>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

import { AppLayout } from '@kong-ui-public/app-layout'
import '@kong-ui-public/app-layout/dist/style.css'
import Table from '@/components/Table.vue'

const route = useRoute()
</script>
