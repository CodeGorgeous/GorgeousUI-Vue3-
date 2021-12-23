<template>
    <button
        :class="{
            'cg-button-container': true,
            [`cg-button-${type}`]: true
        }"
        :style="{
            color: type === 'default' ? `var(--cg-${type}-color)` : 'var(--cg-color-white)',
            borderColor: `var(--cg-${type}-color)`,
            background: `var(--cg-${type}-background)`,
            borderRadius: radius + 'px'
        }"
    >
        <slot />
    </button>
</template>

<script lang='ts'>
    import { defineComponent, PropType, ref } from 'vue'

    export default defineComponent({
        name: 'Cg-Button',
        props: {
            type: {
                type: String as PropType<'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'>,
                default: 'default'
            },
            radius: {
                type: Number,
                default: 5
            }
        }
    })
</script>

<style scoped>
.cg-button-container {
    padding: 15px 20px;
    font-size: 16px;
    cursor: pointer;
    display: inline-block;
    border: 1px solid;
    margin: 5px;
    transition: all 0.2s ease-in-out;
    background: none;
}

/* hover and active */
.cg-button-default:hover,
.cg-button-default:active {
    color: var(--cg-hover-default-color)!important;
    border-color: var(--cg-hover-default-background)!important;
    background: var(--cg-hover-default-background)!important;
}
.cg-button-primary:hover,
.cg-button-primary:active {
    border-color: var(--cg-hover-primary-background)!important;
    background: var(--cg-hover-primary-background)!important;
}
.cg-button-success:hover,
.cg-button-success:active {
    border-color: var(--cg-hover-success-background)!important;
    background: var(--cg-hover-success-background)!important;
}
.cg-button-info:hover,
.cg-button-info:active {
    border-color: var(--cg-hover-info-background)!important;
    background: var(--cg-hover-info-background)!important;
}
.cg-button-warning:hover,
.cg-button-warning:active {
    border-color: var(--cg-hover-warning-background)!important;
    background: var(--cg-hover-warning-background)!important;
}
.cg-button-danger:hover,
.cg-button-danger:active {
    border-color: var(--cg-hover-danger-background)!important;
    background: var(--cg-hover-danger-background)!important;
}

</style>