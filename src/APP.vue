<template>
  <NavBar class="navbar"></NavBar>
  <!-- <Aside></Aside>
  <Footer></Footer>-->
  <router-view v-slot="{ Component }" class="routerView">
    <transition :name="transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted, defineComponent } from 'vue';

import { useRouter } from 'vue-router';

import NavBar from './components/navbar.vue';

export default defineComponent({
  components: {
    NavBar,
  },
  setup() {
    // 滚轮监听事件
    // //节流时间  单位 ms
    const THROTTLE_TIME = 300;
    let lockWheel = false;
    const watchWheel = (e: any) => {
      if (!lockWheel) {
        setTimeout(() => {
          const documentElement = document.documentElement;
          const scrollTop = documentElement.scrollTop;
          const clientHeight = documentElement.clientHeight;
          const scrollHeight = documentElement.scrollHeight;

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
        transitionName.value = 'slide-down';

        if (routeIndex === 0) {
          return;
        }
        routeIndex--;
      } else if (dir === 'down') {
        transitionName.value = 'slide-up';
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
<style lang="less" scoped>
.navbar {
  animation: fadeIn 0.5s ease-in-out both;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.routerView {
  // min-height: 1200px;
  height: 100%;
  min-height: 760px;
  width: 100%;
  overflow: hidden;
  position: absolute;
}

.slide-down-enter-active {
  animation: slideDownEnter 0.15s ease-in-out;
}

.slide-down-leave-active {
  animation: slideDownLeave 0.15s ease-in-out;
}

.slide-up-leave-active {
  animation: slideUpLeave 0.15s ease-in-out;
}

.slide-up-enter-active {
  animation: slideUpEnter 0.15s ease-in-out;
}

@keyframes slideDownEnter {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slideDownLeave {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}

@keyframes slideUpEnter {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slideUpLeave {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}
</style>
