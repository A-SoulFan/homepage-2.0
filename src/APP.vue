<template>
  <!-- <Navbar /> -->
  <!-- <h1 class="logo"><img src="./assets/images/logo.png" alt="" /></h1> -->
  <!-- <NavBar></NavBar>
  <Aside></Aside>
  <Footer></Footer> -->
  <!-- <div>
    <transition :name="transitionName">
      <router-view :class="$style.routerView"></router-view>
    </transition>
  </div> -->
  <router-view v-slot="{ Component }" class="routerView">
    <transition :name="transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import {
  ref,
  onMounted,
  onUnmounted,
  defineComponent,
  watch,
  nextTick,
} from 'vue';

import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    // 滚轮监听事件
    // //节流时间  单位 ms
    const THROTTLE_TIME = 500;
    let lockWheel = false;
    const watchWheel = (e: any) => {
      if (!lockWheel) {
        setTimeout(() => {
          const scrollTop = document.documentElement.scrollTop;
          const clientHeight = document.documentElement.clientHeight;
          const scrollHeight = document.documentElement.scrollHeight;

          if (e.wheelDelta > 0 && scrollTop === 0) {
            wheelRouteJump('up');
          } else if (
            e.wheelDelta < 0 &&
            scrollTop + clientHeight >= scrollHeight
          ) {
            wheelRouteJump('down');
          }
          lockWheel = false;
        }, THROTTLE_TIME);

        lockWheel = true;
      }
    };

    const transitionName = ref('');
    const routeList = [
      {
        name: 'HomePage',
        pageIndex: 0,
      },
      {
        name: 'Member',
        pageIndex: 1,
      },
      {
        name: 'Popular',
        pageIndex: 2,
      },
      {
        name: 'Tool',
        pageIndex: 3,
      },
    ];
    let routeIndex = 0;
    const router = useRouter();

    router.beforeEach(to => {
      if (to.params?.wheelRoutePush) {
        return;
      }
      routeIndex = routeList.find(ele => ele.name === to.name)!.pageIndex;
    });
    const wheelRouteJump = (dir: string) => {
      if (dir === 'up') {
        transitionName.value = 'slide-right';

        if (routeIndex === 0) {
          return;
        }
        routeIndex--;
      } else if (dir === 'down') {
        transitionName.value = 'slide-left';
        if (routeIndex === 3) {
          return;
        }
        routeIndex++;
      }

      const name = routeList.find(ele => ele.pageIndex === routeIndex)!.name;
      console.log(name);

      router.push({ name, params: { wheelRoutePush: 'true' } });
      // this.$router.push({ name, params: { wheelRoutePush: true } });
      document.documentElement.scrollTop = 0;
    };

    onMounted(() => {
      window.addEventListener('wheel', watchWheel);
    });
    // FIXME: 是否需要卸载监听
    onUnmounted(() => {
      window.removeEventListener('wheel', watchWheel);
    });
    return {
      transitionName,
    };
  },
});
</script>
<style lang="less">
.routerView {
  // min-height: 1200px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
}

// .slide-right-enter-active,
// .slide-right-leave-active,
// .slide-left-leave-active,
// .slide-left-enter-active {
//   position: absolute;
//   width: 100%;
// }

.slide-right-enter-active {
  animation: slideRightEnter 0.3s ease-in-out;
}

.slide-right-leave-active {
  animation: slideRightLeave 0.3s ease-in-out;
}

.slide-left-leave-active {
  animation: slideLeftLeave 0.3s ease-in-out;
}

.slide-left-enter-active {
  animation: slideLeftEnter 0.3s ease-in-out;
}

@keyframes slideRightEnter {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slideRightLeave {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}

@keyframes slideLeftEnter {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slideLeftLeave {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}
</style>
