<template>
    <a-form id="components-form-demo-normal-login" :form="form" @submit="handleSubmit">
        <a-form-item>
            <a-input
                v-decorator="[
          'username',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
                placeholder="Username"
            >
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            </a-input>
        </a-form-item>
        <a-form-item>
            <a-input
                v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
                type="password"
                placeholder="Password"
            >
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
        </a-form-item>
        <a-form-item>
            <a-checkbox
                v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
            >Remember me</a-checkbox>

            <a class="login-form-forgot" href>Forgot password</a>
            <a-button type="primary" html-type="submit" class="login-form-button">Log in</a-button>Or
            <router-link to="/registry">Registry now!</router-link>
        </a-form-item>
    </a-form>
</template>

<script>
import axios from "axios";
export default {
    beforeCreate() {
        this.form = this.$form.createForm(this);
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log("Received values of form: ", values);
                    axios
                        .post("/oauth/authorize", {
                            username: values.username,
                            password: values.password,
                            client_id: "e0e0d239254b187d297a0cca9a30fdde",
                            response_type: "token",
                            state: "test"
                        })
                        .then(result => {
                            if (result.data && result.data.accessToken && result.data.redirectUri) {
                              location.href = redirectUri + '/#access_token=' + result.data.accessToken;
                            }else{
                              console.log('exception');
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }
            });
        }
    }
};
</script>
<style scope>
.login-form-forgot {
    float: right;
}
.login-form-button {
    width: 100%;
}
</style>