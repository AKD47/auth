<template lang="html">
    <div class="d-flex flex-wrap justify-content-center h-100 login__bg">
        <div class="content-wrapper d-flex justify-content-center align-items-center w-100">
            <section class="login p-5">
                <form @submit.prevent="" autocomplete="off">
                    <div class="form-group">
                        <label class="login__label" for="username">Username</label>
                        <input type="text" class="form-control" v-model="username"
                               autocomplete="off" id="username" name="username"
                               aria-describedby="emailHelp" placeholder="Username">
                        <i class="mdi mdi-account"></i>
                    </div>
                    <div class="form-group">
                        <label class="login__label" for="password">Password</label>
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
            </section>
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
        methods: {}
    }
</script>

<style scoped>

</style>