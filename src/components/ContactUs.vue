<template>
  <div class="container-center-horizontal">
    <div class="contact-us screen">
      <div class="overlap-group1-2">
        <img class="curtain-red_long-1-2" :src="curtainRed_Long1" alt="curtain-red_long 1" /><img
          class="curtain-red_long-2-1"
          :src="curtainRed_Long2"
          alt="curtain-red_long 2"
        /><img class="curtain-red_long-3-1" :src="curtainRed_Long3" alt="curtain-red_long 3" /><img
          class="curtain-red_long-4-1"
          :src="curtainRed_Long4"
          alt="curtain-red_long 4"
        /><img class="curtain-red_long-5-2" :src="curtainRed_Long5" alt="curtain-red_long 5" /><img
          class="curtain-red_long-6-2"
          :src="curtainRed_Long6"
          alt="curtain-red_long 6"
        /><img class="curtain-red_long-7-2" :src="curtainRed_Long7" alt="curtain-red_long 7" /><img
          class="curtain-red_long-8-2"
          :src="curtainRed_Long8"
          alt="curtain-red_long 8"
        /><img class="curtain-red_long-9-2" :src="curtainRed_Long9" alt="curtain-red_long 9" /><img
          class="curtain-red_long-10-2"
          :src="curtainRed_Long10"
          alt="curtain-red_long 10"
        /><img class="curtain-red_long-11-2" :src="curtainRed_Long11" alt="curtain-red_long 11" /><img
          class="curtain-red_long-12-2"
          :src="curtainRed_Long12"
          alt="curtain-red_long 12"
        /><img class="curtain-red_long-13-2" :src="curtainRed_Long13" alt="curtain-red_long 13" /><img
          class="curtain-red_long-14-2"
          :src="curtainRed_Long14"
          alt="curtain-red_long 14"
        /><img class="curtain-red_long-15-2" :src="curtainRed_Long15" alt="curtain-red_long 15" /><img
          class="curtain-red_long-16-2"
          :src="curtainRed_Long16"
          alt="curtain-red_long 16"
        /><img class="curtain-red_long-17-2" :src="curtainRed_Long17" alt="curtain-red_long 17" /><img
          class="curtain-red_long-18-1"
          :src="curtainRed_Long18"
          alt="curtain-red_long 18"
        /><img class="curtain-red_long-19-1" :src="curtainRed_Long19" alt="curtain-red_long 19" /><img
          class="curtain-red_long-20-1"
          :src="curtainRed_Long20"
          alt="curtain-red_long 20"
        /><img class="curtain-red_long-21-1" :src="curtainRed_Long21" alt="curtain-red_long 21" /><img
          class="logo-1-2"
          :src="logo1"
          alt="logo 1"
        />
        <div class="genesian-theatre-company-2 opensanshebrew-bold-white-18px">{{ genesianTheatreCompany }}</div>
        <p class="address-2 opensanshebrew-bold-white-18px">{{ address }}</p>
        <div class="abn-733-0987-4859-2 opensanshebrew-bold-black-18px">{{ abn73309874859 }}</div>
        <img class="x56-1-2" :src="x561" alt="56 1" />
        <p class="rozelle-fundraising-2 opensanshebrew-regular-normal-white-24px">
          <span class="span-4 opensanshebrew-italic-normal-white-24px">{{ spanText1 }}</span
          ><span class="opensanshebrew-bold-white-24px">{{ spanText2 }}</span
          ><span class="span-4 opensanshebrew-italic-normal-white-24px">{{ spanText3 }}</span
          ><span class="opensanshebrew-italic-normal-white-24px">{{ spanText4 }}</span
          ><span class="opensanshebrew-bold-white-24px">{{ spanText5 }}</span>
        </p>
        <frame4 />
        <img
          class="search-2-1-2"
          src="https://cdn.animaapp.com/projects/65f2762d671e542340cde741/releases/65f2763f73397a9f4e7fdc6d/img/search--2--1.svg"
          alt="search (2) 1"
        />
        <div class="cursor-2"></div>
        <img
          class="right-chevron-1-1-2"
          src="https://cdn.animaapp.com/projects/65f2762d671e542340cde741/releases/65f2763f73397a9f4e7fdc6d/img/right-chevron--1--1.svg"
          alt="right-chevron (1) 1"
        />
        <div class="overlap-group-1">
          <router-link to="/membership">
            <div class="be-membership-2 poppins-bold-black-18px">{{ beMembership }}</div>
          </router-link>
        </div>
      </div>
      <h1 class="title-2 poppins-semi-bold-black-60px">{{ title }}</h1>
      <p class="street-address-420">
        <span class="poppins-semi-bold-black-20px">{{ spanText6 }}</span
        ><span class="poppins-semi-bold-cerulean-blue-20px-2">{{ spanText7 }}</span
        ><span class="span-4 poppins-semi-bold-cerulean-blue-20px-2">{{ spanText8 }}</span
        ><span class="poppins-semi-bold-black-20px">{{ spanText9 }}</span
        ><span class="span-4 poppins-semi-bold-cerulean-blue-20px">{{ spanText10 }}</span
        ><span class="poppins-semi-bold-black-20px">{{ spanText11 }}</span
        ><span class="span-4 poppins-semi-bold-cerulean-blue-20px">{{ spanText12 }}</span
        ><span class="poppins-semi-bold-black-20px">{{ spanText13 }}</span
        ><span class="poppins-semi-bold-cerulean-blue-20px">{{ spanText14 }}</span
        ><span class="span-4 poppins-semi-bold-cerulean-blue-20px">{{ spanText15 }}</span
        ><span class="poppins-semi-bold-black-20px">{{ spanText16 }}</span>
      </p>
      <div
        class="overlap-group2-2 poppins-semi-bold-white-15px"
        :style="{ 'background-image': 'url(' + overlapGroup2 + ')' }"
      >
        <p class="copyright-2007-202-2">{{ copyright2007202 }}</p>
        <p class="site-design-by-agendi-webmaster-2">{{ siteDesignByAgendiWebmaster }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Frame4 from "./Frame4";
export default {
  name: "ContactUs",
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
    "spanText6",
    "spanText7",
    "spanText8",
    "spanText9",
    "spanText10",
    "spanText11",
    "spanText12",
    "spanText13",
    "spanText14",
    "spanText15",
    "spanText16",
    "overlapGroup2",
    "copyright2007202",
    "siteDesignByAgendiWebmaster",
  ],
};
</script>

