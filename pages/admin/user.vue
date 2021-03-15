<template>
    <el-form 
        :model="сontrols" 
        :rules="rules" 
        ref="form" 
        @submit.native.prevent="onSubmit"
    >
        <h2>Cоздать пользователя</h2>
        <el-form-item label="Логин" prop="login">
            <el-input v-model.trim="сontrols.login" />
        </el-form-item>
        <div class="mb2">
            <el-form-item label="Пароль" prop="password">
                <el-input 
                    v-model.trim="сontrols.password" 
                    type="password"
                    resize="none"
                    :rows="2"
                />
            </el-form-item>
        </div>
        <el-form-item>
            <el-button 
                type="primary" 
                native-type="submit"
                :loading="loading"
                round
            >Создать</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    layout: 'admin',
    middleware: ['auth'],
    data() {
        return {
            loading: false,
            сontrols: {
                login: '',
                password: '',
            },
            rules: {
                login: [
                    { required: true, message: 'Логин не дожно быть пустым', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: 'Введите пароль', trigger: 'blur' },
                    { min: 6, message: 'Пароль должен быть не менне 6 символов', trigger: 'blur' },
                ]
            }
        }
    },
    computed: {
        isFormValid() {
            this.$refs['form'].validate((valid) => {
               return valid;
            });
        }, 
    },
    methods: {
        async onSubmit() {
            if(!this.isFormValid) return;
            this.loading = true;

            try {
                const formData = {...this.controls}

                await this.$store.dispatch('auth/createUser', formData);
                
                this.loading = false;
                this.$message.success('Новый пользователь добавлен');

                Object.keys(this.controls).forEach(key => this.controls[key] = '');              
            } catch (e) {
                this.loading = false;
            }
        }
    },
}
</script>
<style lang="scss" scoped>
    form {
        max-width: 600px;
        width: 100%;
    }
</style>