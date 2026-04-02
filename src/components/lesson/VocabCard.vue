<template>
  <div class="vocab-card-panel">
    <!-- 搜索框 -->
    <v-text-field
      v-model="search"
      placeholder="搜索词语、拼音或释义..."
      prepend-inner-icon="mdi-magnify"
      outlined
      dense
      clearable
      hide-details
      class="vocab-search"
    />

    <!-- 生词卡网格 -->
    <div class="vocab-grid">
      <div
        v-for="word in filteredVocabulary"
        :key="word.id"
        class="flip-card"
        :class="{ flipped: flippedIds[word.id] }"
        @click="toggleFlip(word.id)"
      >
        <!-- 翻转内层容器 -->
        <div class="flip-card__inner">
          <!-- 正面 -->
          <div class="flip-card__face flip-card__front">
            <div class="card-pinyin">{{ word.pinyin }}</div>
            <div class="card-word">{{ word.word }}</div>
            <div class="card-pos">{{ word.pos }}</div>
            <div class="card-hint">点击翻转 →</div>
          </div>
          <!-- 背面 -->
          <div class="flip-card__face flip-card__back">
            <div class="card-word-small">{{ word.word }} · {{ word.pinyin }}</div>
            <div class="card-meaning">{{ word.meaning }}</div>
            <div class="card-example">{{ word.example }}</div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="filteredVocabulary.length === 0" class="vocab-empty">
      <v-icon large color="grey lighten-1">mdi-cards-outline</v-icon>
      <p>没有匹配的词语</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VocabCard",
  props: {
    vocabulary: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      search: "",
      flippedIds: {},
    };
  },
  computed: {
    filteredVocabulary() {
      const q = (this.search || "").toLowerCase().trim();
      if (!q) return this.vocabulary;
      return this.vocabulary.filter(
        (v) =>
          v.word.includes(q) ||
          v.pinyin.toLowerCase().includes(q) ||
          v.meaning.toLowerCase().includes(q)
      );
    },
  },
  methods: {
    toggleFlip(id) {
      this.$set(this.flippedIds, id, !this.flippedIds[id]);
    },
  },
};
</script>

<style lang="scss" scoped>
.vocab-card-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.vocab-search {
  max-width: 400px;
}

.vocab-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
}

// ─── 翻转卡片 ────────────────────────────────────────────────────
.flip-card {
  height: 180px;
  perspective: 800px;
  cursor: pointer;

  &__inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.4s ease;
    border-radius: 14px;
  }

  &.flipped &__inner {
    transform: rotateY(180deg);
  }

  &__face {
    position: absolute;
    inset: 0;
    border-radius: 14px;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }

  &__front {
    background: linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%);
    box-shadow: 0 4px 15px rgba(29, 78, 216, 0.25);
  }

  &__back {
    transform: rotateY(180deg);
    background: white;
    border: 2px solid #dbeafe;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    justify-content: flex-start;
    padding-top: 20px;
  }
}

.card-pinyin {
  font-size: 11px;
  color: #93c5fd;
  margin-bottom: 4px;
  letter-spacing: 1px;
}

.card-word {
  font-size: 32px;
  color: white;
  font-weight: 700;
}

.card-pos {
  font-size: 11px;
  color: #93c5fd;
  margin-top: 6px;
}

.card-hint {
  font-size: 10px;
  color: #bfdbfe;
  margin-top: 8px;
}

.card-word-small {
  font-size: 13px;
  color: #1d4ed8;
  font-weight: 700;
  margin-bottom: 8px;
  text-align: center;
}

.card-meaning {
  font-size: 14px;
  color: #111827;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: center;
}

.card-example {
  font-size: 12px;
  color: #4b5563;
  line-height: 1.6;
  text-align: center;
  border-top: 1px solid #e5e7eb;
  padding-top: 8px;
  width: 100%;
}

.vocab-empty {
  text-align: center;
  color: #9ca3af;
  padding: 32px 0;

  p {
    margin-top: 8px;
  }
}
</style>
