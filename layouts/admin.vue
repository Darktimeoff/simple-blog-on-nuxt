<template>
    <div class="admin-wrapper">
        <el-container :style="{height: '100%'}">
            <el-aside width="250px">
                <AppAside />
            </el-aside>
            <el-main>
                <Nuxt />
            </el-main>
        </el-container>
    </div>
</template>
<script>
import AppAside from '@/components/admin/AppAside.vue'
export default {
    components: {AppAside},
    computed: {
        error() {
            return this.$store.getters.error;
        }
    },
    watch: {
        error(value) {
            this.$message.error(value);
        }
    }
}
</script>
<style lang="scss" scoped>
    .admin-wrapper {
        width: 100%;
        height: 100vh;
    }
</style>