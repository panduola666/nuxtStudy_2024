import { defineStore } from 'pinia';

export const useCulinaryStore = defineStore('culinary', () => {
  const { apiUrl } = useRuntimeConfig().public;
  const culinaryList = ref([]);

  const getData = async () => {
    const data = await $fetch(apiUrl + '/api/v1/home/culinary');
    culinaryList.value = data.result;
  };

  return {
    culinaryList,
    getData,
  };
});
