<template>
  <div>
    <div>
      <ul class="data-list">
        <li>
          <span>아이디 : </span>
          <input type="text" name="" id="" v-model="user_id">
        </li>
        <li>
          <span>pw : </span>
          <input type="password" name="" id="" v-model="user_passwd">
        </li>
        <li>
          <span>이름 : </span>
          <input type="text" name="" id="" v-model="user_name">
        </li>
        <!-- <li>
          <span>권한 : </span>
          <select name="" id="" v-model="group">
            <option value="1">그룹관리자</option>
            <option value="0">전체관리자</option>
          </select>
        </li> -->
        <li>
          <span>소속 그룹 : </span>
          <select name="" id="" v-model="group">
            <option value="1">1그룹</option>
            <option value="2">2그룹</option>
            <option value="3">3그룹</option>
            <option value="4">4그룹</option>
          </select>
        </li>
      </ul>
      <button type="button" class="btn btn-primary" @click="addUser">저장</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserAdd',
  data () {
    return {
      user_id: '',
      user_passwd: '',
      user_name: '',
      group: '',
      permission_id: ''
    }
  },
  methods: {
    addUser() {
      let user_info = {
        'user_id': this.user_id,
        'user_passwd': this.user_passwd,
        'user_name': this.user_name,
        'group': this.group
      }
      /* eslint-disable no-console */ 
      console.info(this.group);
      if(user_info.user_id == '') {
        console.info('user_id err');
        return false;
      }else if (user_info.user_passwd == ''){
        console.info('user_passwd err');
        return false;
      }else if (user_info.user_name == ''){
        console.info('user_name err');
        return false;
      }else if (user_info.group == ''){
        console.info('group err');
        return false;
      }

      this.axios.post('http://14.37.71.153:3013/addUser', user_info).then((res) => {
        if(res.status === 200) {
          alert('새로운 사용자가 등록 되었습니다!!');
          // this.$router.push('/userList');
        }
      })
    }

  },
  mounted() {
    
  }
}
</script>

<style>
.data-list li span { display: inline-block; width:100px; }
</style>