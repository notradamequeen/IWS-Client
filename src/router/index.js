import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import addField from '@/components/addField';
import addRiskType from '@/components/addRiskType';
import Form from '@/components/Form';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/form/:id',
      name: 'Form',
      component: Form,
      props: true,
    },
    {
      path: '/add_field/',
      name: 'addField',
      component: addField,
      props: true,
    },
    {
      path: '/add_risk_type/',
      name: 'addRiskType',
      component: addRiskType,
      props: true,
    },
  ],
});
