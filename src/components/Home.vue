<template>
  <div class="hello">
    <h1>Homepage</h1>
    <properties></properties>
  </div>
</template>

<script>
import PropertyList from './Properties.vue'
export default {
  name: 'Home',
  components: {
    properties: PropertyList
  },
  computed: {
  },
  data () {
    return {
      newProp: false,
      propertyList: null
    }
  },
  mounted () {

  },
  methods: {
//    parseDate (d) {
//      let y = new Date(d.substring(0, 4),
//        d.substring(5, 7),
//        d.substring(8, 10))
//      return y;
//    },
//    viewPropertyFloorplans(pid) {
//      let url = 'property/' + pid.toString()
//      this.$router.push(url)
//    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
