<template>
  <div :class="$style.navbar">
    <div :class="$style.inner">
      <div :class="$style.logo" />
      <!-- <div :class="$style.menu">
        <div :class="$style.menuBar1" />
        <div :class="$style.menuBar2" />
        <div :class="$style.menuBar3" />
      </div>-->
      <div :class="$style.menu">
        <MenuItem v-for="menu in menus" :key="menu.url" v-bind="menu" />
      </div>
    </div>
  </div>
</template>
<script lang="tsx" setup>
import { useCssModule, h, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
const $style = useCssModule();

export interface MenuItem {
  name: string;
  url?: string;
  target?: string;
  children?: MenuItem[];
}
withDefaults(
  defineProps<{
    menus?: MenuItem[];
    offset?: number | string;
  }>(),
  {
    menus: () => [
      {
        name: '首页',
        url: '/',
      },
      {
        name: '实用工具',
        children: [
          {
            name: '枝网查重',
            url: 'https://tools.asoulfan.com/duplicateChecking',
            target: '_blank',
          },
          {
            name: '成分姬',
            url: 'https://tools.asoulfan.com/ingredientChecking',
            target: '_blank',
          },
          {
            name: '枝江词典',
            url: 'https://tools.asoulfan.com/zhijiangDict',
            target: '_blank',
          },
          {
            name: '今天溜什么',
            url: 'https://tools.asoulfan.com/randomVideo',
            target: '_blank',
          },
          {
            name: '表情包',
            url: 'https://tools.asoulfan.com/emojicollect',
            target: '_blank',
          },
        ],
      },
    ],
    offset: '100vw',
  },
);

const MenuItem = (menu: MenuItem) => (
  <div class={$style.menuItem}>
    {!menu.url || menu.target ? (
      <a href={menu.url} target={menu.target}>
        {menu.name}
      </a>
    ) : (
      <RouterLink to={menu.url}>{menu.name}</RouterLink>
    )}
    {menu.children && (
      <div class={$style.subMenu}>{menu.children.map(MenuItem)}</div>
    )}
  </div>
);

// const handleScroll = () => {};
// onMounted(() => window.addEventListener('scroll', handleScroll));
// onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>
<style lang="less" module>
.navbar {
  height: 80px;
  width: 100vw;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 100;
  border-bottom: 1px solid #fff;
}
.inner {
  padding: 0 10px;
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.logo {
  background-color: #fff;
  -webkit-mask: url("/favicon.svg") no-repeat left center;
  mask: url("/favicon.svg") no-repeat left center;
  width: 100px;
  height: 100px;
}
.menu {
  display: flex;
  height: 100%;
}

.menuItem {
  height: 100%;
  margin-left: 100px;
  position: relative;
  overflow: hidden;
  > a {
    color: #fff;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 18px;
    &:global(.router-link-active) {
      border-bottom: 2px solid #fff;
    }
  }
  .subMenu {
    top: 100%;
    left: calc(50% - 60px);
  }
  &:hover {
    overflow: visible;
    .subMenu {
      opacity: 1;
    }
  }
}

.subMenu {
  opacity: 0;
  position: absolute;
  transition: opacity 0.5s;
  .menuItem {
    width: 120px;
    margin: 0;
    white-space: nowrap;
    word-break: keep-all;
    line-height: 40px;
    background-color: #fff;
    > a {
      font-size: 16px;
      color: #333;
      justify-content: center;
      padding: 0 20px;
      &:hover {
        color: #ff8772;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .navbar {
    height: 60px;
  }
  .menuItem {
    margin: 0 20px;
  }
}

// .menu {
//   width: 60px;
//   height: 36px;
//   cursor: pointer;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   &:hover {
//     .menuBar1,
//     .menuBar3 {
//       width: 113%;
//     }
//     .menuBar1 {
//       transform: rotate(30deg);
//     }
//     .menuBar3 {
//       transform: rotate(-30deg);
//     }
//     .menuBar2 {
//       width: 0;
//     }
//   }
// }
// .menuBar1,
// .menuBar2,
// .menuBar3 {
//   width: 100%;
//   height: 6px;
//   border-radius: 2px;
//   background-color: #fff;
//   transition: all 0.3s;
//   transform-origin: 3px 50%;
// }
</style>
