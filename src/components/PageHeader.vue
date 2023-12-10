<template>
  <header class="page-header">
    <div class="row">
      <component
        :is="tag"
      >
        <span
          class="title"
        >{{ formattedTitle }}</span>
        <slot name="title-logo" />
      </component>
      <nav class="operations">
        <slot />
      </nav>
    </div>
    <slot name="below-title" />
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  
  computed: {
    tag () {
      return `h3`
    },

    formattedTitle () {
      return 'some title'
    },
  },
}
</script>

<style lang="scss" scoped>
.page-header h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
  .title {
    word-break: break-all;
  }
}

.row {
  justify-content: space-between;
  padding: 0 15px;
}

.col {
  line-height: 38px;
}

h1, h2, h3, h4, h5, h6, nav {
  margin-top: 0px;
  margin-bottom: 20px;
}

.title-no-margin {
  margin: 0 !important;
}

.operations {
  flex-grow: 0;
  white-space: nowrap;
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  text-align: right;
}
</style>
