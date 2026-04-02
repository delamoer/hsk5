import re, os

for i in range(10, 19):
    path = f'src/data/lessons/lesson{i}.js'
    f = open(path, encoding='utf-8').read()
    
    # Get writing prompt
    m = re.search(r'prompt:\s*"([^"]+)"', f)
    prompt = m.group(1)[:60] if m else 'N/A'
    
    # Get vocab words
    words = re.findall(r'word:\s*"([\u4e00-\u9fff]+)"', f)
    
    print(f'L{i}: {prompt}...')
    print(f'  words: {words[:15]}')
    print()
