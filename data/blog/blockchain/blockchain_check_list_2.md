---
title: 나의 블록체인 정복 일지 2
summary: 블록체인으로 우리 다 행복했으면 좋겠어. 쨍하고 햇볕 난 것처럼 구겨진 것 하나 없이
date: '2023-2-11'
tags: ['블록체인']
draft: false
---

# 들어가며

지난글에는 블록체인 생태계에 입문하기 위해서 알아야하는 기본적인 질문에 알아보았는데요, 오늘은 블록체인 생태계에 대해 조금 더 `심화된 질문`을 해보겠습니다.

오늘 알아볼 질문은 다음과 같습니다.

- dApp은 무엇이고, dApp으로 무엇을 할 수 있을까요?
- 코인과 토큰, 다른건가요?
- 스테이블 코인은 무엇인가요?
- 클레이튼(Klaytn)은 무엇인가요?
- DeFi관련 용어들에 대해 알려주세요! - Lending, Liquidity Pools, Yield Farming, Staking
- Uniswap과 Sushi Swap에 대해서 알려주세요
- 최근 테라/루나 사건에 대해서 알려주세요

이번에도 역시나 답변에 대한 간단한 그림을 추가해보았습니다. 그럼 블록체인을 정복하러 가봅시다! 🔥

## dApp은 무엇이고, dApp으로 무엇을 할 수 있을까요?

`댑(Dapp)` 혹은 디앱은 Decentralized Application의 약자로 단어 그대로 <b>탈중앙화된 블록체인을 기반으로 동작하는 어플리케이션</b>을 의미합니다. 지난 글에서 이더리움을 블록체인 플랫폼이라고 설명했는데요, 이런 플랫폼 위에서 실행되는 앱을 댑이라고 하는것입니다. 한번더 쉽게 말해보자면 블록체인 상의 앱을 말하는것입니다. 댑의 대표적인 예로는 크립토키티, 오픈씨, 스팀잇, 메타마스크 등이 있습니다.

댑은 탈중앙화 금융, 게임, 공급망 관리, 신원 확인, 소셜 네트워크, 에너지 거래 등 다양한 목적으로 사용될 수 있습니다.

![app_vs_dapp](/static/images/blog/blockchain/blockchain_check_list/app_vs_dapp.jpeg)

## 코인과 토큰, 다른건가요?

독립적인 블록체인 생태계인 `메인넷`을 기반으로 한 암호화폐를 `코인`이라고 합니다. 예를들면, 비트코인, 이더리움, 라이트코인, 솔라나 같은 것들이 있죠. 코인은 주로 지불/결제 수단으로 사용되며 코인이 생성되기 위해서는 채굴의 과정이 필요합니다.

반면, `토큰`은 메인넷을 가지고 있지 않아 메인넷을 가진 코인위에서 특정 용도를 위해 만들어진 암호화폐입니다. 토큰은 지불/결제 수단도 가질 수 있지만 추가적으로 다른 다양한 기능도 가질 수 있구요, 코인 처럼 채굴의 과정을 거치지 않고 미리 토큰을 발행해서 생성할 수 있습니다. 토큰의 예로는 이더리움의 ERC-20토큰인 테더(USDT), 체인링크(LINK), 유니스왑(UNI) 등이 있습니다. 이오스(EOS)나 트론(TRON)처럼 토큰으로 시작했지만 자체 메인넷을 갖춘뒤 코인이 된 경우도 있습니다.

![coin_vs_token](/static/images/blog/blockchain/blockchain_check_list/coin_vs_token.jpeg)

## 스테이블 코인은 무엇인가요?

`스테이블 코인`이란 <b>달러나 원화 같은 법정화폐 혹은 다른 가상 자산에 가치를 고정해둔 코인</b>을 의미합니다. 코인의 가치를 다른 화폐나 코인에 고정해 두어 기존 코인보다 안정적으로 가치를 유지할 수 있다는 장점이 있습니다. 스테이블 코인의 가장 대표적인 예로는 테더(USDT)가 있으며, 테더는 달러에 가치를 고정해둔 스테이블 코인입니다.

테더의 경우 1달러에 1테더로 가치가 고정되어 유지됩니다. 즉, 1테더를 발행하기 위해서는 1달러를 가지고 있어야 하며 이에 따라 테더와 달러를 1대1일로 교환할 수 있도록 그 가치를 유지하는 것입니다.

