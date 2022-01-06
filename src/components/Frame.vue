<template>
  <div class="divCornice">
    <v-img
        style="position:absolute;z-index: 2"
        width="400px"
        src="../../public/background/desktop/cornice.png"
    />
    <v-img
        style="position:absolute;z-index: 1"
        width="390px"
        src="../../public/pfp/unknown.jpeg"
    />
  </div>
</template>

<script>
export default {
  components: {},
  methods: {},
  data() {
    return {}
  },
  computed: {},
}
</script>

<style>
.divCornice {
  margin-top: 250px;
  display: flex;
  align-items: center; /*horizontal centering*/
  justify-content: center; /*vertical centering*/
  flex-direction: column; /*keep the h3 above the textbox*/
}
</style>