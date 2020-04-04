<template>
  <section id="profile">
    <mdb-row>
      <div>
        <div>
          <h3>{{detailData.title}}</h3>
        </div>
        <div>
          <span>작성자 : </span>
          <input class="detail-content" type="text" name="" id="" v-model="detailData.author">
        </div>
        <div>
          <span>내용 : </span>
          <label for="content"></label>
          <!-- <p class="detail-content">{{detailData.content}}</p> -->
          <textarea id="content" class="detail-content" v-model="detailData.content"></textarea>
        </div>
        <div>
          <span>채용구분 : </span>
          <input type="text" name="" id="" v-model="detailData.gubun">
          <div v-if="detailData.gubun == '1'">
            <input type=text name="" id="" v-model="detailData.start_date"/> ~ 
            <input type=text v-model="detailData.end_date"/>
          </div>
        </div>
        <div>
          <span>상태</span>
          <input type="text" name="" id="" v-model="detailData.status">
        </div>
      </div>
    </mdb-row>
  </section>
</template>

<script>
export default {
  name: 'BoardModify',
  date() {
    return {

    }
  }

}
</script>

<style>

</style>