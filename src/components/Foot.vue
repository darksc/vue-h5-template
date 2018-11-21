<template>
  <div class="foot-wrap">
    <span>我是尾部</span>
  </div>
</template>
<script>
  import mixins from '../mixins';

  export default {
    mixins: [mixins],
    props: {},
    computed: {},
    data () {
      return {};
    },
    mounted () {
    },
    methods: {}
  };
</script>
<style lang="scss">
  @import "../index";
  .foot-wrap {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #ff5c4b;
    height: rem(40);
    line-height: rem(40);
    color: #fff;
    text-align: center;
    padding-bottom: env(safe-area-inset-bottom);
  }
</style>
