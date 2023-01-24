---
title: Metamask 연동해제, 어카운트/네트워크 변경 감지하기
summary: 메타마스크랑 메종키츠네는 무슨 관계일까?..
date: '2023-1-9'
tags: ['블록체인']
draft: false
---

# 들어가며

Metamask 연동이후 연동해제와 사용자의 계정 변경/잠김과 네트워크 변경을 감지해보도록 하겠습니다.
Metamask 연동은 [이전 글](https://www.devcecy.com/blog/blockchain/connect-metamask)에서 확인하실 수 있습니다.

# Metamask 연동해제, 어카운트/네트워크 변경 감지하기

## 연동 해제 하기

연동 해제할 버튼을 생성합니다. 메타마스크 연동 전에는 '연동' 버튼만 있고, 연동 이후에는 잔액과 연동해제 버튼이 보여집니다.

```tsx
<>
  <h1>ethers.js</h1>
  {isConnected ? (
    <>
      <p>잔액:{balance}ETH</p>
      <button onClick={handleDisconnect}>연동해제</button>
    </>
  ) : (
    <button onClick={handleConnect}>연동</button>
  )}
</>
```

`handleDisconnect()`함수를 작성해 줍니다. 메타마스크 공식문서에 의하면 `window.location.reload();`를 해주기를 권하고 있습니다. 저는 provider와 isConnected라는 상태를 저장해주고 있기 때문에 이 상태들도 초기화 시켜주었습니다.

```js
const handleDisconnect = () => {
  setProvider(null)
  setIsConnected(false)
  window.location.reload()
}
```

## 어카운트/네트워크 변경 감지하기

아래와 같이 어카운트 변경과 체인 변경을 감지할 수 있습니다. 예를들어, 어카운트를 잠그면 두번째 인자인 handler가 작동하는 것입니다. 타입을 통해 accounts가 배열에 담겨옴을 확인 할 수 있습니다.

```ts
// 어카운트 변경/잠김
ethereum.on('accountsChanged', handler: (accounts: Array<string>) => void);

// 네트워크 변경
ethereum.on('chainChanged', handler: (chainId: string) => void);
```

어카운트와 체인변경 감지는 메타마스크 연동 이후에만 확인해주면 되는 사항이므로, useEffect를 사용하여 의존성 배열에 `isConnected`를 추가해주었습니다. 그리고 `setInterval`로 1초마다 변경된 사항을 감지하도록 해주었습니다. 변경이 감지되면 두번째 인자의 함수가 작동됩니다. 저는 두 경우 모두 연동을 해제해줄 것이기 때문에 위에서 작성했던 `handleDisconnect`함수를 호출하도록 하겠습니다.

```ts
useEffect(() => {
  if (!isConnected) return

  const timer = setInterval(() => {
    window.ethereum.on('accountsChanged', handleDisconnect)
    window.ethereum.on('chainChanged', handleDisconnect)
  }, 1000)

  return () => clearInterval(timer)
}, [isConnected])
```

연동 해제가 아닌 다른 이벤트를 작성해 줘야한다면, 각각 다른 함수를 작성해 줄 수도 있습니다. 어카운트 변경시에는 accounts라는 인자를 받아오고 체인 변경시에는 변경된 chainId을 받아오므로 이것을 이용할 수 있습니다.

```ts
const handleAccountsChanged = (accounts: Array<string>) => {
  console.log(accounts) // 변경된 어카운트 혹은 빈 배열[]
}

const handleChainChanged = (chainId: string) => {
  console.log(chainId) // 변경된 체인 주소
}
```

# 마무리

오늘은 메타마스크 연동 해제와 어카운트/네트워크 변경 감지에 대해서 글을 작성해보았습니다. 처음 web3를 접하고 문서를 확인할 때는 머리가 복잡하기만 했는데 다시보니 공식 문서에 아주 친절히 적혀있었구나, 라는 생각이 드네요.😎
피드백이 있다면 언제든지 댓글로 남겨주시면 감사하겠습니다!

# 참고

- [GitHub 전체 코드 확인하기](https://github.com/devCecy/connect-cryptocurrency-wallet)
- [Metamask 공식문서](https://docs.metamask.io/guide/ethereum-provider.html#events)
