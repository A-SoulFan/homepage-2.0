<template>
  <div :class="$style.members">
    <a
      v-for="member in members"
      :key="member.id"
      :class="$style.member"
      :href="`https://space.bilibili.com/${member.id}`"
      target="_blank"
    >
      <div :class="[$style.bg, $style[member.enName.toLowerCase()]]" />
      <h3>{{ member.name }}</h3>
      <h4>{{ member.enName }}</h4>
      <div :class="$style.border" :style="{ color: member.color }" />
      <div :class="$style.more">
        LEARN MORE
        <div :class="$style.arrow" />
      </div>
    </a>
  </div>
</template>
<script lang="ts" setup>
const members = [
  {
    id: 672346917,
    name: '向晚',
    enName: 'Ava',
    color: '#9ac8e2',
  },
  {
    id: 672353429,
    name: '贝拉',
    enName: 'Bella',
    color: '#bd7d74',
  },
  {
    id: 351609538,
    name: '珈乐',
    enName: 'Carol',
    color: '#b8a6d9',
  },
  {
    id: 672328094,
    name: '嘉然',
    enName: 'Diana',
    color: '#e799b0',
  },
  {
    id: 672342685,
    name: '乃琳',
    enName: 'Eileen',
    color: '#576690',
  },
];
</script>
<style lang="less" module>
.members {
  display: flex;
  justify-content: space-between;
  color: #fff;
}
.member {
  width: 220px;
  height: 600px;
  padding-top: 380px;
  position: relative;
  background-image: url('@/assets/member.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  transform: scale(1);
  transition: all 0.3s;
  h3,
  h4 {
    margin: 0;
    position: relative;
    z-index: 4;
    font-size: 36px;
    font-family: Arial, '黑体';
    transition: all 0.3s;
  }
  h4 {
    font-weight: normal;
  }
  &::after {
    content: '';
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    // background-color: rgba(0, 0, 0, 0.4);
    transition: all 0.3s;
  }
  &:hover {
    // .bg {
    //   filter: grayscale(0);
    // }
    transform: scale(1.05);
    &::after,
    h3,
    h4,
    .border {
      opacity: 0;
    }
  }
}
.bg {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  // filter: grayscale(1);
  transition: all 0.3s;
}
.border {
  height: 16px;
  width: 132px;
  margin: 0 auto;
  background-color: currentColor;
  position: relative;
  z-index: 3;
  margin-top: -15px;
  transition: all 0.3s;
}
.more {
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 5;
  width: 170px;
  height: 40px;
  line-height: 40px;
  color: #000;
  padding-left: 12px;
  bottom: 30px;
  left: 60px;
  background-color: #fff;
  text-align: left;
  font-weight: bold;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -10px;
    border-top: 10px solid #11cfd0;
    border-right: 10px solid transparent;
  }
}
.arrow {
  position: relative;
  margin-left: 10px;
  display: flex;
  align-items: center;
  &::before {
    content: '';
    height: 1px;
    background-color: #000;
    width: 22px;
  }
  &::after {
    content: '';
    border: 4px solid;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
  }
}
.bella {
  background-image: url('@/assets/bella.png');
}
.carol {
  background-image: url('@/assets/carol.png');
}
.diana {
  background-image: url('@/assets/diana.png');
}
.eileen {
  background-image: url('@/assets/eileen.png');
}
.ava {
  background-image: url('@/assets/ava.png');
}

@media screen and (max-width: 900px) {
  .members {
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .member {
    width: 30%;
    height: 35vh;
    padding-top: 25vh;
    margin-bottom: 20px;
    h3,
    h4 {
      font-size: 24px;
    }
  }
  .border {
    width: 80%;
  }
  .more {
    display: none;
  }
}
</style>
