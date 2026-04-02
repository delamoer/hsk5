<template>
  <div ref="panel" class="exercises-panel">

    <!-- ── 练习一：填空 ─────────────────────────────────────── -->
    <section class="exercise-section">
      <div class="section-header section-header--blue">
        <span class="section-header__badge">练习一</span>
        <span class="section-header__title">{{ exercises.fill.title }}</span>
      </div>

      <!-- 词语库 -->
      <div class="word-bank">
        <span
          v-for="word in exercises.fill.words"
          :key="word"
          class="word-tag"
        >{{ word }}</span>
      </div>

      <!-- 填空题列表 -->
      <div class="fill-list">
        <div
          v-for="(question, qIndex) in exercises.fill.questions"
          :key="qIndex"
          class="fill-item"
          :class="{
            'fill-item--correct': fillChecked && fillAnswers[qIndex] === question.a,
            'fill-item--wrong':   fillChecked && fillAnswers[qIndex] !== question.a,
          }"
        >
          <!-- 题目行 -->
          <div class="fill-item__sentence">
            <span>{{ questionPrefix(question.q) }}</span>
            <input
              v-model="fillAnswers[qIndex]"
              class="fill-input"
              :class="{
                'fill-input--correct': fillChecked && fillAnswers[qIndex] === question.a,
                'fill-input--wrong':   fillChecked && fillAnswers[qIndex] !== question.a,
              }"
              :readonly="fillChecked"
            />
            <span>{{ questionSuffix(question.q) }}</span>
          </div>
          <!-- 错误提示行：单独一行，清晰展示正确答案 -->
          <div
            v-if="fillChecked && fillAnswers[qIndex] !== question.a"
            class="fill-item__hint"
          >
            正确答案：<strong>{{ question.a }}</strong>
          </div>
        </div>
      </div>

      <!-- 操作区 -->
      <div class="exercise-actions">
        <v-btn depressed color="primary" small @click="checkFill">检查答案</v-btn>
        <v-btn depressed color="grey lighten-3" small @click="resetFill">重置</v-btn>
        <transition name="fade">
          <span v-if="fillChecked" class="score-badge">
            {{ fillScore }} / {{ exercises.fill.questions.length }} 正确
          </span>
        </transition>
      </div>
    </section>

    <v-divider class="my-8" />

    <!-- ── 练习二：选择 ─────────────────────────────────────── -->
    <section class="exercise-section">
      <div class="section-header section-header--purple">
        <span class="section-header__badge">练习二</span>
        <span class="section-header__title">{{ exercises.choice.title }}</span>
      </div>

      <div class="choice-list">
        <div
          v-for="(question, qIndex) in exercises.choice.questions"
          :key="qIndex"
          class="choice-item"
        >
          <p class="choice-item__question">{{ question.q }}</p>
          <div class="choice-item__options">
            <button
              v-for="opt in question.options"
              :key="opt"
              class="option-btn"
              :class="optionClass(qIndex, opt, question.a)"
              :disabled="choiceChecked"
              @click="selectChoice(qIndex, opt)"
            >
              {{ opt }}
            </button>
          </div>
        </div>
      </div>

      <!-- 操作区 -->
      <div class="exercise-actions">
        <v-btn depressed color="deep-purple" dark small @click="checkChoice">检查答案</v-btn>
        <v-btn depressed color="grey lighten-3" small @click="resetChoice">重置</v-btn>
        <transition name="fade">
          <span v-if="choiceChecked" class="score-badge score-badge--purple">
            {{ choiceScore }} / {{ exercises.choice.questions.length }} 正确
          </span>
        </transition>
      </div>

      <v-divider class="my-6" />

      <!-- 保存为图片 -->
      <div class="download-bar">
        <v-btn
          depressed
          color="teal"
          dark
          small
          :loading="downloading"
          @click="downloadAsImage"
        >
          <v-icon left small>mdi-image-outline</v-icon>
          保存练习截图
        </v-btn>
        <span class="download-tip">将全部练习（含你的答案）保存为图片</span>
      </div>
    </section>

    <!-- ── 练习三：选位置（可选） ─────────────────────────── -->
    <template v-if="exercises.position">
      <v-divider class="my-8" />
      <section class="exercise-section">
        <div class="section-header section-header--teal">
          <span class="section-header__badge">练习三</span>
          <span class="section-header__title">{{ exercises.position.title }}</span>
        </div>

        <div class="position-list">
          <div
            v-for="(question, qIndex) in exercises.position.questions"
            :key="qIndex"
            class="position-item"
            :class="{
              'position-item--correct': posChecked && posAnswers[qIndex] === question.a,
              'position-item--wrong':   posChecked && posAnswers[qIndex] !== question.a,
            }"
          >
            <p class="position-item__question">{{ question.q }}</p>
            <div class="position-item__options">
              <button
                v-for="opt in ['A', 'B', 'C', 'D']"
                :key="opt"
                class="option-btn"
                :class="posOptionClass(qIndex, opt, question.a)"
                :disabled="posChecked"
                @click="selectPos(qIndex, opt)"
              >
                {{ opt }}
              </button>
            </div>
            <div
              v-if="posChecked && posAnswers[qIndex] !== question.a"
              class="fill-item__hint"
            >
              正确答案：<strong>{{ question.a }}</strong>
            </div>
          </div>
        </div>

        <div class="exercise-actions">
          <v-btn depressed color="teal" dark small @click="checkPos">检查答案</v-btn>
          <v-btn depressed color="grey lighten-3" small @click="resetPos">重置</v-btn>
          <transition name="fade">
            <span v-if="posChecked" class="score-badge score-badge--teal">
              {{ posScore }} / {{ exercises.position.questions.length }} 正确
            </span>
          </transition>
        </div>
      </section>
    </template>

  </div>
