<template>
  <div class="hello">
    <h1>Floorplan detail - {{ floorplan.name}} in property {{ property.name }}</h1>
    <div v-if="roomList">
      <h2>Rooms</h2>
      <button class="btn-primary">Add new</button>
      <div v-for="r in roomList" style="border: 1px solid black">
        <div class="room-name">
          <h4>{{ r.name }}</h4>
        </div>
        <div class="room-items">
          <span>Items in room</span>
          <div v-for="item in r.room_items">
            {{ item.name }}
          </div>
          <button class="btn-primary">Add new</button>
        </div>
        <!--<div class="property-info">-->
          <!--{{ r }}-->
        <!--</div>-->
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'PropertyList',
//  components: {
//    TreeMap,
//    bar_chart: BarChart,
//    bootstrap_table: BootstrapTable
//  },
  computed: {
//    barData() {
//      console.log(this.$store.getters)
//      return this.$store.getters.treeData
//    }
  },
  data () {
    return {
      floorplan: null,
      property: null,
      roomList: null
    }
  },
  mounted () {
    var me = this;
    let fid = this.$route.params.floorplanId
    let url = 'http://167.99.14.10/floorplans/' + fid
    this.$http.get(url).then(response => {
      me.floorplan = response.data
      me.property = response.data.property
      me.roomList = response.data.rooms
      console.log(response.data)
    })

  },
  methods: {
    parseDate (d) {
      let y = new Date(d.substring(0, 4),
        d.substring(5, 7),
        d.substring(8, 10))
      return y;
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
