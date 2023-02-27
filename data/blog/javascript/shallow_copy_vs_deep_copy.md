---
title: 자바스크립트의 얕은 복사와 깊은 복사
summary: 얕복 vs 깊복, 저는 물복이요..!
date: '2023-2-26'
tags: ['자바스크립트']
draft: false
---

# 들어가며

개체의 복사본을 만들려는 경우 `얕은 복사` 또는 `깊은 복사`를 할 수 있습니다. 오늘은 자바스크립트에서 얕은 복사, 깊은 복사는 어떻게 할 수 있으며, 어떤 차이를 가지고 있는지 알아보겠습니다.

# 얕은 복사(Shallow Copy)와 깊은 복사(Deep Copy)

## 얕은 복사(Shallow Copy)

`얕은 복사`는 새로운 개체를 생성 하기는 하지만, 개체 내부의 값은 여전히 원본 개체에 대한 참조를 가지는 복사 방법 입니다. 즉, 원본 개체와 복사된 개체 사이에 데이터를 공유하는 구조를 가지고 있다고 볼 수 있습니다.

### 객체의 얕은 복사

객체의 얕은 복사를 위해서는 1) `스프레드 연산자(...)`와 2) `Object.assign({}, object)`를 사용할 수 있습니다.

객체로 예를 들면 다음과 같습니다.

```js
const original = { a: 1, b: 2, c: { d: 3 } } // 원본 배열

let copy1 = { ...original } // 1)
let copy2 = Object.assign({}, original) // 2)

copy1.a = 4
copy2.a = 4

copy1.c.d = 5

console.log(original) // Output: { a: 1, b: 2, c: { d: 5 } }
console.log(copy1) // Output: { a: 4, b: 2, c: { d: 5 } }
console.log(copy2) // Output: { a: 4, b: 2, c: { d: 5 } }
```

위의 예에서는 `스프레드 연산자(...)`를 사용하여 객체 `original` 복사본을 만듭니다. 그런 다음 `copy1` 의 `a`값을 1에서 4로 변경합니다. `console.log(copy1)`을 확인해보면 a의 값은 4로 변경되었으나, `console.log(original)`의 a값은 여전히 1입니다. 얕은 복사를 통해 원본 객체(`original`)는 수정되지 않고, 복사본인 `copy1`의 `a`만 수정되었습니다.

이번에는 `copy1.c.d = 5`로 중첩 데이터인 `d`의 값을 3에서 5로 변경해 보겠습니다. console.log로 확인해보면 `original` 객체와 `copy1`객체의 `d`의 값이 5로 변경되었습니다. 분명, `copy1`의 `d`의 값만 수정했는데 왜 `original`의 `d`의 값까지 변경된걸까요? 그 이유는 얕은 복사는 중첩 데이터는 복사하지 않고 원본을 참조하기 때문인데요, 이름부터 `얕은`복사 이기때문에 개체를 모두 복사하진 않습니다. 배열의 얕은 복사를 보며 다시 한번 확인해 보겠습니다.

### 배열의 얕은 복사

배열의 얕은 복사본를 위해서 1) `스프레드 연산자(...)`와 2) `slice()` 배열 메서드를 사용할 수 있습니다.

예를 들면 다음과 같습니다.

```js
const originalArray = [
  { name: 'Ceci', info: { longName: 'Cecilia' } },
  { name: 'Lia' },
  { name: 'Charles' },
]

let copyArray1 = [...originalArray]
let copyArray2 = originalArray.slice()

console.log(originalArray) // Output: [{ name: 'Ceci', info: { longName: 'Cecilia' } }, { name: 'Lia' }, { name: 'Charles' }]
console.log(copyArray1) // Output: [{ name: 'Ceci', info: { longName: 'Cecilia' } }, { name: 'Lia' }, { name: 'Charles' }]
console.log(copyArray2) // Output: [{ name: 'Ceci', info: { longName: 'Cecilia' } }, { name: 'Lia' }, { name: 'Charles' }]
```

위 코드의 원본 배열과 복사된 배열의 관계를 그림으로 그려보면 다음과 같습니다.

![shallow_copy](/static/images/blog/javascript/shallow_copy_vs_deep_copy/shallow_copy.jpeg)

