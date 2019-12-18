<template>
    <v-content>

        <v-overlay v-model="loading">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>

        <v-container>
            <transition name="fade">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
            <notify-component></notify-component>
            <modal-component></modal-component>
        </v-container>
    </v-content>
</template>

<script>

    export default {
        name: 'content-component',
        components:{
            // NotifyComponent,
            // ModalComponent
        },
        methods: {
            beforeLeave(element) {
                this.prevHeight = getComputedStyle(element).height;
            },
            enter(element) {
                const { height } = getComputedStyle(element);

                element.style.height = this.prevHeight;

                setTimeout(() => {
                    element.style.height = height;
                });
            },
            afterEnter(element) {
                element.style.height = 'auto';
            },
        },

    }
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition-property: opacity;
        transition-duration: .25s;
    }

    .fade-enter-active {
        transition-delay: .25s;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>
