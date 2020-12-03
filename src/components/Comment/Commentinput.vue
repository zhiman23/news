<template>
  <div class="footerInput">
    <div class="deactive" v-if="!isShowTextarea">
      <input
        class="kuang"
        type="text"
        @focus="showTextarea"
        v-model="content"
      />
      <div class="comment">
        <span class="iconfont iconpinglun-"></span>
        <div class="nums">112</div>
      </div>
      <span class="iconfont iconshoucang"></span>
      <span class="iconfont iconfenxiang"></span>
    </div>
    <div class="active" v-if="isShowTextarea">
      <textarea
        v-model="content"
        ref="textDom"
        rows="3"
        @blur="hideTextarea"
      ></textarea>
      <div class="btn" @click="sendComment">发送</div>
    </div>
  </div>
</template>

<script>
import evenBus from "../../utils/evenBus";
export default {
  data() {
    return {
      isShowTextarea: false,
      content: "",
      parentId: "",
    };
  },
  //监听
  mounted() {
    evenBus.$on("sendMsg", (parentId) => {
      this.showTextarea();
      this.parentId = parentId;
    });
  },
  //解除监听
  destroyed() {
    evenBus.$off("sendMsg");
  },
  methods: {
    showTextarea() {
      this.isShowTextarea = true;
      //延后
      this.$nextTick(() => {
        this.$refs.textDom.focus();
      });
    },
    hideTextarea() {
      //延时器
      setTimeout(() => {
        this.isShowTextarea = false;
        this.parentId = "";
      }, 100);
    },
    sendComment() {
      // console.log(this.$route.params.id);
      this.$axios({
        url: "/post_comment/" + this.$route.params.id,
        method: "post",
        data: {
          parent_id: this.parentId,
          content: this.content,
        },
      }).then((res) => {
        console.log(res.data);
        this.content = "";
        this.$emit("reloadComment");
      });
    },
  },
};
</script>

<style lang="less" scoped>
.footerInput {
  position: fixed;
  bottom: 0;
  left: 0;
  background: #f2f2f2;
  width: 100%;
  .deactive {
    display: flex;
    justify-content: space-evenly;
    // flex-grow: 1;
    align-items: center;
    width: 360/360 * 100vw;
    height: 50 /360 * 100vw;
    .kuang {
      width: 180 /360 * 100vw;
      height: 30 /360 * 100vw;
      padding: 0 15 /360 * 100vw;
      box-sizing: border-box;
      border-radius: 15 /360 * 100vw;
      background: #d7d7d7;
      border: none;
      outline: none;
    }
    .comment {
      position: relative;
      .nums {
        position: absolute;
        top: -5px;
        left: 4px;
        height: 14 /360 * 100vw;
        line-height: 14 /360 * 100vw;
        border-radius: 12 /360 * 100vw;
        font-size: 12 /360 * 100vw;
        background: red;
        color: #fff;
        padding: 0 4px;
      }
    }
    .iconfont {
      font-size: 24 /360 * 100vw;
    }
  }
  .active {
    display: flex;
    align-items: flex-end;
    padding: 10 /360 * 100vw;
    textarea {
      width: 260 /360 * 100vw;
      height: 90 /360 * 100vw;
      background: #d7d7d7;
      border: none;
      outline: none;
      border-radius: 10 /360 * 100vw;
      padding: 10 /360 * 100vw;
      box-sizing: border-box;
      resize: none;
      text-indent: 20px;
    }
    .btn {
      background: red;
      color: #fff;
      font-size: 16 /360 * 100vw;
      height: 26 /360 * 100vw;
      line-height: 26 /360 * 100vw;
      border-radius: 13 /360 * 100vw;
      padding: 0 14 /360 * 100vw;
      margin-left: 10 /360 * 100vw;
    }
  }
}
</style>