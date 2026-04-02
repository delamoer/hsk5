/**
 * 课程数据聚合入口
 *
 * ✅ 新增一课只需两步：
 *   1. 在 ./lessons/ 目录下新建数据文件（如 lesson6.js）
 *   2. 在下方 import 并加入 lessons 数组
 *
 * 无需修改任何页面组件，导航和详情页自动更新。
 */
import lesson5 from "./lessons/lesson5";

// 按课程编号升序排列
export const lessons = [lesson5].sort(
  (a, b) => a.lessonNumber - b.lessonNumber
);

/**
 * 根据 id 获取单课数据
 * @param {string} id - 课程 id，如 "lesson5"
 * @returns {Object|undefined}
 */
export function getLessonById(id) {
  return lessons.find((l) => l.id === id);
}
