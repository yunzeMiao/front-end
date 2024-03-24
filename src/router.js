import Vue from "vue";
import Router from "vue-router";
import Training from "./components/Training";
import AboutUsOurHistory from "./components/AboutUsOurHistory";
import ContactUs from "./components/ContactUs";
import NowOnStageProduction from "./components/NowOnStageProduction";
import Accessibility from "./components/Accessibility";
import Membership from "./components/Membership";
import GiftVouchers from "./components/GiftVouchers";
import NowOnStageCrew from "./components/NowOnStageCrew";
import NowOnStageCast from "./components/NowOnStageCast";
import COVIDSafety from "./components/COVIDSafety";
import Search from "./components/search.vue";
import {
  trainingData,
  aboutUsOurHistoryData,
  contactUsData,
  nowOnStageProductionData,
  accessibilityData,
  membershipData,
  giftVouchersData,
  nowOnStageCrewData,
  nowOnStageCastData,
  cOVIDSafetyData,
} from "./data";

Vue.use(Router);
export const routes = [
  {
    path: "/training",
    component: Training,
    props: { ...trainingData },
  },
  {
    path: "/about-us-u38-our-history",
    component: AboutUsOurHistory,
    props: { ...aboutUsOurHistoryData },
  },
  {
    path: "/contact-us",
    component: ContactUs,
    props: { ...contactUsData },
  },
  {
    path: "/accessibility",
    component: Accessibility,
    props: { ...accessibilityData },
  },
  {
    path: "/membership",
    component: Membership,
    props: { ...membershipData },
  },
  {
    path: "/gift-vouchers",
    component: GiftVouchers,
    props: { ...giftVouchersData },
  },
  {
    path: "/now-on-stage-crew",
    component: NowOnStageCrew,
    props: { ...nowOnStageCrewData },
  },
  {
    path: "/now-on-stage-cast",
    component: NowOnStageCast,
    props: { ...nowOnStageCastData },
  },
  {
    path: "/covid-safety",
    component: COVIDSafety,
    props: { ...cOVIDSafetyData },
  },
  {
    path: "/Search",
    component: Search,
    props: { ...cOVIDSafetyData },
  },
  {
    path: "*",
    component: NowOnStageProduction,
    props: { ...nowOnStageProductionData },
  },
];
export default new Router({
  mode: "history",
  routes,
});
