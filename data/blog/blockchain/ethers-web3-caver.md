---
title: web3 라이브러리 비교(ethers.js vs web3.js)
summary:
date: '2023-1-24'
tags: ['블록체인']
draft: true
---

# 들어가며

web3 개발을 위한 이더리움 자바스크립트 라이브러리 `ethers.js`와 `web3.js를` 비교해보도록 하겠습니다.

# web3 라이브러리 비교

## [ethers.js](https://docs.ethers.org/v5/)

`ethers.js`는 이더리움 지갑 구현을 위한 자바스크립트 라이브러리로, 이더리움 블록체인과 상호작용하기 위한 완전하고 컴팩트한 라이브러리를 목표로 한다고 적혀있습니다.
web3.js의 후발 주자로 나온 라이브러리이지만 현재는 web.js보다 더 많은 다운로드수를 기록하고 있습니다. web3.js와 구분되는 주요한 특징으로는, 키를 관리하는 wallet과 블록체인 네트워크에 연결하는 provider를 분리하여 제공한다는 점입니다.

- 주간 npm 다운로드 수는 907,147입니다.

## [web3.js](https://github.com/web3/web3.js)

`web3.js`는 Generic JSON-RPC에 연결하는 이더리움 Javascript API입니다. 이더리움에서 직접 만든 최초의 이더리움 Javascript API입니다.

- 주간 npm 다운로드 수는 522,762입니다.

### caver.js

`caver.js`는 HTTP 또는 Websocket연결을 사용하여 Klaytn 노드와 상호작용할 수 있도록 도와주는 Javascript API 라이브러리 입니다.

- 주간 npm 다운로드 수는 3,636입니다.

`caver.js` Klaytn에서 만든 라이브러리로, web3.js를 기반으로 만들어졌기 때문에 web3.js와 유사한 패턴을 가지고 있습니다.

```ts
// web3.js
const Web3 = require('web3')
const web3 = new Web3(new web3.providers.HttpProvider('http://localhost:8545'))
web3.eth.getBalance('0x407d73d8a49eeb85d32cf465507dd71d507100c1').then(console.log)
```

```ts
// caver.js
const Caver = require('caver-js')
const caver = new Caver(new Caver.providers.HttpProvider('http://localhost:8545'))
caver.rpc.klay.getBalance('0x407d73d8a49eeb85d32cf465507dd71d507100c1').then(console.log)
```

# 마무리

# 참고

- [ethers.js](https://www.npmjs.com/package/ethers)
- [web3.js](https://www.npmjs.com/package/web3)
- [carver.js](https://www.npmjs.com/package/caver-js)
- https://docs.alchemy.com/docs/ethersjs-vs-web3js-sdk-comparison -> 이걸 번역하면 좋을듯 !
- https://dev.to/lparvinsmith/web3js-vs-ethersjs-a-comparison-of-web3-libraries-2ap5
