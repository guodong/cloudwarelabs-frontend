<template>
  <div>
    <common-header></common-header>
    <router-view></router-view>
    <div class="container">
      <div class="page-header">
        <h4>云件实例</h4>
      </div>
      <div class="row">
        <div class="col-md-3" v-for="(instance, index) in instances" v-if="instance.submission==null">
          <div class="panel panel-default cloudware-item">
            <div class="panel-body">
              <span title="删除镜像"><a @click="remove(instance, index)" class="close"><i class="glyphicon glyphicon-remove"></i></a></span>
              <span title="提交作业"><a class="close" data-toggle="modal" data-target="#myModal" style="margin-right: 5px"><i class="glyphicon glyphicon-upload"></i></a></span>

              <!-- Modal -->
              <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      <h4 class="modal-title" id="myModalLabel">作业提交</h4>
                    </div>
                    <div class="modal-body">
                      <span>选择作业：</span>
                      <div class="dropdown">
                        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style="width: 100%;">
                          {{choosedHomework.title}}
                          <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2" style=" font-size: 16px; width:100%">
                          <li v-for="homework,index in homeworkList" @click="chooseHomework(homework)"><a>{{homework.title}}</a></li>
                        </ul>
                      </div>
                      <span>作业描述:</span>
                      <textarea v-model="description" style="width:80%; margin-top: 20px"></textarea>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                      <button type="button" class="btn btn-primary" data-dismiss="modal" @click="submit(instance)">提交</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="title">
                <img :src="instance.cloudware.logo">
                <h5>{{instance.cloudware.name}}</h5>
              </div>
              <div class="info">{{instance.cloudware.description}}</div>
              <div class="btn-group btn-group-justified">
                <a :href="'http://' + settings.ide + '/ide.html?token=vfs-' + instance.id" target="_blank" class="btn btn-info"><i class="glyphicon glyphicon-folder-open"></i> IDE</a>
                <router-link :to="{name: 'instancesView', params: {id: instance.id}}" class="btn btn-success"><i class="glyphicon glyphicon-th-large"></i> 云件</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 new-cloudware">
          <div class="panel panel-default cloudware-item">
            <div class="panel-body">
              <router-link to="/cloudwares" class="plus">
                <div><i class="glyphicon glyphicon-plus"></i></div>

                <div class="text">创建云件</div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '../CommonHeader.vue'
  export default {
    components: {CommonHeader},
    data () {
      return {
        user:{},
        instances: [],
        settings: window.settings,

        homeworkList: [],
        choosedHomework: {},
        description: ''
      }
    },
    created() {
      this.$http.get('instances', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }).then(resp => {
        this.instances = resp.body
      }),
      this.$http.get('homeworks', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }).then(resp => {
        this.homeworkList = resp.body
        this.choosedHomework=this.homeworkList[0]
      })
    },
    methods: {
      remove(instance, index) {
        if (confirm('确实要删除' + instance.cloudware.name +'吗？')) {
          this.$http.delete('instances/' + instance.id).then(resp => {
            this.instances.splice(index, 1)
          }, () => {
            alert('删除失败')
          })
        }
      },
      chooseHomework(homework){
        this.choosedHomework=homework
      },
      submit(instance){
        this.$http.post('submissions',{homework_id:this.choosedHomework.id, instance_id: instance.id, description:this.description}).then(resp => {
          alert('作业提交成功！')
          this.$http.get('instances', {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
          }).then(resp => {
            this.instances = resp.body
          })
        }, () => {
          alert('作业提交失败！')
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    width: 80px;
    height: 80px;
    float: left;
  }
  h5 {
    font-size: 18px;
    padding-left: 100px;
    font-weight: bold;
  }
  .cloudware-item {
    height: 240px;
  }
  .title {
    height: 100px;
  }
  .info {
    height: 60px;
    overflow: hidden;
  }
  .new-cloudware .panel-body {
    position: relative;
    height: 100%;
  }
  .new-cloudware i {
    font-size: 42px;
  }
  .new-cloudware .text {
    font-size: 18px;
  }
  .new-cloudware .plus {
    display: block;
    margin-top: 60px;
    text-align: center;
    text-decoration: none;
  }
  .close {
    font-size: 18px;
  }
</style>
