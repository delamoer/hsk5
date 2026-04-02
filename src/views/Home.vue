<template>
  <div class="page-home">
    <!-- 顶部 Header -->
    <div class="home-header">
      <div class="home-header__inner">
        <h1 class="home-header__title">HSK 标准教程</h1>
        <p class="home-header__subtitle">点击课程卡片开始学习</p>
      </div>
    </div>

    <!-- 课程列表 -->
    <div class="home-content">
      <v-container>
        <v-row>
          <v-col
            v-for="lesson in lessons"
            :key="lesson.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card
              class="lesson-card"
              :to="`/lesson/${lesson.id}`"
              hover
              ripple
            >
              <div class="lesson-card__number">
                第 {{ lesson.lessonNumber }} 课
              </div>
              <v-card-title class="lesson-card__title">
                {{ lesson.title }}
              </v-card-title>
              <v-card-subtitle class="lesson-card__subtitle">
                {{ lesson.titleEn }}
              </v-card-subtitle>
              <v-card-text>
                <div class="lesson-card__meta">
                  <span class="meta-tag">
                    <v-icon small color="primary">mdi-text</v-icon>
                    生词 {{ lesson.vocabulary.length }} 个
                  </span>
                  <span class="meta-tag">
                    <v-icon small color="accent">mdi-pencil</v-icon>
                    语法 {{ lesson.grammar.length }} 个
                  </span>
                </div>
                <div class="lesson-card__book">
                  {{ lesson.book }}
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn text color="primary" small>
                  开始学习
                  <v-icon right small>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { lessons } from "@/data/index";

export default {
  name: "Home",
  data() {
    return {
      lessons,
    };
  },
};
</script>

<style lang="scss" scoped>
.page-home {
  min-height: 100vh;
  background: #f8fafc;
}

.home-header {
  background: linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #0891b2 100%);
  padding: 48px 24px 40px;
  text-align: center;
  color: white;

  &__title {
    font-size: 36px;
    font-weight: 900;
    margin: 0 0 8px;
    letter-spacing: 2px;
  }

  &__subtitle {
    font-size: 15px;
    opacity: 0.8;
    margin: 0;
  }
}

.home-content {
  padding: 32px 0 60px;
}

.lesson-card {
  height: 100%;
  border-radius: 12px !important;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(29, 78, 216, 0.15) !important;
  }

  &__number {
    background: linear-gradient(135deg, #1d4ed8, #0891b2);
    color: white;
    font-size: 12px;
    font-weight: 600;
    padding: 6px 16px;
    border-radius: 12px 12px 0 0;
    letter-spacing: 1px;
  }

  &__title {
    font-size: 20px !important;
    font-weight: 700 !important;
    color: #1e293b !important;
    padding-top: 12px !important;
    padding-bottom: 4px !important;
  }

  &__subtitle {
    font-size: 13px !important;
    color: #64748b !important;
  }

  &__meta {
    display: flex;
    gap: 12px;
    margin-bottom: 8px;
    flex-wrap: wrap;
  }

  &__book {
    font-size: 12px;
    color: #94a3b8;
    margin-top: 4px;
  }
}

.meta-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #475569;

  .v-icon {
    margin-right: 2px;
  }
}
</style>
