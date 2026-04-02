/**
 * 课程数据聚合入口
 *
 * ✅ 新增一课只需一步：
 *   在 ./lessons/ 目录下新建数据文件（如 lesson6.js）
 *   无需修改此文件，导航和详情页自动更新。
 *
 * 排序：按 lessonNumber 数值升序（1, 2, 3 … 10, 11, 12 …）
 */

// 自动扫描 ./lessons/ 目录下所有 .js 文件
const context = require.context("./lessons", false, /\.js$/);

export const lessons = context
  .keys()
  .map((key) => context(key).default)
  .sort((a, b) => a.lessonNumber - b.lessonNumber);

/**
 * 根据 id 获取单课数据
 * @param {string} id - 课程 id，如 "lesson5"
 * @returns {Object|undefined}
 */
export function getLessonById(id) {
  return lessons.find((l) => l.id === id);
}
