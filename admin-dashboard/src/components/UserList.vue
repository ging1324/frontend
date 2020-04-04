<template>
  <section id="tables">
    <mdb-row>
      <mdb-col md="12">
        <mdb-card cascade narrow class="mt-5">
          <mdb-view class="gradient-card-header blue darken-2">
            <h4 class="h4-responsive text-white">사용자 관리</h4>
          </mdb-view>
          <mdb-card-body>
            <h3 class="mt-5 text-left">
              <strong>사용자 목록</strong>
            </h3>
            <!-- <table class="table table-striped"> -->
            <table class="table">
              <colgroup>
              <col width="5%" />
              <col width="20%" />
              <col width="20%" />
              <col width="15%" />
              <col width="15%" />
              <col width="*" />
              </colgroup>
              <thead class="blue-grey lighten-4">
                <tr>
                  <th>#</th>
                  <th>아이디</th>
                  <th>이름</th>
                  <th>권한</th>
                  <th>그룹</th>
                  <th>생성일</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  v-for="(item,index) in userList"
                  :key="index"
                  :index=index>
                  <th scope="row">{{index+1}}</th>
                  <td>{{item.user_id}}</td>
                  <td>{{item.user_name}}</td>
                  <td>{{item.permission_id}}</td>
                  <td>{{item.group}}</td>
                  <td>{{item.user_created}}</td>
                </tr>
              </tbody>
            </table>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
      <div>
        <button type="button" class="btn btn-primary" @click="goAdd">추가</button>
      </div>
    </mdb-row>
  </section>
</template>

<script>
import { mdbRow, mdbCol, mdbCard, mdbView, mdbCardBody } from 'mdbvue'
export default {
  name: 'UserList',
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbView,
    mdbCardBody,
  },
  data () {
    return {
      userList:[]
    }
  },
  methods: {
    getUsetList() {
      /* eslint-disable no-console */ 
      this.axios.get('http://14.37.71.153:3013/getUserList').then((res) => {
        if(res.status == 200) {
          this.userList = res.data.result;
        }
        console.info('res', this.userList);
      });
    },
    goAdd() {
      this.$router.push('/userAdd');
    }
  },
  mounted() {
    this.getUsetList();
  },
}
</script>

<style>

</style>