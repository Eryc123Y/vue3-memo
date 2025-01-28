<script setup lang="ts">
import { ref } from "vue";
const is_login = ref(true); // true: login, false: register
const loading = ref(false);  // loading status
// form data
const form = ref({
  username: "",
  phoneNumber: "",
  password: "",
})

import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import {userStore} from "@/stores/user";
const store = userStore();
const router = useRouter();

/**
 * Interaction after submitting the form
 */
const submitForm = async () => {
  let {value: user} = form;
  // check if the phone number and password are empty
  if (!user.phoneNumber || !user.password) {
    return ElMessage({
      type: "warning",
      message: "Phone number and password are required"
    })
  }
  // check if the phone number is valid
  if (!/^1[3456789]\d{9}$/.test(user.phoneNumber)) {
    return ElMessage({
      type: "warning",
      message: "Please enter a valid phone number"
    })
  }
  // check if username is empty
  if (!is_login.value && !user.username) {
    return ElMessage({
      type: "warning",
      message: "Username is required"
    })
  }

}

</script>

<template>
  <div class="login-page">
    <el-form class="login-form">
      <h2 class="title">{{is_login ? "Login" : "Register"}}</h2>
      <el-form-item v-if="!is_login">
        <el-input v-model="form.username" placeholder="Username" size="large"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.phoneNumber" placeholder="Phone Number" size="large"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" placeholder="Password" size="large"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn" @click="submitForm">{{is_login ? "Login" : "Register"}}</el-button>
        <div class="text-row">
          <span class="text-wrap" @click="is_login = !is_login">
            <span>{{
              is_login ? "No account yet? Register now" : "Already have an account? Login now"
            }}</span>
          </span>
        </div>
    </el-form-item>
    </el-form>

  </div>
</template>

<style lang="less">
.login-form {
  justify-content: center;
  align-items: center;
  width: 360px;
  background: #fff;
  padding: 30px 50px 10px 50px;
  border-radius: 7px;
  margin: 20px auto;
  box-shadow: var(--el-box-shadow);
  .title {
    text-align: center;
    margin-bottom: 18px;
  }
  .login-btn {
    margin-top: 14px;
    width: 100%;
  }
  .text-row {
    text-align: right;
    width: 100%;
    padding-top: 5px;
    .text-wrap {
      display: inline-flex;
      cursor: pointer;
      align-items: center;
    }
  }
}
</style>
