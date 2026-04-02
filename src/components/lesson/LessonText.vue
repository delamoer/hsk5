<template>
  <div class="lesson-text">
    <v-card
      v-for="para in text"
      :key="para.id"
      class="para-card"
      outlined
    >
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p class="para-content" v-html="para.html" />
    </v-card>
    <v-alert
      color="amber lighten-4"
      border="left"
      dense
      class="vocab-tip"
    >
      <v-icon color="amber darken-2" left small>mdi-lightbulb</v-icon>
      <strong>加粗</strong>的词语为本课生词，请结合下方生词卡学习。
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "LessonText",
  props: {
    text: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.lesson-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.para-card {
  border-radius: 12px !important;
  padding: 20px 24px;
  background: white;
  border-color: #e2e8f0 !important;
}

.para-content {
  margin: 0;
  font-size: 16px;
  line-height: 2;
  color: #1e3a5f;
  text-indent: 2em;

  ::v-deep strong {
    color: #1d4ed8;
    font-weight: 700;
  }
}

.vocab-tip {
  border-radius: 10px !important;
  font-size: 14px;
}
</style>
