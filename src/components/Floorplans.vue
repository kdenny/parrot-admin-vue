<template>
  <div class="hello">
    <h1>Floorplans for {{ property.name }}</h1>
    <div v-if="floorplanList">
      <div v-for="f in floorplanList" v-on:click="getFloorplanDetail(f.id)">
        <div class="floorplan-name">
          {{ f.name }} - used in 3 apartments
        </div>
        <div class="property-info">
          {{ f }}
        </div>
      </div>
      <button class="btn-primary" style="margin-top: 50px" v-on:click="newFloorplan=true" v-if="!newFloorplan">Add new</button>
      <floorplan_form v-if="newFloorplan"></floorplan_form>
    </div>

  </div>
</template>

<script>
import FloorplanForm from './NewFloorplan.vue'
export default {
  name: 'PropertyList',
  components: {
    floorplan_form: FloorplanForm
  },
  computed: {
  },
  data () {
    return {
      floorplanList: null,
      property: null,
      newFloorplan: false
    }
  },
  mounted () {
    var me = this;
    console.log(this.uData)
    let pid = this.$route.params.propertyId
    let url = 'http://167.99.14.10/property/' + pid
    this.$http.get(url).then(response => {
      me.property = response.data
      me.floorplanList = response.data.floorplans
      console.log(response.data)
    })

  },
  methods: {
    parseDate (d) {
      let y = new Date(d.substring(0, 4),
        d.substring(5, 7),
        d.substring(8, 10))
      return y;
    },
    getFloorplanDetail(fid) {
      let url = '/floorplan/' + fid.toString()
      this.$router.push(url)
    }
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
