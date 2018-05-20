<template>
  <div class="property-form">
    <h3>New Floorplan</h3>
    <form>
      <div class="form-group">
        <label for="floorplanName">Floorplan name</label>
        <input type="text" class="form-control" id="floorplanName" placeholder="Enter name of floorplan">
      </div>
      <!--<div class="form-group">-->
        <!--<label for="propAddress">Property address</label>-->
        <!--&lt;!&ndash;<input type="text" class="form-control" id="propAddress" placeholder="Enter address of property">&ndash;&gt;-->
        <!--<textarea class="form-control" id="propAddress" rows="2"></textarea>-->
      <!--</div>-->
      <!--<div class="form-group">-->
        <!--<label for="propCity">Property city</label>-->
        <!--<input type="text" class="form-control" id="propCity" placeholder="Enter city of property">-->
      <!--</div>-->
      <button class="btn-primary" style="margin-top: 10px" >Submit</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'NewFloorplan',
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
