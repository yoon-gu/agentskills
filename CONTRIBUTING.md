# Agent Skills 기여 가이드

Agent Skills에 기여해 주셔서 감사합니다. 이 문서는 기여 방법과 피드백 유형별 권장 채널을 안내합니다.

## 기여 유형

### 문서 개선

[문서 사이트](https://agentskills.io) 개선을 환영합니다. 오탈자 수정, 명확성 개선, 더 나은 예시, 새로운 가이드 모두 좋습니다. 문서는 `docs/` 디렉터리에 있습니다.

### 버그 제보

명세, 문서, 레퍼런스 라이브러리에서 버그를 발견했다면 [이슈를 등록](https://github.com/agentskills/agentskills/issues)해 주세요.

### 제안, 질문, 피드백

기능 요청, 명세 설계 질문, 일반 피드백이 있다면 [토론을 시작](https://github.com/agentskills/agentskills/discussions)해 주세요. 제안이나 열린 논의는 Discussions를 사용하고, 구체적인 버그/문제는 Issues를 사용합니다.

제안은 이론적 우려보다 실제 구현 과정에서 겪은 문제를 다루어야 합니다. 어떤 문제를 겪었고 제안이 어떻게 해결하는지 보여주세요.

명세에 항목을 추가하는 기준은 매우 높게 유지합니다. 명세에 무언가를 추가하는 것은 쉽지만, 나중에 제거하는 것은 어렵기 때문입니다. 새로운 기능 하나하나가 모든 구현자가 이해하고 지원해야 할 복잡도를 늘립니다. 확신이 없다면 추가하지 않는 편이 좋습니다.

> [!NOTE]
> **어디에 올려야 할지 모르겠나요?** 우선 [Discussions](https://github.com/agentskills/agentskills/discussions)에 올려 주세요. 버그로 확인되면 이슈로 전환해 드립니다.

### 에코시스템 등재 및 로고 요청

제품이나 플랫폼에서 Agent Skills 호환을 구현했다면 [agentskills.io](https://agentskills.io) 등재를 요청할 수 있습니다. 제품은 공개적으로 이용 가능해야 하며, 현재 시점에 스킬 탐색 및 실행이 가능해야 합니다. 지원 예정만 발표했거나 비공개 베타 단계인 제품은 등재하지 않습니다.

다음 내용을 포함한 pull request를 제출해 주세요.

1. **로고 파일** — SVG 권장, PNG 허용(최소 200×200px). 라이트/다크 버전을 모두 제공하고 `docs/images/logos/`의 기존 형식을 따라 주세요.
2. **캐러셀 항목** — [`docs/snippets/LogoCarousel.jsx`](docs/snippets/LogoCarousel.jsx)의 배열에 로고를 추가하세요.
3. **제품 정보** — PR 설명에 제품명, 제품 링크, Skills 구현을 보여주는 문서 링크를 포함하세요.

구현 확인을 위해 데모나 스크린샷을 요청할 수 있습니다. 로고 요청은 Anthropic 팀에서 검토합니다.

### 레퍼런스 라이브러리(`skills-ref/`)

레퍼런스 라이브러리의 방향을 아직 조율 중이므로 현재는 코드 기여를 받고 있지 않습니다. 다만 버그 제보와 피드백은 각각 [Issues](https://github.com/agentskills/agentskills/issues), [Discussions](https://github.com/agentskills/agentskills/discussions)로 계속 환영합니다.

### 현재는 받지 않는 기여

프로젝트 초기 단계의 집중도를 유지하기 위해 현재 다음 기여는 받지 않습니다.

- **스킬 제출** — 커뮤니티 스킬 디렉터리는 현재 운영하지 않습니다. 향후 변경될 수 있습니다.
- **대규모 아키텍처 변경** — 핵심 명세를 아직 다듬는 단계라 대규모 재설계는 시기상조입니다.

기여가 적합한지 확신이 없다면 많은 시간을 들이기 전에 [Discussion](https://github.com/agentskills/agentskills/discussions)을 먼저 열어 주세요.

## 개발 환경 설정

### 문서 사이트

문서 사이트는 [Mintlify](https://mintlify.com/)로 빌드됩니다.

```bash
# Install Mintlify CLI
npm i -g mint

# docs/ 디렉터리에서 로컬 개발 서버 실행
cd docs && mint dev
```

로컬 미리보기는 `http://localhost:3000`에서 확인할 수 있습니다.

## 변경사항 제출

1. [저장소를 포크](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)합니다.
2. 변경 작업용 브랜치를 생성합니다.
3. 변경 후 로컬에서 정상 동작을 확인합니다.
4. pull request를 제출합니다.

PR은 하나의 논리적 변경에 집중하고 관련 이슈가 있으면 연결해 주세요.

## AI를 활용한 기여

> [!IMPORTANT]
> Agent Skills 기여에 **어떤 형태든 AI 보조**를 사용했다면 pull request 또는 이슈에 반드시 공개해야 합니다.

Agent Skills 개선을 위한 AI 도구 사용은 환영하며 권장합니다. 코드 생성, 이슈 탐지, 문서화 등에서 AI 보조를 통해 많은 유의미한 기여가 이루어졌습니다.

다만 Agent Skills에 기여할 때 Claude Code, ChatGPT 같은 AI 보조를 사용했다면 **PR 또는 이슈에서 반드시 공개**해야 하며, AI 사용 범위(예: 문서 코멘트 보조, 코드 생성 등)도 함께 밝혀야 합니다.

PR 답변이나 코멘트가 AI로 생성된 경우에도 공개해야 합니다.

단순한 공백/오탈자 수정은 예외적으로 공개하지 않아도 됩니다.

공개 예시:

> 이 PR은 주로 Claude Code로 작성되었습니다.

또는 더 자세한 예시:

> 코드베이스 이해를 위해 ChatGPT를 참고했지만, 최종 해결책은 제가 수동으로 작성했습니다.

AI 보조 사용을 공개하지 않는 것은 PR을 검토하는 사람에 대한 예의가 아닐 뿐 아니라, 해당 기여를 어느 정도 수준으로 검증해야 하는지 판단하기 어렵게 만듭니다.

### 우리가 기대하는 점

AI 보조 기여를 제출할 때는 다음을 충족해 주세요.

- **AI 사용의 명확한 공개** — AI 사용 여부와 사용 수준을 투명하게 밝히기
- **기여자의 이해** — 변경사항이 무엇을 하는지 본인이 명확히 이해하기
- **명확한 근거** — 왜 변경이 필요한지, Agent Skills 목표와 어떻게 맞는지 설명 가능하기
- **구체적 증거** — 개선을 보여주는 테스트 케이스, 시나리오, 예시 포함하기

### 종료될 수 있는 제출물

공개 정책을 따르지 않는 것으로 보이는 제출물은 종료될 수 있습니다.

## 라이선스

기여 시 코드 및 명세 파일은 [Apache License 2.0](LICENSE), 문서는 [CC-BY 4.0](docs/LICENSE)으로 라이선스됨에 동의하게 됩니다.
