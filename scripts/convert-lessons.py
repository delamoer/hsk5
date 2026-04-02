import os

lessons_dir = r'D:\workspace\learning\hsk5\src\data\lessons'
errors = []

for i in range(1, 19):
    if i == 5:
        continue  # lesson5.js already exists
    txt = os.path.join(lessons_dir, f'lesson{i}.txt')
    js  = os.path.join(lessons_dir, f'lesson{i}.js')
    if not os.path.exists(txt):
        errors.append(f'lesson{i}: txt not found')
        continue
    content = open(txt, encoding='utf-8').read()

    # Basic checks
    issues = []
    if 'export default' not in content:
        issues.append('missing export default')
    if f'id: "lesson{i}"' not in content and f"id: 'lesson{i}'" not in content:
        issues.append(f'id mismatch (expected lesson{i})')

    # Write as .js
    with open(js, 'w', encoding='utf-8') as f:
        f.write(content)

    status = 'OK' if not issues else 'WARN: ' + ', '.join(issues)
    print(f'lesson{i}: {status}')

if errors:
    print()
    for e in errors:
        print('ERROR:', e)
print('Done.')
