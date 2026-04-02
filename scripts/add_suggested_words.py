import re

suggested = {
    10: ["辩论", "说服", "始终", "逐渐", "毕竟", "差距", "围绕"],
    11: ["危害", "导致", "规律", "享受", "精神", "持续", "状态", "破坏"],
    12: ["推广", "用户", "个人", "程度", "宣传", "实现", "合作"],
    13: ["发愁", "造成", "气氛", "仿佛", "何必", "缺乏", "多亏", "激烈"],
    14: ["建筑", "具备", "矛盾", "创造", "奇迹", "通常", "组合"],
    15: ["理论", "道理", "迟早", "形势", "挑战", "绝对", "弱"],
    16: ["体重", "节食", "营养", "参与", "可靠", "达到", "明显", "表明"],
    17: ["运用", "集中", "体会", "忽视", "平常", "轻视", "宁可"],
    18: ["抽象", "极其", "规则", "活跃", "调整", "业余", "导演"],
}

for i in range(10, 19):
    path = f'src/data/lessons/lesson{i}.js'
    content = open(path, encoding='utf-8').read()
    
    words = suggested[i]
    words_str = ', '.join(f'"{w}"' for w in words)
    replacement = f'            minWords: 100,\n            suggestedWords: [ {words_str} ]'
    
    new_content = content.replace('            minWords: 100', replacement, 1)
    
    if new_content == content:
        print(f'lesson{i}: UNCHANGED - check indentation')
    else:
        open(path, 'w', encoding='utf-8').write(new_content)
        print(f'lesson{i}: OK - added suggestedWords')
