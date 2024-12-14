import { defineStore } from 'pinia';

export const useRoomsStore = defineStore('rooms', () => {
  const roomsList = ref([]);
  const roomInfo = ref({});

  const bookingInfo = ref({
    start: null,
    end: null,
    bookingPeople: 1,
    daysCount: 0,
  });

  const getData = async () => {
    const data = await $fetch('/api/v1/rooms');
    roomsList.value = data.result;
  };

  const getRoomInfo = async (id) => {
    const data = await $fetch(`/api/v1/rooms/${id}`);
    roomInfo.value = data.result;
  };

  return {
    roomsList,
    getData,
    roomInfo,
    getRoomInfo,
    bookingInfo,
  };
});
