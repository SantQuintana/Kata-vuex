<template>
    <div class="enviar-formulario">
        <button @click="$store.commit('peticion')" type="button" class="btn btn-secondary w-25 m-3" >Enviar</button>
        <button @click="$store.commit('restablecer')" type="button" class="btn btn-secondary w-25 m-3" >Restablecer</button>
        
    </div>
</template>

<script>
export default {
    name: 'EnviarFormulario',
}

</script>