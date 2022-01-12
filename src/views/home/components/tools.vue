<template>
  <div :class="$style.tools">
    <Tool>
      <template #header>方言词典</template>
      <input
        v-model="model.dict"
        placeholder="想到什么词就搜搜看..."
        type="search"
        @keydown.enter="handleSearchDict"
      />
      <img
        :class="$style.search"
        src="@/assets/search.png"
        @click="handleSearchDict"
      />
      <div :class="$style.result"></div>
      <template #footer>
        <a target="_blank" href="https://tools.asoulfan.com/zhijiangDict">
          <img src="@/assets/link.png" />
          <span>查看更多</span>
        </a>
      </template>
    </Tool>
    <Tool>
      <template #header>成分姬</template>
      <input
        v-model="model.uploader"
        placeholder="B站up主或用户名"
        type="search"
        @keydown.enter="handleSearchUploaders"
      />
      <img
        :class="$style.search"
        src="@/assets/search.png"
        @click="handleSearchUploaders"
      />
      <div :class="$style.result"></div>
      <template #footer>
        <a target="_blank" href="https://tools.asoulfan.com/ingredientChecking">
          <img src="@/assets/link.png" />
          <span>查看更多</span>
        </a>
      </template>
    </Tool>
    <Tool>
      <template #header>枝网查重</template>
      <textarea
        v-model="model.article"
        placeholder="输入文章内容"
        type="search"
        rows="6"
        @keyup.enter="handleCNKICheck"
      />
      <template #footer>
        <Button @click="handleCNKICheck">查询结果</Button>
        <a target="_blank" href="https://tools.asoulfan.com/duplicateChecking">
          <img src="@/assets/link.png" />
          <span>查看更多</span>
        </a>
      </template>
      <template #extra>
        <div :class="$style.extra">
          <Button
            underline
            tag="a"
            target="_blank"
            href="https://tools.asoulfan.com/emojicollect"
            bg="EMOJI"
          >
            <template #icon>
              <img src="@/assets/face.png" />
            </template>
            表情包</Button
          >
          <Button
            underline
            tag="a"
            target="_blank"
            href="https://tools.asoulfan.com/randomVideo"
            bg="RANDOM"
            >今天溜什么
          </Button>
        </div>
      </template>
    </Tool>
  </div>
</template>
<script lang="tsx" setup>
import { FunctionalComponent, reactive, ref, useCssModule } from 'vue';
import { useToast } from 'vue-toastification';
import Button from '@/components/button.vue';

const $style = useCssModule();

const Tool: FunctionalComponent = (_, { slots }) => (
  <div class={$style.tool}>
    <div class={$style.toolInner}>
      {slots.header && <h3 class={$style.header}>{slots.header()}</h3>}
      {slots.default?.()}
      {slots.footer && <div class={$style.footer}>{slots.footer()}</div>}
    </div>
    {slots.extra && slots.extra()}
  </div>
);

const model = reactive({
  dict: '',
  uploader: '',
  article: '',
});

const handleSearchDict = async () => {
  const url = import.meta.env.VITE_WEBSITE_TOOL_DICT as string;
  debugger;
  window.open(`${url}?search=${encodeURIComponent(model.dict)}`);
};

const handleSearchUploaders = () => {
  const url = import.meta.env.VITE_WEBSITE_TOOL_INGREDIENT as string;
  window.open(`${url}?search=${encodeURIComponent(model.uploader)}`);
};

const toast = useToast();
const handleCNKICheck = async () => {
  if (model.article.length <= 10) {
    toast.error('查重至少十个字哦');
  }
  const url = import.meta.env.VITE_WEBSITE_TOOL_DUPLICATE as string;
  window.open(`${url}?search=${encodeURIComponent(model.article)}`);
};
</script>
<style lang="less" module>
.tools {
  display: flex;
  padding-bottom: 100px;
  margin: 0 -15px;
}
.tool {
  flex: 1;
  margin: 0 15px;
  height: 412px;
}
.toolInner {
  position: relative;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  color: #fff;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 4px;
    background: linear-gradient(-90deg, #a967d5, #da5b8b);
  }
  input,
  textarea {
    display: block;
    width: 100%;
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    border: none;
    line-height: 30px;
    color: #fff;
    &::placeholder {
      color: #fff;
    }
    &:focus {
      outline: none;
    }
  }
  input {
    border-radius: 25px;
    padding-right: 45px;
  }
  textarea {
    border-radius: 5px;
  }
  &:only-child {
    height: 100%;
  }
}

.search {
  align-self: flex-end;
  margin-top: -36px;
  margin-right: 20px;
  cursor: pointer;
}

.header {
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: 20px;
  line-height: 22px;
  &::before {
    content: '';
    background: url('@/assets/book.png');
    display: block;
    width: 27px;
    height: 19px;
    margin-right: 10px;
  }
}

.result {
  flex: 1;
  padding: 0 20px;
  overflow: hidden;
  overflow-y: auto;
  word-break: break-all;
  margin-top: 40px;
  h4 {
    font-size: 16px;
    margin: 0 0 16px;
    font-weight: bold;
    border-left: 2px solid currentColor;
    padding-left: 10px;
    font-family: '黑体', sans-serif;
  }
  p {
    line-height: 24px;
    margin: 0 0 16px;
  }
}

.footer {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-top: 20px;
  > a {
    display: flex;
    align-items: center;
    > img {
      margin-right: 10px;
    }
  }
}

.extra {
  display: flex;
  align-items: center;
  margin-top: 20px;
  :global(.asf-button) {
    margin-right: 10px;
  }
}

@media screen and (max-width: 900px) {
  .tools {
    display: block;
    margin: 0;
    padding-bottom: 20px;
  }
  .tool {
    margin: 0 0 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
