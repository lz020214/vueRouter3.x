<template>
    <div>
        <h1>发现音乐</h1>
        <!-- 子路由链接 -->
        <div><router-link to="/discover/recommend">推荐</router-link></div>
        <div><router-link to="/discover/songlist">歌单</router-link></div>
        <router-view></router-view>
    </div>
</template>