</template>

<script>
import html2canvas from "html2canvas";

export default {
  name: "Exercises",
  props: {
    exercises: {
      type: Object,
      required: true,
    },
    lessonId: {
      type: String,
      default: "lesson",
    },
  },
  data() {
    return {
      fillAnswers: {},
      fillChecked: false,
      choiceAnswers: {},
      choiceChecked: false,
      posAnswers: {},
      posChecked: false,
      downloading: false,
    };
  },
  computed: {
    fillScore() {
      return this.exercises.fill.questions.filter(
        (q, i) => this.fillAnswers[i] === q.a
      ).length;
    },
    choiceScore() {
      return this.exercises.choice.questions.filter(
        (q, i) => this.choiceAnswers[i] === q.a
      ).length;
    },
    posScore() {
      if (!this.exercises.position) return 0;
      return this.exercises.position.questions.filter(
        (q, i) => this.posAnswers[i] === q.a
      ).length;
    },
  },
  methods: {
    questionPrefix(q) {
      return q.split("___")[0];
    },
    questionSuffix(q) {
      const parts = q.split("___");
      return parts.length > 1 ? parts[1] : "";
    },
    checkFill() {
      this.fillChecked = true;
    },
    resetFill() {
      this.fillChecked = false;
      this.fillAnswers = {};
    },
    selectChoice(qIndex, opt) {
      if (this.choiceChecked) return;
      this.$set(this.choiceAnswers, qIndex, opt);
    },
    checkChoice() {
      this.choiceChecked = true;
    },
    resetChoice() {
      this.choiceChecked = false;
      this.choiceAnswers = {};
    },
    optionClass(qIndex, opt, correctAnswer) {
      if (!this.choiceChecked) {
        return this.choiceAnswers[qIndex] === opt ? "option-btn--selected" : "";
      }
      if (opt === correctAnswer) return "option-btn--correct";
      if (this.choiceAnswers[qIndex] === opt) return "option-btn--wrong";
      return "";
    },
    selectPos(qIndex, opt) {
      if (this.posChecked) return;
      this.$set(this.posAnswers, qIndex, opt);
    },
    checkPos() { this.posChecked = true; },
    resetPos() { this.posChecked = false; this.posAnswers = {}; },
    posOptionClass(qIndex, opt, correctAnswer) {
      if (!this.posChecked) {
        return this.posAnswers[qIndex] === opt ? "option-btn--selected" : "";
      }
      if (opt === correctAnswer) return "option-btn--correct";
      if (this.posAnswers[qIndex] === opt) return "option-btn--wrong";
      return "";
    },
    async downloadAsImage() {
      this.downloading = true;
      try {
        const el = this.$refs.panel;
        const canvas = await html2canvas(el, {
          backgroundColor: "#ffffff",
          scale: 2,
          useCORS: true,
          scrollX: 0,
          scrollY: -window.scrollY,
        });
        const link = document.createElement("a");
        link.download = `${this.lessonId}-exercises.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
      } finally {
        this.downloading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// ── 整体容器 ──────────────────────────────────────────────────
.exercises-panel {
  display: flex;
  flex-direction: column;
}

// ── 标题栏 ────────────────────────────────────────────────────
.section-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  &__badge {
    display: inline-block;
    padding: 2px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
    color: #fff;
  }

  &__title {
    font-size: 16px;
    font-weight: 600;
    color: #1f2937;
  }

  &--blue &__badge  { background: #2563eb; }
  &--purple &__badge { background: #7c3aed; }
  &--teal &__badge  { background: #0d9488; }
}

// ── 词语库 ────────────────────────────────────────────────────
.word-bank {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  padding: 14px 18px;
  background: #eff6ff;
  border-radius: 10px;
  border: 1px solid #bfdbfe;
}

.word-tag {
  padding: 4px 14px;
  background: #2563eb;
  color: #fff;
  border-radius: 20px;
  font-size: 14px;
  letter-spacing: 1px;
}

// ── 填空题 ────────────────────────────────────────────────────
.fill-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.fill-item {
  padding: 14px 16px;
  border-radius: 8px;
  border: 1.5px solid transparent;
  transition: border-color 0.2s, background 0.2s;

  &__sentence {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    font-size: 15px;
    color: #1f2937;
    line-height: 1.9;
  }

  &__hint {
    margin-top: 6px;
    padding: 6px 12px;
    background: #fef9c3;
    border-radius: 6px;
    font-size: 13px;
    color: #92400e;

    strong {
      color: #b45309;
      font-size: 14px;
    }
  }

  &--correct {
    background: #f0fdf4;
    border-color: #86efac;
  }

  &--wrong {
    background: #fff7ed;
    border-color: #fed7aa;
  }

  // 相邻两题之间的分隔线
  & + & {
    margin-top: 8px;
  }
}

// 填空输入框：用原生 input，完全掌控样式
.fill-input {
  display: inline-block;
  width: 128px;
  padding: 3px 6px;
  border: 1.5px solid #d1d5db;
  border-radius: 6px;
  text-align: center;
  font-size: 15px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s, background 0.2s;
  background: #fff;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px #bfdbfe;
  }

  &--correct {
    border-color: #16a34a !important;
    background: #dcfce7 !important;
    color: #166534;
  }

  &--wrong {
    border-color: #dc2626 !important;
    background: #fee2e2 !important;
    color: #991b1b;
  }
}

// ── 操作区 ────────────────────────────────────────────────────
.exercise-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.score-badge {
  display: inline-block;
  padding: 3px 14px;
  border-radius: 20px;
  background: #dcfce7;
  color: #166534;
  font-size: 13px;
  font-weight: 700;

  &--purple {
    background: #ede9fe;
    color: #5b21b6;
  }

  &--teal {
    background: #ccfbf1;
    color: #0f766e;
  }
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter, .fade-leave-to { opacity: 0; }

// ── 选位置题 ──────────────────────────────────────────────────
.position-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.position-item {
  padding: 16px 18px;
  border-radius: 10px;
  border: 1.5px solid #e5e7eb;
  background: #fff;
  transition: border-color 0.2s, background 0.2s;

  &--correct {
    background: #f0fdf4;
    border-color: #86efac;
  }

  &--wrong {
    background: #fff7ed;
    border-color: #fed7aa;
  }

  &__question {
    font-size: 15px;
    color: #1f2937;
    line-height: 1.8;
    margin-bottom: 12px;
  }

  &__options {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
}

// ── 下载区 ────────────────────────────────────────────────────
.download-bar {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.download-tip {
  font-size: 12px;
  color: #9ca3af;
}

// ── 选择题 ────────────────────────────────────────────────────
.choice-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.choice-item {
  padding: 18px 20px;
  border-radius: 10px;
  border: 1.5px solid #e5e7eb;
  background: #fff;

  &__question {
    font-size: 15px;
    color: #1f2937;
    line-height: 1.7;
    margin-bottom: 14px;
  }

  &__options {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
}

.option-btn {
  padding: 7px 20px;
  border-radius: 8px;
  border: 1.5px solid #d1d5db;
  background: #f9fafb;
  color: #374151;
  font-size: 14px;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.15s;

  &:hover:not(:disabled) {
    border-color: #7c3aed;
    color: #7c3aed;
    background: #f5f3ff;
  }

  &--selected {
    border-color: #7c3aed;
    background: #ede9fe;
    color: #5b21b6;
    font-weight: 600;
  }

  &--correct {
    border-color: #16a34a;
    background: #dcfce7;
    color: #166534;
    font-weight: 600;
  }

  &--wrong {
    border-color: #dc2626;
    background: #fee2e2;
    color: #991b1b;
    font-weight: 600;
  }

  &:disabled {
    cursor: default;
  }
}
</style>
