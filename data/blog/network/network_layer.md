---
title: 네트워크에 대해서 알아보자 4 - 네트워크 계층 편
summary: 네트워크와 네트워크 사이의 통신, 라우터, IP, 패킷
date: '2023-2-18'
tags: ['네트워크']
draft: false
---

# 들어가며

오늘은 OSI 모델의 7계층 중 3계층인 `네트워크 계층(Network Layer)`에 대해서 알아보겠습니다.

![network_layer](/static/images/blog/network/network_layer/network_layer.jpeg)

# 네트워크 계층(Network Layer)

`네트워크 계층`은 <b>한 네트워크와 다른 네트워크 간의 통신을 할 수 있도록 하는 계층</b>입니다. 이때, `라우터`라는 네트워크 기기를 통해 데이터를 다른 네트워크에 있는 목적지까지 전송해할 수 있게 됩니다. 네트워크 계층의 주요 프로토콜은 `IP`, ARP, ICMP, NAT, FIP, BGP, OSPF 등이 있으며, 데이터 단위는 `패킷`입니다.

![router](/static/images/blog/network/network_layer/router.jpeg)

## IP(Internet Protocol)

`IP`는 네트워크 계층에서 자주 사용되는 프로토콜로, IP 주소를 지정하하는 역할을합니다. IP는 다음과 같은 `비신뢰성`과 `비연결성`의 특징을 가집니다.

- `비신뢰성` : 데이터를 송신하기는 하지만 데이터가 송신지까지 전달되었는지는 보장하지 않습니다.
- `비연결성` : 서로 다른경로를 이용하거나 순서가 바뀌어 데이터를 전송합니다.

### IP주소

`IP 주소`는 <b>각 기기들을 식별하기 위한 논리적 주소</b>입니다. IP 주소는 `네트워크 ID`와 `호스트 ID`로 이루어져 있는데, IP 주소를 2진수로 변환했을때 첫 24bit부분이 네트워크 ID이며, 나머지 8bit가 호스트 ID입니다.

![network_id_vs_host_id](/static/images/blog/network/network_layer/network_id_vs_host_id.jpeg)

