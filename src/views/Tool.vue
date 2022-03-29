<template>
  <div>
    <Title :class="$style.title">常用工具</Title>
    <div :class="$style.Tool">
      <div :class="$style.toolBox">
        <div v-for="item in toolList" :key="item.id" :class="$style.toolItem">
          <h3>
            <img src="../assets/img/tool/book.png" alt="标题" />
            {{ item.title }}
          </h3>
          <input :placeholder="item.placeholder" type="text" />
          <a :href="item.url">
            <img src="../assets/img/tool/link.png" alt="查看更多" />
            查看更多
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Title from '@/components/Title.vue';

const toolList = [
  {
    id: 'dict',
    title: '方言词典',
    placeholder: '想到什么词就搜搜看...',
    url: 'https://tools.asoulfan.com/zhijiangDict',
  },
  {
    id: 'part',
    title: '成分姬',
    placeholder: 'B站UID或用户名',
    url: 'https://tools.asoulfan.com/ingredientChecking',
  },
];
</script>
<style lang="less" module>
.Tool {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  height: 100%;
  width: 100%;
  background: url('../assets/img/tool/bg.jpg') no-repeat center / cover;
  object-fit: cover;
}
.title {
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
}

.toolBox {
  display: flex;
  margin-top: 106px;
  // width: 1279px;
  height: 439px;
  // border: 1px solid white;
  .toolItem {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 405px;
    height: 439px;
    margin-right: 30px;
    padding: 25px 21px;
    background: rgba(255, 255, 255, 0.1);
    &::before {
      content: '';
      position: absolute;
      z-index: 10;
      left: 0;
      right: 0;
      top: 0;
      height: 4px;
      background: linear-gradient(-90deg, #a967d5, #da5b8b);
    }
    h3 {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      // padding: 26px 21px 0 0;
      margin: 0;
      font-size: 17px;
      color: #fff;
      opacity: 1;
      img {
        width: 29px;
        height: 20px;
        // background-color: #fff;
        color: #fff;
        margin-right: 11px;
      }
    }
    input {
      width: 363px;
      height: 53px;
      margin-top: 21px;
      font-size: 16px;
      padding: 10px 20px;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 27px;
      border: none;
      line-height: 30px;
      color: #fff;
      &::placeholder {
        font-size: 17px;
        color: #fff;
      }
    }
    a {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      margin-top: 272px;
      color: #fff;
      font-size: 17px;
      cursor: pointer;
      img {
        width: 25px;
        height: 25px;
        margin-right: 10px;
      }
    }
  }
}
</style>
