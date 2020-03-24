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
      <label for="always">상시</label>
      <input type="radio" id="always" name="gubun"/>
      <label for="not-always">채용시 마감</label>
      <input type="radio" id="not-always" name="gubun"/>
    </div>
    <div>
      <span>채용형태</span>
      <label for="all">전체</label>
      <input type="checkbox" id="all" value="전체"/>
      <label for="new">신입</label>
      <input type="checkbox" id="new" value="신입"/>
      <label for="career">경력</label>
      <input type="checkbox" id="career" value="경력"/>
      <label for="contract">계약</label>
      <input type="checkbox" id="contract" value="계약"/>
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