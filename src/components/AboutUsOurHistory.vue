<template>
  <div class="container-center-horizontal">
    <div class="about-us-u38-our-history screen">
      <div class="overlap-group-container">
        <div class="overlap-group3-1">
          <img class="curtain-red_long-1-1" :src="curtainRed_Long1" alt="curtain-red_long 1" /><img
            class="curtain-red_long"
            :src="curtainRed_Long2"
            alt="curtain-red_long 2"
          /><img class="curtain-red_long-22" :src="curtainRed_Long3" alt="curtain-red_long 3" /><img
            class="curtain-red_long-23"
            :src="curtainRed_Long4"
            alt="curtain-red_long 4"
          /><img class="curtain-red_long-5-1" :src="curtainRed_Long5" alt="curtain-red_long 5" /><img
            class="curtain-red_long-6-1"
            :src="curtainRed_Long6"
            alt="curtain-red_long 6"
          /><img class="curtain-red_long-7-1" :src="curtainRed_Long7" alt="curtain-red_long 7" /><img
            class="curtain-red_long-8-1"
            :src="curtainRed_Long8"
            alt="curtain-red_long 8"
          /><img class="curtain-red_long-9-1" :src="curtainRed_Long9" alt="curtain-red_long 9" /><img
            class="curtain-red_long-10-1"
            :src="curtainRed_Long10"
            alt="curtain-red_long 10"
          /><img class="curtain-red_long-11-1" :src="curtainRed_Long11" alt="curtain-red_long 11" /><img
            class="curtain-red_long-12-1"
            :src="curtainRed_Long12"
            alt="curtain-red_long 12"
          /><img class="curtain-red_long-13-1" :src="curtainRed_Long13" alt="curtain-red_long 13" /><img
            class="curtain-red_long-14-1"
            :src="curtainRed_Long14"
            alt="curtain-red_long 14"
          /><img class="curtain-red_long-15-1" :src="curtainRed_Long15" alt="curtain-red_long 15" /><img
            class="curtain-red_long-16-1"
            :src="curtainRed_Long16"
            alt="curtain-red_long 16"
          /><img class="logo-1-1" :src="logo1" alt="logo 1" />
          <div class="genesian-theatre-company-1 opensanshebrew-bold-white-18px">{{ genesianTheatreCompany }}</div>
          <p class="address-1 opensanshebrew-bold-white-18px">{{ address }}</p>
          <div class="abn-733-0987-4859-1 opensanshebrew-bold-black-18px">{{ abn73309874859 }}</div>
          <p class="rozelle-fundraising-1 opensanshebrew-regular-normal-white-24px">
            <span class="span-2 opensanshebrew-italic-normal-white-24px">{{ spanText1 }}</span
            ><span class="opensanshebrew-bold-white-24px">{{ spanText2 }}</span
            ><span class="span-2 opensanshebrew-italic-normal-white-24px">{{ spanText3 }}</span
            ><span class="opensanshebrew-italic-normal-white-24px">{{ spanText4 }}</span
            ><span class="opensanshebrew-bold-white-24px">{{ spanText5 }}</span>
          </p>
          <div class="frame-4-2"><frame2 :className="frame2Props.className" /></div>
          <img
            class="search-2-1-1"
            src="https://cdn.animaapp.com/projects/65f2762d671e542340cde741/releases/65f2763f73397a9f4e7fdc6d/img/search--2--1-1.svg"
            alt="search (2) 1"
          />
          <div class="cursor-1"></div>
          <img
            class="right-chevron-1-1-1"
            src="https://cdn.animaapp.com/projects/65f2762d671e542340cde741/releases/65f2763f73397a9f4e7fdc6d/img/right-chevron--1--1-1.svg"
            alt="right-chevron (1) 1"
          />
        </div>
        <div class="overlap-group2-1">
          <img class="curtain-red_long-17-1" :src="curtainRed_Long17" alt="curtain-red_long 17" /><img
            class="curtain-red_long-1-1"
            :src="curtainRed_Long18"
            alt="curtain-red_long 18"
          /><img class="curtain-red_long" :src="curtainRed_Long19" alt="curtain-red_long 19" /><img
            class="curtain-red_long-22"
            :src="curtainRed_Long20"
            alt="curtain-red_long 20"
          /><img class="curtain-red_long-23" :src="curtainRed_Long21" alt="curtain-red_long 21" /><img
            class="x56-1-1"
            :src="x561"
            alt="56 1"
          />
          <div class="overlap-group1-1">
            <router-link to="/membership">
              <div class="be-membership-1 poppins-bold-black-18px">{{ beMembership }}</div>
            </router-link>
          </div>
        </div>
      </div>
      <img
        class="logo"
        src="https://cdn.animaapp.com/projects/65f2762d671e542340cde741/releases/65f2763f73397a9f4e7fdc6d/img/logo.svg"
        alt="logo"
      />
      <div class="about-us">{{ aboutUs }}</div>
      <div class="overlap-group4-1">
        <img
          class="vector"
          src="https://cdn.animaapp.com/projects/65f2762d671e542340cde741/releases/65f2763f73397a9f4e7fdc6d/img/vector.svg"
          alt="Vector"
        />
        <img
          class="vector-1"
          src="https://cdn.animaapp.com/projects/65f2762d671e542340cde741/releases/65f2763f73397a9f4e7fdc6d/img/vector-1.svg"
          alt="Vector"
        />
        <img
          class="vector-2"
          src="https://cdn.animaapp.com/projects/65f2762d671e542340cde741/releases/65f2763f73397a9f4e7fdc6d/img/vector-2.svg"
          alt="Vector"
        />
        <p class="the-genesian-theatre-1 poppins-semi-bold-black-20px">
          The Genesian Theatre Company celebrates our 79th year as a company in 2023! For 69 years we have been
          operating from our home at 420 Kent St, an historic church that has a long tradition as a theatre in the heart
          of the Sydney CBD. We boast among our alumni numerous household names in Australian theatre and film such as
          Angela Punch, Bryan Brown, Baz Luhrmann, Coral Lansbury, Judi Farr, John Bell, Peter Carroll, and Nick
          Enright. We&#39;re thrilled that some of our more recent cast members such as Tom Tilley, Rowan Witt, Lib
          Campbell, Aaron Glenane, and Bianca Bradey have gone on to carve out their own space in the industry in the
          past few years. We are also just as proud of the hundreds of other talented actors, directors, stage managers,
          set and costume designers, lighting and sound specialists, stage and production staff who have contributed to
          Sydney&#39;s unique little theatre. We are particularly proud of all our members who volunteer their time to
          work Front of House to help you enjoy your visit to the Genesian Theatre.<br /><br />Over the years the
          company has developed into a theatre providing a training ground for young theatre professionals and a place
          where those who love the theatre can meet, share, and extend their knowledge of the performing arts. The
          Genesian Theatre Company is one of Sydney&#39;s most active theatre companies. In addition to six main stage
          productions each year we run classes, workshops, and many other activities.<br /><br />Membership of the
          company is open to all people over the age of eighteen.<br /><br />The building which houses the Genesian
          Theatre Company was originally St John&#39;s Church, and dates from 1868. It served as both a church and a
          poor school until 1932 when it became the Kursaal Theatre, housing the Sydney Repertory Company. In 1938 it
          became the first Matthew Talbot Hostel. Since 1954 it has been the home of the Genesian Theatre Company which
          was formed in 1944.<br /><br />The Genesian Theatre Company acknowledges the Gadigal people of the Eora Nation
          as the traditional custodians of the land our theatre stands on, and pay our respects to their Elders past and
          present.
        </p>
      </div>
      <h1 class="title-1">{{ title }}</h1>
      <div class="overlap-group5">
        <a href="https://en.wikipedia.org/wiki/Genesius_of_Rome" target="_blank">
          <div class="frame-3-3">
            <router-link to="/membership">
              <div class="previous-productions">{{ previousProductions }}</div>
            </router-link>
          </div></a
        >
        <p class="between-1945-and-195 poppins-semi-bold-black-18px">{{ between1945And195 }}</p>
        <p class="monday-29th-january poppins-semi-bold-black-18px">{{ monday29ThJanuary }}</p>
        <p class="the-genesian-theatre-2">
          <span class="poppins-semi-bold-black-18px">{{ spanText6 }}</span
          ><span class="span1">{{ spanText7 }}</span
          ><span class="poppins-semi-bold-black-18px">{{ spanText8 }}</span>
        </p>
      </div>
      <p class="please-contact-the-t poppins-semi-bold-black-18px">{{ pleaseContactTheT }}</p>
      <div class="name-2">
        <div class="place-4 opensans-normal-deep-cove-16px">{{ place }}</div>
        <div class="input-7"></div>
      </div>
      <email-address :className="emailAddressProps.className" />
      <subject :className="subjectProps.className" />
      <img class="input-8" :src="input" alt="input" />
      <div class="message-4">
        <div class="message-5 opensans-normal-deep-cove-16px">{{ message }}</div>
        <div class="input-9"></div>
      </div>
      <send-method :className="sendMethodProps.className" />
      <div
        class="overlap-group6 poppins-semi-bold-white-15px"
        :style="{ 'background-image': 'url(' + overlapGroup6 + ')' }"
      >
        <p class="copyright-2007-202-1">{{ copyright2007202 }}</p>
        <p class="site-design-by-agendi-webmaster-1">{{ siteDesignByAgendiWebmaster }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Frame2 from "./Frame2";
import EmailAddress from "./EmailAddress";
import Subject from "./Subject";
import SendMethod from "./SendMethod";
export default {
  name: "AboutUsOurHistory",
  components: {
    Frame2,
    EmailAddress,
    Subject,
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
    "logo1",
    "genesianTheatreCompany",
    "address",
    "abn73309874859",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "curtainRed_Long17",
    "curtainRed_Long18",
    "curtainRed_Long19",
    "curtainRed_Long20",
    "curtainRed_Long21",
    "x561",
    "beMembership",
    "aboutUs",
    "title",
    "previousProductions",
    "between1945And195",
    "monday29ThJanuary",
    "spanText6",
    "spanText7",
    "spanText8",
    "pleaseContactTheT",
    "place",
    "input",
    "message",
    "overlapGroup6",
    "copyright2007202",
    "siteDesignByAgendiWebmaster",
    "frame2Props",
    "emailAddressProps",
    "subjectProps",
    "sendMethodProps",
  ],
};
</script>

<style>
.about-us-u38-our-history {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 2944px;
  overflow: hidden;
  position: relative;
  width: 1938px;
}

.overlap-group-container {
  align-items: flex-start;
  display: flex;
  min-width: 1942px;
}

.overlap-group3-1 {
  height: 203px;
  position: relative;
  width: 1479px;
}

.curtain-red_long-1-1 {
  height: 203px;
  left: 93px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long {
  height: 203px;
  left: 185px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 93px;
}

.curtain-red_long-22 {
  height: 203px;
  left: 278px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-23 {
  height: 203px;
  left: 370px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 93px;
}

.curtain-red_long-5-1 {
  height: 203px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 93px;
}

.curtain-red_long-6-1 {
  height: 203px;
  left: 462px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-7-1 {
  height: 203px;
  left: 554px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 93px;
}

.curtain-red_long-8-1 {
  height: 203px;
  left: 647px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-9-1 {
  height: 203px;
  left: 832px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 93px;
}

.curtain-red_long-10-1 {
  height: 203px;
  left: 925px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-11-1 {
  height: 203px;
  left: 1017px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 93px;
}

.curtain-red_long-12-1 {
  height: 203px;
  left: 1110px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-13-1 {
  height: 203px;
  left: 739px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 93px;
}

.curtain-red_long-14-1 {
  height: 203px;
  left: 1202px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 93px;
}

.curtain-red_long-15-1 {
  height: 203px;
  left: 1295px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.curtain-red_long-16-1 {
  height: 203px;
  left: 1386px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 93px;
}

.logo-1-1 {
  height: 182px;
  left: 56px;
  object-fit: cover;
  position: absolute;
  top: 4px;
  width: 168px;
}

.genesian-theatre-company-1 {
  left: 246px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 49px;
  width: 458px;
}

.address-1 {
  left: 245px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 104px;
  width: 352px;
}

.abn-733-0987-4859-1 {
  left: 246px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 154px;
  width: 233px;
}

.rozelle-fundraising-1 {
  left: 730px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 112px;
  width: 574px;
}

.span-2 {
  text-decoration: underline;
}

.frame-4-2 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 58px;
  left: 604px;
  padding: 10px;
  position: absolute;
  top: 49px;
  width: 875px;
}

.search-2-1-1 {
  height: 24px;
  left: 1436px;
  position: absolute;
  top: 66px;
  width: 24px;
}

.cursor-1 {
  background-color: var(--dark-01);
  height: 28px;
  left: 717px;
  position: absolute;
  top: 64px;
  width: 2px;
}

.right-chevron-1-1-1 {
  height: 16px;
  left: 681px;
  position: absolute;
  top: 71px;
  width: 16px;
}

.overlap-group2-1 {
  height: 203px;
  position: relative;
  width: 463px;
}

.curtain-red_long-17-1 {
  height: 203px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 92px;
}

.x56-1-1 {
  height: 109px;
  left: 238px;
  object-fit: cover;
  position: absolute;
  top: 37px;
  width: 203px;
}

.overlap-group1-1 {
  align-items: flex-start;
  background-color: var(--accent-pink);
  border-radius: 6px;
  display: flex;
  height: 60px;
  justify-content: flex-end;
  left: 30px;
  min-width: 180px;
  padding: 15.1px 16.3px;
  position: absolute;
  top: 52px;
}

.be-membership-1 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  min-height: 27px;
  width: 147px;
}

.logo {
  align-self: center;
  height: 88px;
  margin-left: 32px;
  margin-top: 88px;
  width: 120px;
}

.about-us {
  align-self: center;
  color: var(--moccaccino);
  font-family: var(--font-family-poppins);
  font-size: var(--font-size-xxl);
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 31px;
  margin-top: 20px;
  min-height: 75px;
  min-width: 227px;
}

.overlap-group4-1 {
  align-self: center;
  height: 602px;
  margin-right: 12px;
  margin-top: 9px;
  position: relative;
  width: 1594px;
}

.vector {
  height: 8px;
  left: 17px;
  position: absolute;
  top: 258px;
  width: 21px;
}

.vector-1 {
  height: 8px;
  left: 13px;
  position: absolute;
  top: 209px;
  width: 22px;
}

.vector-2 {
  height: 8px;
  left: 13px;
  position: absolute;
  top: 160px;
  width: 22px;
}

.the-genesian-theatre-1 {
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: justify;
  top: 0;
  width: 1594px;
}

.title-1 {
  color: var(--moccaccino);
  font-family: var(--font-family-poppins);
  font-size: 60px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 167px;
  margin-top: 127px;
  min-height: 90px;
  width: 811px;
}

.overlap-group5 {
  align-self: center;
  height: 354px;
  margin-right: 315px;
  margin-top: 228px;
  position: relative;
  width: 1191px;
}

.frame-3-3 {
  align-items: flex-end;
  cursor: pointer;
  display: flex;
  height: 26px;
  left: 871px;
  overflow: hidden;
  position: absolute;
  top: 31px;
  width: 106px;
}

.previous-productions {
  color: var(--bunting);
  cursor: pointer;
  font-family: var(--font-family-open_sans);
  font-size: var(--font-size-xs);
  font-weight: 600;
  letter-spacing: 0;
  line-height: 32px;
  margin-bottom: -310px;
  margin-left: -855px;
  min-height: 35px;
  text-align: justify;
  text-decoration: underline;
  white-space: nowrap;
  width: 335px;
}

.between-1945-and-195 {
  left: 7px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: justify;
  top: 230px;
  width: 1184px;
}

.monday-29th-january {
  left: 3px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: justify;
  top: 112px;
  width: 1184px;
}

.the-genesian-theatre-2 {
  color: transparent;
  font-family: var(--font-family-poppins);
  font-size: var(--font-size-s);
  font-weight: 600;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: justify;
  top: 0;
  width: 1183px;
}

.span1 {
  color: var(--bunting);
  text-decoration: underline;
}

.please-contact-the-t {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 223px;
  margin-top: 33px;
  min-height: 27px;
  min-width: 711px;
  text-align: justify;
}

.name-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 29px;
  margin-left: 223.04px;
  margin-top: 45px;
  min-height: 99px;
  padding: 0 0px;
  transform: rotate(-0.04deg);
  width: 345px;
}

.place-4 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 22px;
  text-align: justify;
  width: 91px;
}

.input-7 {
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--grey-02);
  border-radius: 14px;
  box-shadow: 0px 4px 4px #414141;
  height: 48px;
  margin-left: 1px;
  width: 342px;
}

.input-8 {
  height: 52px;
  margin-left: 220.01px;
  margin-top: 17px;
  width: 350px;
}

.message-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-left: 223.05px;
  margin-top: 29px;
  min-height: 117px;
  padding: 0 0px;
  transform: rotate(-0.04deg);
  width: 718px;
}

.message-5 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  text-align: justify;
  width: 72px;
}

.input-9 {
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--grey-02);
  border-radius: 14px;
  box-shadow: 0px 4px 4px #414141;
  height: 84px;
  margin-left: 4px;
  width: 712px;
}

.overlap-group6 {
  align-items: flex-end;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  margin-left: -3px;
  margin-top: 41px;
  min-height: 290px;
  padding: 39px 675px;
  width: 1976px;
}

.copyright-2007-202-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 161px;
  min-height: 27px;
  width: 487px;
}

.site-design-by-agendi-webmaster-1 {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 77px;
  min-height: 24px;
  width: 265px;
}
</style>
