<template>
  <div :class="$style.tabs">
    <Button
      v-for="tab in tabs"
      :key="tab.key"
      underline
      :bg="tab.key.toUpperCase()"
      :ghost="tab.key !== activeTab"
      @click="activeTab = tab.key"
    >
      <span>{{ tab.name }}</span>
      <img src="@/assets/play.png" />
    </Button>
  </div>
</template>
<script lang="ts" setup>
import Button from '@/components/button.vue';
import { ref } from 'vue';
const activeTab = ref('fragment');
const tabs = [
  { key: 'fragment', name: '切片' },
  { key: 'fanmade', name: '二创' },
];
</script>
<style lang="less" module>
.tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  :global(.asf-button) {
    width: 150px;
    img {
      margin-right: 2px;
    }
    &:global(.asf-button__ghost) {
      justify-content: center;
      opacity: 0.87;
      img {
        display: none;
      }
    }
    &:not(:last-child) {
      margin-right: 100px;
    }
  }
}
</style>
