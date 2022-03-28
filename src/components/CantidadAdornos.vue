<template>
    <table class="container table table-striped table-hover p-3">
            <thead>
                <tr>
                    <th scope="col">Adorno</th>
                    <th scope="col">Pedidos</th>
                    <th scope="col">Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Fondant</th>
                    <td>{{$store.state.fondant}}</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th scope="row">Merengue</th>
                    <td>{{$store.state.merengue}}</td>
                    <td>1200g</td>
                </tr>
                <tr>
                    <th scope="row">Chispas de chocolate</th>
                    <td>{{$store.state.chispasChocolate}}</td>
                    <td>800g</td>
                </tr>
                <tr>
                    <th scope="row">Fruta</th>
                    <td>{{$store.state.fruta}}</td>
                    <td>500g</td>
                </tr>
                <tr>
                    <th scope="row">Nueces</th>
                    <td>{{$store.state.nueces}}</td>
                    <td>500g</td>
                </tr>
            </tbody>
        </table>
</template>

<script>
export default {
    name: 'CantidadAdornos',
}
</script>