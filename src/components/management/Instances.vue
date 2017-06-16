<template>
  <div>
    <table class="table table-hover">
      <thead>
      <tr>
        <th>ID</th>
        <th>名称</th>
        <th>用户</th>
        <th>Rancher id</th>
        <th>开启时间</th>
        <th style="width: 80px;">操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(instance, index) in instances">
        <th scope="row">{{instance.id}}</th>
        <td>{{instance.cloudware.name}}</td>
        <td>{{instance.user.username}}</td>
        <td>{{instance.rancher_container_id}}</td>
        <td>{{instance.created_at}}</td>
        <td class="ops">
          <a @click="remove(instance, index)" href="#"><i class="glyphicon glyphicon-trash"></i></a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        instances: []
      }
    },
    created() {
      this.$http.get('instances/all').then(resp => {
        this.instances = resp.body
      })
    },
    methods: {
      remove(instance, index) {
        if (confirm('确实要删除' + instance.cloudware.name +'吗？')) {
          this.$http.delete('instances/' + instance.id).then(resp => {
            alert('删除成功')
            this.instances.splice(index, 1)
        }, () => {
            alert('删除失败')
          })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ops a {
    margin-left: 10px;
  }
</style>
