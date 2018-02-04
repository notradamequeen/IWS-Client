<template>
<div>
  <div class="clearfix" style="margin-bottom: 20px;"></div>
  <div
    class="card border-primary mb-3"
    style="max-width: 65rem; margin-left: 10%; margin-right: 8%">
    <div class="card-header">Risk Type</div>
    <div class="card-body text-primary">
      <h4 class="card-title">Please Select your risk type</h4>
      <select v-model="risk_type_id" name="risk_type" class="form-control">
        <option v-for="option in riskTypeOptions" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
      <br/>
      <a :href="'/#/form/'+risk_type_id" class="btn btn-success">Load form</a>
    </div>
  </div>
</div>
</template>
<script>
import Select from './commons/Select';

export default {
  name: 'Home',
  data() {
    return {
      risk_type_id: null,
      msg: 'test',
    };
  },
  components: {
    Select,
  },
  methods: {
    
  },
  mounted() {
    this.$store.dispatch('GET_RISK_TYPE_LIST')
  },
  computed: {
    riskTypeList: function () {
      return this.$store.getters.riskTypeList;
    },
    riskTypeOptions: function () {
      return this.$store.getters.riskTypeOptions;
    },
  },
};
</script>
