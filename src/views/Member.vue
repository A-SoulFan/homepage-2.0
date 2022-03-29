<template>
  <div>
    <Title :class="$style.title">成员介绍</Title>
    <div :class="$style.Member">
      <a
        v-for="(member, index) in memberList"
        :key="member.id"
        :class="[$style.imgBox, $style[`imgBox${index + 1}`]]"
        :href="`https://space.bilibili.com/${member.id}`"
        target="blank"
      >
        <h3>
          {{ member.name }}
          <br />
          {{ member.enName }}
        </h3>
        <div :class="$style.nameBorder" :style="{ 'background-color': member.color }"></div>
        <div :class="$style.more">
          LEARN MORE
          <div :class="$style.arrow" />
        </div>
        <img :src="member.imgUrl" :alt="member.name" />
      </a>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Title from '../components/Title.vue';

import { ref, onMounted, useCssModule, onUnmounted } from 'vue';

// import imgBella from '../assets/img/member/bella.png';
// import imgCarol from '../assets/img/member/carol.png';
// import imgDiana from '../assets/img/member/diana.png';
// import imgEileen from '../assets/img/member/eileen.png';
const memberList = [
  {
    id: 672346917,
    name: '向晚',
    enName: 'Ava',
    color: '#9ac8e2',
    imgUrl: '/src/assets/img/member/ava.png',
  },
  {
    id: 672353429,
    name: '贝拉',
    enName: 'Bella',
    color: '#bd7d74',
    imgUrl: '/src/assets/img/member/bella.png',
  },
  {
    id: 351609538,
    name: '珈乐',
    enName: 'Carol',
    color: '#b8a6d9',
    imgUrl: '/src/assets/img/member/carol.png',
  },
  {
    id: 672328094,
    name: '嘉然',
    enName: 'Diana',
    color: '#e799b0',
    imgUrl: '/src/assets/img/member/diana.png',
  },
  {
    id: 672342685,
    name: '乃琳',
    enName: 'Eileen',
    color: '#576690',
    imgUrl: '/src/assets/img/member/eileen.png',
  },
];

const windowInnerWidth = window.innerWidth;
const windowInnerHeight = window.innerHeight;
const computedBGPosition = (num: number, doc: number) =>
  60 - Number(((num / doc) * 20).toFixed(1)) + '%';

const computedTransform = (num: number, doc: number) =>
  ((num / doc) * 40 - 20).toFixed(1);

// console.log(document.getElementsByClassName($style.imgBox));
// let imgBoxDomList: HTMLCollection[] = [];
// const watchMousemove = (e: MouseEvent) => {
//   for (const ele of imgBoxDomList) {
//     ele.style.backgroundPosition = `
//     ${computedBGPosition(e.clientX, windowInnerWidth)}
//     ${computedBGPosition(e.clientY, windowInnerHeight)}`;
//     ele.style.transform = `
//     rotateX(${computedTransform(e.clientX, windowInnerWidth)}deg)
//     rotateY(${computedTransform(e.clientY, windowInnerHeight)}deg)
//   `;
//     // console.log(ele.children[0].style);

//     // ele.children[0].style.transform = `
//     //   rotateX(${computedTransform(e.clientX, windowInnerWidth)}px)
//     //   rotateX(${computedTransform(e.clientY, windowInnerHeight)}px)
//     // `;
//   }
//   // console.log(e.clientX, e.clientY, 'clientX,clientY');
// };
// const $style = useCssModule();
onMounted(() => {
  // imgBoxDomList = document.getElementsByClassName(useCssModule().imgBox);
  // window.addEventListener('mousemove', watchMousemove);
});
onUnmounted(() => {
  // window.removeEventListener('mousemove', watchMousemove);
});
</script>
<style lang="less" module>
.Member {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  height: 100%;
  width: 100%;
  background: url("../assets/img/member/bg.jpg") no-repeat center / cover;
  object-fit: cover;
}
.title {
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
}

.imgBox {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 235px;
  height: 640px;
  margin-right: 27px;
  padding-top: 408px;
  border-radius: 4px;
  box-shadow: 0px 10px 20px 20px rgba(0, 0, 0, 0.17);
  background-image: url("../assets/img/member/member.jpg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 110% 110%;
  cursor: pointer;
  // transition: opacity ease-in-out 0.3s;
  &:hover {
    h3 {
      opacity: 0;
    }
    .nameBorder {
      opacity: 0;
    }
    .more {
      opacity: 1;
    }
  }
  // background: url("../assets/img/member/member.jpg") no-repeat center / cover;
  h3 {
    z-index: 3;
    font-size: 38px;
    text-shadow: 1px 1px #000;
    color: #ffffff;
    transition: opacity ease-in-out 0.3s;
  }
  .nameBorder {
    width: 141px;
    height: 17px;
    margin-top: -56px;
    transform: skew(30deg);
    transition: opacity ease-in-out 0.3s;
  }

  .more {
    opacity: 0;
    position: absolute;
    z-index: 5;
    right: -11px;
    bottom: 30px;
    display: flex;
    align-items: center;
    width: 181px;
    height: 43px;

    padding-left: 15px;

    font-size: 15px;
    color: #000;
    background-color: #fff;
    text-align: left;
    font-weight: bold;
    transition: opacity ease-in-out 0.3s;
    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: -10px;
      border-top: 10px solid #11cfd0;
      border-right: 10px solid transparent;
    }
    .arrow {
      position: relative;
      margin-left: 10px;
      display: flex;
      align-items: center;
      &::before {
        content: "";
        height: 1px;
        background-color: #000;
        width: 22px;
      }
      &::after {
        content: "";
        border: 4px solid;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
      }
    }
  }

  img {
    position: absolute;
    z-index: 0;
    bottom: 0;
    width: 100%;
  }
}
.imgBox1 {
  animation: fadeIn 0.5s ease-in-out both 0.5s,
    shake1 5s ease-in-out infinite 1s;
}
.imgBox2 {
  animation: fadeIn 0.5s ease-in-out both 0.5s,
    shake2 7s ease-in-out infinite 1s;
}

.imgBox3 {
  animation: fadeIn 0.5s ease-in-out both 0.5s,
    shake3 5s ease-in-out infinite 1s;
}
.imgBox4 {
  animation: fadeIn 0.5s ease-in-out both 0.5s,
    shake4 5s ease-in-out infinite 1s;
}
.imgBox5 {
  animation: fadeIn 0.5s ease-in-out both 0.5s,
    shake5 5s ease-in-out infinite 1s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes shake1 {
  0% {
    transform: translate(0);
  }

  50% {
    transform: translate(10px, -10px);
  }

  100% {
    transform: translate(0);
  }
}
@keyframes shake2 {
  0% {
    transform: translate(0);
  }

  50% {
    transform: translate(-15px, -10px);
  }

  100% {
    transform: translate(0);
  }
}
@keyframes shake3 {
  0% {
    transform: translate(0);
  }

  50% {
    transform: translate(15px, -15px);
  }

  100% {
    transform: translate(0);
  }
}
@keyframes shake4 {
  0% {
    transform: translate(0);
  }

  50% {
    transform: translate(-10px, -15px);
  }

  100% {
    transform: translate(0);
  }
}
@keyframes shake5 {
  0% {
    transform: translate(0);
  }

  50% {
    transform: translate(10px, 15px);
  }

  100% {
    transform: translate(0);
  }
}
</style>
