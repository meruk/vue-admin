<template>
  <div class="full_container">
    <div class="container">
      <div class="center verticle_center full_height">
        <div class="login_section">
          <div class="logo_login">
            <div class="center">
              <img width="210" src="../assets/images/logo/logo.png" alt="#" />
            </div>
          </div>
          <div class="login_form">
            <form>
              <fieldset>
                <div class="field">
                  <label class="label_field">Email Address</label>
                  <input type="email" name="email" placeholder="E-mail" ref="email" :value="email" @keyup="keyupEmail"/>
                  <div v-if="!isOver3CharacterEmail">
                    <span>
                      아이디는 3글자 이상 입력하세요.
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label class="label_field">Password</label>
                  <input type="password" name="password" placeholder="Password" ref="password" :value="password" @keyup="keyUpPassword" />
                </div>
                <div class="field">
                  <label class="label_field hidden">hidden label</label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" :checked="isRememberMe" @change="toggleRememberMe">
                    Remember Me</label>
                  <a class="forgot" href="">Forgotten Password?</a>
                </div>
                <div class="field margin_0">
                  <label class="label_field hidden">hidden label</label>
                  <button class="main_bt" @click.prevent="doLogin">Sing In</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div></template>
<script>
import { STORAGE_KEY_AUTH_TOKEN, STORAGE_KEY_EMAIL, STORAGE_KEY_REMEMBER_ME } from "@/js/constants.storage";
import { localStorageUtil } from "@/js/storage.utils";
import { postLogin } from "@/js/api";

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      isOver3CharacterEmail: false,
      isRememberMe: false
    };
  },
  methods: {
    async doLogin() {
      console.log(this.email)
      console.log(this.password)
      try {
        const { status, data } = await postLogin(this.email, this.password)
        if(status === 200) {
          //isRemember에 따라 아이디 저장 여부
          //토큰저장
          if(this.isRememberMe) {
            localStorageUtil.set(STORAGE_KEY_EMAIL, this.email)
          }
          localStorageUtil.set(STORAGE_KEY_AUTH_TOKEN, data.token)
          this.$router.replace({name: 'Home'})
        }
      }catch(error) {

      }
    },
    keyupEmail(e) {
      this.email = e.target.value
    },
    keyUpPassword(e) {
      this.password = e.target.value
    },
    toggleRememberMe() {
      this.isRememberMe = !this.isRememberMe
      localStorageUtil.set(STORAGE_KEY_REMEMBER_ME, this.isRememberMe)
    }
  },
  created() {
    const isRememberMe = localStorageUtil.get(STORAGE_KEY_REMEMBER_ME) || 'false'
    this.isRememberMe = 'true' === isRememberMe.toLowerCase()
  },
  watch: {
    email (newValue) {
      this.isOver3CharacterEmail = (newValue || '').length > 2
    }
  }
};
</script>
