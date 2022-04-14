<template>
    <div class="bg-box">
        <div class="wrap">
            <el-form :model="form" label-width="120px">
                <el-form-item label="用户名">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password" type="password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm" >Submit</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'login'
}
</script>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { apiLogin } from '@/apis/login'

const router = useRouter()
const form = reactive({
    'name': '',
    'password': '',
})

function submitForm() {
    const params = {
        'account': form.name,
        'password': form.password,
        'platfromLanguageId': 'zh_CN',
        'isRemember': 'y'
    }
    apiLogin(params).then(res => {
        console.log(res.data)
        router.push('/home')
    })
}
</script>

<style scoped>
.bg-box {
    min-width: 1200px;
    min-height: 100vh;
    background: #fff url("/src/assets/logo.png") no-repeat center top;
}
.bg-box .wrap {
    position: relative;
    width: 400px;
    margin: 0 auto;
    padding-top: 200px;
}
</style>
