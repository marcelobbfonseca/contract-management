<template>
    <v-card class="elevation-7">
        <v-layout>
            <v-card-title>
                <h1>MY PROJECTS</h1>
                <v-tooltip right>
                    <template v-slot:activator="{ on }">
                        <v-icon v-on="on">fa-question-circle</v-icon>
                    </template>
                    <span>Submeta uma nova proposta de projeto</span>
                </v-tooltip>
            </v-card-title>

            <v-layout justify-end>
                <v-card-actions>
                    <v-btn class="secondary" :to="{name: 'projetoCreate'}">
                        NOVA PROPOSTA
                    </v-btn>
                </v-card-actions>
            </v-layout>

        </v-layout>

        <v-container>

            <v-data-table
                class="elevation-1"
                :headers="headers"
                :items="projects">

                <template v-slot:item.action="{ item }">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn text icon @click="show(item.id)" v-on="on">
                                <v-icon>fa-eye</v-icon>
                            </v-btn>
                        </template>
                        <span>Visualizar</span>
                    </v-tooltip><!-- show -->
                </template>
            </v-data-table>
        </v-container>
    </v-card>
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
                projects: [
                    {
                        no_titulo:'Titulo',
                        tx_resumo: 'Projeto destinado para...',
                        tx_status: 'em analise',
                    }
                ],
            }
        },
        mounted() {
        },
        methods: {
        }
    }
</script>