<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

// 用户填写的表单数据
const xsid = ref("");
const xsmc = ref("");
const cj = ref(0);

// 请求体的返回数据
const result = ref("");
const errorMessage = ref("");

// 发送第一个请求，添加成绩信息
const addLabTestInfo = async () => {
    if (!xsid.value || !xsmc.value || cj.value <= 0) {
        errorMessage.value = "请填写学号、姓名和成绩";
        return;
    }

    const requestBody = {
        ifpass: 2,
        xsid: xsid.value,
        xsmc: xsmc.value,
        cj: cj.value,
    };

    try {
        const response = await axios.post(
            "https://appzb.fjcpc.edu.cn/kszx-api/kszx-back/labTmgl/addLabTestInfo",
            requestBody
        );
        if (response.data.result === 1 && response.data.status === "success") {
            result.value = "操作成功, 正在获取成绩...";
            // 成功后获取成绩
            await getLabTestResult(xsid.value);
        } else {
            errorMessage.value = "请求失败，操作没有成功。";
        }
    } catch (error) {
        errorMessage.value = "请求失败，请稍后重试。";
    }
};

// 发送第二个请求，获取成绩验证
const getLabTestResult = async (xsid: string) => {
    try {
        const response = await axios.post(
            "https://appzb.fjcpc.edu.cn/kszx-api/kszx-back/labTmgl/getLabTestResult",
            { xsid }
        );

        if (response.data.result === 1 && response.data.status === "success") {
            const data = response.data.data;
            if (data.xsid === xsid && data.cj === cj.value) {
                result.value = "成绩更新成功：" + data.cj;
            } else {
                result.value = "成绩验证失败，请检查。";
            }
        } else {
            errorMessage.value = "成绩获取失败，请稍后重试。";
        }
    } catch (error) {
        errorMessage.value = "获取成绩请求失败，请稍后重试。";
    }
};
</script>

<template>
    <div class="tools-modules tools-features tools-lab-test">
        <h3>实验室安全考试</h3>
        <div>
            <label for="xsid">学号</label>
            <input type="text" v-model="xsid" id="xsid" placeholder="请输入学号（9位）" />
        </div>
        <div>
            <label for="xsmc">姓名</label>
            <input type="text" v-model="xsmc" id="xsmc" placeholder="请输入姓名" />
        </div>
        <div>
            <label for="cj">成绩</label>
            <input type="number" v-model="cj" id="cj" placeholder="请输入成绩" />
        </div>
        <div class="sumbit">
            <button @click="addLabTestInfo">提交</button>
        </div>
        <div v-if="errorMessage" class="error-message">
            <p>{{ errorMessage }}</p>
        </div>
        <div v-if="result">
            <p>{{ result }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .tools-lab-test {
        display: flex;
        flex-direction: column;
        gap: 16px;
        max-width: 400px;
        margin: 0 auto;
        padding: 16px;
        background-color: #f9f9f9;
        border-radius: 8px;

        label {
            font-weight: bold;
        }

        input {
            padding: 8px;
            margin-top: 4px;
            border: 1px solid #ccc;
            border-radius: 4px;
            width: 100%;
        }

        button {
            padding: 10px 15px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 16px;

            &:hover {
                background-color: #0056b3;
            }
        }

        .error-message {
            color: red;
            font-size: 14px;
            margin-top: 16px;
        }

        p {
            font-size: 16px;
            margin-top: 16px;
        }

        h3 {
            text-align: center;
        }

        .sumbit {
            display: flex;
            justify-content: center;
        }
    }
</style>
