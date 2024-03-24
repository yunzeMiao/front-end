<template>
  <div :class="[`frame-4`, className || ``]"><frame2 /></div>
</template>

<script>
import Frame2 from "./Frame2";
export default {
  name: "Frame4",
  components: {
    Frame2,
  },
  props: ["className"],
};
</script>

<style>
.frame-4 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* height: 58px; */
  left: 598px;
  padding: 10px;
  position: absolute;
  top: 49px;
  /* width: 867px; */
}

.frame-4.frame-4-4 {
  left: 0;
  top: 0;
}
</style>
