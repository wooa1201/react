플럭스 유틸
===========

플럭스 유틸 스토어
------------------

-	플럭스 유틸 패키지에는 스토어를 구현하는 세가지 기본 클래스인 Store, ReduceStore, MapStore

-	**Store** : 기본 스토어를 래핑하는 가장 간단한 래퍼, 보일러플레이트 코드를 쉽게 작성하게 도와줌

-	**ReduceStore** : 아주 특수한 종류의 스토어 , reduce 함수를 이용해 자체 상태를 수정 Reducer 는 지정된 이전 상태와 액션을 기준으로 새로운 상태를 계산하는 함수로 Array.prototype.reduce 와 비슷하게 작동 RedcueStore 내의 상태는 변경불가로 취급해야 하므로 변경불가구조나 다음과 같은 항목만 저장

	-	단일 기본형 값(문자열, 부울값, 숫자)
	-	기본형 값의 배열  
	-	기본형 값의 객체( {num:'cassio',age:'28'})
	-	리액트 불변성 도우미를 이용해 조작할 중첩 객체를 포함하는 객체

-	**MapStore**: ReduceStore 의 변형으로서 단일 값이 아닌 키 값 쌍을 저장하는 추가 도우미 메서드를 포함

-	ReduceStore 와 MapStore : 변경 이벤트를 수동으로 방출할 필요가 없음.(발송 전후 상태를 비교하고 변경이벤트를 방출하는 작업이 자동처리 )
