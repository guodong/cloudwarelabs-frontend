<template>
  <div class="row">
    <form class="form-horizontal">
      <fieldset>
        <div class="form-group">
          <label for="name" class="col-lg-2 control-label">名称</label>
          <div class="col-lg-10">
            <input v-model="cloudware.name" type="text" class="form-control" id="name" placeholder="名称">
          </div>
        </div>
        <div class="form-group">
          <label for="description" class="col-lg-2 control-label">描述</label>
          <div class="col-lg-10">
            <input v-model="cloudware.description" type="text" class="form-control" id="description" placeholder="描述">
          </div>
        </div>
        <div class="form-group">
          <label for="image" class="col-lg-2 control-label">镜像</label>
          <div class="col-lg-10">
            <input v-model="cloudware.image" type="text" class="form-control" id="image" placeholder="镜像">
          </div>
        </div>
        <div class="form-group">
          <label for="logo" class="col-lg-2 control-label">图片</label>
          <div class="col-lg-10">
            <img class="logo" :src="cloudware.logo">
            <input @change="logoChange" type="file" class="form-control" id="logo" placeholder="图片">
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
        cloudware: {
          name: '',
          description: '',
          logo: ''
        }
      }
    },
    created() {
      this.$http.get('cloudwares/' + this.$route.params.id).then(resp => {
        this.cloudware = resp.body
      })
    },
    methods: {
      submit() {
        this.$http.put('cloudwares/' + this.$route.params.id, this.cloudware).then(resp => {
          alert('修改成功')
          this.$router.push('/management/cloudwares')
        })
      },
      logoChange(e) {
        var me = this
        var file = e.target.files[0]
        var reader = new FileReader()
        reader.addEventListener("load", function () {
          me.cloudware.logo = reader.result
        }, false)
        reader.readAsDataURL(file)
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  max-height: 100px;
}
</style>
