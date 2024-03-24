<template>
  <div class="details-1">
    <div class="flex-row-5">
      <div class="production-2 poppins-semi-bold-shady-lady-30px">Production</div>
      <div class="crew-3 poppins-semi-bold-black-30px">Crew</div>
    </div>
    <div class="line-4"></div>
    <div class="line-5"></div>
    <div class="overlap-group-10">
      <div class="stage-manager-1 opensans-bold-mirage-20px">Stage Manager</div>
      <div class="name-7 opensans-normal-mirage-20px">Andrew Badger<br />Rebekah Wright</div>
    </div>
    <div class="overlap-group1-9">
      <div class="lighting-and-sound-operation-1 opensans-bold-mirage-20px">Lighting and Sound Operation</div>
      <div class="cian-byrne-gregory-george-1 opensans-normal-mirage-20px">Cian Byrne<br />Gregory George</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "XDetails",
};
</script>

<style>
.details-1,
.details-2 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  min-height: 268px;
  width: 1183px;
}

.flex-row-5,
.flex-row-6 {
  align-items: flex-start;
  display: flex;
  gap: 191px;
  height: 45px;
  margin-left: 40px;
  min-width: 437px;
}

.production-2,
.production-3 {
  align-self: flex-end;
  letter-spacing: 0;
  line-height: normal;
  min-height: 45px;
  min-width: 167px;
}

.crew-3,
.crew-4 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 45px;
}

.line-4,
.line-6 {
  align-self: center;
  background-color: var(--primary);
  height: 3px;
  margin-right: 77px;
  margin-top: 27px;
  width: 310px;
}

.line-5,
.line-7 {
  background-color: var(--cloud);
  height: 1px;
  width: 1169px;
}

.overlap-group-10,
.overlap-group-11 {
  align-items: center;
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--primary-soft);
  border-radius: 0px 10px 0px 0px;
  display: flex;
  gap: 177px;
  height: 79px;
  margin-top: 34px;
  min-width: 1183px;
  padding: 4px 32px;
}

.stage-manager-1,
.stage-manager-2 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 1px;
  width: 198px;
}

.name-7,
.cian-byrne-gregory-george-1,
.name-8,
.cian-byrne-gregory-george-2 {
  align-self: flex-end;
  letter-spacing: 0;
  line-height: 24px;
  min-height: 48px;
  min-width: 149px;
}

.overlap-group1-9,
.overlap-group1-10 {
  align-items: center;
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--primary-soft);
  display: flex;
  gap: 9px;
  height: 79px;
  min-width: 1183px;
  padding: 4px 32px;
}

.lighting-and-sound-operation-1,
.lighting-and-sound-operation-2 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 1px;
  width: 366px;
}
</style>
