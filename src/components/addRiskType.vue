<template>
    <div>
        <div class="clearfix" style="margin-bottom: 20px;"></div>
        <div
            class="card border-primary mb-3"
            style="max-width: 65rem; margin-left: 10%; margin-right: 8%">
            <div class="card-header">Add Risk Type</div>
            <div class="card-body text-primary">
                <form v-on:submit.prevent="onFormSubmit">
                    <fieldset>
                        <div
                          class="form-group row"
                          v-for="i in (0, fieldCount)"
                          style="margin-top:5px">
                            <div class="col-sm-5">
                                <label>Risk Type Name</label>
                            </div>
                            <div class="col-sm-5">
                                <input name="name" type="text" class="form-control"/>
                            </div>
                            <div class="col-sm-2">
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
  name: 'addRiskType',
  data() {
    return {
      fieldCount: 1,
      data_field: [],
    };
  },
  methods: {
    addField: () => {
      data.fieldCount += 1;
    },
    onFormSubmit: (e) => {
      const datas = Array.from(e.target[0].childNodes).map((node) => {
        return {
          name: node.childNodes[2].childNodes[0].value,
        };
      });
      const opt = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datas),
      };
      fetch('https://intense-bayou-56091.herokuapp.com/iws/api/risktype/', opt).then((response) =>
        response.json()).then((res) => { window.location.href = '#/' })
        .catch((err) => {
          this.$swal('cannot connect to server');
        });
    },
  },
};
</script>
