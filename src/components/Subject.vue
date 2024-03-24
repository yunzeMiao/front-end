<template>
  <div :class="[`subject`, className || ``]"><div class="subject-1 opensans-normal-deep-cove-16px">SUBJECT</div></div>
</template>

<script>
export default {
  name: "Subject",
  props: ["className"],
};
</script>

<style>
.subject {
  align-items: flex-end;
  display: flex;
  height: 20px;
  margin-left: 142.01px;
  margin-top: 53px;
  min-width: 65px;
  padding: 0 0px;
  transform: rotate(-0.04deg);
}

.subject-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 0;
  min-height: 20px;
  text-align: justify;
  width: 63px;
}

.subject.subject-2 {
  margin-left: 223.01px;
}

.subject.subject-4 {
  margin-left: 422.53px;
  transform: unset;
}
</style>
