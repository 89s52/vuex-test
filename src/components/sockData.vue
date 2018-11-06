<template>
    <div>
        <input type="text" v-model="msg">
        <button @click="changeContent(msg)">确认</button>
        <button @click="toggle">切换</button>
        <br>
        connectStatus: {{ connectStatus }}
        <br>
        not_connectStatus: {{ not_connectStatus }}
        <br>
        info: {{ info }}
        <br>
        inputMessage: {{ message }}
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      msg: ""
    };
  },
  sockets: {
    connect() {
      console.log("socket connected");
    },
    login(value) {
      console.log(value);
    }
  },
  computed: {
    ...mapState({
      connectStatus: state => state.webSocket.connectStatus,
      message: state => state.webSocket.message,
      info: state => state.webSocket.info
    }),
    ...mapGetters(["not_connectStatus"])
  },
  methods: {
    ...mapActions(["changeContent", "changeInfo"]),
    toggle() {
      this.$socket.emit("toggle", this.info);
      this.$socket.on("toggle", value => {
        this.changeInfo(value);
      });
    }
  }
};
</script>

<style>
</style>
