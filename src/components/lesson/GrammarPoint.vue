<template>
  <div class="grammar-panel">
    <!-- 语法点选择按钮 -->
    <div class="grammar-tabs">
      <v-btn
        v-for="(point, index) in grammar"
        :key="point.id"
        :outlined="activeIndex !== index"
        :style="activeIndex === index
          ? { background: point.color, color: 'white', borderColor: point.color }
          : { borderColor: '#e5e7eb', color: '#374151' }"
        rounded
        class="grammar-tab-btn"
        @click="activeIndex = index"
      >
        {{ point.title }}
      </v-btn>
    </div>

    <!-- 当前语法点详情 -->
    <v-card
      v-if="current"
      :style="{ borderColor: `${current.color}33` }"
      outlined
      class="grammar-detail"
    >
      <!-- 标题行 -->
      <div class="grammar-detail__header">
        <span
          class="grammar-detail__title"
          :style="{ color: current.color }"
        >{{ current.title }}</span>
        <span class="grammar-detail__subtitle">{{ current.subtitle }}</span>
      </div>

      <!-- 各含义 -->
      <div
        v-for="(meaning, mIndex) in current.meanings"
        :key="mIndex"
        class="meaning-block"
        :style="{ borderLeftColor: current.color, background: `${current.color}08` }"
      >
        <div
          class="meaning-block__label"
          :style="{ color: current.color }"
        >
          {{ meaning.label }}
        </div>
        <p v-if="meaning.desc" class="meaning-block__desc">
          {{ meaning.desc }}
        </p>
        <div
          v-for="(ex, eIndex) in meaning.examples"
          :key="eIndex"
          class="meaning-block__example"
        >
          {{ ex }}
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "GrammarPoint",
  props: {
    grammar: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  computed: {
    current() {
      return this.grammar[this.activeIndex] || null;
    },
  },
};
</script>

<style lang="scss" scoped>
.grammar-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.grammar-tabs {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.grammar-tab-btn {
  font-size: 15px !important;
  font-weight: 600 !important;
  transition: all 0.2s !important;
}

.grammar-detail {
  border-radius: 16px !important;
  padding: 28px !important;
  background: white;

  &__header {
    display: flex;
    align-items: baseline;
    gap: 12px;
    margin-bottom: 20px;
  }

  &__title {
    font-size: 30px;
    font-weight: 900;
  }

  &__subtitle {
    font-size: 14px;
    color: #6b7280;
  }
}

.meaning-block {
  border-left: 4px solid;
  border-radius: 0 10px 10px 0;
  padding: 16px 20px;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  &__label {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 6px;
  }

  &__desc {
    font-size: 13px;
    color: #6b7280;
    margin-bottom: 8px;
  }

  &__example {
    font-size: 15px;
    color: #1f2937;
    line-height: 2;
    padding-left: 12px;
    border-left: 2px dashed #d1d5db;
    margin-bottom: 6px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
