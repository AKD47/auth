<template lang="html">
    <div class="container-scroller page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
            <div class="row w-100">
                <div class="col-lg-4 mx-auto">
                    <section class="login w-100">
                        <div class="wrapper d-flex align-items-center auth login-full-bg">
                            <div class="row w-100">
                                <div class="col-lg-12 mx-auto">
                                    <div class="auth-form-dark text-left p-5">
                                        <form id="loginForm" autocomplete="off" class="pt-5">
                                            <form @submit.prevent="" autocomplete="off">
                                                <div class="form-group">
                                                    <label for="username">Username</label>
                                                    <input type="text" class="form-control" v-model="username"
                                                           autocomplete="off" id="username" name="username"
                                                           aria-describedby="emailHelp" placeholder="Username">
                                                    <i class="mdi mdi-account"></i>
                                                </div>
                                                <div class="form-group">
                                                    <label for="password">Password</label>
                                                    <input type="password" class="form-control" v-model="password"
                                                           name="new-password" autocomplete="off" id="password"
                                                           placeholder="Password">
                                                    <i @click="showPass" class="mdi mdi-eye"></i>
                                                </div>
                                                <div class="mt-5">
                                                    <button class="btn btn-block btn-primary btn-lg font-weight-medium"
                                                            type="submit">Login
                                                    </button>
                                                </div>
                                            </form>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                username: '',
                token: ''
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>