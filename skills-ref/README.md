# skills-ref

Agent Skills용 레퍼런스 라이브러리입니다.

> [!IMPORTANT]
> 이 라이브러리는 데모 목적입니다. 프로덕션 사용을 의도하지 않습니다.

## 설치

### macOS / Linux

pip 사용:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -e .
```

또는 [uv](https://docs.astral.sh/uv/) 사용:

```bash
uv sync
source .venv/bin/activate
```

### Windows

pip 사용(PowerShell):

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -e .
```

pip 사용(Command Prompt):

```cmd
python -m venv .venv
.venv\Scripts\activate.bat
pip install -e .
```

또는 [uv](https://docs.astral.sh/uv/) 사용:

```powershell
uv sync
.venv\Scripts\Activate.ps1
```

설치 후 활성화된 가상환경에서 `skills-ref` 실행 파일을 `PATH`에서 사용할 수 있습니다.

## 사용법

### CLI

```bash
# 스킬 검증
skills-ref validate path/to/skill

# 스킬 속성 읽기(JSON 출력)
skills-ref read-properties path/to/skill

# 에이전트 프롬프트용 <available_skills> XML 생성
skills-ref to-prompt path/to/skill-a path/to/skill-b
```

### Python API

```python
from pathlib import Path
from skills_ref import validate, read_properties, to_prompt

# 스킬 디렉터리 검증
problems = validate(Path("my-skill"))
if problems:
    print("검증 오류:", problems)

# 스킬 속성 읽기
props = read_properties(Path("my-skill"))
print(f"Skill: {props.name} - {props.description}")

# 사용 가능한 스킬 프롬프트 생성
prompt = to_prompt([Path("skill-a"), Path("skill-b")])
print(prompt)
```

## 에이전트 프롬프트 연동

`to-prompt`를 사용하면 에이전트 시스템 프롬프트에 넣을 `<available_skills>` XML 블록을 생성할 수 있습니다. 이 형식은 Anthropic 모델에 권장되지만, 사용하는 모델에 따라 클라이언트가 다른 형식을 선택할 수도 있습니다.

```xml
<available_skills>
<skill>
<name>
my-skill
</name>
<description>
What this skill does and when to use it
</description>
<location>
/path/to/my-skill/SKILL.md
</location>
</skill>
</available_skills>
```

`<location>` 요소는 전체 스킬 지침 파일의 위치를 에이전트에 알려줍니다.

## 라이선스

Apache 2.0
