<template>
  <div>
    <!--<router-view></router-view>-->
    <common-header></common-header>
    <div id="fullpage">
      <div class="section active" id="section0">
        <p style="padding-left: 70px">本系统的数据格式包括：结构化数据、半结构化数据和非结构化数据。
          存储方式既包括数据库形式的数据，也包括文件形式的数据。
        </p>
        <h2>&nbsp;&nbsp;&nbsp;&nbsp;数据的具体来源如下：</h2>

        <ul class="datasource">
          <!--<ul>
            <h3>1、政府数据（Government data)</h3>
            <li><a href="http://data.un.org/">UNdata（联合国数据库）：联合国统计司（The United Nations Statistics Division）为全球用户启动了的互联网数据服务。供用户搜索和下载联合国系统的各种统计资源。</a> </li>
            <li><a href="http://data.gov">Data.gov：美国政府承诺免费公开的政府数据。网站内数据集设计农业、气候、进入等近20个领域的数据。</a> </li>
            <li><a href="http://www.census.gov/data.html">US Census Bureau（美国人口普查局）</a> </li>
            <li><a href="https://www-fars.nhtsa.dot.gov/Main/index.aspx">Nhtsa（美国交通事故数据集）</a> </li>
            <li><a href="http://aqsdr1.epa.gov/aqsweb/aqstmp/airdata/download_files.html">EPA（美国空气质量数据集）</a> </li>
            <li><a href="http://open-data.europa.eu/en/data/">European Union Open Data Portal （欧洲开放数据门户）</a> </li>
            <li><a href="http://data.gov.uk/">Data.gov.uk（英国政府公开数据库）</a> </li>
            <li><a href="http://data.gov.in">Data.gov.in（印度政府公开的数据）</a> </li>
            <li><a href="https://opengovernmentdata.org/data/">Open Government Data（世界政府数据检索）</a> </li>
            <li><a href="https://www.unicef.org/reports">UNICEF（联合国儿童基金会）：提供关于全世界妇女和儿童状况的统计数字</a> </li>
            <li><a href="http://chriswhong.github.io/nyctaxi/">纽约出租车</a> </li>
            <li><a href="http://www.gyopendata.gov.cn/show.htm">上海市政府数据服务网：由上海市人民政府办公厅、上海市经济和信息化委员会牵头，相关政府部门共同参与建设的政府数据服务门户。</a> </li>
            <li><a href="https://www.cia.gov/library/publications/the-world-factbook/">The CIA World Factbook：美国中情局世界概况，包括267个国家的历史、人口、经济、政府、基础设施和军事情况。</a> </li>
            <li><a href="http://www.bjdata.gov.cn">北京市政务数据资源网：由北京市经济和信息化委员会牵头建设，北京市各政务部门共同参与，于2012年10月开始试运行。致力于提供北京市政务部门可开放的各类数据的下载与服务。</a> </li>
            <li><a href="http://www.wuhandata.gov.cn">武汉市政府公开数据服务网：由武汉市互联网信息办公室承建，已收录了48个政府部门网站的共计700余项公开数据或服务。</a> </li>


          </ul>
          <ul>
            <h3>2、企业数据（Company data)</h3>
            <li><a href="http://aws.amazon.com/datasets">AWS Public Datasets（AWS公共数据集）：数据包括1000基因组计划，提供庞大的公共数据资源，试图建立最全面的人类遗传信息数据库和NASA的地球卫星图像数据库。</a> </li>
            <li><a href="https://developers.facebook.com/docs/graph-api/overview">Facebook Graph：一个基于HTTP的API，是获取数据进出Facebook平台的主要方式。可以使用它来查询数据、发布新故事、管理广告、上传照片和应用程序可能需要执行的各种其他任务。</a> </li>
            <li><a href="https://www.google.com/publicdata/directory?hl=en">Google Public Data Explorer（谷歌公共数据搜索引擎）：主要包括与经济数据相关的数据，包括世界发展指标、经合组织和人类发展指标的数据。</a> </li>
            <li><a href="https://www.google.com/trends/explore">Google Trends：自2004年以来，任一指定词汇的搜索量的统计数据</a> </li>
            <li><a href="http://developer.nytimes.com/">New York Times（纽约时报数据集）：1851年以来，任何可搜索、索引的文章存档。</a> </li>
            <li><a href="https://research.google.com/youtube8m/">YouTube视频标记数据集</a> </li>
          </ul>
          <ul>
            <h3>3、健康（Health）</h3>
            <li><a href="https://www.healthdata.gov/">Healthdata.gov：125年以来美国医疗保健数据，包括索赔级数据、流行病学和人口统计。</a> </li>
            <li><a href="http://www.hscic.gov.uk/home">NHS健康和社会保健信息中心：英国国家健康服务的数据库。</a> </li>
            <li><a href="http://www.who.int/en/"></a> </li>

          </ul>
          <ul>
            <h3>4、金融(Finance）</h3>
            <li><a href="https://www.google.com/finance">Google Finance（谷歌财经）：实时更新，记录股票市场40年的数据。</a> </li>
            <li><a href="http://finance.yahoo.com">Yahoo finances（雅虎财经）：股票及相关分析数据</a> </li>

          </ul>
          <ul>
            <h3>5、天气（Climate)</h3>
            <li><a href="http://www.ncdc.noaa.gov/data-access/quick-links#loc-clim">National Climatic Data Center（国家气候数据中心）：世界上最大的天气数据归档，包括来自美国国家气候数据中心的大量环境、气象和气候数据集。</a> </li>
            <li><a href="https://www.wunderground.com/history/?MR=1">Weather underground：通过搜索城市、邮政编码或机场代码查找历史天气。</a> </li>
            <li><a href=""></a> </li>
          </ul>
          <ul>
            <h3>6、休闲娱乐（Entertainment)</h3>
            <li><a href="http://labrosa.ee.columbia.edu/millionsong/">Million Song Dataset（百万音乐数据库）</a> </li>
            <li><a href="https://www.firebase.com/docs/open-data/airports.html">Airport Open Data Sets（机场数据库）</a> </li>
            <li><a href="https://grouplens.org/datasets/movielens/">Grouplens：从MovieLens网站收集并提供了评级数据集。</a> </li>
          </ul>-->
          <ul>
            <h3>1、实验案例(Science Rearch)</h3>
            <li><h4>百货商店销售数据集</h4>
              <p>该数据集是某个百货商店一个月真实的交易记录，共有9835条消费记录，169个商品。适合进行Apriori、FP Growth、eclat算法进行关联分析或关联规则推荐建模分析。
              信用卡用户画像数据源
              信用卡的用户消费记录，可以通过用户的消费记录对用户的喜好进行分析，形成用户画像。
              </p>
            </li>
            <li><h4>商圈刷卡记录数据源</h4>
              刷卡记录数据，包括两张表：emporium 中储存的是商场信息。id 表示商场的编号， gpslongitude 表示商场的地理经度，gpslatitude表示商场的地理纬度。ggmap1中储存的是上海的地图。地图数据可以通过·ggmap::qmap(‘shanghai’)·得到。</li>
            <li>
              <h4>Iris鸢尾花数据集</h4>

