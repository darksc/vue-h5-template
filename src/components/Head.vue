<template>
  <div class="head-wrap">
    <span>我是头部</span>
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
  @import '../index';
  .head-wrap {
    background: #ff5c4b;
    height: rem(40);
    line-height: rem(40);
    color: #fff;
    text-align: center;
  }
</style>
