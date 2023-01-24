---
title: Metamask 연동하기 (feat. ethers.js)
summary: web3 댐뵤라! 얍!
date: '2023-1-8'
tags: ['블록체인']
draft: false
---

# 들어가며

암호화폐 지갑 중 하나인 Metamask를 ethers.js 라이브러리를 사용하여 연동한 과정을 글로 남겨보려 합니다. (react, typescript 환경을 사용했습니다.)

# Metamask 연동하기

1. ethers.js 라이브러리를 설치해 줍니다.

```js
npm i ethers
```

2. 메타마크스크를 연동할 버튼과 함수를 만들어줍니다.
   '메타마스크 연결!' 버튼을 클릭해 봅시다.
   메타마스크가 브라우저에 설치되어있지 않다면 `alert('메타마스크를 설치해주세요.')`이 생성될 것입니다.

```js
const handleConnect = () => {
  if (typeof window.ethereum === 'undefined') return alert('메타마스크를 설치해주세요.')
}
return <button onClick={handleConnect}>메타마스크 연결!</button>
```

2-1. 타입스크립트를 사용한다면, `ethereum`에 빨간줄이 생기며, <u>Window & typeof globalThis' 형식에 'ethereum' 속성이 없습니다.ts(2339)</u>라는 에러 메시지를 확인하게 됩니다. window객체가 `ethereum`라는 속성이 존재하는지 알지 못하기 때문에 발생하는 오류 입니다. 그럼, 루트 폴더에 `global.d.ts` 파일을 생성하고 `ethereum`의 속성을 미리 지정해 줍시다.

```js
export declare global {
	interface Window {
		ethereum: ExternalProvider | JsonRpcFetchFunc;
	}
}
```

2-2. 아직 에러가 사라지지 않았을 겁니다. `tsconfig.json`파일로 이동해 include에 만들어준 `global.d.ts` 파일을 포함시켜 줍시다. 그럼 빨간줄이 사라지고 ethereum 속성을 사용할 수 있습니다.

```js
// tsconfig.json
...
	"include": [..., "global.d.ts"]
...
```

3. 이더리움 네트워크(메타마스크)를 ethers.js가 제공하는 `Web3Provider`로 감싸줍니다. 이제 다시 연결 버튼을 클릭해주면
   provider를 콘솔로 찍어보면 메타마스크에 연결된 것을 확인할 수 있습니다.

```js
// handleConnect 함수 내부

// 메타마스크 연동 -> 브라우저에 메타마스크 엽동 관련 팝업이 생성됩니다.
const provider = new ethers.providers.Web3Provider(window.ethereum)

console.log(provider) // {...connection: {url: 'metamask'}}
```

4. 연결된 지갑의 잔액도 가져와 봅시다.
   먼저, 지갑 account에 접근하도록 request를 해줍니다. accounts의 첫번째 인덱스를 가져오면 연결된 지갑의 주소를 확인할 수 있습니다.

```js
// handleConnect 함수 내부

// 팝업에서 연동을 완료해주면 accounts 정보를 가져옵니다.
const accounts = await provider.send('eth_requestAccounts', [])

console.log('accounts', accounts[0]) // "연결된 지갑의 주소"
```

`getBalance()`에 지갑주소인 account[0]을 인자값으로 넣어 balance를 얻어옵니다.
이렇게 얻어온 balance값은 이더리움 네트워크에서 사용되는 가장 작은 단위인 wei로 반환되기 때문에 ether단위로 변환해 줍시다.

ex) 1 ehter는 10의 18승 wei

```js
// wei로 반환됩니다.
const balance = await provider.getBalance(accounts[0])

// ehter단위로 포맷해줍니다.
const formattedBalance = ethers.utils.formatEther(balance)
```

5. 전체 코드를 확인해봅시다.

위에서 설명한 `handleConnect`함수 전체는 아래와 같습니다.

```ts
const handleConnect = async () => {
  if (typeof window.ethereum === 'undefined') return alert('메타마스크를 설치해주세요.')

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts = await provider.send('eth_requestAccounts', [])

    const balance = await provider.getBalance(accounts[0])
    const formattedBalance = ethers.utils.formatEther(balance)
  } catch (err) {
    alert((err as { message: string }).message)
  }
}
```

살짝 리팩토링 해봅시다.
`provider`와 `balance`를 받아오는 부분을 두 함수로 나누어 주었습니다. 그리고 provider가 업데이트되면 `getBalance`함수를 호출하도록 했습니다. 타입스크립트를 사용한다면 getBalance내부의 provider의 타입을 알 수 없어 에러가 발생할 것입니다. 그러므로 `Web3Provider`로 타입을 지정해줍니다. (npm i @ethersproject/providers 해준뒤 import 해와야 합니다.)

```ts
const [provider, setProvider] = useState<Web3Provider | null>(null)
const [isConnected, setIsConnected] = useState(false)
const [balance, setBalance] = useState('')

useEffect(() => {
  if (provider !== null) getBalance()
}, [provider])

const handleConnect = async () => {
  if (typeof window.ethereum === 'undefined') return alert('메타마스크를 설치해주세요.')

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(provider)
  } catch (err) {
    alert((err as { message: string }).message)
  }
}

const getBalance = async () => {
  try {
    const accounts = await (provider as Web3Provider).send('eth_requestAccounts', [])
    const balance = await (provider as Web3Provider).getBalance(accounts[0])
    const formattedBalance = ethers.utils.formatEther(balance)

    setBalance(formattedBalance)
    setIsConnected(true)
  } catch (err) {
    alert((err as { message: string }).message)
  }
}
```

# 마무리

ethers.js를 사용하면 생각보다 간단하게 웹-메타마스크 연동이 가능한것 같습니다. 다음 글에서는 메타마스크 연결해제 및 네트워크/어카운트 변경 감지와 같은 세세한 처리를 해보겠습니다.
피드백이 있다면 언제든지 댓글로 남겨주시면 감사하겠습니다!

# 참고

- [GitHub 전체 코드 확인하기](https://github.com/devCecy/connect-cryptocurrency-wallet)
- [ethers.js 공식문서](https://docs.ethers.org/v5/getting-started/#getting-started--connecting)
