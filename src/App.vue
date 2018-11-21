<template>
  <div class="main-wrap">
    <Head></Head>
    <ul>
      <li v-for="item in 100">中间内容</li>
    </ul>
    <Foot></Foot>
  </div>
</template>
<script>

  import Head from './components/Head';
  import Foot from './components/Foot';
  import mixins from './mixins';

  import { getQueryParameters } from './libs/utils';

  const queryObj = getQueryParameters();

  export default {
    mixins: [mixins],
    data () {
      return {};
    },
    computed: {},
    mounted () {
    },
    methods: {},
    components: {
      Head,
      Foot
    }
  };
</script>
<style lang="scss">
  @import "./index";
  body, html {
    width: 100%;
    height: 100%;
    font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro", "PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background: rgba(0, 0, 0, 0);
    user-select: none;
    overflow: hidden;
    font-size: $fontSize;
  }

  body, html, div, ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  body {
    padding-top: env(safe-area-inset-top);
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
    padding-bottom: env(safe-area-inset-bottom);
  }

  h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
  }

  div {
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  .main-wrap {
    font-size: rem(16);
    height: 100%;
    overflow: auto;
  }

</style>
