  
<template>
    <v-row>
        <v-col cols="auto" class="d-inline-flex">
            <v-tooltip top>
                <template v-slot:activator="{ on }">
                    <v-icon color="primary" v-on="on">fa-question-circle</v-icon>
                </template>
                <span>{{tooltip}}</span>
            </v-tooltip>
            <h2 class="canie-font primary--text hidden-sm-and-down">{{title}}</h2>
            <h3 class="canie-font primary--text hidden-md-and-up">{{title}}</h3>
        </v-col>
        <v-col>
            <v-divider color="blue" class="divider hidden-sm-and-down"></v-divider>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'TitleDivider',
    props: {
        title: String,
        tooltip:String,
        size: String,
    }
}
</script>

<style>
.canie-font{
    font-family: 'DDINRegular', Courier, monospace;
}
.divider {
    padding-top: 3px;
    margin-top: 1.4%;
}
</style>