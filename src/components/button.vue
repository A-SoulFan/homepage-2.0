<template>
  <component
    :is="tag"
    :class="[
      'asf-button',
      underline && 'asf-button__underline',
      ghost && 'asf-button__ghost',
    ]"
    :href="href"
    :target="target"
    v-bind="$attrs"
  >
    <slot name="icon" />
    <slot />
    <span v-if="bg || $slots.bg" class="asf-button__bg">
      <slot name="bg" />
      {{ bg }}
    </span>
  </component>
</template>
<script lang="ts" setup>
withDefaults(
  defineProps<{
    underline?: boolean;
    ghost?: boolean;
    tag?: string;
    href?: string;
    target?: string;
    bg?: string;
  }>(),
  {
    tag: 'button',
    underline: false,
    ghost: false,
    href: undefined,
    target: undefined,
    bg: '',
  },
);
</script>
<style lang="less">
.asf-button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  appearance: none;
  font-size: 16px;
  background-color: #fff;
  border: none;
  line-height: 28px;
  padding: 6px 18px;
  font-family: '黑体', sans-serif;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  overflow: hidden;
  transition: color, background 0.3s;
  &:active {
    outline: none;
  }
  img {
    margin-right: 10px;
  }
}
.asf-button__underline {
  position: relative;
  padding: 10px 18px 12px;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 4px;
    background: linear-gradient(90deg, #a967d5, #da5b8b);
    transition: all 0.3s;
  }
}
.asf-button__bg {
  position: absolute;
  line-height: 28px;
  white-space: nowrap;
  left: 0;
  padding-left: inherit;
  font-size: 36px;
  font-weight: bold;
  opacity: 0.1;
  pointer-events: none;
  transition: all 0.3s;
}
.asf-button__ghost {
  background-color: transparent;
  border: 1px solid #fff;
  padding: 5px 18px;
  color: #fff;
  .asf-button__bg {
    opacity: 0;
  }
  &.asf-button__underline {
    padding: 9px 18px 11px;
    &::after {
      opacity: 0;
    }
  }
}
</style>
