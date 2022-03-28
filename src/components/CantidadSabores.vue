<template>
    <div>
        <table class="container table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Sabor</th>
                    <th scope="col">Pedidos</th>
                    <th scope="col">Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">chocolate</th>
                    <td>{{$store.state.chocolate}}</td>
                    <td>15</td>
                </tr>
                <tr>
                    <th scope="row">Vanilla</th>
                    <td>{{$store.state.vanilla}}</td>
                    <td>20</td>
                </tr>
                <tr>
                    <th scope="row">Fresa</th>
                    <td>{{$store.state.fresa}}</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th scope="row">Platano</th>
                    <td>{{$store.state.platano}}</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th scope="row">Cereza</th>
                    <td>{{$store.state.cereza}}</td>
                    <td>8</td>
                </tr>
            </tbody>
        </table>

    </div>
    
</template>

<script>
export default {
    name: 'CantidadSabores',
}
</script>