안정적으로 보이는 스테이블 코인에는 `모순`이 있는데요, 바로 은행에 달러를 예치한다는 점입니다. 블록체인 기반의 코인은 탈중앙화라는 가치를 가지고 있는데, 결국 중앙집권기관인 은행에 달러를 예치함으로 코인을 발행한다는 것이 모순점이 되는 것입니다. 또한, 실제로 스테이블 코인의 발행량 만큼 다른 자산을 보유하고 있는지 확인 할 수 없다는 점도 문제점이 됩니다.

스테이블 코인은 안정성을 유지하기 위한 기본 `메커니즘`에 따라 `법정화폐 담보 스테이블 코인`, `암호화폐 담보 스테이블 코인` 그리고 `알고리즘 스테이블 코인`으로 나눠볼 수 있습니다.

![stable_coin](/static/images/blog/blockchain/blockchain_check_list/stable_coin.jpeg)

## 최근 테라/루나 사건에 대해서 알려주세요

테라폼랩스에서 발행항 암호화폐 `테라(USD)`와 그 가치를 유지하기 위한 자매 코인인 `루나(LUNA)`가 대폭락한 사건입니다. 바이낸스 기준 시총 9위, 업비트 기준 시총 4위였던 초대형 코인이 폭락한 여파로 디파이 플랫폼 '셀시우스'가 파산하고 미국 헤지펀드 쓰리애로우즈캐피탈이 파산했습니다.

루나는 테라의 가격을 헤지하는 역할을 하는 코인이었으며, 테라가 시장에 과도하게 많이 풀리면 (테라가격이 1달러보다 낮아지면), 루나의 공급량을 증가시키는 방법으로 방어를 했으나, 며칠동안 방어가 제대로 작동하지 못했고, 암호 화폐 시장 자체의 하락세와 루나 투자자들의 공항 매도까지 겹치며 일주일만에 -99.99999% 가치가 하락했습니다.

## 디파이

`DeFi(Decentralized Finance)`는 블록체인 기술을 사용한 탈중앙화된 금용을 뜻합니다. 디파이에는 랜딩, 스테이킹, 이자 농사 등의 금융 서비스 포함합니다.

![defi](/static/images/blog/blockchain/blockchain_check_list/defi.jpeg)

## 랜딩(Lending)

`랜딩(Lending)`은 <b>은행과 같은 중개자 없이 암호화폐를 빌려주고 빌리는 암호화폐 대출</b>을 뜻합니다. DeFi 대출 플랫폼을 통해 사용자는 이자를 지불하는 대가로 암호화 자산을 다른 사람에게 빌려줄 수 있습니다.

![lending](/static/images/blog/blockchain/blockchain_check_list/lending.jpeg)

## 이자 농사(Yield Farming)

`이자 농사(Yield Farming)`은 <b>DeFi 플랫폼에서 특정 암호화폐 자산을 보유하고 스테이킹하여 보상이나 이자를 얻는 과정</b>을 설명하는 데 사용되는 용어입니다. Yield Farming은 일반적으로 추가 토큰 또는 거래 수수료의 일부 형태일 수 있는 보상과 교환하여 유동성 풀 또는 기타 DeFi 프로토콜에 자산을 스테이킹하는 것을 포함합니다.

![yield_farming](/static/images/blog/blockchain/blockchain_check_list/yield_farming.jpeg)

## 스테이킹(Staking)

<b>블록체인 네트워크의 보안과 운영을 원활히 하기위해서 암호화폐를 블록체인 네트워크에 맡기고 잠궈놓는것(락업)</b>을 `스테이킹`이라고 합니다. 사용자가 암호화폐를 스테이킹하면 네트워크의 합의 메커니즘에 기여하고 블록체인에서 거래를 검증하는 데 도움이 됩니다. 스테이킹에 대한 보상으로는 스테이킹한 암호화폐의 양과 스테이킹 기간에 따라 추가 암호화폐가 주어집니다.

은행은 운영을 위한 자금을 모으기 위해 `예금`이라는것을 통해 사람들의 돈을 예치받고 그에 대한 이자를 나눠주는데요, 이처럼 스테이킹을 예금이라고 생각하시면 쉬울것 같습니다.

![staking](/static/images/blog/blockchain/blockchain_check_list/staking.jpeg)

