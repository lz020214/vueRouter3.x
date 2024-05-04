<template>
    <div>
        <h1>商品展示</h1>
        <div>
            <router-link to = "/showproduct/1">商品1</router-link>
        </div>
        <div>
            <router-link to = "/showproduct/2">商品2</router-link>
        </div>
        <div>       
            <router-link to = "/showproduct/3">商品3</router-link>
        </div>
       <router-view></router-view>
    </div>
</template>