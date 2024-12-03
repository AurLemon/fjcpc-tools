<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <header class="tools-header">
        <div class="tools-header-wrapper">
            <div class="tools-header-title">FJCPC Tools</div>
            <div class="tools-header-info">
                <div class="tools-header-info__link">
                    <a href="https://github.com/AurLemon/fjcpc-tools" target="_blank">
                        <img src="../assets/images/icons/GitHub_Logo.svg" alt="项目 GitHub 仓库地址">
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
    .tools-header {
        width: 100%;
        margin-bottom: 1rem;
        border-bottom: 1px solid var(--border-color-base);

        .tools-header-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            max-width: var(--page-common-width);
            margin: 0 auto;
            padding: 10px;

            .tools-header-title {
                font-size: 20px;
                font-weight: 600;
            }

            .tools-header-info {
                .tools-header-info__link {
                    padding: 4px;
                    border-radius: 50%;
                    transition: 250ms;

                    img {
                        $image-width: 24px;
                        display: block;
                        width: $image-width;
                        height: $image-width;
                    }

                    &:hover {
                        background: var(--border-color-base);
                    }
                }
            }
        }
    }
</style>