눈여겨 볼 부분은 중첩 데이터인 0번 인덱스의 `info`입니다. 얕은 복사는 중첩 데이터는 복사하지 않고, 원본 데이터를 참조한다고 위에서 말씀드렸는데요, 그러므로 `copyArray1`의 `info`를 `{ longName: 'Ceciliaaa' }`로 변경하면 `originalArray`의 `info`도 `{ longName: 'Ceciliaaa' }`로 변경됩니다.

## 깊은 복사(Deep Copy)

`깊은 복사`는 새 개체를 만들고 개체 내부의 모든 값도 복사합니다. 즉, 깊은 복사를 하면 새 개체의 값을 변경해도 원래 객체에는 영향을 주지 않습니다. 변경할 값이 중첩 데이터라고 해도 말입니다 !

### 객체의 얕은 복사

객체의 깊은 복사본를 위해서 1) `JSON.parse(JSON.stringify())`와 2) `Lodash의 .cloneDeep()`을 사용할 수 있습니다.

```js
const original = { a: 1, b: 2, c: { d: 3 } }

let copy1 = JSON.parse(JSON.stringify(original))
let copy2 = _.cloneDeep(original)

copy1.a = 4
copy1.c.d = 5

copy2.a = 3
copy2.c.d = 4

console.log(original) // Output: { a: 1, b: 2, c: { d: 3 } }
console.log(copy1) // Output: { a: 4, b: 2, c: { d: 5 } }
console.log(copy2) // Output: { a: 3, b: 2, c: { d: 4 } }
```

위의 예에서는 `JSON.parse(JSON.stringify())`를 사용하여 `original` 객체의 복사본을 만듭니다. 그런 다음 `original`에 영향을 주지 않는 객체 `copy` 의 `a` 값을 변경합니다. `copy` 에서 `c.d` 값을 변경해도 원본 객체에는 영향을 미치지 않습니다.

### 배열의 얕은 복사

배열의 깊은 복사본를 위해서는 객체와 마찬가지로 1) `JSON.parse(JSON.stringify())`와 2) `Lodash의 .cloneDeep()`을 사용할 수 있습니다.

다음은 배열을 깊은 복사한 코드입니다. 그림으로 원복 배열과 복사된 배열을 확인해 봅시다.

```js
const originalArray = [
  { name: 'Ceci', info: { longName: 'Cecilia' } },
  { name: 'Lia' },
  { name: 'Charles' },
]

let copyArray1 = JSON.parse(JSON.stringify(originalArray))
let copyArray2 = _.cloneDeep(originalArray)

console.log(originalArray) // Output: [{ name: 'Ceci', info: { longName: 'Cecilia' } }, { name: 'Lia' }, { name: 'Charles' }]
console.log(copyArray1) // Output: [{ name: 'Ceci', info: { longName: 'Cecilia' } }, { name: 'Lia' }, { name: 'Charles' }]
console.log(copyArray2) // Output: [{ name: 'Ceci', info: { longName: 'Cecilia' } }, { name: 'Lia' }, { name: 'Charles' }]
```

![deep_copy](/static/images/blog/javascript/shallow_copy_vs_deep_copy/deep_copy.jpeg)

`JSON.stringify()`은 객체를 json 문자열로 변환 시키고 `JSON.parse()`는 문자열을 다시 객체로 변환시키는데, 이때 원본 객체와의 참조가 끊어지기 때문에 깊은 복사를 하기 위해 사용할 수 있습니다. 그러나 `JSON.parse(JSON.stringify())`은 함수, Date, 정규표현식, Infinity등등의 타입은 깊게 복사 할 수 없으며 속도가 느리다는 단점이 있습니다.

Lodash의 `.cloneDeep()`은 사용하기 간편하지만, 깊은 복사만을 위해서 Lodash 라이브러리를 설치하기에는 라이브러리 용량이 꽤 큽니다. 만약, 프로젝트 내에 Lodash를 이미 사용하고 있다면 .cloneDeep()을 사용하면 좋을 것 같습니다.

# 맺으며

얕은 복사는 깊은 복사보다 빠르고 적은 메모리를 사용하지만 중첩 데이터까지 복사하지 못하고, 깊은 복사는 개체를 모두 복사하므로 안전하지만 많은 메모리를 사용하기 때문에 상황에 따라 얕은 복사와 깊은 복사를 사용해줘야 합니다.
