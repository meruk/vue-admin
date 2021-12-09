<template>
  <div>
    <h1>MainLayout.vue</h1>
    <MainMenu/>
    <router-view name="contents" key="contentKey"></router-view>
  </div>
</template>
<script>
// eslint-disable-next-line import/extensions
import MainMenu from '@/components/MainMenu';

export default {
  name: 'MainLayout',
  components: { MainMenu },
  data() {
    return {

    };
  },
};
</script>
