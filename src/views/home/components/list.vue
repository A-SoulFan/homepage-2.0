<template>
  <div :class="$style.tabs">
    <Button
      v-for="tab in tabs"
      :key="tab.key"
      underline
      :bg="tab.key.toUpperCase()"
      :ghost="tab.key !== activeTab"
      @click="setShowList(tab.key)"
    >
      <span>{{ tab.name }}</span>
      <img src="@/assets/play.png" />
    </Button>
  </div>
  <div>
    <swiper
      :navigation="true"
      :class="$style.swiper"
      :slides-per-view="3"
      :space-between="30"
      :lazy="true"
      :centered-slides="true"
      :effect="'coverflow'"
      @swiper="setControlledSwiper"
      @active-index-change="clickSwiper"
    >
      <swiper-slide
        v-for="item in showList"
        :key="item.title"
        :class="$style['swiper-slide']"
        @click="toTargetUrl(item.videoUrl)"
      >
        <img :data-src="item.img" class="swiper-lazy" />
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        <div :class="$style.title">
          {{ item.title }}
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script lang="ts" setup>
import Button from '@/components/button.vue';
import { ref, reactive, onBeforeMount, nextTick } from 'vue';
import {
  getSliceList,
  getCreateList,
  create,
  slice,
} from '@/services/popularContent';

import { Swiper, SwiperSlide } from 'swiper/vue';

import SwiperType from 'swiper/types/swiper-class';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/lazy';

import SwiperCore, { Navigation, EffectCoverflow, Lazy } from 'swiper';
SwiperCore.use([Navigation, EffectCoverflow, Lazy]);

export interface showList {
  title: string;
  view: string;
  img: string;
  videoUrl: string;
}
const refSwiper = ref<SwiperType>();

const setControlledSwiper = (swiper: any) => {
  refSwiper.value = swiper;
};

const activeTab = ref('fragment');
const tabs = [
  { key: 'fragment', name: '切片' },
  { key: 'fanmade', name: '二创' },
];

const showList = ref<showList[]>([]);
const activeIndex = ref(1);
const clickSwiper = (event: any) => {
  activeIndex.value = event.activeIndex;
};
const SliceList = ref<slice[]>([]);
const initSliceList = async () => {
  SliceList.value = await getSliceList();
};

const fanMadeList = ref<create[]>([]);
const initCreateList = async () => {
  fanMadeList.value = await getCreateList();
};

const setShowList = async (key: string) => {
  activeTab.value = key;
  refSwiper.value?.slideTo(1);
  activeIndex.value = 1;
  // activeTab.value = tab.key;
  if (activeTab.value === 'fragment') {
    showList.value = SliceList.value.map(item => ({
      title: item.title,
      view: item.play_val,
      img: item.image_url,
      videoUrl: item.url,
    }));
  } else if (activeTab.value === 'fanmade') {
    showList.value = fanMadeList.value.map(item => ({
      title: item.title,
      view: item.stat_view.toString(),
      img: item.pic,
      videoUrl: `https://www.bilibili.com/video/${item.bvid}`,
    }));
  }
  await nextTick();
  refSwiper.value?.lazy.load();
};

const toTargetUrl = (url: string) => {
  window.open(url);
};
onBeforeMount(async () => {
  await initSliceList();
  await initCreateList();
  setShowList('fragment');
});
</script>
<style lang="less" module>
.tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  :global(.asf-button) {
    width: 150px;
    img {
      margin-right: 2px;
    }
    &:global(.asf-button__ghost) {
      justify-content: center;
      opacity: 0.87;
      img {
        display: none;
      }
    }
    &:not(:last-child) {
      margin-right: 100px;
    }
  }
}
.swiper {
  width: 100%;
  height: 300px;
  margin: 40px auto;
  transform: scale3d(0px, 0px 500px);
  .swiper-slide {
    width: 450px;
    height: 300px;
    position: relative;
    // background: url('../../assets/images/recommend/test.png') no-repeat;
    background-size: cover;
    color: #fff;
    font-size: 16px;
    z-index: 99;
    cursor: pointer;
    // cursor: url('../../assets/images/recommend/cursor.png'), pointer;
    // &::before {
    //   content: '';
    //   position: absolute;
    //   left: 0;
    //   right: 0;
    //   top: 0;
    //   bottom: 0;
    //   background-color: rgba(0, 0, 0, 0.5);
    //   transition: all 0.3s;
    // }
    // &:hover::before {
    //   background-color: rgba(0, 0, 0, 0);
    // }
    .txt {
      position: absolute;
      top: 188px;
      left: 20px;
      line-height: 24px;
    }
    img {
      width: 100%;
      // height: 100%;
      height: auto;
    }
    .date {
      position: absolute;
      left: 20px;
      bottom: 20px;
    }
  }
}
.title {
  text-align: center;
  top: 188px;
  left: 20px;
  line-height: 24px;
  font-size: 20px;
  color: #f1f2f3;
}
</style>
