<template lang="html">
    <div class="d-flex flex-wrap justify-content-center h-100 login__bg">
        <div class="content-wrapper d-flex justify-content-center align-items-center w-100">
            <section v-if="!isCurrentUser" class="login p-5">
                <form @submit.prevent="login" autocomplete="off">
                    <div class="form-group">
                        <h3 class="login__title">Привет, {{this.$username}}!</h3>
                        <label class="login__label" for="code">Введи код для продолжения</label>
                        <input type="text" class="form-control" v-model="code"
                               autocomplete="off" id="code" name="code"
                               aria-describedby="emailHelp" placeholder="code">
                    </div>
                    <div class="mt-5">
                        <button class="btn btn-block btn-primary btn-lg font-weight-medium"
                                type="submit">Вход
                        </button>
                    </div>
                </form>
            </section>
            <section v-else class="login p-5">
                <div class="form-group">
                    <h3 class="login__title">неверный токен и/или пользователь не найден</h3>
                </div>
            </section>
        </div>
    </div>
</template>

<script>

    export default {
        name: "login",
        data() {
            return {
                code: '',
                isCurrentUser: false
            }
        },
        beforeRouteUpdate(to, from, next) {
            let url = this.$route.fullPath;
            if(url != '/login?username=leman&token=qwerty') {
                this.isCurrentUser = true;
                next(false)
            } else {
                this.isCurrentUser = false;
                next()
            }
        },
        mounted() {
            this.qwertyParams();
        },
        methods: {
            qwertyParams: function () {
                this.$router.push({
                    query: {
                        username: this.$username,
                        token: this.$token
                    }
                });
            },
            login: function (event) {
                let router = this.$router;
                let token = this.$token;
                let code = this.code;
                this.$http.post(`/status`, {
                    username: this.$username,
                    code: code,
                }).then((response) => {
                    localStorage.setItem('token', token);
                    localStorage.setItem('traffic', response.data.traffic);
                    localStorage.setItem('minutes', response.data.minutes);
                    router.push({path: '/'});
                }).catch((error) => {
                    console.log(error);
                    if (error.request.status === 0) {
                        this.$notify.error({
                            showClose: true,
                            title: 'Error',
                            message: 'Global network error!'
                        });
                    }
                    if (error.response.status === 401) {
                        this.$notify.error({
                            showClose: true,
                            title: 'Error',
                            message: 'Код указан не верно! Правильный код "russ"'
                        });
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>