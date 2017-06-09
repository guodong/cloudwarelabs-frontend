<template>
  <div class="row">
    <form class="form-horizontal">
      <fieldset>
        <div class="form-group">
          <label for="name" class="col-lg-2 control-label">名称</label>
          <div class="col-lg-10">
            <input type="text" class="form-control" id="name" placeholder="名称">
          </div>
        </div>
        <div class="form-group">
          <label for="description" class="col-lg-2 control-label">描述</label>
          <div class="col-lg-10">
            <input type="text" class="form-control" id="description" placeholder="描述">
          </div>
        </div>
        <div class="form-group">
          <label for="image" class="col-lg-2 control-label">镜像</label>
          <div class="col-lg-10">
            <input type="text" class="form-control" id="image" placeholder="镜像">
          </div>
        </div>
        <div class="form-group">
          <label for="logo" class="col-lg-2 control-label">图片</label>
          <div class="col-lg-10">
            <input type="file" class="form-control" id="logo" placeholder="图片">
          </div>
        </div>
        <div class="form-group">
          <div class="col-lg-10 col-lg-offset-2">
            <router-link class="btn btn-success" exact to="/management/cloudwares">取消</router-link>
            <button type="submit" class="btn btn-primary">提交</button>
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
        cloudware: {},
      }
    },
    created() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
