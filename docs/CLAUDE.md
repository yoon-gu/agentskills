# CLAUDE.md

이 파일은 Claude Code(claude.ai/code)가 이 저장소 코드를 다룰 때 참고할 가이드를 제공합니다. 이 프로젝트는 `SKILL.md` 파일을 통해 AI 에이전트에 특화된 워크플로를 가르치는 개방형 형식을 정의합니다.

## 문서

`docs/` 디렉터리에 있는 Agent Skills 문서 사이트는 [Mintlify](https://mintlify.com)로 빌드됩니다.

### 빠른 시작 명령

```bash
# 로컬 개발 서버 실행
npm run dev
```

로컬 미리보기: `http://localhost:3000`

### 개발 노트

- **내비게이션**: `docs/docs.json`의 `navigation.pages` 배열에서 정의
- **페이지 추가**: `/docs`에 새 `.mdx` 파일 생성 후 내비게이션에 파일명(확장자 제외) 추가
- **배포**: `main` 브랜치 푸시 시 자동 배포
- **문제 해결**: 페이지가 404면 `docs.json`이 있는 디렉터리에서 `mint dev`를 실행 중인지 확인
