import { defineStore } from 'pinia';
// TODO 註冊 和 更新 還沒做
export const useUserStore = defineStore('user', () => {
  const userInfo = ref({});
  const isLogin = ref(false);

  const signup = async () => {
    const data = await $fetch('/api/v1/user/signup');
    console.log(data);

    // newsList.value = data.result;
  };

  const login = async (body) => {
    try {
      const res = await $fetch('/api/v1/user/login', {
        method: 'POST',
        body,
      });

      userInfo.value = res.result;
      const token = useCookie('token');
      token.value = res.token;

      const swal = await useSwal({
        title: '登入成功',
        showConfirmButton: false,
        timer: 3000,
      });
      if (swal.isDismissed) {
        isLogin.value = true;
      }
    } catch (error) {
      isLogin.value = false;
      useSwal({
        icon: 'error',
        title: '登入失敗',
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  const check = async () => {
    try {
      const res = await $fetch('/api/v1/user/check', {
        method: 'GET',
        headers: {
          authorization: useCookie('token').value || '',
        },
      });
      const token = useCookie('token');
      token.value = res.token;
      isLogin.value = true;
    } catch (error) {
      isLogin.value = false;
    }
  };

  const getUserInfo = async (body) => {
    try {
      const res = await $fetch('/api/v1/user', {
        method: 'GET',
        headers: {
          authorization: useCookie('token').value || '',
        },
      });
      userInfo.value = res.result;
    } catch (error) {}
  };

  const updateUserInfo = async (body) => {
    try {
      const res = await $fetch('/api/v1/user', {
        method: 'PUT',
        body,
        headers: {
          authorization: useCookie('token').value || '',
        },
      });
      console.log(res);
    } catch (error) {}
  };
  return {
    userInfo,
    isLogin,
    signup,
    login,
    check,
    getUserInfo,
    updateUserInfo,
  };
});
