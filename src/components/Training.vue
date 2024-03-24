<template>
  <div class="container-center-horizontal">
    <div class="training screen">
      <div class="overlap-group3">
        <img class="curtain-red_long-1" :src="curtainRed_Long1" alt="curtain-red_long 1" /><img
          class="curtain-red_long-2"
          :src="curtainRed_Long2"
          alt="curtain-red_long 2"
        /><img class="curtain-red_long-3" :src="curtainRed_Long3" alt="curtain-red_long 3" /><img
          class="curtain-red_long-4"
          :src="curtainRed_Long4"
          alt="curtain-red_long 4"
        /><img class="curtain-red_long-5" :src="curtainRed_Long5" alt="curtain-red_long 5" /><img
          class="curtain-red_long-6"
          :src="curtainRed_Long6"
          alt="curtain-red_long 6"
        /><img class="curtain-red_long-7" :src="curtainRed_Long7" alt="curtain-red_long 7" /><img
          class="curtain-red_long-8"
          :src="curtainRed_Long8"
          alt="curtain-red_long 8"
        /><img class="curtain-red_long-9" :src="curtainRed_Long9" alt="curtain-red_long 9" /><img
          class="curtain-red_long-10"
          :src="curtainRed_Long10"
          alt="curtain-red_long 10"
        /><img class="curtain-red_long-11" :src="curtainRed_Long11" alt="curtain-red_long 11" /><img
          class="curtain-red_long-12"
          :src="curtainRed_Long12"
          alt="curtain-red_long 12"
        /><img class="curtain-red_long-13" :src="curtainRed_Long13" alt="curtain-red_long 13" /><img
          class="curtain-red_long-14"
          :src="curtainRed_Long14"
          alt="curtain-red_long 14"
        /><img class="curtain-red_long-15" :src="curtainRed_Long15" alt="curtain-red_long 15" /><img
          class="curtain-red_long-16"
          :src="curtainRed_Long16"
          alt="curtain-red_long 16"
        /><img class="curtain-red_long-17" :src="curtainRed_Long17" alt="curtain-red_long 17" /><img
          class="curtain-red_long-18"
          :src="curtainRed_Long18"
          alt="curtain-red_long 18"
        /><img class="curtain-red_long-19" :src="curtainRed_Long19" alt="curtain-red_long 19" /><img
          class="curtain-red_long-20"
          :src="curtainRed_Long20"
          alt="curtain-red_long 20"
        /><img class="curtain-red_long-21" :src="curtainRed_Long21" alt="curtain-red_long 21" /><img
          class="logo-1"
          :src="logo1"
          alt="logo 1"
        />
        <div class="genesian-theatre-company opensanshebrew-bold-white-18px">{{ genesianTheatreCompany }}</div>
        <p class="address opensanshebrew-bold-white-18px">{{ address }}</p>
        <div class="abn-733-0987-4859 opensanshebrew-bold-black-18px">{{ abn73309874859 }}</div>
        <img class="x56-1" :src="x561" alt="56 1" />
        <p class="rozelle-fundraising opensanshebrew-regular-normal-white-24px">
          <span class="span opensanshebrew-italic-normal-white-24px">{{ spanText1 }}</span
          ><span class="opensanshebrew-bold-white-24px">{{ spanText2 }}</span
          ><span class="span opensanshebrew-italic-normal-white-24px">{{ spanText3 }}</span
          ><span class="opensanshebrew-italic-normal-white-24px">{{ spanText4 }}</span
          ><span class="opensanshebrew-bold-white-24px">{{ spanText5 }}</span>
        </p>
        <frame4 />
        <img
          class="search-2-1"
          src="https://cdn.animaapp.com/projects/65f2762d671e542340cde741/releases/65f2763f73397a9f4e7fdc6d/img/search--2--1.svg"
          alt="search (2) 1"
        />
        <div class="cursor"></div>
        <img
          class="right-chevron-1-1"
          src="https://cdn.animaapp.com/projects/65f2762d671e542340cde741/releases/65f2763f73397a9f4e7fdc6d/img/right-chevron--1--1.svg"
          alt="right-chevron (1) 1"
        />
        <div class="overlap-group1">
          <router-link to="/membership">
            <div class="be-membership poppins-bold-black-18px">{{ beMembership }}</div>
          </router-link>
        </div>
      </div>
      <h1 class="title poppins-semi-bold-black-60px">{{ title }}</h1>
      <p class="the-genesian-theatre poppins-semi-bold-black-20px" v-html="theGenesianTheatre"></p>
      <name />
      <email-address />
      <subject />
      <div class="overlap-group4" :style="{ 'background-image': 'url(' + overlapGroup4 + ')' }">
        <div class="genesian-classes">{{ genesianClasses }}</div>
      </div>
      <message />
      <send-method />
      <div
        class="overlap-group2 poppins-semi-bold-white-15px"
        :style="{ 'background-image': 'url(' + overlapGroup2 + ')' }"
      >
        <p class="copyright-2007-202">{{ copyright2007202 }}</p>
        <p class="site-design-by-agendi-webmaster">{{ siteDesignByAgendiWebmaster }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Frame4 from "./Frame4";
import Name from "./Name";
import EmailAddress from "./EmailAddress";
import Subject from "./Subject";
import Message from "./Message";
import SendMethod from "./SendMethod";
export default {
  name: "Training",
  components: {
    Frame4,
    Name,
    EmailAddress,
    Subject,
    Message,
    SendMethod,
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
    "theGenesianTheatre",
    "overlapGroup4",
    "genesianClasses",
    "overlapGroup2",
    "copyright2007202",
    "siteDesignByAgendiWebmaster",
  ],
};
</script>

<style>
.training {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 2944px;
  overflow: hidden;
  position: relative;
  width: 1920px;
}

.overlap-group3 {
  height: 203px;
  position: relative;
  width: 1923px;
}

.curtain-red_long-1 {
  height: 203px;
  left: 92px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-2 {
  height: 203px;
  left: 183px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-3 {
  height: 203px;
  left: 275px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-4 {
  height: 203px;
  left: 367px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-5 {
  height: 203px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-6 {
  height: 203px;
  left: 457px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-7 {
  height: 203px;
  left: 549px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-8 {
  height: 203px;
  left: 641px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-9 {
  height: 203px;
  left: 824px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-10 {
  height: 203px;
  left: 916px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-11 {
  height: 203px;
  left: 1007px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-12 {
  height: 203px;
  left: 1099px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-13 {
  height: 203px;
  left: 732px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-14 {
  height: 203px;
  left: 1191px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-15 {
  height: 203px;
  left: 1282px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-16 {
  height: 203px;
  left: 1373px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-17 {
  height: 203px;
  left: 1465px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-18 {
  height: 203px;
  left: 1556px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-19 {
  height: 203px;
  left: 1648px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-20 {
  height: 203px;
  left: 1740px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-21 {
  height: 203px;
  left: 1831px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.logo-1 {
  height: 182px;
  left: 55px;
  object-fit: cover;
  position: absolute;
  top: 4px;
  width: 167px;
}

.genesian-theatre-company {
  left: 244px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 49px;
  width: 453px;
}

.address {
  left: 243px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 104px;
  width: 349px;
}

.abn-733-0987-4859 {
  left: 244px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 154px;
  width: 231px;
}

.x56-1 {
  height: 109px;
  left: 1700px;
  object-fit: cover;
  position: absolute;
  top: 37px;
  width: 201px;
}

.rozelle-fundraising {
  left: 723px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 112px;
  width: 568px;
}

.span {
  text-decoration: underline;
}

.search-2-1 {
  height: 24px;
  left: 1422px;
  position: absolute;
  top: 66px;
  width: 24px;
}

.cursor {
  background-color: var(--dark-01);
  height: 28px;
  left: 710px;
  position: absolute;
  top: 64px;
  width: 2px;
  display: none;
}

.right-chevron-1-1 {
  height: 16px;
  left: 674px;
  position: absolute;
  top: 71px;
  width: 16px;
}

.overlap-group1 {
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

.be-membership {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  min-height: 27px;
  width: 146px;
}

.title {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 137px;
  margin-top: 62px;
  min-height: 90px;
  min-width: 371px;
  text-align: justify;
}

.the-genesian-theatre {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 139px;
  margin-top: 15px;
  min-height: 60px;
  min-width: 911px;
  text-align: justify;
}

.overlap-group4 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 52px;
  margin-left: 138.01px;
  margin-top: 17px;
  min-width: 350px;
  padding: 10px 33px;
}

.genesian-classes {
  color: var(--black);
  font-family: var(--font-family-poppins);
  font-size: var(--font-size-xxs);
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  min-height: 23px;
  min-width: 136px;
  text-align: justify;
}

.overlap-group2 {
  align-items: flex-end;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  margin-left: -3px;
  margin-top: 1553px;
  min-height: 282px;
  padding: 38px 658px;
  width: 1927px;
}

.copyright-2007-202 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 157px;
  min-height: 26px;
  width: 475px;
}

.site-design-by-agendi-webmaster {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 75px;
  min-height: 23px;
  min-width: 258px;
}
</style>
