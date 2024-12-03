<script setup lang="ts">

</script>

<template>
    <footer class="tools-footer">
        <div class="tools-footer-register">
            <a href="https://beian.miit.gov.cn/" target="_blank">
                闽ICP备2023007345号-3
            </a>
        </div>
        <div class="tools-footer-desc">本项目的所有内容仅供技术学习和代码示例参考，请自觉遵守我国相关法律法规，项目遵循 MIT 协议开源。</div>
    </footer>
</template>

<style scoped lang="scss">
    .tools-footer {
        color: var(--color-surface-4);
        font-size: 12px;
        text-align: center;
        max-width: var(--page-common-width);
        margin: 0 auto;
        margin-bottom: 0.5rem;

        .tools-footer-register {
            display: flex;
            justify-content: center;

            a {
                display: flex;
                align-items: center;
                gap: 3px;
                color: var(--color-text--subtle);
                font-weight: 600;
                text-decoration: none;
                padding: 2px 6px;
                border-radius: 8px;
                transition: 250ms;

                &:hover {
                    background: var(--border-color-base);
                }
            }
        }
    }
</style>