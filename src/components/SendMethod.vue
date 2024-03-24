<template>
  <div :class="[`send-method`, className || ``]">
    <div class="overlap-group"><div class="place-2 poppins-semi-bold-white-36px">SEND</div></div>
  </div>
</template>

<script>
export default {
  name: "SendMethod",
  props: ["className"],
};
</script>

<style>
.send-method {
  align-items: flex-start;
  display: flex;
  margin-left: 139px;
  margin-top: 70px;
  min-width: 168px;
}

.overlap-group {
  align-items: flex-end;
  background-image: url(https://cdn.animaapp.com/projects/65f2762d671e542340cde741/releases/65f2763f73397a9f4e7fdc6d/img/background.svg);
  background-size: 100% 100%;
  display: flex;
  height: 65px;
  min-width: 168px;
  padding: 5px 36px;
}

.place-2 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 54px;
  text-align: justify;
  width: 96px;
}

.send-method.send-method-1 {
  margin-left: 221px;
}

.send-method.send-method-1 .overlap-group {
  background-image: url(https://cdn.animaapp.com/projects/65f2762d671e542340cde741/releases/65f2763f73397a9f4e7fdc6d/img/background-1.svg);
}
</style>
