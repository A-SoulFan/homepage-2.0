<template>
  <!-- <Navbar /> -->
  <div :class="[$style.section, $style.cover]">
    <div :class="$style.coverContent">
      <h1 :class="$style.title">
        ASOUL FAN,<br />
        属于一个魂的小城堡捏
      </h1>
      <p :class="$style.intro">
        A-SOUL是字节跳动旗下、乐华娱乐年度最新企划中打造的虚拟偶像女团，成员由向晚（Ava）、贝拉（Bella）、珈乐（Carol）、嘉然（Diana）、乃琳（Eileen）五人组成，于2020年11月以“乐华娱乐首个虚拟偶像团体”名义出道。2020年12月2日,发行团体第一张单曲《Quiet》；12月11日，进行了团体第一场线上直播。2021年4月30日，发布第二张单曲《超级敏感》，正式开启第二张单曲的宣传活动
      </p>
    </div>
  </div>
  <div :class="[$style.section, $style.bg1]">
    <div :class="$style.content">
      <Title>成员介绍</Title>
      <Members />
    </div>
  </div>
  <div :class="[$style.section, $style.bg2]">
    <div :class="$style.content" style="max-width: 100%">
      <Title>热门内容</Title>
      <List />
    </div>
  </div>
  <div :class="[$style.section, $style.bg3, $style.tools]">
    <div :class="$style.content">
      <Title>常用工具</Title>
      <Tools />
    </div>
  </div>
</template>
<script lang="ts" setup>
// import Navbar from '@/components/navbar.vue';
import Title from './components/title.vue';
import Members from './components/members.vue';
import List from './components/list.vue';
import Tools from './components/tools.vue';
</script>
<style lang="less" module>
.section {
  height: 100vh;
  min-height: 600px;
}
.content {
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 10px;
}
.coverContent {
  max-width: 840px;
  margin: 0 auto;
  padding: 0 20px;
}
.cover {
  background-image: url('@/assets/cover.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.title {
  margin: 0;
  font-size: 72px;
  color: #fff;
  line-height: 80px;
  padding-top: 30%;
}
.intro {
  max-width: 712px;
  color: #fff;
  font-size: 16px;
  margin-top: 15%;
  line-height: 30px;
}

.tools {
  height: auto;
}

.bg1,
.bg2,
.bg3 {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.bg1 {
  background-image: url('@/assets/bg1.jpg');
}
.bg2 {
  background-image: url('@/assets/bg2.jpg');
}
.bg3 {
  background-image: url('@/assets/bg3.jpg');
}

@media screen and (max-width: 900px) {
  .title {
    font-size: 32px;
    line-height: 40px;
    padding-top: 40%;
  }
  .intro {
    font-size: 16px;
    margin-top: 10%;
  }
}
</style>
