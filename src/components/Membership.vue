<template>
  <div class="container-center-horizontal">
    <div class="membership screen">
      <div class="overlap-group3-4">
        <img class="curtain-red_long-1-5" :src="curtainRed_Long1" alt="curtain-red_long 1" /><img
          class="curtain-red_long-2-4"
          :src="curtainRed_Long2"
          alt="curtain-red_long 2"
        /><img class="curtain-red_long-3-4" :src="curtainRed_Long3" alt="curtain-red_long 3" /><img
          class="curtain-red_long-4-4"
          :src="curtainRed_Long4"
          alt="curtain-red_long 4"
        /><img class="curtain-red_long-5-5" :src="curtainRed_Long5" alt="curtain-red_long 5" /><img
          class="curtain-red_long-6-5"
          :src="curtainRed_Long6"
          alt="curtain-red_long 6"
        /><img class="curtain-red_long-7-5" :src="curtainRed_Long7" alt="curtain-red_long 7" /><img
          class="curtain-red_long-8-5"
          :src="curtainRed_Long8"
          alt="curtain-red_long 8"
        /><img class="curtain-red_long-9-5" :src="curtainRed_Long9" alt="curtain-red_long 9" /><img
          class="curtain-red_long-10-5"
          :src="curtainRed_Long10"
          alt="curtain-red_long 10"
        /><img class="curtain-red_long-11-5" :src="curtainRed_Long11" alt="curtain-red_long 11" /><img
          class="curtain-red_long-12-5"
          :src="curtainRed_Long12"
          alt="curtain-red_long 12"
        /><img class="curtain-red_long-13-5" :src="curtainRed_Long13" alt="curtain-red_long 13" /><img
          class="curtain-red_long-14-5"
          :src="curtainRed_Long14"
          alt="curtain-red_long 14"
        /><img class="curtain-red_long-15-5" :src="curtainRed_Long15" alt="curtain-red_long 15" /><img
          class="curtain-red_long-16-5"
          :src="curtainRed_Long16"
          alt="curtain-red_long 16"
        /><img class="curtain-red_long-17-5" :src="curtainRed_Long17" alt="curtain-red_long 17" /><img
          class="curtain-red_long-18-4"
          :src="curtainRed_Long18"
          alt="curtain-red_long 18"
        /><img class="curtain-red_long-19-4" :src="curtainRed_Long19" alt="curtain-red_long 19" /><img
          class="curtain-red_long-20-4"
          :src="curtainRed_Long20"
          alt="curtain-red_long 20"
        /><img class="curtain-red_long-21-4" :src="curtainRed_Long21" alt="curtain-red_long 21" /><img
          class="logo-1-5"
          :src="logo1"
          alt="logo 1"
        />
        <div class="genesian-theatre-company-5 opensanshebrew-bold-white-18px">{{ genesianTheatreCompany }}</div>
        <p class="address-5 opensanshebrew-bold-white-18px">{{ address }}</p>
        <div class="abn-733-0987-4859-5 opensanshebrew-bold-black-18px">{{ abn73309874859 }}</div>
        <img class="x56-1-5" :src="x561" alt="56 1" />
        <p class="rozelle-fundraising-5 opensanshebrew-regular-normal-white-24px">
          <span class="span-10 opensanshebrew-italic-normal-white-24px">{{ spanText1 }}</span
          ><span class="opensanshebrew-bold-white-24px">{{ spanText2 }}</span
          ><span class="span-10 opensanshebrew-italic-normal-white-24px">{{ spanText3 }}</span
          ><span class="opensanshebrew-italic-normal-white-24px">{{ spanText4 }}</span
          ><span class="opensanshebrew-bold-white-24px">{{ spanText5 }}</span>
        </p>
        <div class="frame-1">
          <div class="overlap-group1-6">
            <frame4 :className="frame4Props.className" />
            <img
              class="search-2-1-5"
              src="https://cdn.animaapp.com/projects/65f2762d671e542340cde741/releases/65f2763f73397a9f4e7fdc6d/img/search--2--1.svg"
              alt="search (2) 1"
            />
            <div class="cursor-5"></div>
            <img
              class="right-chevron-1-1-5"
              src="https://cdn.animaapp.com/projects/65f2762d671e542340cde741/releases/65f2763f73397a9f4e7fdc6d/img/right-chevron--1--1.svg"
              alt="right-chevron (1) 1"
            />
          </div>
          <div class="cont-container">
            <div class="content-2">
              <div class="become-a-member">
                <h1 class="title-5 poppins-semi-bold-deep-cove-40px">{{ title }}</h1>
                <name :className="nameProps.className" />
                <email-address :className="emailAddressProps.className" />
                <subject :className="subjectProps.className" />
                <img class="input-14" :src="input" alt="input" /><message :className="messageProps.className" />
              </div>
              <div class="overlap-group-6">
                <div class="place-8 poppins-semi-bold-white-36px">{{ place }}</div>
              </div>
            </div>
            <div class="flex-container-2042174 poppins-semi-bold-black-20px">
              <div class="text">
                <span class="poppins-semi-bold-black-20px">{{ spanText6 }}</span>
              </div>
              <div class="text">
                <span class="poppins-semi-bold-black-20px">{{ spanText7 }}</span>
              </div>
              <div class="text">
                <span class="poppins-semi-bold-black-20px">{{ spanText8 }}</span>
              </div>
              <div class="text">
                <span class="poppins-semi-bold-black-20px">{{ spanText9 }}</span>
              </div>
              <div class="text">
                <span class="poppins-semi-bold-black-20px">{{ spanText10 }}</span>
              </div>
              <div class="text">
                <span class="poppins-semi-bold-black-20px">{{ spanText11 }}</span>
              </div>
            </div>
          </div>
          <p class="copyright-2007-202-6 poppins-semi-bold-white-15px">{{ copyright20072021 }}</p>
        </div>
      </div>
      <div
        class="overlap-group4-3 poppins-semi-bold-white-15px"
        :style="{ 'background-image': 'url(' + overlapGroup4 + ')' }"
      >
        <p class="copyright-2007-202-7">{{ copyright20072022 }}</p>
        <p class="site-design-by-agendi-webmaster-6">{{ siteDesignByAgendiWebmaster }}</p>
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
export default {
  name: "Membership",
  components: {
    Frame4,
    Name,
    EmailAddress,
    Subject,
    Message,
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
    "title",
    "input",
    "place",
    "spanText6",
    "spanText7",
    "spanText8",
    "spanText9",
    "spanText10",
    "spanText11",
    "copyright20072021",
    "overlapGroup4",
    "copyright20072022",
    "siteDesignByAgendiWebmaster",
    "frame4Props",
    "nameProps",
    "emailAddressProps",
    "subjectProps",
    "messageProps",
  ],
};
</script>

