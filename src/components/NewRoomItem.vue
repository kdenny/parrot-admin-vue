<template>
  <div class="property-form">
    <h3>New room item</h3>
    <form>
      <div class="form-group">
        <label for="itemName">Item name</label>
        <input type="text" class="form-control" id="itemName" placeholder="Enter name of item to add to room">
      </div>

      <button class="btn-primary" style="margin-top: 10px" >Submit</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'NewRoomItem',
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
      propertyList: null
    }
  },
  mounted () {
    var me = this;
    console.log(this.uData)
    let url = 'http://167.99.14.10/properties'
    this.$http.get(url).then(response => {
      me.propertyList = response.data
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
    viewPropertyFloorplans(pid) {
      let url = 'property/' + pid.toString()
      this.$router.push(url)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.property-form {
  width: 40%;
  position: relative;
  left: 30%;
}
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
