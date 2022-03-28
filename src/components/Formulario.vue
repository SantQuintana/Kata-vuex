<template>
    <div class="Formulario container">
        <h2>Formulario</h2>

        <div class="input-group mb-3 col-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Nombre</span>
            <input type="text" class="form-control" >

            <span class="input-group-text" id="inputGroup-sizing-default">Teléfono</span>
            <input type="number" class="form-control" >
        </div>
        
        <div class="input-group mb-3 col-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Correo Electronico</span>
            <input type="email" class="form-control" >
        </div>
        
        <div class="input-group mb-3 col-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Descripcion general del pastel</span>
            <input type="text" class="form-control" >
        </div>

        <div class="checkbox">
            <p>Elige los sabores que querras de tu pastel. (+30 pesos por sabor extra)</p>
            <div class="form-check-inline form-switch border border-4">
                <input class="form-check-input " type="checkbox" id="checkbox">
                <label class="form-check-label">Chocolate</label>
            </div>
            <div class="form-check-inline form-switch border border-4">
                <input class="form-check-input" type="checkbox">
                <label class="form-check-label" >Vanilla</label>
            </div>
            <div class="form-check-inline form-switch border border-4">
                <input class="form-check-input" type="checkbox">
                <label class="form-check-label" >Fresa</label>
            </div>
            <div class="form-check-inline form-switch border border-4">
                <input class="form-check-input" type="checkbox">
                <label class="form-check-label" >Platano</label>
            </div>
            <div class="form-check-inline form-switch border border-4">
                <input class="form-check-input" type="checkbox" >
                <label class="form-check-label">Cereza</label>
            </div>

        </div>

        <div class="checkbox ">
            <p>Elige los diferentes adornos que le quieres poner al pastel</p>
            <div class="form-check-inline form-switch border border-4">
                <input class="form-check-input " type="checkbox">
                <label class="form-check-label">Fondant ($50)</label>
            </div>
            <div class="form-check-inline form-switch border border-4">
                <input class="form-check-input" type="checkbox">
                <label class="form-check-label" >Merengue ($35)</label>
            </div>
            <div class="form-check-inline form-switch border border-4">
                <input class="form-check-input" type="checkbox">
                <label class="form-check-label" >Chispas de Chocolate ($15)</label>
            </div>
            <div class="form-check-inline form-switch border border-4">
                <input class="form-check-input" type="checkbox">
                <label class="form-check-label" >Frutas ($55)</label>
            </div>
            <div class="form-check-inline form-switch border border-4">
                <input class="form-check-input" type="checkbox" >
                <label class="form-check-label">nueces ($55)</label>
            </div>

        </div>

        <EnviarFormulario/>

    </div>
</template>

<script>
import EnviarFormulario from "./EnviarFormulario.vue";
export default {
    name: 'Formulario',
    components:{
    EnviarFormulario,
    }
}

// document.getElementById("checkbox").addEventListener(show);


// function show(){
//     var x = document.getElementById("checkbox");
//     console.log(x);
// }
</script>