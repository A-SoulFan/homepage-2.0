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
      :class="$style.swiper"
      :slides-per-view="ViewResize.perView"
      :space-between="30"
      :lazy="true"
      :centered-slides="true"
      :effect="'creative'"
      :pagination="true"
      :creative-effect="{
        prev: {
          shadow: true,
          translate: ['-100%', 0, '80px'],
          rotate: [0, 20, 0],
          origin: 'center center',
          scale: 0.95,
        },
        next: {
          translate: ['100%', 0, '80px'],
          rotate: [0, -20, 0],
          origin: 'center center ',
          scale: 0.95,
        },
        limitProgress: 3,
        progressMultiplier: 1,
      }"
      @swiper="setControlledSwiper"
      @active-index-change="clickSwiper"
    >
      <swiper-slide
        v-for="item in showList"
        :key="item.title"
        :class="$style['swiper-slide']"
        @click="toTargetUrl(item.videoUrl)"
      >
        <div :class="$style.swiperItemBox">
          <img :data-src="item.img" class="swiper-lazy" />
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
      </swiper-slide>
    </swiper>
    <div :class="$style.swiperBottom">
      <div :class="$style.circular" @click="changeSwiperIndex('left')">
        <img
          style="transform: rotate(180deg)"
          src="../../../assets/list/arrow.svg"
        />
      </div>
      <div :class="$style.title">
        {{ showList[activeIndex]?.title }}
      </div>
      <div :class="$style.circular" @click="changeSwiperIndex('right')">
        <img src="../../../assets/list/arrow.svg" />
      </div>
    </div>
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
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/lazy';

import SwiperCore, { Navigation, EffectCreative, Lazy } from 'swiper';
SwiperCore.use([Navigation, EffectCreative, Lazy]);

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
const activeIndex = ref(2);
const clickSwiper = (event: any) => {
  activeIndex.value = event.activeIndex;
};
const changeSwiperIndex = (type: string) => {
  if (type === 'left' && activeIndex.value > 0) {
    activeIndex.value--;
  } else if (
    type === 'right' &&
    activeIndex.value < showList.value.length - 1
  ) {
    activeIndex.value++;
  }
  refSwiper.value?.slideTo(activeIndex.value);
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

  // activeTab.value = tab.key;
  if (activeTab.value === 'fragment') {
    showList.value = SliceList.value.map(item => ({
      title: item.title,
      view: item.play_val,
      img: item.image_url.replace('http://', 'https://'),
      videoUrl: item.url,
    }));
  } else if (activeTab.value === 'fanmade') {
    showList.value = fanMadeList.value.map(item => ({
      title: item.title,
      view: item.stat_view.toString(),
      img: item.pic.replace('http://', 'https://'),
      videoUrl: `https://www.bilibili.com/video/${item.bvid}`,
    }));
  }
  await nextTick();
  refSwiper.value?.slideTo(ViewResize.slideToNum);
  activeIndex.value = ViewResize.slideToNum;
  refSwiper.value?.lazy.load();
};

const toTargetUrl = (url: string) => {
  window.open(url);
};
const ViewResize = reactive({
  perView: 5,
  slideToNum: 2,
  size: 1000,
});

const setPerView = () => {
  if (document.body.clientWidth > 900) {
    ViewResize.perView = 5;
    ViewResize.slideToNum = 2;
    if (ViewResize.size !== 1000) {
      ViewResize.size = 1000;
      setShowList(activeTab.value);
    }
  } else if (
    document.body.clientWidth < 900 &&
    document.body.clientWidth > 768
  ) {
    ViewResize.perView = 3;
    ViewResize.slideToNum = 1;
    if (ViewResize.size !== 900) {
      ViewResize.size = 900;
      setShowList(activeTab.value);
    }
  } else {
    ViewResize.perView = 2;
    ViewResize.slideToNum = 1;
    if (ViewResize.size !== 768) {
      ViewResize.size = 768;
      setShowList(activeTab.value);
    }
  }
};

onBeforeMount(async () => {
  await initSliceList();
  await initCreateList();
  setPerView();
  window.addEventListener('resize', setPerView);
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
  height: 200px;
  margin: 60px auto 0;
  .swiper-slide {
    width: 300px;
    // height: 80%;
    position: relative;
    background-size: cover;
    color: #fff;
    font-size: 16px;
    z-index: 99;
    cursor: pointer;

    .txt {
      position: absolute;
      top: 188px;
      left: 20px;
      line-height: 24px;
    }
    .swiperItemBox {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      transition: all 0.3s;
    }
    .swiperItemBox:hover {
      transform: scale(0.85);
    }
    img {
      width: 100%;
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
  font-size: 12px;
  color: #f1f2f3;
}
.swiperBottom {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
  height: calc(100vh - 605px);
  min-height: 50px;
  color: #fff;
  .title {
    margin: 0 20px;
    width: 70%;
    max-width: 400px;
    font-size: 18px;
  }
  .circular {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 1px #999 solid;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
  .circular:hover {
    transform: scale(1.05);
  }
}
@media screen and (max-width: 900px) {
  .swiper {
    height: 150px;
    margin-top: 20px;
  }
  .swiperBottom {
    .title {
      font-size: 13px;
    }
  }
}
</style>
