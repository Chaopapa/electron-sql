<template>
  <div class="form">
    <div class="line">
      <label> 连接名:</label>
      <input v-model.trim="dbConfig.name" name="name" type="text" />
    </div>
    <div class="line">
      <label> IP:</label> <input v-model.trim="dbConfig.ip" type="text" />
    </div>
    <div class="line">
      <label> 端口号:</label> <input v-model.trim="dbConfig.port" type="text" />
    </div>
    <div class="line">
      <label> 用户名:</label>
      <input v-model.trim="dbConfig.username" type="text" />
    </div>
    <div class="line">
      <label>密码:</label>
      <input v-model.trim="dbConfig.password" type="password" />
    </div>
    <div class="line">
      <label> 数据库:</label> <input v-model.trim="dbConfig.db" type="text" />
    </div>
    <div class="line btn">
      <button @click="collect">连接</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dbConfig: {
        name: "",
        ip: "",
        port: "",
        username: "",
        password: "",
        db: ""
      }
    };
  },
  methods: {
    collect() {
      for (let key in this.dbConfig) {
        if (this.dbConfig[key] === "") {
          //todo 通知提示
          alert("请填写完整");
          return false;
        }
      }
      window.ipcRenderer.on("login-reply", (event, arg) => {
        if (arg === "success") {
          //通知主线程(调整窗口大小)
          window.ipcRenderer.send("home-page-message");
          console.log(this.$store.state.user.isLogin);
          this.$store.state.user.isLogin = true;
          this.$router.push('/');
        } else {
          alert("连接失败");
        }
      });

      window.ipcRenderer.send("login-message", this.dbConfig);
    }
  }
};
</script>

<style></style>
