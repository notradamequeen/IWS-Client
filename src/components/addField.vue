<template>
  <div>
      <div class="clearfix" style="margin-bottom: 20px;"></div>
      <div
          class="card border-primary mb-3"
          style="max-width: 65rem; margin-left: 10%; margin-right: 8%">
          <div class="card-header">Add Fields</div>
          <div class="card-body text-primary">
              <form v-on:submit.prevent="onFormSubmit">
                  <fieldset>
                      <div class="form-group row" v-for="i in (0, fieldCount)">
                          <div class="col-sm-5">
                              <label>Field Name</label><br>
                              <input name="field_name" type="text" class="form-control" palceholder="field name" />
                          </div>
                          <div class="col-sm-5">
                              <label>Data Type</label><br>
                              <select name="data_type" class="form-control">
                                  <option value="text">Text</option>
                                  <option value="date">Date</option>
                                  <option value="number">Number</option>
                                  <option value="enum">Enum</option>
                                  <option value="currency">Currency</option>
                              </select>
                          </div>
                          <div class="col-sm-2" style="margin-top:5px">
                              <br/>
                              <button
                                class="btn btn-primary"
                                v-if="i == 1"
                                v-on:click.prevent="fieldCount+=1">
                                +
                            </button>
                              <button
                                class="btn btn-primary"
                                v-else
                                v-on:click.prevent="fieldCount-=1">
                                -
                              </button>
                          </div>
                      </div>
                  </fieldset>  
                      <br/>
              <button type="submit">submit</button>
              </form>
          </div>
      </div>
  </div>
</template>
<script>
// import fetch from 'safe-fetch';

export default {
  name: 'addField',
  data() {
    return {
      fieldCount: 1,
      data_field: [], 
    }
  },
  methods: {
    addField: () => {
      data.fieldCount += 1;
    },
    onFormSubmit: (e) => {
      console.log(e)
      const datas = Array.from(e.target[0].childNodes).map((node)=>{
        return { 
            field_name : node.childNodes[0].childNodes[3].value,
            data_type: node.childNodes[2].childNodes[3].value
        };
      });
      const opt = {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datas)
      };
      fetch('https://intense-bayou-56091.herokuapp.com/iws/api/field/', opt).then((response)=>
        response.json()).then((res) => {
            if(res.status == 201) {
                window.location.href = '/'
            } else {
                console.log(res)
            }
            
        }).catch((err) => {
            
        });
    },
  },
};
</script>
