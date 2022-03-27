<template>
  <div :class="[$style.HomePage, $style.cover]">
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
</template>
<script lang="ts" setup></script>
<style lang="less" module>
.HomePage {
  height: 100%;
  width: 100%;
  background-image: url('../assets/img/homePage/cover.jpg');
}
</style>
