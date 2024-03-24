<template>
  <div class="lower-info">
    <div class="lower-info-item opensans-bold-mirage-20px">By Craig Warner</div>
    <p class="lower-info-item opensans-bold-mirage-20px">
      Based on the novel &#39;Strangers on a Train&#39; by Patricia Highsmith
    </p>
    <p class="lower-info-item opensans-bold-black-20px">Directed by Mark G. Nagle</p>
  </div>
</template>

<script>
export default {
  name: "LowerInfo",
};
</script>

<style>
.lower-info,
.lower-info-1,
.lower-info-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 45px;
  min-height: 95px;
  width: 627px;
}

.lower-info-item,
.lower-info-item-1,
.lower-info-item-2 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 27px;
}
</style>
