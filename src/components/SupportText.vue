<template>
  <div class="support-text">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.support-text {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding-bottom: 32px;

  color: rgba(0, 0, 0, 0.45);

  p {
    margin-bottom: 0;
  }
}

</style>
