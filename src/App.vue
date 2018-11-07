<template>
  <div class="main-wrap">
    <Hello></Hello>
  </div>
</template>
<script>

  import Hello from './components/Hello';
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
      Hello
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
    font-size: toREM(10);
  }

</style>
