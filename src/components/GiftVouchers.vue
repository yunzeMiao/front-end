<template>
  <div class="container-center-horizontal">
    <div class="gift-vouchers screen">
      <div class="overlap-group2-5">
        <img class="curtain-red_long-1-6" :src="curtainRed_Long1" alt="curtain-red_long 1" /><img
          class="curtain-red_long-2-5"
          :src="curtainRed_Long2"
          alt="curtain-red_long 2"
        /><img class="curtain-red_long-3-5" :src="curtainRed_Long3" alt="curtain-red_long 3" /><img
          class="curtain-red_long-4-5"
          :src="curtainRed_Long4"
          alt="curtain-red_long 4"
        /><img class="curtain-red_long-5-6" :src="curtainRed_Long5" alt="curtain-red_long 5" /><img
          class="curtain-red_long-6-6"
          :src="curtainRed_Long6"
          alt="curtain-red_long 6"
        /><img class="curtain-red_long-7-6" :src="curtainRed_Long7" alt="curtain-red_long 7" /><img
          class="curtain-red_long-8-6"
          :src="curtainRed_Long8"
          alt="curtain-red_long 8"
        /><img class="curtain-red_long-9-6" :src="curtainRed_Long9" alt="curtain-red_long 9" /><img
          class="curtain-red_long-10-6"
          :src="curtainRed_Long10"
          alt="curtain-red_long 10"
        /><img class="curtain-red_long-11-6" :src="curtainRed_Long11" alt="curtain-red_long 11" /><img
          class="curtain-red_long-12-6"
          :src="curtainRed_Long12"
          alt="curtain-red_long 12"
        /><img class="curtain-red_long-13-6" :src="curtainRed_Long13" alt="curtain-red_long 13" /><img
          class="curtain-red_long-14-6"
          :src="curtainRed_Long14"
          alt="curtain-red_long 14"
        /><img class="curtain-red_long-15-6" :src="curtainRed_Long15" alt="curtain-red_long 15" /><img
          class="curtain-red_long-16-6"
          :src="curtainRed_Long16"
          alt="curtain-red_long 16"
        /><img class="curtain-red_long-17-6" :src="curtainRed_Long17" alt="curtain-red_long 17" /><img
          class="curtain-red_long-18-5"
          :src="curtainRed_Long18"
          alt="curtain-red_long 18"
        /><img class="curtain-red_long-19-5" :src="curtainRed_Long19" alt="curtain-red_long 19" /><img
          class="curtain-red_long-20-5"
          :src="curtainRed_Long20"
          alt="curtain-red_long 20"
        /><img class="curtain-red_long-21-5" :src="curtainRed_Long21" alt="curtain-red_long 21" /><img
          class="logo-1-6"
          :src="logo1"
          alt="logo 1"
        />
        <div class="genesian-theatre-company-6 opensanshebrew-bold-white-18px">{{ genesianTheatreCompany }}</div>
        <p class="address-6 opensanshebrew-bold-white-18px">{{ address }}</p>
        <div class="abn-733-0987-4859-6 opensanshebrew-bold-black-18px">{{ abn73309874859 }}</div>
        <img class="x56-1-6" :src="x561" alt="56 1" />
        <p class="rozelle-fundraising-6 opensanshebrew-regular-normal-white-24px">
          <span class="span-12 opensanshebrew-italic-normal-white-24px">{{ spanText1 }}</span
          ><span class="opensanshebrew-bold-white-24px">{{ spanText2 }}</span
          ><span class="span-12 opensanshebrew-italic-normal-white-24px">{{ spanText3 }}</span
          ><span class="opensanshebrew-italic-normal-white-24px">{{ spanText4 }}</span
          ><span class="opensanshebrew-bold-white-24px">{{ spanText5 }}</span>
        </p>
        <frame4 />
        <img
          class="search-2-1-6"
          src="https://cdn.animaapp.com/projects/65f2762d671e542340cde741/releases/65f2763f73397a9f4e7fdc6d/img/search--2--1.svg"
          alt="search (2) 1"
        />
        <div class="cursor-6"></div>
        <img
          class="right-chevron-1-1-6"
          src="https://cdn.animaapp.com/projects/65f2762d671e542340cde741/releases/65f2763f73397a9f4e7fdc6d/img/right-chevron--1--1.svg"
          alt="right-chevron (1) 1"
        />
        <div class="overlap-group1-7">
          <router-link to="/membership">
            <div class="be-membership-5 poppins-bold-black-18px">{{ beMembership }}</div>
          </router-link>
        </div>
      </div>
      <h1 class="title-6 poppins-semi-bold-black-60px">{{ title }}</h1>
      <div class="overlap-group3-5">
        <p class="if-youre-looking-fo poppins-semi-bold-black-20px">{{ ifYouReLookingFo }}</p>
        <div class="overlap-group-7">
          <div class="buy-here poppins-semi-bold-white-20px">{{ buyHere }}</div>
        </div>
      </div>
      <img class="genesian_-gift_-voucher-1" :src="genesian_Gift_Voucher1" alt="Genesian_Gift_Voucher 1" />
      <div
        class="overlap-group4-4 poppins-semi-bold-white-15px"
        :style="{ 'background-image': 'url(' + overlapGroup4 + ')' }"
      >
        <p class="copyright-2007-202-8">{{ copyright2007202 }}</p>
        <p class="site-design-by-agendi-webmaster-7">{{ siteDesignByAgendiWebmaster }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Frame4 from "./Frame4";
export default {
  name: "GiftVouchers",
  components: {
    Frame4,
  },
  props: [
    "curtainRed_Long1",
    "curtainRed_Long2",
    "curtainRed_Long3",
    "curtainRed_Long4",
    "curtainRed_Long5",
    "curtainRed_Long6",
    "curtainRed_Long7",
    "curtainRed_Long8",
    "curtainRed_Long9",
    "curtainRed_Long10",
    "curtainRed_Long11",
    "curtainRed_Long12",
    "curtainRed_Long13",
    "curtainRed_Long14",
    "curtainRed_Long15",
    "curtainRed_Long16",
    "curtainRed_Long17",
    "curtainRed_Long18",
    "curtainRed_Long19",
    "curtainRed_Long20",
    "curtainRed_Long21",
    "logo1",
    "genesianTheatreCompany",
    "address",
    "abn73309874859",
    "x561",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "beMembership",
    "title",
    "ifYouReLookingFo",
    "buyHere",
    "genesian_Gift_Voucher1",
    "overlapGroup4",
    "copyright2007202",
    "siteDesignByAgendiWebmaster",
  ],
};
</script>

<style>
.gift-vouchers {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 2944px;
  overflow: hidden;
  width: 1920px;
}

.overlap-group2-5 {
  height: 203px;
  position: relative;
  width: 1923px;
}

.curtain-red_long-1-6 {
  height: 203px;
  left: 92px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-2-5 {
  height: 203px;
  left: 183px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-3-5 {
  height: 203px;
  left: 275px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-4-5 {
  height: 203px;
  left: 367px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-5-6 {
  height: 203px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-6-6 {
  height: 203px;
  left: 457px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-7-6 {
  height: 203px;
  left: 549px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-8-6 {
  height: 203px;
  left: 641px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-9-6 {
  height: 203px;
  left: 824px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-10-6 {
  height: 203px;
  left: 916px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-11-6 {
  height: 203px;
  left: 1007px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-12-6 {
  height: 203px;
  left: 1099px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-13-6 {
  height: 203px;
  left: 732px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-14-6 {
  height: 203px;
  left: 1191px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-15-6 {
  height: 203px;
  left: 1282px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-16-6 {
  height: 203px;
  left: 1373px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-17-6 {
  height: 203px;
  left: 1465px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-18-5 {
  height: 203px;
  left: 1556px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-19-5 {
  height: 203px;
  left: 1648px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-20-5 {
  height: 203px;
  left: 1740px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-21-5 {
  height: 203px;
  left: 1831px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.logo-1-6 {
  height: 182px;
  left: 55px;
  object-fit: cover;
  position: absolute;
  top: 4px;
  width: 167px;
}

.genesian-theatre-company-6 {
  left: 244px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 49px;
  width: 453px;
}

.address-6 {
  left: 243px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 104px;
  width: 349px;
}

.abn-733-0987-4859-6 {
  left: 244px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 154px;
  width: 231px;
}

.x56-1-6 {
  height: 109px;
  left: 1700px;
  object-fit: cover;
  position: absolute;
  top: 37px;
  width: 201px;
}

.rozelle-fundraising-6 {
  left: 723px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 112px;
  width: 568px;
}

.span-12 {
  text-decoration: underline;
}

.search-2-1-6 {
  height: 24px;
  left: 1422px;
  position: absolute;
  top: 66px;
  width: 24px;
}

.cursor-6 {
  background-color: var(--dark-01);
  height: 28px;
  left: 710px;
  position: absolute;
  top: 64px;
  width: 2px;
}

.right-chevron-1-1-6 {
  height: 16px;
  left: 674px;
  position: absolute;
  top: 71px;
  width: 16px;
}

.overlap-group1-7 {
  align-items: flex-start;
  background-color: var(--accent-pink);
  border-radius: 6px;
  display: flex;
  height: 60px;
  left: 1494px;
  min-width: 178px;
  padding: 15.1px 16.1px;
  position: absolute;
  top: 52px;
}

.be-membership-5 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  min-height: 27px;
  width: 146px;
}

.title-6 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 92px;
  margin-top: 72px;
  min-height: 90px;
}

.overlap-group3-5 {
  height: 159px;
  margin-left: 92px;
  margin-top: 30px;
  position: relative;
  width: 1497px;
}

.if-youre-looking-fo {
  left: 3px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 1494px;
}

.overlap-group-7 {
  align-items: flex-start;
  background-image: url(https://cdn.animaapp.com/projects/65f2762d671e542340cde741/releases/65f2763f73397a9f4e7fdc6d/img/background-5.svg);
  background-size: 100% 100%;
  display: flex;
  height: 126px;
  left: -33px;
  min-width: 295px;
  padding: 23px 96px;
  position: absolute;
  top: 81px;
}

.buy-here {
  letter-spacing: 0;
  line-height: normal;
  min-height: 30px;
}

.genesian_-gift_-voucher-1 {
  align-self: center;
  height: 1284px;
  margin-left: 3px;
  margin-top: 134px;
  object-fit: cover;
  width: 1453px;
}

.overlap-group4-4 {
  align-items: flex-end;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  margin-left: -3px;
  margin-top: 690px;
  min-height: 282px;
  padding: 38px 658px;
  width: 1927px;
}

.copyright-2007-202-8 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 157px;
  min-height: 26px;
  width: 475px;
}

.site-design-by-agendi-webmaster-7 {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 75px;
  min-height: 23px;
  min-width: 258px;
}
</style>
