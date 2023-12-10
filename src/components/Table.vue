<template>
  <section class="snis-listing">
    <PageHeader>
      <template #below-title>
        <SupportText>
          <p>
            Some support text

            <KExternalLink href="http://example.com">
              Learn more
            </KExternalLink>
          </p>
        </SupportText>
      </template>
    </PageHeader>

    <SniList
      :config="config"
      :can-create="() => true"
      :can-delete="() => true"
      :can-edit="() => true"
      :can-retrieve="() => true"
    />
  </section>
</template>

<script setup lang="ts">
import { SniList, type KongManagerSniListConfig } from '@kong-ui-public/entities-snis'
import PageHeader from '@/components/PageHeader.vue'
import SupportText from '@/components/SupportText.vue'

defineOptions({ name: 'TestTable' })

const config = {
  app: 'kongManager' as const,
  workspace: 'default' as const,
  apiBaseUrl: '/',
  isExactMatch: false,
  disableSorting: false,
  createRoute: { name: 'other' },
  getViewRoute: () => ({ name: 'other' }),
  getEditRoute: () => ({ name: 'other' }),
  filterSchema: {
    name: {
      type: 'text',
    },
  },
} satisfies KongManagerSniListConfig
</script>