IP 주소는 일반적으로 `IPv4`를 사용하며, A,B,C,D,E 클래스로 나누어져있습니다. 그러나 클래스 기반으로 IP주소를 할당 할 경우 IP 주소가 낭비되게 되는데요, IP주소 클래스와 IP 주소 낭비에 대해서 자세히 알고 싶다면 [이 글](https://jhnyang.tistory.com/503)을 참고해 보시면 좋을것 같습니다.

현재는 인터넷이 급속도로 보급되면서 IP 주소가 고갈되고 있는데요, 그래서 IP 주소의 갯수를 무한대에 가깝게 생성할 수있는 `IPv6`가 등장했습니다. IPv4와 IPv6의 차이는 다음과 같습니다.

![ipv4_vs_ipv6](/static/images/blog/network/network_layer/ipv4_vs_ipv6.jpeg)

### 참고) MAC주소와 IP주소는 뭐가 다른거죠?

`MAC주소`는 미디어 접속 제어 주소이며, 물리적인 주소입니다. `IP주소`는 인터넷 프로토콜 주소이며, 논리적인 주소입니다.

![mac_vs_ip](/static/images/blog/network/data_link_layer/mac_vs_ip.jpeg)

## 서브넷 마스크

앞서 클래스 기반으로 IP주소를 할당할 경우 IP 주소의 낭비가 생긴다고 말씀드렸는데요, 이를 해결하기 위해 `서브넷 마스크`라는 것이 등장했습니다.

서브넷 마스크는`서브넷팅`이라는 기술을 사용하는데요, 서브넷팅은 대규모의 네트워크를 작은 네트워크로 분할하는 기술이며 그렇게 분할된 네트워크를 `서브넷`이라고 합니다.

![subnet](/static/images/blog/network/network_layer/subnet.jpeg)

원래는 하나의 네트워크 인데 이를 분할하면 네트워크 ID와 호스트 ID를 식별하기 어려워지겠죠? `서브넷 마스크`값은 이를 식별해 주는 역할을 합니다. 서브넷 마스크는 네트워크 ID에 해당하는 부분을 모두 1로 바꾸고, 호스트 ID에 해달하는 부분을 모두 0으로 바꿉니다. 서브넷 마스크에 대한 자세한 사항은 [이 글](https://nordvpn.com/ko/blog/what-is-subnet-mask/)을 통해 확인해 보시면 좋을 것 같습니다.

## IP 패킷, IP 헤더

### IP 패킷

`IP 패킷`은 IP 헤더가 캡슐화된 네트워크 계층의 데이터 단위를 말합니다.

![ip_packet](/static/images/blog/network/network_layer/ip_packet.jpeg)

### IP 헤더

`IP 헤더`에는 다음과 같은 정보들이 담겨있습니다.

![ip_header](/static/images/blog/network/network_layer/ip_header.jpeg)

- `출발지 IP 주소`와 `목적지 IP 주소`는 각 32bit로, 라우팅을 하는데 핵심적으로 필요한 정보입니다.
- `버전` : IP 프로토콜의 버전을 나타냅니다. (4bit)
- `헤더 길이` : 헤더의 총 길이를 나타냅니다. (4bit)
- `서비스 유형` : 패킷의 전손 우선순위를 제공합니다. (8bit)
- `전체 패킷의 길이` : (16bit)
- `ID(일련번호)` : 전송하고자 하는 패킷을 식별하기 위해 부여하는 번호입니다. (16bit)
- `플래그` : 비트값을 통해 분할(단편화)을 금지하거나 추가할 수 있는 필드입니다. (3bit)
- `조각의 위치(단편화 오프셋)` : 비트값을 통해 단편화(분할)된 패킷의 위치를 표현하는 필드입니다. (13bit)
- `TTL(Time-to-Live)` : 통과 가능한 라우터의 남은 수를 나타냅니다. TTL 값이 0이 되기 전에 목적지에 도착해야합니다. (8bit)
- `프로토콜 타입` : 역다중화시 사용되는 필드로 상위 계층 데이터에따라 값이 달라집니다. (8bit)
- `헤더 체크섬` : 에러 발생 유뮤를 검사하는 필드입니다. (16bit)

## 라우터

`라우터`는 한 네트워크에서 다른 네트워크로 데이터를 전송하는 네트워크 기기입니다. LAN과 LAN 혹은 LAN과 인터넷처럼 서로 다른 네트워크를 상호 연결하기 위해서 사용합니다.

![router_2](/static/images/blog/network/network_layer/router_2.jpeg)

`라우팅`은 데이터를 특정 목적지까지 전송하기 위해 최적의 경로를 선택하는 과정입니다. 라우팅은 라우팅 테이블을 필요합니다. 라우터를 거치면 이더넷 헤더와 FCS가 교체되어 도착지 MAC주소와 출발지MAC주소가 바뀝니다. 하지만, IP 헤더의 도착지 IP주소와 출발지 IP주소는 바뀌지 않습니다.(예외-NAT주소 변환시)

## 라우팅 프로토콜

`라우팅 프로토콜`은 라우팅 정보를 교환하기 위한 프로토콜입니다. 라우팅에는`정적 라우팅`과 `동적 라우팅`이 있습니다.

### 정적 라우팅

`정적 라우팅`은 관리자가 직접 라우팅 테이블을 생성하고 갱신하면서 수동으로 라우팅을 관리하는 방식입니다.

### 동적 라우팅

`동적 라우팅`은 라우팅 테이블의 정보를 주기적으로 전달받아 갱신하는 방식입니다. 동적 라우팅은 회사나 조직에서 관리하는 라우터들의 집합인 `AS`(Autonomous System)를 기준으로 `내부 라우팅 프로토콜(IGP)`과 `외부 라우팅 프로토콜(EGP)`로 분류할 수 있습니다.

- `IGP(Internal Gateway routing Protocol)` : AS 내부의 라우팅 프로토콜로, BGP(Border Gateway Protocol) 등이 있습니다.
- `EGP(Exterior Gateway routing Protocol)` : AS 외부의 라우팅 프로토콜로, RIP(Routing Information Protocol), OSPF(Open Shortes Path First) 등이 있습니다.

![routing](/static/images/blog/network/network_layer/routing.jpeg)

# 맺으며

OSI 모델의 3계층인 `네트워크 계층(Network Layer)`에 대해서 알아보았습니다.

네트워크 계층에 대해서 요약해보자면 아래와 같습니다.

- 서로 다른 네트워크간의 데이터 통신을 다루며,
- 주요 네트워크 기기는 라우터
- 주요 프로토콜은 IP
- 데이터의 단위는 패킷
- 주요 특징은 비신뢰성, 비연결성

네트워크 계층은 비신뢰성, 비연결성이라는 특징을 가지고있어 데이터 통신의 신뢰성은 확보하지 못했는데요, 다음시간에는 네트워크 계층이 해주지 못한 통신의 신뢰성을 확보해주는 `전송 계층`에 대해서 알아보도록 하겠습니다😎.

# 참고

- [네트워크, 그림으로 이해하자](https://www.inflearn.com/course/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EA%B7%B8%EB%A6%BC-%EC%9D%B4%ED%95%B4) 강의와 `그림으로 이해하는 네트워크 용어`(기타미 류지 지음/성창규 옮김/길벗) 도서를 참고하여 정리한 글입니다.
- 본 글에 첨부된 이미지는 대부분 제가 직접 그린 것으로 참고용으로만 봐주시면 감사하겠습니다.
- 종종 [플랫티콘](https://www.flaticon.com/)의 아이콘을 사용했습니다.
