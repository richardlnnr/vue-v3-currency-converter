<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { data } from "@/data";

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  mounted(): void {
    data.getSymbols().then((r) => {
      console.log("getSymbols", r);
    });

    data.getLatest().then((r) => {
      console.log("getLatest", r);
    });
  }
}
</script>
