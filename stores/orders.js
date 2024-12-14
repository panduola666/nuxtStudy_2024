import { defineStore } from 'pinia';

export const useOrdersStore = defineStore('orders', () => {
  const orderInfo = ref({});

  const createOrder = async (body) => {
    try {
      const data = await $fetch('/api/v1/orders', {
        method: 'POST',
        body,
        headers: {
          authorization: useCookie('token').value || '',
        },
      });
      orderInfo.value = data.result;
    } catch (error) {
      useSwal({
        icon: 'error',
        title: '訂房失敗',
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  const getOrderInfo = async (id) => {
    const data = await $fetch(`/api/v1/orders/${id}`, {
      method: 'GET',
      headers: {
        authorization: useCookie('token').value || '',
      },
    });
    orderInfo.value = data.result;
  };

  return {
    orderInfo,
    createOrder,
    getOrderInfo,
  };
});