Iris数据集是常用的分类实验数据集，由Fisher, 1936收集整理。Iris也称鸢尾花卉数据集，是一类多重变量分析的数据集。数据集包含150个数据集，分为3类，每类50个数据，每个数据包含4个属性。可通过花萼长度，花萼宽度，花瓣长度，花瓣宽度4个属性预测鸢尾花卉属于（Setosa，Versicolour，Virginica）三个种类中的哪一类。该数据集由3种不同类型的鸢尾花的50个样本数据构成。其中的一个种类与另外两个种类是线性可分离的，后两个种类是非线性可分离的。
该数据集包含了5个属性：<br>
& Sepal.Length（花萼长度），单位是cm;<br>
& Sepal.Width（花萼宽度），单位是cm;<br>
& Petal.Length（花瓣长度），单位是cm;<br>
& Petal.Width（花瓣宽度），单位是cm;<br>
& 种类：Iris Setosa（山鸢尾）、Iris Versicolour（杂色鸢尾），以及Iris Virginica（维吉尼亚鸢尾）。

            </li>
            <li>
              <h4>泰坦尼克号生还者数据集</h4>
              泰坦尼克号生还者记录的数据集，可以进行预测算法分析，数据集一共有12个字段。PassengerId => 乘客ID ，Survived s =>是否生还，Pclass => 乘客等级(1/2/3等舱位)，Name => 乘客姓名，Sex => 性别 ，Age => 年龄 ，SibSp => 堂兄弟/妹个数，Parch => 父母与小孩个数 ，Ticket => 船票信息，Fare => 票价，Cabin => 客舱，Embarked => 登船港口。

            </li>
          </ul>
          <ul>
            <h3>2、科学研究(Science Rearch)</h3>
            <li><a href="http://webscope.sandbox.yahoo.com/catalog.php?datatype=l" target="_blank">Language Data：Yahoo语言数据集</a> </li>
            <li><a href="http://data.worldbank.org/" target="_blank">世界银行TCdata360的大数据平台：TCdata360平台整合并视觉化呈现20多个来源的公开数据</a> </li>
            <li><a href="http://www.ncmi.cn/1" target="_blank">国家人口与健康科学数据共享平台</a> </li>
            <li><a href="https://data.nasa.gov/" target="_blank">NASA开放数据源</a> </li>

          </ul>
          <ul>
            <h3>3、竞赛数据(Competition Data)</h3>
            <li><a href="https://www.kaggle.com/" target="_blank">Kaggle竞赛平台</a> </li>
            <li><a href="http://www.kdd.org/kdd-cup" target="_blank">KDD Cups</a> </li>
            <li><a href="https://www.drivendata.org/">Driven Data</a> </li>
            <li><a href="https://tianchi.shuju.aliyun.com/" target="_blank">天池大数据竞赛：是由阿里云主办，面向全球新生代力量的高端算法竞赛。</a> </li>
            <li><a href="http://soda.datashanghai.gov.cn/" target="_blank">SODA上海开放数据创新应用大赛</a> </li>
          </ul>

        </ul>

      </div>
    </div>
  </div>
</template>


<script>
  import router from '../../router'
  import CommonFooter from './../CommonFooter.vue'
  import CommonHeader from './../CommonHeader.vue'
  export default {
    /*name: 'welcome',
    methods: {
      login: function () {
        $('#fullpage').fullpage.destroy('all')
        router.push('/login')
      },
      register: function () {
        $('#fullpage').fullpage.destroy('all')
        router.push('/register')
      }
    },
    created() {
      $(document).ready(function () {
        $('#fullpage').fullpage({
          verticalCentered: false
        });
      });*/
    /*},*/
    components: {CommonFooter,CommonHeader}
  }
</script>
<style>
  .datasource {
    font-size: 14px;
  }
  .datasource h4 {
    margin: 30px 0;
  }
</style>
