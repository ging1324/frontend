<template>
  <section id="tables">
    <mdb-row>
      <mdb-col md="12">
        <mdb-card cascade narrow class="mt-5">
          <mdb-view class="gradient-card-header blue darken-2">
            <h4 class="h4-responsive text-white">Basic tables</h4>
          </mdb-view>
          <mdb-card-body>
            <h3 class="mt-5 text-left">
              <strong>채용관리</strong>
            </h3>
            <div>
              <ul>
                <li>
                  <div class="title">
                    <p>제목<span>채용타입</span></p>
                    <div class="date">2020-03-25</div>
                  </div>
                  <div class="content">
                    내용내용
                  </div>
                </li>
              </ul>
            </div>
            <!-- <table class="table table-striped"> -->
            <table class="table">
              <colgroup>
              <col width="5%px" />
              <col width="50%" />
              <col width="20%" />
              <col width="*" />
              </colgroup>
              <thead class="blue-grey lighten-4">
                <tr>
                  <th>#</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  v-for="(item,index) in boardList"
                  :key="item.idx"
                  :index=index>
                  <th scope="row">{{index+1}}</th>
                  <td>
                    <a href="javascript:;" @click="goDetail(item.id)">{{item.title}}</a>
                    </td>
                  <td>{{item.user_name}}</td>
                  <td>{{statusToString(item.status)}}</td>
                </tr>
              </tbody>
            </table>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </section>
</template>

<script>
import { mdbRow, mdbCol, mdbCard, mdbView, mdbCardBody } from 'mdbvue'

export default {
  name: 'BoardList',
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbView,
    mdbCardBody,
  },
  data () {
    return {
        boardList:[]
    }
  },
  methods: {
    getRecuList() {
      /* eslint-disable no-console */ 
      this.axios.get('http://14.37.71.153:3013/boardList').then((res) => {
        if(res.status == 200) {
          this.boardList = res.data.result.boardList;
        }
        console.info('res', res);
      });
    },
    statusToString(num){
      if(num == 0) {
          return "인턴";
      }else if(num == 1) {
          return "계약직";
      }else if(num == 2) {
          return "상시";
      }else if(num == 3) {
          return "정규";
      }
    },
    goDetail(id) {
      this.$router.push('/boardDetail?id='+id);
    }
  },
  mounted() {
    this.getRecuList();
  },
}
</script>

<style>

</style>