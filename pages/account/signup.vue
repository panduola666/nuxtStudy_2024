<template>
  <div>
    <NuxtLayout name="account">
      <div class="p-5 px-md-0 py-md-30">
        <div class="mb-10">
          <p class="mb-2 text-primary-100 fs-8 fs-md-7 fw-bold">
            享樂酒店，誠摯歡迎
          </p>
          <h1 class="mb-4 text-neutral-0 fw-bold">立即註冊</h1>

          <div class="d-flex align-items-center py-4 gap-2">
            <div
              class="d-flex flex-column align-items-center gap-1 text-neutral-0"
            >
              <span
                :class="{ 'd-none': isEmailAndPasswordValid }"
                class="step p-2 bg-primary-100 rounded-circle"
                >1</span
              >
              <Icon
                :class="{ 'd-none': !isEmailAndPasswordValid }"
                class="p-2 fs-3 bg-primary-100 rounded-circle"
                name="material-symbols:check"
              />
              <p class="mb-0 fs-8 fs-md-7 fw-bold">輸入信箱及密碼</p>
            </div>

            <hr class="flex-grow-1 my-0 border border-neutral-60 opacity-100" />

            <div
              :class="{
                'text-neutral-0': isEmailAndPasswordValid,
                'text-neutral-60': !isEmailAndPasswordValid,
              }"
              class="d-flex flex-column align-items-center gap-1"
            >
              <span
                :class="{
                  'bg-primary-100': isEmailAndPasswordValid,
                  'bg-transparent border border-neutral-60':
                    !isEmailAndPasswordValid,
                }"
                class="step p-2 rounded-circle"
                >2</span
              >
              <p class="mb-0 fs-8 fs-md-7 fw-bold">填寫基本資料</p>
            </div>
          </div>
        </div>

        <div class="mb-4">
          <form :class="{ 'd-none': isEmailAndPasswordValid }" class="mb-4">
            <div class="mb-4 fs-8 fs-md-7">
              <label class="mb-2 text-neutral-0 fw-bold" for="email">
                電子信箱
              </label>
              <input
                id="email"
                class="form-control p-4 text-neutral-100 fw-medium border-neutral-40"
                placeholder="hello@exsample.com"
                type="email"
                v-model="form.email"
              />
            </div>
            <div class="mb-4 fs-8 fs-md-7">
              <label class="mb-2 text-neutral-0 fw-bold" for="password">
                密碼
              </label>
              <input
                id="password"
                class="form-control p-4 text-neutral-100 fw-medium border-neutral-40"
                placeholder="請輸入密碼"
                type="password"
                v-model="form.password"
              />
            </div>
            <div class="mb-10 fs-8 fs-md-7">
              <label class="mb-2 text-neutral-0 fw-bold" for="confirmPassword">
                確認密碼
              </label>
              <input
                id="confirmPassword"
                class="form-control p-4 text-neutral-100 fw-medium border-neutral-40"
                placeholder="請再輸入一次密碼"
                type="password"
                v-model="form.checkPassword"
              />
            </div>
            <button
              class="btn w-100 py-4 fw-bold"
              :class="[
                form.password === form.checkPassword
                  ? 'btn-primary-100 text-neutral-0'
                  : 'disabled btn-neutral-40 text-neutral-60',
              ]"
              type="button"
              @click="isEmailAndPasswordValid = true"
            >
              下一步
            </button>
          </form>
          <form :class="{ 'd-none': !isEmailAndPasswordValid }" class="mb-4">
            <div class="mb-4 fs-8 fs-md-7">
              <label class="mb-2 text-neutral-0 fw-bold" for="name">
                姓名
              </label>
              <input
                id="name"
                class="form-control p-4 text-neutral-100 fw-medium border-neutral-40 rounded-3"
                placeholder="請輸入姓名"
                type="text"
                v-model="form.name"
              />
            </div>
            <div class="mb-4 fs-8 fs-md-7">
              <label class="mb-2 text-neutral-0 fw-bold" for="phone">
                手機號碼
              </label>
              <input
                id="phone"
                class="form-control p-4 text-neutral-100 fw-medium border-neutral-40 rounded-3"
                placeholder="請輸入手機號碼"
                type="tel"
                v-model="form.phone"
              />
            </div>
            <div class="mb-4 fs-8 fs-md-7">
              <label class="mb-2 text-neutral-0 fw-bold" for="birth">
                生日
              </label>
              <div class="d-flex gap-2">
                <select
                  id="birth"
                  class="form-select p-4 text-neutral-80 fw-medium rounded-3"
                  v-model="birth.year"
                >
                  <option v-for="year in 65" :key="year" :value="year + 1958">
                    {{ year + 1958 }} 年
                  </option>
                </select>
                <select
                  class="form-select p-4 text-neutral-80 fw-medium rounded-3"
                  v-model="birth.month"
                >
                  <option v-for="month in 12" :key="month" :value="month">
                    {{ month }} 月
                  </option>
                </select>
                <select
                  class="form-select p-4 text-neutral-80 fw-medium rounded-3"
                  v-model="birth.day"
                >
                  <option v-for="day in 30" :key="day" :value="day">
                    {{ day }} 日
                  </option>
                </select>
              </div>
            </div>
            <div class="mb-4 fs-8 fs-md-7">
              <label class="form-label text-neutral-0 fw-bold" for="address">
                地址
              </label>
              <div>
                <div class="d-flex gap-2 mb-2">
                  <select
                    class="form-select p-4 text-neutral-80 fw-medium rounded-3"
                    v-model="form.address.cityName"
                  >
                    <option value="" selected disabled>請選擇</option>
                    <option
                      :value="city.CityName"
                      v-for="(city, index) in cityCountyData"
                      :key="index"
                    >
                      {{ city.CityName }}
                    </option>
                  </select>
                  <select
                    class="form-select p-4 text-neutral-80 fw-medium rounded-3"
                    v-model="form.address.zipcode"
                  >
                    <option value="" selected disabled>請選擇</option>
                    <option
                      :value="Number(area.ZipCode)"
                      v-for="area in areaList.AreaList"
                      :key="area.ZipCode"
                    >
                      {{ area.AreaName }}
                    </option>
                  </select>
                </div>
                <input
                  id="address"
                  type="text"
                  class="form-control p-4 rounded-3"
                  placeholder="請輸入詳細地址"
                  v-model="form.address.detail"
                />
              </div>
            </div>

            <div
              class="form-check d-flex align-items-end gap-2 mb-10 text-neutral-0"
            >
              <input
                id="agreementCheck"
                class="form-check-input"
                type="checkbox"
                value=""
                v-model="form.isCheck"
              />
              <label class="form-check-label fw-bold" for="agreementCheck">
                我已閱讀並同意本網站個資使用規範
              </label>
            </div>
            <button
              class="btn w-100 py-4 fw-bold"
              type="button"
              :class="[
                form.isCheck
                  ? 'btn-primary-100 text-neutral-0'
                  : 'disabled btn-neutral-40 text-neutral-60',
              ]"
              @click="signup"
            >
              完成註冊
            </button>
          </form>
        </div>

        <p class="mb-0 fs-8 fs-md-7">
          <span class="me-2 text-neutral-0 fw-medium">已經有會員了嗎？</span>
          <NuxtLink
            to="login"
            class="text-primary-100 fw-bold text-decoration-underline bg-transparent border-0"
          >
            <span>立即登入</span>
          </NuxtLink>
        </p>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import cityCountyData from 'public/json/cityCountyData';
const isEmailAndPasswordValid = ref(false);
const userStore = useUserStore();

const form = ref({
  email: '',
  password: '',
  checkPassword: '',
  name: '',
  phone: '',
  birthday: '', // YYYY/MM/DD
  address: {
    zipcode: '',
    detail: '',
    cityName: '',
  },
  isCheck: false,
});

const birth = ref({
  year: 1959,
  month: 1,
  day: 1,
});

const signup = () => {
  form.value.birthday = `${birth.value.year}/${birth.value.month}/${birth.value.day}`;
  userStore.signup(form.value);
};

const areaList = computed(() => {
  return (
    cityCountyData.find(
      (item) => item.CityName === form.value.address.cityName
    ) || { AreaList: [] }
  );
});
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

input[type='password'] {
  font: small-caption;
  font-size: 1.5rem;
}

input::placeholder {
  color: #909090;
  font-size: 1rem;
  font-weight: 500;

  @include media-breakpoint-down(md) {
    font-size: 14px;
  }
}

.form-check-input {
  width: 1.5rem;
  height: 1.5rem;
}

.form-check-input:checked {
  background-color: #bf9d7d;
  border-color: #bf9d7d;
}

.step {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
}
</style>
