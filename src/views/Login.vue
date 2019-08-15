<template>
    <a-row>
        <a-col :span="8"></a-col>
        <a-col :span="8">
            <h2>Welcome to Hoahsark</h2>
            <LoginForm class="loginForm"></LoginForm>
        </a-col>
        <a-col :span="8"></a-col>
    </a-row>
</template>
<script>
import LoginForm from '@/components/LoginForm';
export default {
    name:"Login",
    components:{
        LoginForm
    }
}
</script>
<style lang="css" scope>
    
</style>