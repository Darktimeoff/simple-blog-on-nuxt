<template>
    <el-menu
        :style="{height: '100%'}"
        :default-active="$route.path"
        router
    >
        <el-menu-item index="/admin/">
            <i class="el-icon-menu"></i>
            <span>Aналитика</span>
        </el-menu-item>
        <el-menu-item index="/admin/create/">
            <i class="el-icon-edit-outline"></i>
            <span>Создать</span>
        </el-menu-item>
        <el-menu-item index="/admin/list/">
            <i class="el-icon-tickets"></i>
            <span>Посты</span>
        </el-menu-item>
        <el-menu-item index="/admin/user/">
            <i class="el-icon-service"></i>
            <span>Пользователи</span>
        </el-menu-item>
        <el-menu-item index="/admin/logout/" >
            <i class="el-icon-setting"></i>
            <span>Выйти</span>
        </el-menu-item>
    </el-menu>
</template>