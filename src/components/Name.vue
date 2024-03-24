<template>
  <div :class="[`name`, className || ``]">
    <div class="place opensans-normal-deep-cove-16px">NAME</div>
    <div class="input"></div>
  </div>
</template>

<script>
export default {
  name: "Name",
  props: ["className"],
};
</script>

<style>
.name {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 29px;
  margin-left: 142.04px;
  margin-top: 43px;
  min-height: 99px;
  transform: rotate(-0.04deg);
  width: 344px;
}

.place {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 0;
  min-height: 22px;
  text-align: justify;
  width: 91px;
}

.input {
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--grey-02);
  border-radius: 14px;
  box-shadow: 0px 4px 4px #414141;
  height: 48px;
  width: 342px;
}

.name.name-1 {
  margin-left: 701.76px;
  margin-top: 75px;
  padding: 0 0px;
  transform: unset;
}
</style>
