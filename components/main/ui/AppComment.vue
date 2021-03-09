<template>
  <el-card class="comment">
        <div class="comment-header">
          <span>Pesone name</span>
          <span>
               <i class="el-icon-time"></i>
                {{ new Date().toLocaleString() }}
          </span>
        </div>
        <div class="comment-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi et quod, voluptates ea recusandae obcaecati accusantium impedit explicabo sint fugiat quis, numquam labore voluptatibus molestiae ipsam placeat? Nisi, adipisci.
        </div>
  </el-card>
</template>
<script>
export default {
    pros: ['comment']
}
</script>
<style lang="scss" scoped>
    .comment {
        margin-bottom: 1rem;
        &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: .5rem;
        }
        &-text {
            white-space: preline;
        }
    }
</style>