<template>
  <div class="page-lesson">
    <!-- 顶部返回栏 + 标题 -->
    <div class="lesson-header">
      <div class="lesson-header__inner">
        <v-btn icon dark class="lesson-header__back" @click="$router.push('/')">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <div class="lesson-header__info">
          <div class="lesson-header__meta">
            {{ lesson.book }} · 第 {{ lesson.lessonNumber }} 课
          </div>
          <h1 class="lesson-header__title">{{ lesson.title }}</h1>
          <div class="lesson-header__en">{{ lesson.titleEn }}</div>
        </div>
        <!-- 统计数字 -->
        <div class="lesson-header__stats">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="stat-badge"
          >
            <span class="stat-badge__label">{{ stat.label }}</span>
            <strong class="stat-badge__value">{{ stat.value }}</strong>
          </div>
        </div>
      </div>
    </div>

    <!-- Tab 导航栏（粘性） -->
    <div class="lesson-tabs-wrapper">
      <v-tabs
        v-model="activeTab"
        background-color="white"
        color="primary"
        show-arrows
        class="lesson-tabs"
      >
        <v-tab v-for="tab in tabs" :key="tab.key">
          <v-icon left small>{{ tab.icon }}</v-icon>
          {{ tab.label }}
        </v-tab>
      </v-tabs>
    </div>

    <!-- Tab 内容区 -->
    <div class="lesson-body">
      <v-tabs-items v-model="activeTab">
        <v-tab-item>
          <LessonText :text="lesson.text" />
        </v-tab-item>
        <v-tab-item>
          <VocabCard :vocabulary="lesson.vocabulary" />
        </v-tab-item>
        <v-tab-item>
          <GrammarPoint :grammar="lesson.grammar" />
        </v-tab-item>
        <v-tab-item>
          <Exercises :exercises="lesson.exercises" :lesson-id="id" />
        </v-tab-item>
        <v-tab-item>
          <TopicDiscussion :topics="lesson.topics" :lesson-id="id" />
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
import { getLessonById } from "@/data/index";
import LessonText from "@/components/lesson/LessonText.vue";
import VocabCard from "@/components/lesson/VocabCard.vue";
import GrammarPoint from "@/components/lesson/GrammarPoint.vue";
import Exercises from "@/components/lesson/Exercises.vue";
import TopicDiscussion from "@/components/lesson/TopicDiscussion.vue";

export default {
  name: "LessonDetail",
  components: { LessonText, VocabCard, GrammarPoint, Exercises, TopicDiscussion },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        { key: "text",    label: "课文",     icon: "mdi-book-open-variant" },
        { key: "vocab",   label: "生词卡",   icon: "mdi-cards" },
        { key: "grammar", label: "语法",     icon: "mdi-pencil-box" },
        { key: "exercise",label: "练习",     icon: "mdi-clipboard-edit" },
        { key: "topic",   label: "话题延展", icon: "mdi-chat-outline" },
      ],
    };
  },
  computed: {
    lesson() {
      return getLessonById(this.id);
    },
    stats() {
      if (!this.lesson) return [];
      return [
        { label: "生词",  value: `${this.lesson.vocabulary.length} 个` },
        { label: "语法点", value: `${this.lesson.grammar.length} 个` },
        { label: "练习",  value: `${
          this.lesson.exercises.fill.questions.length +
          this.lesson.exercises.choice.questions.length
        } 题` },
      ];
    },
  },
  created() {
    if (!this.lesson) {
      this.$router.replace("/");
    }
  },
};
</script>

<style lang="scss" scoped>
.page-lesson {
  min-height: 100vh;
  background: #f8fafc;
}

// ─── Header ─────────────────────────────────────────────────────
.lesson-header {
  background: linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #0891b2 100%);
  color: white;
  padding: 20px 24px 24px;

  &__inner {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }

  &__back {
    margin-top: 4px;
    flex-shrink: 0;
  }

  &__info {
    flex: 1;
  }

  &__meta {
    font-size: 12px;
    opacity: 0.7;
    letter-spacing: 2px;
    margin-bottom: 4px;
  }

  &__title {
    font-size: 28px;
    font-weight: 900;
    margin: 0 0 4px;
  }

  &__en {
    font-size: 14px;
    opacity: 0.8;
  }

  &__stats {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    align-self: center;
  }
}

.stat-badge {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 6px 14px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__label {
    opacity: 0.8;
    font-size: 11px;
  }

  &__value {
    font-size: 15px;
  }
}

// ─── Tabs ────────────────────────────────────────────────────────
.lesson-tabs-wrapper {
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.lesson-tabs {
  border-bottom: 1px solid #e5e7eb;
}

// ─── Body ────────────────────────────────────────────────────────
.lesson-body {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 16px 60px;
}
</style>
