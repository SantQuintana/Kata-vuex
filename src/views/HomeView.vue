<template>
  <div class="home bg-light">

    <InformacionPasteleria/>
    <SaboresPasteles/>
    <AdornosPasteles/>
    <Formulario/>

  </div>
</template>


<script>

import Formulario from "../components/Formulario.vue";
import SaboresPasteles from "../components/SaboresPasteles.vue"
import AdornosPasteles from "../components/AdornosPasteles.vue"
import InformacionPasteleria from "@/components/InformacionPasteleria.vue";

export default {
  name: 'HomeView',
  components:{
    InformacionPasteleria,
    Formulario,
    SaboresPasteles,
    AdornosPasteles,
}
}
</script>


<style>

div{
  padding: 10px 0;
  margin-bottom: 10px;
}

</style>