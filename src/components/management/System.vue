<template>
  <div>

        <form class="form-horizontal">
          <fieldset>
            <div class="form-group">
              <label for="name" class="col-lg-2 control-label">CPU配额</label>
              <div class="col-lg-10">
                <input v-model="settings.cpuq" type="text" class="form-control" id="name" placeholder="CPU配额">
              </div>
            </div>
            <div class="form-group">
              <label for="description" class="col-lg-2 control-label">内存限制</label>
              <div class="col-lg-10">
                <input v-model="settings.memq" type="text" class="form-control" id="description" placeholder="内存限制">
              </div>
            </div>
            <div class="form-group">
              <div class="col-lg-10 col-lg-offset-2">
                <button type="button" @click="submit()" class="btn btn-primary">提 交</button>
                <router-link class="btn btn-danger" exact to="/management/cloudwares">取 消</router-link>
              </div>
            </div>
          </fieldset>
        </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        settings: {}
      }
    },
    created() {

    },
    methods: {
      submit() {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
