<template>
    <v-container>
        <v-row>
            <v-col>
                <h1>Contrato {{ contract.name }}</h1>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="1">
                <v-btn color="primary" text to="/contracts">VOLTAR</v-btn>
            </v-col>
        </v-row>

        <title-divider
        title="IDENTIFICAÇÃO"
        tooltip="Dados gerais"
        size=3
        ></title-divider>

            <v-row>
                <v-col>
                    <v-row>
                        <v-col>
                            <v-text-field v-model="contract.name" label="Título" disabled></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-textarea v-model="contract.description" label="Descrição" disabled>
                            </v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-select
                            chips
                            label="Modelo de negócio"
                            disabled
                            v-model="contract.businessModel"
                            ></v-select>
                        </v-col>
                        <v-col>
                            <v-combobox
                            v-model="contract.client.company"
                            chips
                            label="Cliente"
                            disabled
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
                            <v-text-field v-model="contract.client.cnpj" label="CNPJ" disabled></v-text-field>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>


        <title-divider
        title="PROCEDIMENTO"
        tooltip="Datas e o arquivo de contrato"
        size=3
        ></title-divider>
        <v-row >
            <v-col>
                <v-row justify="space-around">
                    <v-col>
                        <label for="">Início</label><br>
                        <v-date-picker v-model="contract.startAt" 
                        color="green lighten-1"
                        disabled
                        ></v-date-picker>
                    </v-col>
                    <v-col>
                        <label for="">Fim</label><br>
                        <v-date-picker v-model="contract.endsAt" 
                        color="green lighten-1" 
                        header-color="primary"
                        disabled>
                        </v-date-picker>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-file-input 
                        v-model="contract.file" 
                        placeholder="Subir contrato digitalizado" 
                        label="Contrato Digitalizado" 
                        prepend-icon="mdi-paperclip" 
                        disabled>
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

        <title-divider
        title="PRODUTO E PLANEJAMENTO"
        tooltip="Informações de serviço e valores"
        size=3
        ></title-divider>
        <v-row>
            <v-col>
                <v-row>
                    <v-col>
                        <v-textarea disabled v-model="contract.execution" label="Cronograma de execução">
                        </v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field disabled v-model="contract.lockers" label="Nº de armários" type="number"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field disabled v-model="contract.lockerDoors" label="Nº de portas por armários" type="number"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field disabled v-model="contract.income" label="Valor(R$)" type="number"></v-text-field>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <title-divider
        title="LOCALIZAÇÃO"
        tooltip="Endereço e local de atuação"
        size=3
        ></title-divider>
        <v-row>
            <v-col>
                <v-row>
                    <v-col>
                        <v-text-field disabled v-model="contract.address.zipcode" label="CEP">
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field disabled v-model="contract.address.publicPlace" label="logradouro">
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field disabled v-model="contract.address.neighborhood" label="bairro">
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field disabled v-model="contract.address.location" label="localidade">
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field disabled v-model="contract.address.uf" label="UF">
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field disabled v-model="contract.address.complement" label="Complemento">
                        </v-text-field>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import TitleDivider from '../../components/TitleDivider'
export default {
    components:{
        TitleDivider
    },
    data(){
        return {
            contract:{
                    client:{
                        company:'',
                        cnpj:''
                    },
                    address:{
                        zipcode: "",
                        publicPlace: '',
                        neighborhood: '',
                        uf: '',
                        location: '',
                        complement:''
                    }

            },
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
                    client:{
                        company:'iFood',
                        cnpj:'14.380.200/0002-02'
                    },
                    lockers: 20,
                    lockerDoors: 15,
                    address:{
                        zipcode: "71620-080",
                        publicPlace: 'SHIS QL 8',
                        neighborhood: 'Setor de Habitações Individuais Sul',
                        uf: 'DF',
                        location: 'Brasília',
                        complement:''
                    }
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
                    client:{
                        company:'Mercado Livre',
                        cnpj:'03.499.243/0001-04'
                    },
                    lockers: 20,
                    lockerDoors: 15,
                    address:{
                        zipcode: "71620-080",
                        publicPlace: 'SHIS QL 8',
                        neighborhood: 'Setor de Habitações Individuais Sul',
                        uf: 'DF',
                        location: 'Brasília',
                        complement:''
                    }
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
                    client:{
                        company:'Eclair',
                        cnpj:'00.000.000/0001-01'
                    },
                    lockers: 20,
                    lockerDoors: 15,
                    address:{
                        zipcode: "71620-080",
                        publicPlace: 'SHIS QL 8',
                        neighborhood: 'Setor de Habitações Individuais Sul',
                        uf: 'DF',
                        location: 'Brasília',
                        complement:''
                    }
                },
                {
                    id: 4,
                    status: 'Vencido',
                    statusColor: 'red',
                    name: 'CEUB',
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem quos, mollitia perspiciatis rerum at quod fuga hic consequuntur ad, necessitatibus, alias voluptate amet reiciendis ab eligendi quasi. Ex, laborum?",
                    income: 500.00,
                    date: '03/05/2018',
                    endDate: '03/05/2019',
                    client:{
                        company:'CEUB',
                        cnpj:'00.059.857/0001-87'
                    },
                    lockers: 20,
                    lockerDoors: 15,
                    address:{
                        zipcode: "71620-080",
                        publicPlace: 'SHIS QL 8',
                        neighborhood: 'Setor de Habitações Individuais Sul',
                        uf: 'DF',
                        location: 'Brasília',
                        complement:''
                    }
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
                    client:{
                        company:'UNIVERSIDADE CATOLICA DE BRASILIA - UCB',
                        cnpj:'00.331.801/0004-82'
                    },
                    lockers: 20,
                    lockerDoors: 15,
                    address:{
                        zipcode: "71620-080",
                        publicPlace: 'SHIS QL 8',
                        neighborhood: 'Setor de Habitações Individuais Sul',
                        uf: 'DF',
                        location: 'Brasília',
                        complement:''
                    }
                }
            ],
        }
    },
    updated(){
    },
    mounted(){
        this.findContract()
    },
    methods: {
        findContract(){
            this.contract = this.contracts.find(element =>{ 
                if(element.id == this.$route.params.id)
                    return element
            })
        }
    }
}
</script>
