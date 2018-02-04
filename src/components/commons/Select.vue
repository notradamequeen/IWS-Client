<template>
<div>
    <select
        v-model=name
        class="form-control"
        id="exampleSelect1"
    >
        <!-- <option v-for="risktype in riskTypeList" v-bind:value="risktype.value">
            {{risktype.text}}
        </option> -->
    </select>
    {{ options }}
</div>
</template>
<script>
export default {
  props: ['riskTypeOptions', ],
  name: 'Select',
  data() {
    return {
      name: '',
      options: this.riskTypeOptions
    };
  },

};
</script>
