<template lang="html">
    <div class="d-flex flex-wrap justify-content-center h-100 login__bg">
        <div class="content-wrapper d-flex justify-content-center align-items-center w-100">
            <section class="login p-5">
                <div class="form-group">
                    <p class="login__label">Интернет активен в течение {{this.minutes}} минут</p>
                </div>
                <div class="form-group">
                    <p class="login__label">Доступно {{this.traffic}} трафика для загрузки</p>
                </div>
                <div class="mt-5">
                    <button class="btn btn-block btn-primary btn-lg font-weight-medium"
                            type="submit" @click="logout">Выход
                    </button>
                </div>
            </section>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'home',
        data() {
            return {
                traffic: '',
                minutes: ''
            }
        },
        mounted() {
            this.loadTimeData();
        },
        methods: {
            loadTimeData: function () {
                this.traffic = localStorage.getItem('traffic');
                this.minutes = localStorage.getItem('minutes');
            },
            logout: function () {
                let router = this.$router;
                localStorage.removeItem('token');
                localStorage.removeItem('traffic');
                localStorage.removeItem('minutes');
                router.push({ path: '/login'})
            },
        }
    }
</script>
