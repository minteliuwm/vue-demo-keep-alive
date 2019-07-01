<template>
  <div>
    <keep-alive :include="['PageA']" >
      <router-view />
    </keep-alive>
  </div>
</template>
