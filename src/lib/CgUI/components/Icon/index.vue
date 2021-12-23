<template>
    <span
        class="cg-icon-container"
        :style="{
            fontSize: size + 'px',
            color: color,
            animation: ifRotate ? 'cg-icon-rotate 2s linear infinite' : 'none'
        }"
    >
        {{ value }}
    </span>
</template>

<script lang='ts'>
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'Cg-Icon',
        props: {
            value: {
                type: String,
                required: true
            },
            size: {
                type: Number,
                default: 20
            },
            color: {
                type: String,
                default: '#303030'
            },
            ifRotate: {
                type: Boolean,
                default: false
            }
        }
    })
</script>

<style scoped>
    @font-face {
        font-family: 'cg-iconfont';  /* Project id 3055382 */
        src:    url('//at.alicdn.com/t/font_3055382_9mkalhexppi.woff2?t=1640258042819') format('woff2'),
                url('//at.alicdn.com/t/font_3055382_9mkalhexppi.woff?t=1640258042819') format('woff'),
                url('//at.alicdn.com/t/font_3055382_9mkalhexppi.ttf?t=1640258042819') format('truetype');
    }

    .cg-icon-container {
        display: inline-block;
        font-family: 'cg-iconfont';
    }

</style>