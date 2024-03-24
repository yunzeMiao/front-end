<template>
  <div class="container-center-horizontal">
    <div class="accessibility screen">
      <div class="overlap-group2-4">
        <img class="curtain-red_long-1-4" :src="curtainRed_Long1" alt="curtain-red_long 1" /><img
          class="curtain-red_long-2-3"
          :src="curtainRed_Long2"
          alt="curtain-red_long 2"
        /><img class="curtain-red_long-3-3" :src="curtainRed_Long3" alt="curtain-red_long 3" /><img
          class="curtain-red_long-4-3"
          :src="curtainRed_Long4"
          alt="curtain-red_long 4"
        /><img class="curtain-red_long-5-4" :src="curtainRed_Long5" alt="curtain-red_long 5" /><img
          class="curtain-red_long-6-4"
          :src="curtainRed_Long6"
          alt="curtain-red_long 6"
        /><img class="curtain-red_long-7-4" :src="curtainRed_Long7" alt="curtain-red_long 7" /><img
          class="curtain-red_long-8-4"
          :src="curtainRed_Long8"
          alt="curtain-red_long 8"
        /><img class="curtain-red_long-9-4" :src="curtainRed_Long9" alt="curtain-red_long 9" /><img
          class="curtain-red_long-10-4"
          :src="curtainRed_Long10"
          alt="curtain-red_long 10"
        /><img class="curtain-red_long-11-4" :src="curtainRed_Long11" alt="curtain-red_long 11" /><img
          class="curtain-red_long-12-4"
          :src="curtainRed_Long12"
          alt="curtain-red_long 12"
        /><img class="curtain-red_long-13-4" :src="curtainRed_Long13" alt="curtain-red_long 13" /><img
          class="curtain-red_long-14-4"
          :src="curtainRed_Long14"
          alt="curtain-red_long 14"
        /><img class="curtain-red_long-15-4" :src="curtainRed_Long15" alt="curtain-red_long 15" /><img
          class="curtain-red_long-16-4"
          :src="curtainRed_Long16"
          alt="curtain-red_long 16"
        /><img class="curtain-red_long-17-4" :src="curtainRed_Long17" alt="curtain-red_long 17" /><img
          class="curtain-red_long-18-3"
          :src="curtainRed_Long18"
          alt="curtain-red_long 18"
        /><img class="curtain-red_long-19-3" :src="curtainRed_Long19" alt="curtain-red_long 19" /><img
          class="curtain-red_long-20-3"
          :src="curtainRed_Long20"
          alt="curtain-red_long 20"
        /><img class="curtain-red_long-21-3" :src="curtainRed_Long21" alt="curtain-red_long 21" /><img
          class="logo-1-4"
          :src="logo1"
          alt="logo 1"
        />
        <div class="genesian-theatre-company-4 opensanshebrew-bold-white-18px">{{ genesianTheatreCompany }}</div>
        <p class="address-4 opensanshebrew-bold-white-18px">{{ address }}</p>
        <div class="abn-733-0987-4859-4 opensanshebrew-bold-black-18px">{{ abn73309874859 }}</div>
        <img class="x56-1-4" :src="x561" alt="56 1" />
        <p class="rozelle-fundraising-4 opensanshebrew-regular-normal-white-24px">
          <span class="span-8 opensanshebrew-italic-normal-white-24px">{{ spanText1 }}</span
          ><span class="opensanshebrew-bold-white-24px">{{ spanText2 }}</span
          ><span class="span-8 opensanshebrew-italic-normal-white-24px">{{ spanText3 }}</span
          ><span class="opensanshebrew-italic-normal-white-24px">{{ spanText4 }}</span
          ><span class="opensanshebrew-bold-white-24px">{{ spanText5 }}</span>
        </p>
        <frame4 />
        <img
          class="search-2-1-4"
          src="https://cdn.animaapp.com/projects/65f2762d671e542340cde741/releases/65f2763f73397a9f4e7fdc6d/img/search--2--1.svg"
          alt="search (2) 1"
        />
        <div class="cursor-4"></div>
        <img
          class="right-chevron-1-1-4"
          src="https://cdn.animaapp.com/projects/65f2762d671e542340cde741/releases/65f2763f73397a9f4e7fdc6d/img/right-chevron--1--1.svg"
          alt="right-chevron (1) 1"
        />
        <div class="overlap-group1-5">
          <router-link to="/membership">
            <div class="be-membership-4 poppins-bold-black-18px">{{ beMembership }}</div>
          </router-link>
        </div>
      </div>
      <h1 class="title-4 poppins-semi-bold-deep-cove-40px">{{ title }}</h1>
      <p class="the-genesian-theatre-3 poppins-semi-bold-black-20px">{{ theGenesianTheatre }}</p>
      <div class="content-1">
        <div class="group">
          <div class="name-5">
            <div class="place-6 opensans-normal-deep-cove-16px">{{ place1 }}</div>
            <div class="input-10"></div>
          </div>
          <div class="email-address-6">
            <div class="email-address-7 poppins-normal-deep-cove-16px">{{ emailAddress }}</div>
            <div class="input-11"></div>
          </div>
          <div class="subject-6">
            <div class="subject-7 opensans-normal-deep-cove-16px">{{ subject }}</div>
            <img class="input-12" :src="input" alt="input" />
          </div>
          <div class="message-6">
            <div class="message-7 opensans-normal-deep-cove-16px">{{ message }}</div>
            <div class="input-13"></div>
          </div>
        </div>
        <div class="overlap-group-5">
          <div class="place-7 poppins-semi-bold-white-36px">{{ place2 }}</div>
        </div>
      </div>
      <div
        class="overlap-group3-3 poppins-semi-bold-white-15px"
        :style="{ 'background-image': 'url(' + overlapGroup3 + ')' }"
      >
        <p class="copyright-2007-202-5">{{ copyright2007202 }}</p>
        <p class="site-design-by-agendi-webmaster-5">{{ siteDesignByAgendiWebmaster }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Frame4 from "./Frame4";
export default {
  name: "Accessibility",
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
    "theGenesianTheatre",
    "place1",
    "emailAddress",
    "subject",
    "input",
    "message",
    "place2",
    "overlapGroup3",
    "copyright2007202",
    "siteDesignByAgendiWebmaster",
  ],
};
</script>

