<template>
    <v-card>
        <v-container>
            <h2>NOVO CONTRATO</h2>

            <v-layout my-1>
                <v-flex xs-12>
                    <div class="text-xs-center">
                        <v-btn @click="part1 = !part1" block color="primary">
                            Parte 1 | Identificação
                            <v-divider></v-divider>
                            <v-icon>{{ part1 ? 'fa-arrow-up' : 'fa-arrow-down' }}</v-icon>
                        </v-btn>
                    </div>
                </v-flex>
            </v-layout>
            <v-row v-show="part1">
                <v-col>
                    <v-row>
                        <v-col>
                            <v-text-field v-model="contract.title" label="Título"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-textarea v-model="contract.description" label="Descrição">
                            </v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-select
                            chips
                            :items="options.businessModels"
                            label="Modelo de negócio"
                            ></v-select>
                        </v-col>
                        <v-col>
                            <v-combobox
                            v-model="contract.client.company"
                            :items="options.clients"
                            chips
                            label="Cliente"
                            ></v-combobox>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-icon>fa-help</v-icon>
                                </template>
                                <span>Nome fantasia</span>
                            </v-tooltip>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field v-model="contract.client.cnpj" label="CNPJ"></v-text-field>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row my-1>
                <v-col xs-12>
                    <div class="text-xs-center">
                        <v-btn @click="part2 = !part2" block color="primary">
                            Parte 2 | Procedimento 
                            <v-divider></v-divider>
                            <v-icon>{{ part2 ? 'fa-arrow-up' : 'fa-arrow-down' }}</v-icon>
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
            <v-row v-show="part2">
                <v-col>
                    <v-row justify="space-around">
                        <v-col>
                            <label for="">Início</label><br>
                            <v-date-picker v-model="contract.startAt" color="green lighten-1"></v-date-picker>
                        </v-col>
                        <v-col>
                            <label for="">Fim</label><br>
                            <v-date-picker v-model="contract.endsAt" color="green lighten-1" header-color="primary"></v-date-picker>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-file-input v-model="contract.file" placeholder="Subir contrato digitalizado" label="Contrato Digitalizado" prepend-icon="mdi-paperclip" >
                                <template v-slot:selection="{ text }">
                                <v-chip small label color="primary" >
                                    {{ text }}
                                </v-chip>
                                </template>
                            </v-file-input>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row my-1>
                <v-col xs-12>
                    <div class="text-xs-center">
                        <v-btn @click="part3 = !part3" block color="primary">
                            Parte 3 | Produtos e planejamento
                            <v-divider></v-divider>
                            <v-icon>{{ part3 ? 'fa-arrow-up' : 'fa-arrow-down' }}</v-icon>
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
            <v-row v-show="part3">
                <v-col>
                    <v-row>
                        <v-col>
                            <v-textarea v-model="contract.execution" label="Cronograma de execução">
                            </v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field label="Nº de armários" type="number"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field label="Nº de portas por armários" type="number"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field label="Valor(R$)" type="number"></v-text-field>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row my-1>
                <v-col xs-12>
                    <div class="text-xs-center">
                        <v-btn @click="part4 = !part4" block color="primary">
                            Parte 4 | Localização
                            <v-divider></v-divider>
                            <v-icon>{{ part4 ? 'fa-arrow-up' : 'fa-arrow-down' }}</v-icon>
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
            <v-row v-show="part4">
                <v-col>
                    <v-row>
                        <v-col>
                            <v-text-field v-model="address.zipcode" label="CEP">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field v-model="address.publicPlace" label="logradouro">
                            </v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field v-model="address.neighborhood" label="bairro">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field v-model="address.location" label="localidade">
                            </v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field v-model="address.uf" label="UF">
                            </v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field v-model="address.complement" label="Complemento">
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row>
                <v-btn text color="primary" @click="clearForm">DESCARTAR</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" :loading="loading" @click="save">CRIAR</v-btn>
            </v-row>

        </v-container>

    </v-card>
</template>

<script>

import axios from 'axios'

export default {
    data(){
        return {
            loading:false,
            part1: false,
            part2: false,
            part3: false,
            part4: false,
            contract: {
                title: '',
                description: '',
                client: {
                    company: '',
                    cnpj:''
                },
                startsAt: new Date().toISOString().substr(0, 7),
                endsAt: new Date().toISOString().substr(0, 7),
                file: null,
            },
            address:{
                zipcode: null,
                publicPlace: '',
                neighborhood: '',
                uf: '',
                location: '',
                complement:''
            },

            options: {
                businessModels:[
                    'Aluguel de Sistema',
                    'Aluguel de Locker'
                ],
                clients: [
                    'iFood',
                    'Católica UCB',
                    'Mercado Livre',
                ]
            }
        }
    },
    methods: {
        submit(){

        },
        findAddress(){
            axios.get(`https://viacep.com.br/ws/${this.address.zipcode}/json`).then(response => {
                this.address.publicPlace = response.logradouro
                this.address.neighborhood=response.bairro
                this.address.uf = response.uf
                this.address.location=response.localidade
            })
            // .catch( error => {
            //     console.error(error)
            // })
        },
        save(){
            this.loading = true
            axios.post('api/v1/contracts', {
                contract: this.contract,
                address: this.address
            }).then(() => {
                this.loading = false
            }).catch(() => {
                this.loading = false
            })
        },
        clearForm(){
            if(confirm('Deseja descartar o que foi preenchido até agora?')== false)
                return

            this.contract = {
                title: '',
                description: '',
                client: {
                    company: '',
                    cnpj:''
                },
                startsAt: new Date().toISOString().substr(0, 7),
                endsAt: new Date().toISOString().substr(0, 7),
                file: null,
            }
            this.address = {
                zipcode: null,
                logradouro: '',
                bairro: '',
                uf: '',
                localidade: '',
                complement:''
            }
        }
    }
}
</script>