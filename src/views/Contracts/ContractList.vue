<template>
    <v-container>
        <v-row>
            <v-col cols="3" class="ma-2">
                <h2>MEUS CONTRATOS</h2>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="2" class="ma-2">
                <v-chip class="" color="grey" label text-color="white"></v-chip>
                Rascunho
            </v-col>
            <v-col cols="2" class="ma-2">
                <v-chip class="" color="green darken-3" label text-color="white"></v-chip>
                Não iniciado
            </v-col>
            <v-col cols="2" class="ma-2">
                <v-chip class="" color="blue" label text-color="white"></v-chip>
                Andamento
            </v-col>
            <v-col cols="2" class="ma-2">
                <v-chip class="" color="red" label text-color="white"></v-chip>
                Terminado
            </v-col>
        </v-row>
        <v-row>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class="text-left">Status</th>
                        <th class="text-left">Name</th>
                        <th class="text-left">Descrição</th>
                        <th class="text-left">Valor</th>
                        <th class="text-left">Inicio</th>
                        <th class="text-left">Término</th>
                        <th class="text-left">Visualizar</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in contracts" :key="item.name">
                        <td><v-chip class="" :color="item.statusColor" label text-color="white"></v-chip></td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.description }}</td>
                        <td>{{ item.income }}</td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.endDate }}</td>
                        <td>
                            <v-btn icon @click="show(item.id)">
                                <v-icon>fa-eye</v-icon>
                            </v-btn>
                        </td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                path: 'caverna',
                headers: [
                    {
                        text: 'Projeto',
                        align: 'left',
                        sortable: false,
                        value: 'no_titulo'
                    },
                    {text: 'Resumo', value: 'tx_resumo'},
                    {text: 'Status', value: 'tx_status'},
                    {text: 'Equipe', value: 'tx_equipe'},
                    {text: '', value: 'action', align: 'center', sortable: false},
                ],
                contracts: [
                    {
                        id: 1,
                        status: 'rascunho',
                        statusColor: 'grey',
                        name: 'iFood',
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem quos, mollitia perspiciatis rerum at quod fuga hic consequuntur ad, necessitatibus, alias voluptate amet reiciendis ab eligendi quasi. Ex, laborum?",
                        income: 800.00,
                        date: 'Não iniciado',
                        endDate: '',
                    },
                    {
                        id: 2,
                        status: 'rascunho',
                        statusColor: 'grey',
                        name: 'Mercado Livre Brasília',
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem quos, mollitia perspiciatis rerum at quod fuga hic consequuntur ad, necessitatibus, alias voluptate amet reiciendis ab eligendi quasi. Ex, laborum?",
                        income: 500.00,
                        date: 'Não iniciado',
                        endDate: '',
                    },
                    {
                        id: 3,
                        status: 'Andamento',
                        statusColor: 'blue',
                        name: 'Eclair',
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem quos, mollitia perspiciatis rerum at quod fuga hic consequuntur ad, necessitatibus, alias voluptate amet reiciendis ab eligendi quasi. Ex, laborum?",
                        income: 5000.00,
                        date: '04/12/2019',
                        endDate: '04/12/2020',
                    },
                    {
                        id: 4,
                        status: 'Vencido',
                        statusColor: 'red',
                        name: 'ceub',
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem quos, mollitia perspiciatis rerum at quod fuga hic consequuntur ad, necessitatibus, alias voluptate amet reiciendis ab eligendi quasi. Ex, laborum?",
                        income: 500.00,
                        date: '03/05/2018',
                        endDate: '03/05/2019',
                    },
                    {
                        id: 5,
                        status: 'Vencido',
                        statusColor: 'red',
                        name: 'Católica UCB',
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem quos, mollitia perspiciatis rerum at quod fuga hic consequuntur ad, necessitatibus, alias voluptate amet reiciendis ab eligendi quasi. Ex, laborum?",
                        income: 300.00,
                        date: '03/06/2019',
                        endDate: '03/09/2019',
                    }
                ],
            }
        },
        mounted() {
        },
        methods: {
            show(contractId) {
                this.$router.push({name: 'ContractShow', params: {id: contractId}})
            }
        }
    }
</script>