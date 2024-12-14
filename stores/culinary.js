import { defineStore } from 'pinia';

export const useCulinaryStore = defineStore('culinary', () => {
  const culinaryList = ref([]);

  const getData = async () => {
    const data = await $fetch('/api/v1/home/culinary');
    culinaryList.value = data.result;
  };

  return {
    culinaryList,
    getData,
  };
});
