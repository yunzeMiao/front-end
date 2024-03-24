<template>
  <div :class="[`message`, className || ``]">
    <div class="message-1 opensans-normal-deep-cove-16px">MESSAGE</div>
    <div class="input-5"></div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: ["className"],
};
</script>

<style>
.message {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-left: 142.05px;
  margin-top: 29px;
  min-height: 117px;
  padding: 0px 0px;
  transform: rotate(-0.04deg);
  width: 714px;
}

.message-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  text-align: justify;
  width: 72px;
}

.input-5 {
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--grey-02);
  border-radius: 14px;
  box-shadow: 0px 4px 4px #414141;
  height: 84px;
  margin-left: 0;
  width: 712px;
}

.message.message-2 {
  align-self: flex-end;
  margin-left: unset;
  margin-right: 0;
  transform: unset;
}
</style>
