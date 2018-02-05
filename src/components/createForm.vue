<template>
   <div id="id01" class="w3-modal">
    <div
        class="card border-primary mb-3"
        style="max-width: 40rem; margin-left: 20%; margin-right: 20%">
            <div class="card-header">Add Field</div>
            <span onclick="document.getElementById('id01').style.display='none'" 
        class="w3-button w3-display-topright">&times;</span>
            <div class="card-body text-primary">
                <form v-on:submit.prevent="onFormSubmit">
                    <fieldset>
                        <div class="form-group row" v-for="i in (0, fieldCount)">
                            <div class="col-sm-12">
                                <input type="hidden" :value="risktype.id" />
                                <select v-model="field" name="field" class="form-control">
                                    <option v-for="option in fieldList" v-bind:value="option.id">
                                    {{ option.field_name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </fieldset>  
                        <br/>
                <button v-on:submit.prevent="onFormSubmit" type="submit">submit</button>
                </form>
            </div>
        </div>
  </div>
</template>
<script>
// import fetch from 'safe-fetch';

export default {
  props: ['risktype'],
  name: 'createForm',
  data() {
    return {
      isActive: true,
      fieldCount: 1,
      data_field: [],
      fieldList: [],
      field: {},
    }
  },
  methods: {
    addField: () => {
      data.fieldCount += 1;
    },
    test: () => {
    },
    onFormSubmit: (e) => {
        console.dir(e)
      const datas = {
          risk_type: e.target[1].value,
          field: e.target[2].value
      }
      console.log(datas)
      const opt = {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datas)
      };
      fetch('https://intense-bayou-56091.herokuapp.com/iws/api/form/', opt).then((response)=>
        response.json()).then((res) => {
            location.reload();
        }).catch((err) => {
            console.log(err)
        })
    },
  },
  mounted(){
    const opt = {
      method:'GET',
      headers: {
        'Accept': 'application/json',
      }
    };
    fetch('https://intense-bayou-56091.herokuapp.com/iws/api/field/', opt).then((response)=>
      response.json()).then((res)=>{this.fieldList = res});
  },

};
</script>
