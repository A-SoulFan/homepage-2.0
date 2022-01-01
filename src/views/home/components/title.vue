<template>
  <h2 :class="$style.title">
    <span :class="$style.inner"><slot /></span>
  </h2>
</template>
<style lang="less" module>
.title {
  margin: 0;
  padding: 100px 10px;
  text-align: center;
  font-size: 48px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: '黑体', sans-serif;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: #1affff;
  &::before,
  &::after {
    content: '';
    width: 232px;
    height: 30px;
    margin: 0 50px;
    background: url('@/assets/arrow.png') no-repeat;
    background-size: cover;
  }
  &::before {
    transform: rotateY(180deg);
  }
}
@media screen and (max-width: 900px) {
  .title {
    padding-top: 80px;
    font-size: 30px;
    padding-bottom: 40px;
    &::before,
    &::after {
      flex: 1;
      height: 20px;
      margin: 0;
    }
    &::before {
      margin-right: 20px;
    }
    &::after {
      margin-left: 20px;
    }
  }
}
</style>
