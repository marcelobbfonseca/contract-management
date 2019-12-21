<template>
    <v-card>
        <v-container>
            <h2>SUBMISSÃO DE PROPOSTA DE PROJETOS</h2>

            <v-layout my-1>
                <v-flex xs-12>
                    <div class="text-xs-center">
                        <v-btn @click="part1 = !part1" block color="primary">
                            Parte 1 | Titulo e Resumo 
                            <v-divider></v-divider>
                            <v-icon>{{ part1 ? 'fa-arrow-up' : 'fa-arrow-down' }}</v-icon>
                        </v-btn>
                    </div>
                </v-flex>
            </v-layout>
            <v-layout v-show="part1">
                <v-flex>
                    <v-layout>
                        <v-flex>
                            <v-text-field v-model="projeto.no_titulo" label="Título"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex>
                            <v-textarea v-model="projeto.tx_resumo" label="Resumo">
                            </v-textarea>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>

            <v-layout my-1>
                <v-flex xs-12>
                    <div class="text-xs-center">
                        <v-btn @click="part2 = !part2" block color="primary">
                            Parte 2 | Procedimento 
                            <v-divider></v-divider>
                            <v-icon>{{ part2 ? 'fa-arrow-up' : 'fa-arrow-down' }}</v-icon>
                        </v-btn>
                    </div>
                </v-flex>
            </v-layout>
            <v-layout v-show="part2">
                <v-flex>
                    <v-layout>
                        <v-flex>
                             <v-textarea v-model="projeto.justificativa" 
                             label="Justificativa e Contextualização">
                            </v-textarea>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex>
                            <v-textarea v-model="projeto.objetivo" label="Objetivo">
                            </v-textarea>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex>
                            <v-textarea v-model="projeto.objetivosEspecificados" label="Objetivo específico">
                            </v-textarea>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex>
                            <v-text-field 
                            v-model="projeto.metodologia" 
                            label="Metodologia">
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex>
                            <v-textarea v-model="projeto.tx_objetivosEspecificados" label="Objetivo específico">
                            </v-textarea>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex>
                            <v-textarea v-model="projeto.tx_resultados" label="Resultados a serem alcançados">
                            </v-textarea>
                        </v-flex>
                    </v-layout>
                    
                </v-flex>
            </v-layout>

            <v-layout my-1>
                <v-flex xs-12>
                    <div class="text-xs-center">
                        <v-btn @click="part3 = !part3" block color="primary">
                            Parte 3 | Produtos e planejamento
                            <v-divider></v-divider>
                            <v-icon>{{ part3 ? 'fa-arrow-up' : 'fa-arrow-down' }}</v-icon>
                        </v-btn>
                    </div>
                </v-flex>
            </v-layout>
            <v-layout v-show="part3">
                <v-flex>
                    <v-layout>
                        <v-flex>
                            <v-textarea v-model="projeto.tx_cronograma" label="Cronograma de execução">
                            </v-textarea>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex>
                            <v-textarea v-model="projeto.tx_planejamentoFinanceiro" label="Planejamento Financeiro">
                            </v-textarea>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex>
                            <v-textarea v-model="projeto.tx_cronogramaFisicoFinanceiro" label="Cronograma Físico Financeiro">
                            </v-textarea>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>

            <v-layout my-1>
                <v-flex xs-12>
                    <div class="text-xs-center">
                        <v-btn @click="part4 = !part4" block color="primary">
                            Parte 4 | Equipe e referencias 
                            <v-divider></v-divider>
                            <v-icon>{{ part4 ? 'fa-arrow-up' : 'fa-arrow-down' }}</v-icon>
                        </v-btn>
                    </div>
                </v-flex>
            </v-layout>
            <v-layout v-show="part4">
                <v-flex>
                    <v-layout>
                        <v-flex>
                            <v-text-field v-model="projeto.tx_equipe" label="Equipe">
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex>
                            <v-textarea v-model="projeto.tx_referencias" label="Referencias">
                            </v-textarea>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>

        </v-container>
        <v-card-actions>

            <v-btn color="error">Descartar</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary">Enviar</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data(){
        return {
            part1: false,
            part2: false,
            part3: false,
            part4: false,
            projeto: {
                no_nome: '',
            }
        }
    }
}
</script>