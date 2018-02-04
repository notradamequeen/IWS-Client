<template>
<div>
  <div class="clearfix" style="margin-bottom: 20px;"></div>
  <div
    class="card border-primary mb-3"
    style="max-width: 65rem; margin-left: 10%; margin-right: 8%">
    <div class="card-header">{{ riskTypeDetail.name }}</div>
    <div class="card-body text-primary">
        <form>
            <div class="form-group row" v-for="field in riskTypeDetail.fields">
                <label class="col-sm-2 col-form-label">{{ field.field_name }}</label>
                <div v-if="field.data_type == 'text'" class="col-sm-9">
                    <input type="text" class="form-control"/>
                </div>
                <div v-if="field.data_type == 'date'" class="col-sm-9">
                    <datepicker input-class="form-control"></datepicker>
                </div>
                <div v-if="field.data_type == 'currency'" class="col-sm-9">
                    <money v-model="price" v-bind="money" class="form-control"></money>
                </div>
                <div v-if="field.data_type == 'enum'" class="col-sm-9">
                    <select class="form-control"><option></option></select>
                </div>
                <div v-if="field.data_type == 'number'" class="col-sm-9">
                    <input type="number" class="form-control" placeholder="Ex: 1"/>
                </div>
            </div>
        </form>
    </div>
    <div class="card-footer">
        <button v-on:click="show">add field</button>
        <createForm v-bind:risktype="riskTypeDetail"></createForm>
    </div>
  </div>
</div>
</template>
<script>
import createForm from './createForm'
import Datepicker from 'vuejs-datepicker';
import { Money } from 'v-money';

export default {
  props: ['id', ],
  name: 'Form',
  data() {
    return {
        price: 0,
        money: {
          decimal: ',',
          thousands: '.',
          prefix: '$ ',
          suffix: ' #',
          precision: 2,
          masked: false
        },
    };
  },
  components: {
      Datepicker,
      Money,
      createForm,
  },
  methods: {
    show: () => {
      document.getElementById('id01').style.display='block'
    },
  },
  mounted(){
    this.$store.dispatch('GET_RISK_TYPE_DETAIL', this.id);
  },
  computed: {
    riskTypeDetail: function () {
      return this.$store.getters.riskTypeDetail;
    },
  },
};
</script>
<style>
label {
    text-align: left;
}
</style>

