<template>
    <el-form 
        :model="сontrols" 
        :rules="rules" 
        ref="form" 
        @submit.native.prevent="onSubmit"
    >
        <h1>Добавить комментария</h1>
        <el-form-item label="Имя" prop="name">
            <el-input v-model.trim="сontrols.name" />
        </el-form-item>
       <el-form-item label="Текст комментария" prop="text">
            <el-input 
                type="textarea"
                v-model.trim="сontrols.text" 
                resize="none"
                :rows="2"
            />
        </el-form-item>
        <el-form-item>
            <el-button 
                type="primary" 
                native-type="submit"
                :loading="loading"
                round
            >Добавить Комметарий</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
            сontrols: {
                name: '',
                text: '',
            },
            rules: {
                name: [
                    { required: true, message: 'Имя не дожно быть пустым', trigger: 'blur' },
                ],
                text: [
                    { required: true, message: 'Введите ваш комментарий', trigger: 'blur' }
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
        onSubmit() {
            if(!this.isFormValid) return;
            this.loading = true;

            const formData = {
                name: this.сontrols.name,
                text: this.сontrols.text,
                postId: '',
            }

            try {
                setTimeout(() => {
                    this.$message.success('Комметарий успешно добавлен');
                    this.$emit('created');
                }, 2000)
            } catch(e) {
                this.loading = false;
            }
        }
    }
}
</script>
<style lang="scss" scoped>

</style>