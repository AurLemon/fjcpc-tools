<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="tools-view tools-home">
        <div class="tools-home-info">
            <div class="tools-home-info__favicon">
                <img src="../assets/images/icons/favicon.jpg" alt="图标">
            </div>
            <div class="tools-home-info__title">一个小工具</div>
            <div class="tools-home-info__belongs">
                Powered by
                <span class="vue">
                    <img src="../assets/images/icons/Vue_Logo.svg" alt="">
                    Vue.js
                </span>
            </div>
        </div>
        <div class="tools-home-links">
            <div class="tools-home-link">
                <router-link to="/module/lab-test" :exact-active-class="'active'">实验室安全考试</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .tools-home {
        display: flex;
        flex-direction: column;

        .tools-home-info {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;

            .tools-home-info__favicon {
                img {
                    $image-width: 200px;
                    display: block;
                    width: $image-width;
                    height: $image-width;
                    border-radius: 50%;
                    box-shadow: 0 0 96px var(--background-dark-0);
                }
            }

            .tools-home-info__title {
                font-size: 24px;
                font-weight: 600;
                text-align: center;
                margin-top: 0.5rem;
            }

            .tools-home-info__belongs {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                color: var(--color-surface-4);
                font-size: 12px;

                .vue {
                    color: var(--color-text--subtle);
                    font-weight: bold;
                    display: inline-flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 0.125rem;
                    margin: 0 0.25rem;

                    img {
                        $image-width: 16px;
                        display: block;
                        width: $image-width;
                        height: $image-width;
                    }
                }
            }
        }

        .tools-home-links {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 3rem;

            .tools-home-link {
                a {
                    color: var(--color-text--subtle);
                    font-size: 12px;
                    padding: 0.125rem 0.5rem;
                    border: 1px solid var(--border-color-base);
                    border-radius: 8px;
                    transition: 250ms;

                    &:hover {
                        color: var(--color-surface-0);
                        background: var(--color-text--subtle);
                    }
                }
            }
        }
    }
</style>