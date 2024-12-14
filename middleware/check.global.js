export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();
  const { isLogin } = storeToRefs(userStore);
  const token = useCookie('token').value;
  if (token) {
    userStore.check();
  }
  if (isLogin) {
    userStore.getUserInfo();
  }
});