<style>
.accessibility {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 2944px;
  overflow: hidden;
  width: 1920px;
}

.overlap-group2-4 {
  height: 203px;
  position: relative;
  width: 1923px;
}

.curtain-red_long-1-4 {
  height: 203px;
  left: 92px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-2-3 {
  height: 203px;
  left: 183px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-3-3 {
  height: 203px;
  left: 275px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-4-3 {
  height: 203px;
  left: 367px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-5-4 {
  height: 203px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-6-4 {
  height: 203px;
  left: 457px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-7-4 {
  height: 203px;
  left: 549px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-8-4 {
  height: 203px;
  left: 641px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-9-4 {
  height: 203px;
  left: 824px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-10-4 {
  height: 203px;
  left: 916px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-11-4 {
  height: 203px;
  left: 1007px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-12-4 {
  height: 203px;
  left: 1099px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-13-4 {
  height: 203px;
  left: 732px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-14-4 {
  height: 203px;
  left: 1191px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-15-4 {
  height: 203px;
  left: 1282px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-16-4 {
  height: 203px;
  left: 1373px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-17-4 {
  height: 203px;
  left: 1465px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-18-3 {
  height: 203px;
  left: 1556px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-19-3 {
  height: 203px;
  left: 1648px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-20-3 {
  height: 203px;
  left: 1740px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-21-3 {
  height: 203px;
  left: 1831px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.logo-1-4 {
  height: 182px;
  left: 55px;
  object-fit: cover;
  position: absolute;
  top: 4px;
  width: 167px;
}

.genesian-theatre-company-4 {
  left: 244px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 49px;
  width: 453px;
}

.address-4 {
  left: 243px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 104px;
  width: 349px;
}

.abn-733-0987-4859-4 {
  left: 244px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 154px;
  width: 231px;
}

.x56-1-4 {
  height: 109px;
  left: 1700px;
  object-fit: cover;
  position: absolute;
  top: 37px;
  width: 201px;
}

.rozelle-fundraising-4 {
  left: 723px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 112px;
  width: 568px;
}

.span-8 {
  text-decoration: underline;
}

.search-2-1-4 {
  height: 24px;
  left: 1422px;
  position: absolute;
  top: 66px;
  width: 24px;
}

.cursor-4 {
  background-color: var(--dark-01);
  height: 28px;
  left: 710px;
  position: absolute;
  top: 64px;
  width: 2px;
}

.right-chevron-1-1-4 {
  height: 16px;
  left: 674px;
  position: absolute;
  top: 71px;
  width: 16px;
}

.overlap-group1-5 {
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

.be-membership-4 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  min-height: 27px;
  width: 146px;
}

.title-4 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 32.02px;
  margin-top: 19px;
  min-height: 55px;
  transform: rotate(-0.04deg);
  width: 590px;
}

.the-genesian-theatre-3 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 46px;
  margin-top: 62px;
  min-height: 150px;
  text-align: justify;
  width: 956px;
}

.content-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 74px;
  margin-left: 53.71px;
  margin-top: 61px;
  min-height: 643px;
  padding: 0 0.2px;
  width: 712px;
}

.group {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 0;
  min-height: 504px;
  transform: rotate(-0.04deg);
  width: 712px;
}

.name-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-left: 0.26px;
  min-height: 99px;
  width: 344px;
}

.place-6 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 0.04px;
  min-height: 22px;
  width: 91px;
}

.input-10 {
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--grey-02);
  border-radius: 14px;
  box-shadow: 0px 4px 4px #414141;
  height: 48px;
  width: 342px;
}

.email-address-6 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-left: 0.2px;
  margin-top: 25px;
  min-height: 100px;
  padding: 0 0px;
  width: 344px;
}

.email-address-7 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 0.38px;
  min-height: 24px;
  width: 119px;
}

.input-11 {
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--grey-02);
  border-radius: 14px;
  box-shadow: 0px 4px 4px #414141;
  height: 51px;
  width: 342px;
}

.subject-6 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-left: 0.09px;
  margin-top: 51px;
  min-height: 78px;
  width: 344px;
}

.subject-7 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 4.03px;
  min-height: 20px;
  width: 63px;
}

.input-12 {
  height: 52px;
  margin-left: -4.01px;
  transform: rotate(0.04deg);
  width: 350px;
}

.message-6 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-left: 0;
  margin-top: 35px;
  min-height: 117px;
  padding: 0px 0px;
  width: 714px;
}

.message-7 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 0;
  min-height: 20px;
  width: 72px;
}

.input-13 {
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--grey-02);
  border-radius: 14px;
  box-shadow: 0px 4px 4px #414141;
  height: 84px;
  width: 712px;
}

.overlap-group-5 {
  align-items: flex-end;
  background-image: url(https://cdn.animaapp.com/projects/65f2762d671e542340cde741/releases/65f2763f73397a9f4e7fdc6d/img/background-1.svg);
  background-size: 100% 100%;
  display: flex;
  height: 65px;
  margin-left: 6.1px;
  min-width: 168px;
  padding: 5px 36px;
}

.place-7 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 54px;
  text-align: justify;
  width: 96px;
}

.overlap-group3-3 {
  align-items: flex-end;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  margin-left: -2px;
  margin-top: 1469px;
  min-height: 282px;
  padding: 38px 658px;
  width: 1927px;
}

.copyright-2007-202-5 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 157px;
  min-height: 26px;
  width: 475px;
}

.site-design-by-agendi-webmaster-5 {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 75px;
  min-height: 23px;
  min-width: 258px;
}
</style>
