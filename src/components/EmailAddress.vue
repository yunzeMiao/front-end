<template>
  <div :class="[`email-address`, className || ``]">
    <div class="email-address-1 poppins-normal-deep-cove-16px">EMAIL ADDRESS</div>
    <div class="input-2"></div>
  </div>
</template>

<script>
export default {
  name: "EmailAddress",
  props: ["className"],
};
</script>

<style>
.email-address {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-left: 142.04px;
  margin-top: 13px;
  min-height: 100px;
  transform: rotate(-0.04deg);
  width: 344px;
}

.email-address-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 0.38px;
  min-height: 24px;
  text-align: justify;
  width: 119px;
}

.input-2 {
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--grey-02);
  border-radius: 14px;
  box-shadow: 0px 4px 4px #414141;
  height: 51px;
  width: 342px;
}

.email-address.email-address-2 {
  margin-left: 224.04px;
  padding: 0 0px;
}

.email-address.email-address-4 {
  margin-left: 701.59px;
  padding: 0 0px;
  transform: unset;
}
</style>
