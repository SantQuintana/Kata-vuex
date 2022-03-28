<template>
  <div class="about bs-pink: #d63384">
    <h1>Pastelero</h1>
    <CantidadSabores/>
    <CantidadAdornos/>
  </div>
</template>

<script>
import CantidadSabores from '@/components/CantidadSabores.vue';
import CantidadAdornos from '@/components/CantidadAdornos.vue';

export default {
  name: 'HomeView',
  components:{
    CantidadSabores,
    CantidadAdornos,
}
}

</script>