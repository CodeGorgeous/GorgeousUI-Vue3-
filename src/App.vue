<template>
  <div>
    <Cg-Button
      @click="handleClick"
    >Default</Cg-Button>
    <Cg-Button type="primary">Primary</Cg-Button>
    <Cg-Button type="success">Success</Cg-Button>
    <Cg-Button type="info">Info</Cg-Button>
    <Cg-Button type="warning">Warning</Cg-Button>
    <Cg-Button type="danger">Danger</Cg-Button>
    <Cg-Button type="primary" :radius="15">Primary</Cg-Button>
    <Cg-Button type="success" :radius="15">Success</Cg-Button>
    <Cg-Button type="info" :radius="15">Info</Cg-Button>
    <Cg-Button type="warning" :radius="15">Warning</Cg-Button>
    <Cg-Button type="danger" :radius="15">Danger</Cg-Button>
  </div>
</template>

<script lang='ts'>
  import { defineComponent, reactive, toRefs, ref, watchEffect } from 'vue'

  export default defineComponent({
    components: {},
    setup (props, context) {
      const handleClick = () => {
        console.log('点击');
      }
      return {
        handleClick
      }
    }
  })
</script>

<style scoped>

</style>