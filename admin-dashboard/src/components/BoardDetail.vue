<template>
  <section id="profile">
    <mdb-row>
      <div>
        <div>
          <h3>{{detailData.title}}</h3>
        </div>
        <div>
          <span>작성자 : </span>
          <p class="detail-content">{{detailData.author}}</p>
        </div>
        <div>
          <span>내용 : </span>
          <label for="content"></label>
          <p class="detail-content">{{detailData.content}}</p>
          <!-- <textarea id="content" v-model="detailData.content"></textarea> -->
        </div>
        <div>
          <span>채용구분 : </span>
          <p class="detail-content">{{gubunToText(detailData.gubun)}}</p>
          <div v-if="detailData.gubun == '1'">
            <span>{{detailData.start_date}}</span> ~ 
            <span>{{detailData.end_date}}</span>
          </div>
        </div>
        <div>
          <span>상태</span>
          <div class="detail-content">{{statusToText(detailData.status)}}</div>
        </div>
        <!-- <mdb-btn
            outline="white"
            tag="a"
            href="javascript:;:;"
            target="_blank"
            >수정 <mdb-icon icon="graduation-cap" class="ml-2"
          />
        </mdb-btn> -->
        <button type="button" class="btn btn-primary" @click="goModify">수정</button>
          
        <!-- <div>
            <span>노출여부</span>
            <div>{{detailData.is_closed}}</div>
        </div> -->
      </div>
    </mdb-row>
  </section>
</template>

<script>
import { mdbRow } from 'mdbvue'

export default {
  name: 'BoardDetail',
  components: {
    mdbRow,
  },
  data() {
    return {
      id:'',
      detailData: { },
      dataTest: 'hahaha',
    }
  },
  methods: {
    getDetail() {
      this.id = this.$route.query.id;
        /* eslint-disable no-console */ 
      this.axios.get('http://14.37.71.153:3013/boardDetail?id='+this.id).then((res) => {
        if(res.status == 200) {
          this.detailData = res.data.result;
        }
      });
    },
    gubunToText(gubun) {
      if(gubun == 0){
        return '상시';
      }
      else {
        return '공채';
      }
    },
    statusToText(status) {
        if(status == 0) {
            return '공개중';
        }else{
            return '미공개';
        }
    },
    goModify() {

    }
  },
  mounted() {
    this.getDetail();
  },
}
</script>

<style>
.detail-content {
  margin-left: 15px;
}
</style>