<style>
.membership {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 2368px;
  height: 2944px;
  overflow: hidden;
  width: 1920px;
}

.overlap-group3-4 {
  height: 294px;
  position: relative;
  width: 1991px;
}

.curtain-red_long-1-5 {
  height: 203px;
  left: 92px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-2-4 {
  height: 203px;
  left: 183px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-3-4 {
  height: 203px;
  left: 275px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-4-4 {
  height: 203px;
  left: 367px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-5-5 {
  height: 203px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-6-5 {
  height: 203px;
  left: 457px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-7-5 {
  height: 203px;
  left: 549px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-8-5 {
  height: 203px;
  left: 641px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-9-5 {
  height: 203px;
  left: 824px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-10-5 {
  height: 203px;
  left: 916px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-11-5 {
  height: 203px;
  left: 1007px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-12-5 {
  height: 203px;
  left: 1099px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-13-5 {
  height: 203px;
  left: 732px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-14-5 {
  height: 203px;
  left: 1191px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-15-5 {
  height: 203px;
  left: 1282px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-16-5 {
  height: 203px;
  left: 1373px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-17-5 {
  height: 203px;
  left: 1465px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-18-4 {
  height: 203px;
  left: 1556px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-19-4 {
  height: 203px;
  left: 1648px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-20-4 {
  height: 203px;
  left: 1740px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-21-4 {
  height: 203px;
  left: 1831px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.logo-1-5 {
  height: 182px;
  left: 55px;
  object-fit: cover;
  position: absolute;
  top: 4px;
  width: 167px;
}

.genesian-theatre-company-5 {
  left: 244px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 49px;
  width: 453px;
}

.address-5 {
  left: 243px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 104px;
  width: 349px;
}

.abn-733-0987-4859-5 {
  left: 244px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 154px;
  width: 231px;
}

.x56-1-5 {
  height: 109px;
  left: 1700px;
  object-fit: cover;
  position: absolute;
  top: 37px;
  width: 201px;
}

.rozelle-fundraising-5 {
  left: 723px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 112px;
  width: 568px;
}

.span-10 {
  text-decoration: underline;
}

.frame-1 {
  align-items: center;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  left: 53px;
  min-height: 203px;
  padding: 0 28px;
  position: absolute;
  top: 91px;
  width: 1938px;
}

.overlap-group1-6 {
  border-radius: 6px;
  height: 58px;
  margin-left: 19px;
  margin-top: -42px;
  position: relative;
  width: 867px;
}

.search-2-1-5 {
  height: 24px;
  left: 824px;
  position: absolute;
  top: 17px;
  width: 24px;
}

.cursor-5 {
  background-color: var(--dark-01);
  height: 28px;
  left: 112px;
  position: absolute;
  top: 15px;
  width: 2px;
}

.right-chevron-1-1-5 {
  height: 16px;
  left: 76px;
  position: absolute;
  top: 22px;
  width: 16px;
}

.cont-container {
  align-self: flex-start;
  height: 769px;
  margin-top: 208px;
  position: relative;
  width: 1783px;
}

.content-2 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 66px;
  left: 0;
  min-height: 767px;
  position: absolute;
  top: 0;
  width: 1783px;
}

.become-a-member {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 2px;
  margin-top: 1px;
  min-height: 635px;
  position: relative;
  transform: rotate(-0.04deg);
  width: 1784px;
}

.title-5 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: normal;
  min-height: 59px;
  width: 387px;
}

.input-14 {
  height: 52px;
  margin-left: 699.29px;
  margin-top: 17px;
  transform: rotate(0.04deg);
  width: 350px;
}

.overlap-group-6 {
  align-items: flex-end;
  background-image: url(https://cdn.animaapp.com/projects/65f2762d671e542340cde741/releases/65f2763f73397a9f4e7fdc6d/img/background-4.svg);
  background-size: 100% 100%;
  display: flex;
  height: 65px;
  margin-left: 527.23px;
  min-width: 168px;
  padding: 5px 36px;
}

.place-8 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 54px;
  text-align: justify;
  width: 96px;
}

.flex-container-2042174 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 645px;
  left: 18px;
  position: absolute;
  top: 124px;
  width: 956px;
}

.text {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: justify;
}

.copyright-2007-202-6 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 125px;
  margin-top: 493px;
  min-height: 26px;
  width: 475px;
}

.overlap-group4-3 {
  align-items: flex-end;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  margin-left: -5px;
  min-height: 282px;
  padding: 38px 660px;
  width: 1927px;
}

.copyright-2007-202-7 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 157px;
  min-height: 26px;
  width: 475px;
}

.site-design-by-agendi-webmaster-6 {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 71px;
  min-height: 23px;
  min-width: 258px;
}
</style>
