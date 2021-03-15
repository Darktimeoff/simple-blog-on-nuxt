<template>
    <el-card
        shadow="always"
        :style="{width: '500px'}"
    >
        <el-form 
            :model="сontrols" 
            :rules="rules" 
            ref="form" 
            @submit.native.prevent="onSubmit"
        >
            <h1>Войти в панель администратора</h1>
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
                >Войти</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>
<script>
export default {
    layout: 'empty',
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
            let isValid = true;

            this.$refs['form'].validate((valid) => {
                isValid = valid && isValid;
            });

            return isValid;
        }
    },
    methods: {
        async onSubmit() {
            if(!this.isFormValid) return;
            this.loading = true;

            try {
                const formData = {...this.controls}

                await this.$store.dispatch('auth/login', formData);
                
                this.loading = false;
                this.$router.push('/admin/')
            } catch (e) {
                console.log(e);
                this.loading = false;
            }
        }
    },
    mounted() {
        const message = this.$route.query?.message;

        if(message === 'login') {
            this.$message.warning('Пожалуйста авторизируйтесь')
        }
        
        switch(message) {
            case 'login':  this.$message.warning('Пожалуйста авторизируйтесь');break;
            case 'logout': this.$message.success('Вы успешно вышли из системы');break;
        }
    }
}
</script>