## 유동성 풀(Liquidity Pools)

`유동성 풀`은 <b>스마트 컨트랙트 내에 코인의 원활한 교환을 위해 코인을 모아두는 곳</b>을 의미합니다. 예를들어, Uniswap 또는 PancakeSwap과 같은 탈중앙화 거래소인 DEX에서 코인을 구매한다고 생각해 봅시다. A라는 코인을 구매하기 위해 해당 코인을 판매하는 사람을 기다려야 한다면 어떨까요? 저는 성격이 급해서 판매자가 나타날때까지 기다리기 쉽지않을 것 같네요. 원활한 코인 거래를 위해 충분한 수의 코인을 미리 보유하고 있어야 하는데요, 이를 위해 코인을 모아두는 곳을 유동성 풀이라고 합니다. 유동성이 높아야 쉽고 빠르게 코인을 거래할 수 있겠죠?

## Uniswap과 Sushi Swap에 대해서 알려주세요

`Uniswap`과 `Sushiswap`은 모두 <b>이더리움 블록체인에서 작동하는 분산형 거래소(DEX)</b>로, 사용자가 중앙 집중식 거래소와 같은 중개자 없이 암호화폐를 거래할 수 있도록 합니다.

`Uniswap`은 2018년에 출시되었으며 빠르게 DeFi 생태계에서 가장 인기 있는 DEX 중 하나가 되었습니다. 이 플랫폼은 스마트 계약을 사용하여 토큰의 유동성 풀을 생성하는 AMM(Automated Market Maker) 모델에서 작동합니다. 사용자는 이러한 풀에서 직접 토큰을 거래할 수 있으며 플랫폼은 풀의 유동성 공급자에게 분배되는 모든 거래에 대해 0.3%의 수수료를 부과합니다.

`Sushiswap`은 Uniswap의 포크로 2020년에 출시되었지만 몇 가지 중요한 차이점이 있습니다. 주요 차이점 중 하나는 Sushiswap이 <b>SUSHI라는 기본 토큰을 도입</b>했다는 것입니다. 사용자는 플랫폼의 유동성 풀에 토큰을 스테이킹하여 얻을 수 있습니다. Sushiswap은 또한 유동성 제공자에게 더 높은 보상 및 수수료 감소와 같은 추가 기능과 인센티브를 제공합니다.

유사성에도 불구하고 Uniswap과 Sushiswap은 서로 경쟁하고 있으며 Sushiswap은 사용자에게 추가 기능과 인센티브를 제공하여 Uniswap에서 시장 점유율을 확보하는 것을 목표로 합니다. 그러나 두 플랫폼 모두 자체적으로 성공했으며 DeFi 생태계의 성장과 발전에 중요한 역할을 하고 있습니다.

## 클레이튼(Klaytn)은 무엇인가요?

`Klaytn`은 <b>카카오의 자회사인 Ground X가 개발한 블록체인 플랫폼</b>입니다. Klaytn은 퍼블릭 블록체인과 프라이빗 블록체인의 이점을 결합한 하이브리드 블록체인으로 설계되었습니다.

Klaytn은 지분 증명 합의 메커니즘을 사용하며 엔터프라이즈 및 분산형 애플리케이션에 최적화되어 있습니다. 개발자가 블록체인 기반 애플리케이션을 쉽게 만들고 배포할 수 있도록 개발 환경과 다양한 도구를 제공합니다.

# 맺으며

많이 들어봤지만 명확히 구별하지 못하던 블록체인 관련 용어들에 대해 정리해보았습니다. 특히 코인과 토큰의 차이를 알게되서 개인적으로는 속 시원한 느낌이 듭니다🤓. 앞으로도 블록체인 관련 새로운 단어들을 접할때 마다 블로그에 정리해보도록 해야겠습니다!

# 참고

- [blockchain_self_study_guide](https://blog.sooho.io/blockchain_self_study_guide/)의 질문을 사용했습니다.
- [테라/루나 사건](https://namu.wiki/w/2022%EB%85%84%20LUNA%20%EB%8C%80%ED%8F%AD%EB%9D%BD) 참고
- 글에 있는 그림은 제가 직접 그린것 + [플랫티콘](https://www.flaticon.com/)의 아이콘을 사용한 것으로 참고용으로 봐주시면 감사하겠습니다.