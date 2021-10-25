<template>
  <div class="login-container">
    <el-form
        ref="loginForm"
        :model="loginFormModel"
        :rules="loginRules"
        class="login-form"
        auto-complete="on"
        label-position="left"
    >
      <div class="title-container">
        <h3 class="title">
          用户登录
        </h3>
      </div>

      <el-form-item
        prop="username"
      >
        <span class="svg-container">
          <i class="sub-el-icon el-icon-user"></i>
        </span>
        <el-input
            ref="username"
            v-model="loginFormModel.username"
            placeholder="Username"
            type="text"
            tabindex="1"
            auto-complete="on"
        />
      </el-form-item>
      <el-form-item
          prop="password"
      >
        <span class="svg-container">
          <i class="sub-el-icon el-icon-lock"></i>
        </span>
        <el-input
            :key="passwordType"
            ref="password"
            v-model="loginFormModel.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            auto-complete="on"
            @key.enter="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <i
              class="sub-el-icon"
              :class="passwordType==='password' ? 'el-icon-more' : 'el-icon-more-outline'"
          ></i>
        </span>
      </el-form-item>

      <el-button
          :loading="loading"
          type="primary"
          style="width: 100%;margin-bottom:30px;"
          @click.prevent="handleLogin"
      >
        登录

      </el-button>


    </el-form>

  </div>
</template>

<script>
import { ref, reactive, toRefs, nextTick, unref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
  name: "Login",
  setup() {
    // 表单和密码引用
    const loginForm = ref(null);
    const password = ref(null);
    // 数据表单和验证规则
    const formState = reactive({
      loginFormModel: {
        username: "",
        password: "",
      },
      loginRules: {
        username: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入用户名'
          },
        ],
        password: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入密码'
          },
        ]
      }
    });
    // 隐藏、显示密码
    const { passwordType, showPwd } = usePasswordType(password);

    // 处理重定向
    const redirect = ref("");
    const route = useRoute();
    watchEffect( () => {
      // 下面这句话什么意思？
      redirect.value = route.query && route.query.redirect;
    })

    // 登录接口
    const { loading, login: handleLogin} = useLogin(
        loginForm,
        formState.loginFormModel,
        redirect,
    )
    return {
      ...toRefs(formState),
      passwordType,
      showPwd,
      loginForm,
      password,
      loading,
      handleLogin,
    }
  }
};

function usePasswordType(password) {
  // 默认输入框是password
  const passwordType = ref("password");

  function showPwd() {
    if (passwordType.value === 'password') {
      passwordType.value = '';
    } else {
      passwordType.value = 'password';
    }
    nextTick( () => {
      // 是什么意思？
      // unref(password)取到password指向的值
      // focus方法是什么意思？
      // 使用ref属性获取表单元素
      unref(password).focus();
    });
  }
  return { passwordType, showPwd };
}

function useLogin(form, model, redirect) {
  const loading = ref(false);
  const store = useStore();
  const router = useRouter();
  // 提供给外界登录的方法
  const login = () => {
    // 校验
    // 进行form表单的验证
    // unref获取ref对象或者普通对象的值
    // 表单的验证
    unref(form).validate( valid => {
      console.log(valid);
      console.log(model);
      if (valid) {
        loading.value = true;
        // 发送登录请求
        store
        .dispatch("user/login", model)
        .then( () => {
          // 登录成功，用户跳转
          router.push({ path: unref(redirect) || "/"});
          loading.value = false;
        })
        .catch( () => {
          loading.value = false;
        });
      } else {
        console.log("error submit!!");
      }
    });
  };
  return { loading, login}
}
</script>

<style lang="scss">
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

//reset element-ui css
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0;
      -webkit-appearance: none;
      border-radius: 0;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
}

.el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #454545;
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0 auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>