<template>
  <div>
    <div>
      <span>제목 : </span>
      <h3>상세페이지에 선언한 변수가 undefined 나와 에러가 발생하는 상황입니다.</h3>
    </div>
    <div>
      <span>작성자</span>
      <span></span>
    </div>
    <div>
      <span>내용 : </span>
      <label for="content"></label>
      <!-- <textarea id="content" v-model="detailData.content"></textarea> -->
    </div>
    <div>
      <span>채용구분</span>
      <span>zz</span>
    </div>
    <div>
      <span>채용형태</span>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoardDetail',
  date() {
    return {
      id:'',
      detailData: {},
      dataTest: 'hahaha'
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
    }
  },
  mounted() {
    /* eslint-disable no-console */ 
    // console.info(this.detailData);
    this.getDetail();
  },

}
</script>

<style>

</style>