<template>
  <div ref="panel" class="topic-panel">
    <template v-if="topics">
    <h3 class="topic-panel__heading">话题讨论：水与我们的生活</h3>
    <p class="topic-panel__tip">思考以下问题，可以用本课学到的词语展开讨论。</p>

    <!-- 讨论题手风琴 -->
    <v-expansion-panels
      accordion
      class="topic-questions"
    >
      <v-expansion-panel
        v-for="(item, index) in topics.questions"
        :key="index"
        class="topic-question-panel"
      >
        <v-expansion-panel-header color="#f0fdfa">
          <div class="question-header">
            <span class="question-index">Q{{ index + 1 }}</span>
            {{ item.q }}
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="question-hint">
            <v-icon small color="teal">mdi-lightbulb-outline</v-icon>
            提示词：{{ item.hint }}
          </div>
          <div class="question-guide">
            请用本课词汇（如：<strong>天然、充满、从而、产生、优美</strong>等）尝试作答。
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- 命题写作 -->
    <v-card outlined class="writing-card">
      <v-card-title class="writing-card__title">
        <v-icon left color="teal darken-2">mdi-pencil-outline</v-icon>
        {{ topics.writing.title }}
      </v-card-title>
      <v-card-text>
        <p class="writing-card__prompt">{{ topics.writing.prompt }}</p>

        <v-textarea
          v-model="essay"
          outlined
          :placeholder="`在这里写下你的短文……`"
          rows="6"
          auto-grow
          class="writing-textarea"
        />

        <div class="writing-counter" :class="{ 'writing-counter--done': essay.length >= topics.writing.minWords }">
          已写 {{ essay.length }} 字
          <span v-if="essay.length >= topics.writing.minWords"> ✓ 达到要求</span>
          <span v-else>（还需 {{ topics.writing.minWords - essay.length }} 字）</span>
        </div>

        <!-- 推荐词语 -->
        <div v-if="topics.writing.suggestedWords && topics.writing.suggestedWords.length" class="writing-suggestions">
          <div class="writing-suggestions__label">可参考的词语：</div>
          <div class="writing-suggestions__chips">
            <v-chip
              v-for="word in topics.writing.suggestedWords"
              :key="word"
              small
              color="teal lighten-4"
              text-color="teal darken-3"
              class="suggestion-chip"
            >
              {{ word }}
            </v-chip>
          </div>
        </div>
      </v-card-text>
    </v-card>

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
        保存话题截图
      </v-btn>
      <span class="download-tip">将话题讨论与你的短文保存为图片</span>
    </div>
    </template>
  </div>
</template>

<script>
import html2canvas from "html2canvas";

export default {
  name: "TopicDiscussion",
  props: {
    topics: {
      type: Object,
      required: false,
      default: null,
    },
    lessonId: {
      type: String,
      default: "lesson",
    },
  },
  data() {
    return {
      essay: "",
      downloading: false,
    };
  },
  methods: {
    async downloadAsImage() {
      this.downloading = true;

      // html2canvas 无法读取 textarea 的值，截图前临时替换为 div
      const el = this.$refs.panel;
      const textarea = el.querySelector("textarea");
      let ghost = null;
      if (textarea) {
        const computed = window.getComputedStyle(textarea);
        ghost = document.createElement("div");
        ghost.style.cssText = computed.cssText;
        ghost.style.whiteSpace = "pre-wrap";
        ghost.style.wordBreak = "break-word";
        ghost.style.height = "auto";
        ghost.style.minHeight = textarea.scrollHeight + "px";
        ghost.style.overflow = "visible";
        ghost.textContent = textarea.value || " ";
        textarea.parentNode.insertBefore(ghost, textarea);
        textarea.style.display = "none";
      }

      try {
        const canvas = await html2canvas(el, {
          backgroundColor: "#ffffff",
          scale: 2,
          useCORS: true,
          scrollX: 0,
          scrollY: -window.scrollY,
        });
        const link = document.createElement("a");
        link.download = `${this.lessonId}-topics.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
      } finally {
        if (textarea && ghost) {
          textarea.style.display = "";
          ghost.remove();
        }
        this.downloading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.topic-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__heading {
    font-size: 20px;
    color: #0f766e;
    margin: 0;
  }

  &__tip {
    font-size: 14px;
    color: #6b7280;
    margin: 0;
  }
}

.topic-questions {
  border-radius: 10px !important;
  border: 1.5px solid #99f6e4 !important;
  overflow: hidden;
}

.topic-question-panel {
  &::before {
    box-shadow: none !important;
  }
}

.question-header {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: #134e4a;
  font-weight: 600;
}

.question-index {
  color: #0d9488;
  font-size: 16px;
  font-weight: 700;
  flex-shrink: 0;
}

.question-hint {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.question-guide {
  font-size: 13px;
  color: #374151;
  line-height: 1.8;

  strong {
    color: #0d9488;
  }
}

.writing-card {
  border-radius: 16px !important;
  border-color: #a7f3d0 !important;

  &__title {
    font-size: 17px !important;
    color: #065f46 !important;
  }

  &__prompt {
    font-size: 14px;
    color: #6b7280;
    margin-bottom: 12px;
  }
}

.writing-textarea {
  font-family: inherit;
}

.writing-counter {
  font-size: 13px;
  color: #9ca3af;
  text-align: right;
  margin-top: -8px;
  margin-bottom: 16px;

  &--done {
    color: #059669;
    font-weight: 600;
  }
}

.writing-suggestions {
  background: #f0fdf4;
  border-radius: 10px;
  border: 1px solid #bbf7d0;
  padding: 12px 16px;

  &__label {
    font-size: 13px;
    font-weight: 700;
    color: #065f46;
    margin-bottom: 8px;
  }

  &__chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
}

.suggestion-chip {
  font-size: 13px !important;
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
</style>