<style>
.contact-us {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 2944px;
  overflow: hidden;
  width: 1920px;
}

.overlap-group1-2 {
  height: 203px;
  position: relative;
  width: 1923px;
}

.curtain-red_long-1-2 {
  height: 203px;
  left: 92px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-2-1 {
  height: 203px;
  left: 183px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-3-1 {
  height: 203px;
  left: 275px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-4-1 {
  height: 203px;
  left: 367px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-5-2 {
  height: 203px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-6-2 {
  height: 203px;
  left: 457px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-7-2 {
  height: 203px;
  left: 549px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-8-2 {
  height: 203px;
  left: 641px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-9-2 {
  height: 203px;
  left: 824px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-10-2 {
  height: 203px;
  left: 916px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-11-2 {
  height: 203px;
  left: 1007px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-12-2 {
  height: 203px;
  left: 1099px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-13-2 {
  height: 203px;
  left: 732px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-14-2 {
  height: 203px;
  left: 1191px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-15-2 {
  height: 203px;
  left: 1282px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-16-2 {
  height: 203px;
  left: 1373px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-17-2 {
  height: 203px;
  left: 1465px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-18-1 {
  height: 203px;
  left: 1556px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-19-1 {
  height: 203px;
  left: 1648px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-20-1 {
  height: 203px;
  left: 1740px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-21-1 {
  height: 203px;
  left: 1831px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.logo-1-2 {
  height: 182px;
  left: 55px;
  object-fit: cover;
  position: absolute;
  top: 4px;
  width: 167px;
}

.genesian-theatre-company-2 {
  left: 244px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 49px;
  width: 453px;
}

.address-2 {
  left: 243px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 104px;
  width: 349px;
}

.abn-733-0987-4859-2 {
  left: 244px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 154px;
  width: 231px;
}

.x56-1-2 {
  height: 109px;
  left: 1700px;
  object-fit: cover;
  position: absolute;
  top: 37px;
  width: 201px;
}

.rozelle-fundraising-2 {
  left: 723px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 112px;
  width: 568px;
}

.span-4 {
  text-decoration: underline;
}

.search-2-1-2 {
  height: 24px;
  left: 1422px;
  position: absolute;
  top: 66px;
  width: 24px;
}

.cursor-2 {
  background-color: var(--dark-01);
  height: 28px;
  left: 710px;
  position: absolute;
  top: 64px;
  width: 2px;
  display: none;
}

.right-chevron-1-1-2 {
  height: 16px;
  left: 674px;
  position: absolute;
  top: 71px;
  width: 16px;
}

.overlap-group-1 {
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

.be-membership-2 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  min-height: 27px;
  width: 146px;
}

.title-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 92px;
  margin-top: 72px;
  min-height: 90px;
}

.street-address-420 {
  color: transparent;
  font-family: var(--font-family-poppins);
  font-size: var(--font-size-m);
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 102px;
  margin-top: 73px;
  min-height: 330px;
}

.overlap-group2-2 {
  align-items: flex-end;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  margin-left: -3px;
  margin-top: 1894px;
  min-height: 282px;
  padding: 38px 658px;
  width: 1927px;
}

.copyright-2007-202-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 157px;
  min-height: 26px;
  width: 475px;
}

.site-design-by-agendi-webmaster-2 {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 75px;
  min-height: 23px;
  min-width: 258px;
}
</style>
