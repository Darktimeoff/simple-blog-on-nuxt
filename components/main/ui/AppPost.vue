<template>
    <el-card
        shadow="hover"
        :body-style="{padding: 0}"
        class="post"
    >
        <header 
            slot="header"
            class="post-header"
        >
            <h3>Post title</h3>
            <small>
                <i class="el-icon-time"></i>
                {{ new Date().toLocaleString() }}
            </small>
        </header>
        <div class="post-body">
            <img class="post-img" src="https://images.pexels.com/photos/5994354/pexels-photo-5994354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="post" />
        </div>
        <footer class="post-footer">
            <el-button round @click="openPost">Открыть пост</el-button>
            <span>
                <i class="el-icon-message">12</i>
            </span>
        </footer>
    </el-card>
</template>
<script>
export default {
    methods: {
        openPost() {
            this.$router.push('/post/1/')
        }
    }
}
</script>
<style lang="scss" scoped>
    .post {
        margin-bottom: 1.5rem;
        &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &-img {
            width: 100%;
            height: auto;
        }
        &-footer {
            display: flex;
            padding: 1rem;
            align-items: center;
            justify-content: space-between;
        }
        
    }
</style>