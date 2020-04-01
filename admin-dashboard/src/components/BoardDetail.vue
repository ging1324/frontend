<template>
  <section>
    <div>
      <div>
        <span>제목 : </span>
        <h3>{{detailData.title}}</h3>
      </div>
      <div>
        <span>작성자 : </span>
        <span>{{detailData.author}}</span>
      </div>
      <div>
        <span>내용 : </span>
        <label for="content"></label>
        <textarea id="content" v-model="detailData.content"></textarea>
      </div>
      <div>
        <span>채용구분 : </span>
        <span>{{gubunToText(detailData.gubun)}}</span>
        <div v-if="detailData.gubun == '0'">
          <span>{{detailData.start_date}}</span> ~ 
          <span>{{detailData.end_date}}</span>
        </div>
      </div>
      <div>
        <span>상태</span>
        <div>{{detailData.status}}</div>
      </div>
      <div>
        <span>노출여부</span>
        <div>{{detailData.is_closed}}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BoardDetail',
  components: {},
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
    }
  },
  mounted() {
    this.getDetail();
  },
}
</script>

<style>

</style>