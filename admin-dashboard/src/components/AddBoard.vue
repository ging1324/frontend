<template>
  <div>
    <div>
      <span>제목 : </span>
      <label for="title"></label>
      <input type="text" id="title" class="title" v-model="title"/>
    </div>
    <div>
      <span>내용 : </span>
      <label for="content"></label>
      <textarea id="content" v-model="contents "></textarea>
    </div>
    <div>
      <span>채용구분</span>
      <input type="radio" id="always" name="gubun"/>
      <label for="always">상시</label>
      <input type="radio" id="not-always" name="gubun"/>
      <label for="not-always">공채</label>
      <div class="not-always-date">
        <input type="text" id="stDate" value="2020-01-01"/>
        <input type="text" id="edDate" value="2020-03-01"/>
      </div>
    </div>
    <div>
      <span>노출 여부</span>
      <input type="checkbox" id="open" value="열기"/>
      <label for="open">열기</label>
    </div>
    <button @click="addBoard">저장</button>
  </div>
</template>
<script>
export default {
  name: 'AddBoard',
  date() {
    return {
      title:'',
      contents:'',
      user_id:'7',
    }
  },
  methods: {
    addBoard() {
      let board_info = {
        'user_id': 7,
        'title': this.title,
        'content': this.contents
      }
      this.axios.post('http://14.37.71.153:3013/boardAdd', board_info).then((res) => {
        if(res.status === 200) {
          alert('새 글이 등록 되었습니다!!');
          this.$router.push('/tables');
        }
      })
    }
  }
}
</script>

<style>

</style>