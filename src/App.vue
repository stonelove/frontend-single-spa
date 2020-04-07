<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" mode="inline">
        <a-sub-menu key="1">
          <span slot="title">
            <a-icon type="user" />
            <span>Vue</span>
          </span>
          <a-menu-item key="1-1">
            <a href="/vue#" @click="goToChildRoute">
              Home
            </a>
          </a-menu-item>
          <a-menu-item key="1-2">
            <a href="/vue#/about" @click="goToChildRoute">
              About
            </a>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="2">
          <router-link to="react">
            <a-icon type="video-camera" />
            <span>React</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="angular">
            <a-icon type="video-camera" />
            <span>Angular</span>
          </router-link>
        </a-menu-item>
         <a-sub-menu key="4">
          <span slot="title">
            <a-icon type="user" />
            <span>AntDesignProVue</span>
          </span>
          <a-menu-item key="4-1">
            <a href="/antDesignProVue#" @click="goToChildRoute">
              Home
            </a>
          </a-menu-item>
          <a-menu-item key="4-2">
            <a href="/antDesignProVue#/dashboard/workplace" @click="goToChildRoute">
              About
            </a>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="5">
          <span slot="title">
            <a-icon type="user" />
            <span>antVueDemo</span>
          </span>
          <a-menu-item key="5-1">
            <a href="/antVueDemo#" @click="goToChildRoute">
              Home
            </a>
          </a-menu-item>
          <a-menu-item key="5-2">
            <a href="/antVueDemo#/about" @click="goToChildRoute">
              About
            </a>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
                class="trigger"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <div>
          <div id="react-app"></div>
          <div id="single-vue" class="single-spa-vue">
            <div id="vue"></div>
          </div>
           <div id="ant-design-pro-vue" class="ant-design-pro-vue">
            <div id="vue"></div>
          </div>
          <div id="angular-app"></div>
          <router-view :key="$route.path" />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
  import { navigateToUrl } from 'single-spa';
  export default {
    data() {
      return {
        collapsed: false,
      };
    },
    methods: {
      goToChildRoute(e) {
        // 官方指定跳转
        e.preventDefault();
        navigateToUrl(e);
      }
    }
  };
</script>
<style>
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
