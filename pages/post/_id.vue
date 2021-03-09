<template>
    <article class="post">
        <header class="post-header">
            <div class="post-title">
                <h1>Post title</h1>
                <nuxt-link to="/">
                    <i class="el-icon-back" />
                </nuxt-link>
            </div>
            <div class="post-info">
               <small>
                    <i class="el-icon-time"></i>
                    {{ new Date().toLocaleString() }}
                </small>
                <small>
                    <i class="el-icon-view"></i>
                    42
                </small>
            </div>
            <div class="post-image">
                <img 
                    class="post-img" 
                    src="https://images.pexels.com/photos/5994354/pexels-photo-5994354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt="post" 
                />
            </div>
        </header>
        <main class="post-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sequi corporis minima quas libero odio deleniti recusandae officia nihil praesentium! Consequuntur fuga sequi quidem, quasi eveniet sed cupiditate facere qui!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicin</p>
            <p>Lorem ipsum dolor sit amet consectetur adipis</p>
        </main>
        <footer>
            <AppCommentForm />
            
            <div class="comments" v-if="false">
                <AppComment 
                    v-for="comment in 4"
                    :key="comment"
                    :comment="comment"
                />
            </div>
            <div v-else class="text-center">Комметариев нет</div>
        </footer>
    </article>
</template>
<script>
import AppComment from '@/components/main/ui/AppComment';
import AppCommentForm from '@/components/main/ui/AppCommentForm';

export default {
    components: {
        AppComment,
        AppCommentForm,
    },
    validate({params}) {
        console.log(Boolean(+params.id))
        return Boolean(params.id) && Boolean(+params.id);
    }
}
</script>
<style lang="scss" scoped>
    .post {
        max-width: 600px;
        margin: 0 auto;
        &-title {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
            align-items: center;
        }
        &-info {
            display: flex;
            justify-content: space-between;
            margin-bottom: .5rem;
            align-items: center;
        }

        &-img {
            width: 100%;
            height: auto;
        }

        &-header {
            margin-bottom: 1.5rem;
            font-size: 0.8rem;
        }

        &-content {
            margin-bottom: 2rem;
        }
    }
</style>