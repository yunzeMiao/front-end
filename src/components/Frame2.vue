<template>
  <div :class="[`frame-3`, className || ``]">
    <div class="menus inter-normal-black-16px">Menus</div>
    <select
      class="form-select"
      id="selectOption2"
      v-model="selectedOption"
      @change="selectOption"
    >
      <option :value="item.path" v-for="item in options" :key="item.path">
        {{ item.path.split("/")[1] }}
      </option>
    </select>
  </div>
</template>

<script>
import { routes } from "../router";
export default {
  name: "Frame2",
  props: ["className"],
  data() {
    return {
      selectedOption: "",
      options: routes.slice(0, routes.length - 1),
    };
  },

  methods: {
    selectOption(option) {
      // this.selectedOption = option.target.value;
      console.log(option.target.value);
      this.$router.push(option.target.value);
    },
  },
};
</script>

<style>
.frame-3 {
  align-items: center;
  display: flex;
  gap: 10px;
  height: 37px;
  margin-right: -10px;
  padding: 0px 10px;
  /* position: relative; */
  width: 857px;
}

.menus {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-3.frame-3-1 {
  margin-right: -2px;
}
.form-select {
  padding-left: 100px;
  height: 58px;
  width: 867px;
  position: absolute;
  left: 0;
  background: transparent;
}
</style>
