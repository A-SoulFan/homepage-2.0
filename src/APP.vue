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

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

import { useRouter } from 'vue-router';

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
      } else if (e.wheelDelta < 0 && scrollTop + clientHeight >= scrollHeight) {
        wheelRouteJump('down');
      }
      lockWheel = false;
    }, THROTTLE_TIME);

    lockWheel = true;
  }
};

const transitionName = ref('slide-left');
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

const wheelRouteJump = (dir: string) => {
  if (dir === 'up') {
    transitionName.value = 'slide-right';

    if (routeIndex === 0) {
      routeIndex = 3;
    } else {
      routeIndex--;
    }
  } else if (dir === 'down') {
    transitionName.value = 'slide-left';
    if (routeIndex === 3) {
      routeIndex = 0;
    } else {
      routeIndex++;
    }
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
// export default {
//   name: "App",
//   components: {
//     NavBar,
//     Aside,
//     Footer,
//   },
//   data() {
//     return {
//       transitionName: "slide-left",
//       routeIndex: 0,

//       lockWheel: false, //滚动监测节流
//       wheelRoll: false, //上次滚动是否已达边界
//       routeList: [
//         {
//           name: "Home",
//           index: 0,
//         },
//         {
//           name: "Travel",
//           index: 1,
//         },
//         {
//           name: "Draw",
//           index: 2,
//         },
//         {
//           name: "Community",
//           index: 3,
//         },
//       ],
//     };
//   },
//   watch: {
//     $route(to, from) {
//       //  console.log(to.params);
//       this.routeIndex = this.$route.meta.index;
//       if (to.params.wheelRoutePush) {
//         return;
//       }

//       if (to.meta.index > from.meta.index) {
//         console.log('this.transitionName = "slide-left";');
//         this.transitionName = "slide-left";
//       } else {
//         console.log('this.transitionName = "slide-right";');
//         this.transitionName = "slide-right";
//       }
//     },
//   },
//   mounted() {
//     this.routeIndex = this.$route.meta.index;

//     window.addEventListener("wheel", this.watchWheel);
//   },
//   methods: {
//     //监听鼠标滚轮事件
//     watchWheel(e) {
//       if (!this.lockWheel) {
//         setTimeout(() => {
//           const scrollTop = document.documentElement.scrollTop;
//           const clientHeight = document.documentElement.clientHeight;
//           const scrollHeight = document.documentElement.scrollHeight;

//           if (e.wheelDelta > 0 && scrollTop === 0) {
//             // if (!this.wheelRoll) {
//             //   this.wheelRoll = true;
//             //   this.lockWheel = false;
//             //   return;
//             // }
//             this.wheelRouteJump("up");
//           } else if (
//             e.wheelDelta < 0 &&
//             scrollTop + clientHeight >= scrollHeight
//           ) {
//             // if (!this.wheelRoll) {
//             //   this.wheelRoll = true;
//             //   this.lockWheel = false;
//             //   return;
//             // }
//             this.wheelRouteJump("down");
//           }

//           // this.wheelRoll = false;
//           this.lockWheel = false;

//         }, THROTTLE_TIME);

//         this.lockWheel = true;
//       }
//     },
//     //滚轮触底/顶  路由跳转
//     wheelRouteJump(dir) {
//       if (dir === "up") {
//         this.transitionName = "slide-right";
//         if (this.routeIndex === 0) {
//           this.routeIndex = 3;
//         } else {
//           this.routeIndex--;
//         }

//       }
//       else if (dir === "down") {
//         this.transitionName = "slide-left";
//         if (this.routeIndex === 3) {
//           this.routeIndex = 0;
//         } else {
//           this.routeIndex++;
//         }
//       }

//       console.log(this.transitionName, "this.transitionName ");

//       const name = this.routeList.find((ele) => {
//         return ele.index === this.routeIndex;
//       }).name;
//       this.$router.push({ name, params: { wheelRoutePush: true } });
//       document.documentElement.scrollTop = 0;

//     },
//     //阻止滚轮
//     preventWheel(e){
//       e.preventDefault()
//     }

//   },
// };
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
  animation: slideRightEnter 3s;
}

.slide-right-leave-active {
  animation: slideRightLeave 3s;
}

.slide-left-leave-active {
  animation: slideLeftLeave 3s;
}

.slide-left-enter-active {
  animation: slideLeftEnter 3s;
}

@keyframes slideRightEnter {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slideRightLeave {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

@keyframes slideLeftEnter {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideLeftLeave {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
