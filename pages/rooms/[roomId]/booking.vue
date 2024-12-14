<template>
  <div>
    <NuxtLayout name="default">
      <main class="pt-18 pt-md-30 bg-neutral-120">
        <section class="py-10 py-md-30 bg-primary-10">
          <div class="container">
            <button
              class="d-flex align-items-baseline gap-2 mb-10 bg-transparent border-0"
              type="button"
              @click="goBack"
            >
              <Icon
                class="fs-5 text-neutral-100"
                name="mdi:keyboard-arrow-left"
              />
              <h1 class="mb-0 text-neutral-100 fs-3 fw-bold">確認訂房資訊</h1>
            </button>

            <div class="row gap-10 gap-md-0">
              <div class="col-12 col-md-7">
                <section>
                  <h2
                    class="mb-8 mb-md-10 text-neutral-100 fs-6 fs-md-4 fw-bold"
                  >
                    訂房資訊
                  </h2>
                  <div class="d-flex flex-column gap-6">
                    <div
                      class="d-flex justify-content-between align-items-center text-neutral-100"
                    >
                      <div>
                        <h3 class="title-deco mb-2 fs-7 fw-bold">選擇房型</h3>
                        <p class="mb-0 fw-medium">{{ roomInfo.name }}</p>
                      </div>
                      <button
                        class="bg-transparent border-0 fw-bold text-decoration-underline"
                        type="button"
                        @click="goBack"
                      >
                        編輯
                      </button>
                    </div>
                    <div
                      class="d-flex justify-content-between align-items-center text-neutral-100"
                    >
                      <div>
                        <h3 class="title-deco mb-2 fs-7 fw-bold">訂房日期</h3>
                        <p class="mb-2 fw-medium">
                          入住：{{ timeFormat(bookingInfo.start) }}
                        </p>
                        <p class="mb-0 fw-medium">
                          退房：{{ timeFormat(bookingInfo.end) }}
                        </p>
                      </div>
                      <button
                        class="bg-transparent border-0 fw-bold text-decoration-underline"
                        type="button"
                        @click="goBack"
                      >
                        編輯
                      </button>
                    </div>
                    <div
                      class="d-flex justify-content-between align-items-center text-neutral-100"
                    >
                      <div>
                        <h3 class="title-deco mb-2 fs-7 fw-bold">房客人數</h3>
                        <p class="mb-0 fw-medium">
                          {{ bookingInfo.bookingPeople }} 人
                        </p>
                      </div>
                      <button
                        class="bg-transparent border-0 fw-bold text-decoration-underline"
                        type="button"
                        @click="goBack"
                      >
                        編輯
                      </button>
                    </div>
                  </div>
                </section>

                <hr class="my-10 my-md-12 opacity-100 text-neutral-60" />

                <section>
                  <div
                    class="d-flex justify-content-between align-items-center mb-10"
                  >
                    <h2 class="mb-0 text-neutral-100 fs-6 fs-md-4 fw-bold">
                      訂房人資訊
                    </h2>
                    <button
                      class="text-primary-100 bg-transparent border-0 fw-bold text-decoration-underline"
                      type="button"
                      @click="setFormData"
                    >
                      套用會員資料
                    </button>
                  </div>

                  <div class="d-flex flex-column gap-6">
                    <div class="text-neutral-100">
                      <label for="name" class="form-label fs-8 fs-md-7 fw-bold"
                        >姓名</label
                      >
                      <input
                        id="name"
                        type="text"
                        class="form-control p-4 fs-8 fs-md-7 rounded-3"
                        placeholder="請輸入姓名"
                        v-model="form.userInfo.name"
                      />
                    </div>

                    <div class="text-neutral-100">
                      <label for="phone" class="form-label fs-8 fs-md-7 fw-bold"
                        >手機號碼</label
                      >
                      <input
                        id="phone"
                        type="tel"
                        class="form-control p-4 fs-8 fs-md-7 rounded-3"
                        placeholder="請輸入手機號碼"
                        v-model="form.userInfo.phone"
                      />
                    </div>

                    <div class="text-neutral-100">
                      <label for="email" class="form-label fs-8 fs-md-7 fw-bold"
                        >電子信箱</label
                      >
                      <input
                        id="email"
                        type="email"
                        class="form-control p-4 fs-8 fs-md-7 rounded-3"
                        placeholder="請輸入電子信箱"
                        v-model="form.userInfo.email"
                      />
                    </div>

                    <div class="text-neutral-100">
                      <label
                        for="address"
                        class="form-label fs-8 fs-md-7 fw-bold"
                        >地址</label
                      >
                      <div className="d-flex gap-2 mb-4">
                        <select
                          class="form-select w-50 p-4 text-neutral-80 fs-8 fs-md-7 fw-medium rounded-3"
                          v-model="form.userInfo.address.cityName"
                        >
                          <option value="" selected>請選擇</option>
                          <option
                            :value="city.CityName"
                            v-for="(city, index) in cityCountyData"
                            :key="index"
                          >
                            {{ city.CityName }}
                          </option>
                        </select>
                        <select
                          class="form-select w-50 p-4 text-neutral-80 fs-8 fs-md-7 fw-medium rounded-3"
                          v-model="form.userInfo.address.zipcode"
                        >
                          <option value="" selected>請選擇</option>
                          <option
                            :value="Number(area.ZipCode)"
                            v-for="area in AreaList.AreaList"
                            :key="area.ZipCode"
                          >
                            {{ area.AreaName }}
                          </option>
                        </select>
                      </div>
                      <input
                        id="address"
                        type="text"
                        class="form-control p-4 fs-8 fs-md-7 rounded-3"
                        placeholder="請輸入詳細地址"
                        v-model="form.userInfo.address.detail"
                      />
                    </div>
                  </div>
                </section>

                <hr class="my-10 my-md-12 opacity-100 text-neutral-60" />

                <section>
                  <h2
                    class="mb-8 mb-md-10 text-neutral-100 fs-6 fs-md-4 fw-bold"
                  >
                    房間資訊
                  </h2>
                  <div class="d-flex flex-column gap-6">
                    <section>
                      <h3 class="title-deco mb-4 mb-md-6 fs-7 fs-md-5 fw-bold">
                        房型基本資訊
                      </h3>
                      <ul class="d-flex gap-4 list-unstyled">
                        <li
                          class="card-info px-4 py-5 bg-neutral-0 border border-primary-40 rounded-3"
                        >
                          <Icon
                            class="mb-2 fs-5 text-primary-100"
                            name="fluent:slide-size-24-filled"
                          />
                          <p class="mb-0 fw-bold text-neutral-80 text-nowrap">
                            {{ roomInfo.areaInfo }}
                          </p>
                        </li>
                        <li
                          class="card-info px-4 py-5 bg-neutral-0 border border-primary-40 rounded-3"
                        >
                          <Icon
                            class="mb-2 fs-5 text-primary-100"
                            name="material-symbols:king-bed"
                          />
                          <p class="mb-0 fw-bold text-neutral-80 text-nowrap">
                            {{ roomInfo.bedInfo }}
                          </p>
                        </li>
                        <li
                          class="card-info px-4 py-5 bg-neutral-0 border border-primary-40 rounded-3"
                        >
                          <Icon
                            class="mb-2 fs-5 text-primary-100"
                            name="ic:baseline-person"
                          />
                          <p class="mb-0 fw-bold text-neutral-80 text-nowrap">
                            {{ roomInfo.maxPeople }} 人
                          </p>
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3
                        class="title-deco mb-4 mb-md-6 text-neutral-100 fs-7 fs-md-5 fw-bold"
                      >
                        房間格局
                      </h3>
                      <ul
                        class="d-flex flex-wrap gap-6 gap-md-10 p-6 fs-8 fs-md-7 bg-neutral-0 rounded-3 list-unstyled"
                      >
                        <li
                          class="d-flex gap-2"
                          v-for="(layout, layoutIndex) in roomInfo.layoutInfo"
                          :key="layoutIndex"
                        >
                          <Icon
                            class="fs-5 text-primary-100"
                            :name="`material-symbols:${
                              layout.isProvide ? 'check' : 'close'
                            }`"
                          />
                          <p class="mb-0 text-neutral-80 fw-bold">
                            {{ layout.title }}
                          </p>
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3
                        class="title-deco mb-4 mb-md-6 text-neutral-100 fs-7 fs-md-5 fw-bold"
                      >
                        房內設備
                      </h3>
                      <ul
                        class="d-flex flex-wrap row-gap-2 column-gap-10 p-6 mb-0 fs-8 fs-md-7 bg-neutral-0 rounded-3 list-unstyled"
                      >
                        <li
                          class="flex-item d-flex gap-2"
                          v-for="(
                            facility, facilityIndex
                          ) in roomInfo.facilityInfo"
                          :key="facilityIndex"
                        >
                          <Icon
                            class="fs-5 text-primary-100"
                            :name="`material-symbols:${
                              facility.isProvide ? 'check' : 'close'
                            }`"
                          />
                          <p class="mb-0 text-neutral-80 fw-bold">
                            {{ facility.title }}
                          </p>
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3
                        class="title-deco mb-4 mb-md-6 text-neutral-100 fs-7 fs-md-5 fw-bold"
                      >
                        備品提供
                      </h3>
                      <ul
                        class="d-flex flex-wrap row-gap-2 column-gap-10 p-6 mb-0 fs-8 fs-md-7 bg-neutral-0 rounded-3 list-unstyled"
                      >
                        <li
                          class="flex-item d-flex gap-2"
                          v-for="(
                            amenity, amenityIndex
                          ) in roomInfo.amenityInfo"
                          :key="amenityIndex"
                        >
                          <Icon
                            class="fs-5 text-primary-100"
                            :name="`material-symbols:${
                              amenity.isProvide ? 'check' : 'close'
                            }`"
                          />
                          <p class="mb-0 text-neutral-80 fw-bold">
                            {{ amenity.title }}
                          </p>
                        </li>
                      </ul>
                    </section>
                  </div>
                </section>
              </div>

              <div class="col-12 col-md-5">
                <div
                  class="confirm-form rounded-3xl d-flex flex-column gap-10 p-6 p-md-10 mx-auto ms-md-auto me-md-0 bg-neutral-0"
                >
                  <img
                    class="img-fluid rounded-3"
                    :src="roomInfo.imageUrl"
                    alt="room-a"
                  />

                  <div>
                    <h2 className="mb-6 text-neutral-100 fs-6 fs-md-4 fw-bold">
                      價格詳情
                    </h2>
                    <div
                      class="d-flex justify-content-between align-items-center mb-3"
                    >
                      <div
                        class="d-flex align-items-center text-neutral-100 fw-medium"
                      >
                        <span>NT$ {{ useMoneyFormat(roomInfo.price) }}</span>
                        <Icon
                          class="ms-2 me-1 text-neutral-80"
                          name="material-symbols:close"
                        />
                        <span class="text-neutral-80"
                          >{{ bookingInfo.daysCount }} 晚</span
                        >
                      </div>
                      <span class="fw-medium">
                        NT$ {{ useMoneyFormat(totalMoney) }}
                      </span>
                    </div>
                    <div
                      class="d-flex justify-content-between align-items-center fw-medium"
                    >
                      <p
                        class="d-flex align-items-center mb-0 text-neutral-100"
                      >
                        住宿折扣
                      </p>
                      <span class="text-primary-100"> -NT$ 0 </span>
                    </div>
                    <hr class="my-6 opacity-100 text-neutral-40" />
                    <div
                      class="d-flex justify-content-between align-items-center text-neutral-100 fw-bold"
                    >
                      <p class="d-flex align-items-center mb-0">總價</p>
                      <span> NT$ {{ useMoneyFormat(totalMoney) }} </span>
                    </div>
                  </div>

                  <button
                    class="btn btn-primary-100 py-4 text-neutral-0 fw-bold rounded-3"
                    type="button"
                    @click="confirmBooking"
                  >
                    確認訂房
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BookingLoading v-if="isLoading" />
      </main>
    </NuxtLayout>
  </div>
</template>

<script setup>
import cityCountyData from 'public/json/cityCountyData';

const roomsStore = useRoomsStore();
const { roomInfo, bookingInfo } = storeToRefs(roomsStore);
const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);

const router = useRouter();
const route = useRoute();
const roomId = route.params.roomId;
const totalMoney = computed(
  () => roomInfo.value.price * bookingInfo.value.daysCount
);

const form = ref({
  roomId,
  checkInDate: '',
  checkOutDate: '', // YYYY/MM/DD
  peopleNum: bookingInfo.value.bookingPeople,
  userInfo: {
    address: {
      detail: '',
      zipcode: null,
      cityName: '',
    },
    name: '',
    phone: '',
    email: '',
  },
});

const setFormData = () => {
  const { address, name, phone, email } = userInfo.value;
  form.value.userInfo = {
    address,
    name,
    phone,
    email,
  };
  const zipcode = address.zipcode;
  cityCountyData.forEach((city) => {
    const currentCity = city.AreaList.find(
      (area) => Number(area.ZipCode) === Number(zipcode)
    );
    if (currentCity) {
      form.value.userInfo.address.cityName = city.CityName;
    }
  });
};

const AreaList = computed(() => {
  return (
    cityCountyData.find(
      (item) => item.CityName === form.value.userInfo.address.cityName
    ) || { AreaList: [] }
  );
});
const goBack = () => {
  router.back();
};
const isLoading = ref(false);

const ordersStore = useOrdersStore();
const { orderInfo } = storeToRefs(ordersStore);
const confirmBooking = async () => {
  isLoading.value = true;

  try {
    form.value.checkInDate = bookingInfo.value.start.split('-').join('/');
    form.value.checkOutDate = bookingInfo.value.end.split('-').join('/');
    await ordersStore.createOrder(form.value);

    if (orderInfo.value._id) {
      isLoading.value = false;
      router.push({
        name: 'booking-confirmation-bookingId',
        params: {
          bookingId: orderInfo.value._id,
        },
      });
    }
  } catch (err) {
    isLoading.value = false;
  }
};

const timeFormat = (timer) => {
  const month = new Date(timer).getMonth() + 1;
  const date = new Date(timer).getDate();
  const day = new Date(timer).getDay();
  const days = ['日', '一', '二', '三', '四', '五', '六'];

  return `${month} 月 ${date} 日星期${days[day]}`;
};
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/mixins/breakpoints';

$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px,
  xxxl: 1537px,
);

.title-deco {
  display: flex;
  align-items: center;
}

.title-deco::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 24px;
  background-color: #bf9d7d;
  border-radius: 10px;
  margin-right: 0.75rem;
}

.form-control::placeholder {
  --neutral-60: #909090;
  color: var(--neutral-60);
  font-weight: 500;
}

.card-info {
  width: 97px;
  height: 97px;
}

.flex-item {
  flex: 1 1 15%;

  @include media-breakpoint-down(md) {
    flex-basis: 40%;
  }
}

.rounded-3xl {
  border-radius: 1.25rem;
}

.confirm-form {
  position: sticky;
  top: 160px;
  max-width: 478px;

  @include media-breakpoint-down(md) {
    position: static;
    top: 0;
    max-width: auto;
  }
}
</style>
