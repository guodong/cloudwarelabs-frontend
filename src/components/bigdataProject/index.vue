<template>
  <div>
    <common-header></common-header>
    <div class="container-fluid container-margin-bottom-compact" id="content_container">
      <div class="row">
        <!-- 可视化案例 -->
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div class="speical speical-radius">
                  <div class="speical-content">
                    <div class="div-overflow">
                      <h3 class="text-special-default">上海地铁站点可视化</h3>
                    </div>
                    <p>
                      <a href="static/case/metro/metroSrc/metro_index.html" alt="上海地铁站点可视化" target="_blank">
                        <img class="img-responsive img-rounded" src="static/case/metro/img/2017-3-14_metro.png">
                      </a>
                    </p>
                    <div class="div-table">
                      <p class="div-content-cell">利用SODA大赛提供的数据进行可视化</p>
                    </div>
                  </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div class="speical speical-radius">
                <div class="speical-content">
                  <div class="div-overflow">
                    <h3 class="text-special-default">担保链分析</h3>
                  </div>
                  <p>
                    <a href="http://transwarp.io/discover/latest/cases/R/guarantee-chain.html" alt="担保链分析" target="_blank">
                      <img class="img-responsive img-rounded" src="static/case/danbaolian/1.jpg">
                    </a>
                  </p>
                  <div class="div-table">
                    <p class="div-content-cell">担保链分析是discover推出的系列标准案例之一</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div class="speical speical-radius">
                <div class="speical-content">
                  <div class="div-overflow">
                    <h3 class="text-special-default">流失预警</h3>
                  </div>
                  <p>
                    <a href="http://transwarp.io/discover/latest/cases/R/losing-warn.html" alt="流失预警" target="_blank">
                      <img class="img-responsive img-rounded" src="static/case/liushiyujing/1.png">
                    </a>
                  </p>
                  <div class="div-table">
                    <p class="div-content-cell">本案例主要对某机构的用户交易记录进行分析，探索用户流失的原因，建立用户流失预警模型，并预测用户流失的概率</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div class="speical speical-radius">
                <div class="speical-content">
                  <div class="div-overflow">
                    <h3 class="text-special-default">商圈聚类</h3>
                  </div>
                  <p>
                    <a href="http://transwarp.io/discover/latest/cases/R/guarantee-chain.html" alt="商圈聚类" target="_blank">
                      <img class="img-responsive img-rounded" src="static/case/shangquanjulei/1.jpg">
                    </a>
                  </p>
                  <div class="div-table">
                    <p class="div-content-cell">本案例通过对定位信息的分析，选择合适的数据挖掘算法，结合地图信息，实现了热门商圈的聚类和可视化展示</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import CommonHeader from '../CommonHeader.vue'
  import CommonFooter from '../CommonFooter.vue'
  export default {
    components: {CommonHeader,CommonFooter},
  }
</script>
