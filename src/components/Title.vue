<template>
  <h2 :class="$style.title">
    <span :class="$style.inner">
      <slot />
    </span>
  </h2>
</template>
<style lang="less" module>
.title {
  margin: 0;
  padding: 100px 10px 0px;
  text-align: center;
  font-size: 48px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "黑体", sans-serif;
  font-weight: bold;
  animation: fadeInDown ease-in-out 0.5s;
  &::before,
  &::after {
    content: "";
    width: 232px;
    height: 30px;
    margin: 0 50px;
    background: url("@/assets/img/arrow.png") no-repeat;
    background-size: cover;
  }
  &::before {
    animation: leftArrow 3s ease-in-out infinite;
  }
  &::after {
    animation: rightArrow 3s ease-in-out infinite;
  }
}
.inner {
  animation: innerText 3s ease-in-out infinite;
  text-decoration: underline;
  text-decoration-color: #1affff;
  // text-shadow: -2px 1px 2px #eb55eb;
}
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translate3d(-50%, -100%, 0);
  }

  100% {
    opacity: 1;
    transform: translate3d(-50%, 0, 0);
  }
}

@keyframes leftArrow {
  0% {
    transform: rotateY(180deg) translateX(0px);
  }
  50% {
    transform: rotateY(180deg) translateX(-5px);
  }
  100% {
    transform: rotateY(180deg) translateX(0px);
  }
}

@keyframes rightArrow {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes innerText {
  0% {
    text-shadow: -2px 1px 8px #eb55eb;
  }
  50% {
    text-shadow: -2px 1px 2px #eb55eb;
  }
  100% {
    text-shadow: -2px 1px 8px #eb55eb;
  }
}
</style>
