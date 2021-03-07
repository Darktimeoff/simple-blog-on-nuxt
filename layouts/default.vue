<template>
	<el-container>
		<el-header>
			<TheNavbar />
		</el-header>
		<el-main><Nuxt /></el-main>
		<el-footer />
	</el-container>
</template>
<script>
import TheNavbar from '@/components/main/TheNavbar';

export default {
	components: {
		TheNavbar,
	}
}
</script>