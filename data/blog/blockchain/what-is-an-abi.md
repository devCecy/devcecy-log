---
title: ABI(Application Binary Interface)란 무엇일까요?
summary: API는 아는데요..
date: '2023-1-24'
tags: ['블록체인']
draft: false
---

# 들어가며

블록체인 생태계에 입문하면서 ABI에 대해 처음 접하게 되었습니다. 오늘은 ABI가 무엇이며, ABI와 API는 어떻게 다른것인지 알아보겠습니다.

먼저, 익숙한 API에 대해 다시한번 정의해본 뒤 ABI를 알아봅시다.

## API (Application Program Interface)

`API`는 <strong>Application Program Interface</strong>의 줄임말로, 두 프로그램 구성 요소가 서로 통신할 수 있도록 돕는 인터페이스를 뜻합니다.

여기서 `Application`은 고유한 기능을 가진 모든 소프트웨어를 나타내며, `Interface`는 두 Application간의 요청과 응답을 사용하여 서로 통신할 수 있는 방법을 정의한 것입니다. 즉, 두 `Application`이 서로 통신할 수 있도록 돕는 방식(`Interface`) 정도로 이해하면 될 것 같습니다.

그럼 API의 정의를 기반으로 ABI를 이해해 봅시다.

## ABI (Application Binary Interface)

`ABI`는 <strong>Application Binary Interface</strong>의 줄임말로, 바이너리 방식(0과 1로 이루어짐)의 두 프로그램 모듈 사이의 인터페이스를 뜻합니다. 컨트랙트의 관점에서 보면, 컨트랙트 함수와 매개변수들을 JSON 형식으로 나타낸 리스트입니다. 이를 통해 컨트랙트 내의 함수를 호출하거나 데이터를 얻을 수 있습니다.

컨트랙트는 solidity 같은 고수준 언어로 작성된 후 바이트코드로 컴파일되어 블록체인 저장되는데, ABI는 이 컨트랙트와 통신할 수 있는 역할을 합니다.

ABI의 요소를 살펴봅시다.

- `constant` : true이면 읽기전용으로 함수를 호출하며 가스비가 발생하지 않습니다. false이면 트렌젝션을 발생시키며 가스비가 발생합니다.
- `inputs` : 매개변수를 정의하는 객체의 배열입니다.
- inputs 내부의 `name` : 매개변수의 이름을 정의합니다.
- inputs 내부의 `type` : 매개변수의 타입을 정의합니다.
- `name`: 함수의 이름을 정의합니다.
- `outputs` : 출력 객체의 배열입니다.
- outputs 내부의 `name` :
- outputs 내부의 `type` :
- `stateMutability`: 함수의 가변성을 정의합니다. `pure`는 블록체인 상태를 읽지 않거나 쓰지 않을 수 있는 상태이고, `view`는 블록체인 상태를 읽고 쓸 수 있는 상태입니다.
- `type` : 함수의 유형을 정의합니다. 'function', 'constructor', 'receive', 'fallback' 등이 있습니다.

```json
[
  // balanceOf 함수
  {
    "constant": true,
    "inputs": [{ "name": "_owner", "type": "address" }],
    "name": "balanceOf",
    "outputs": [{ "name": "balance", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  // symbol 함수
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{ "name": "symbol", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  }
]
```

ERC-20토큰 표준에 따라 아래와 같은 형식으로도 abi가 생성될 수 있습니다.

```json
[
  "function balanceOf(address owner) view returns (uint256)",
  "function symbol() view returns (string)"
]
```

# 마무리

정리해보자면, `API`는 사람이 읽을 수 있는 코드 수준에서 통신할 수 있는 인터페이스이며, `ABI`는 바이너리 수준에서 통신할 수 있는 인터페이스로 이해하면 될 것 같습니다. ABI를 아직 개념적으로만 이해한 상태라 피드백이 있다면 얼마든지 주시면 감사하겠습니다!

# 참고

https://www.quicknode.com/guides/smart-contract-development/what-is-an-abi
https://ko.docs.klaytn.foundation/content/smart-contract/sample-contracts/erc-20
https://aws.amazon.com/ko/what-is/api/
