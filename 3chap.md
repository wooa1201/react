컴포넌트를 이용한 애플리케이션 구축
===================================

속성 유효성 검사
----------------

![](https://image.slidesharecdn.com/react-w3c-html-kig-170125044932/95/react-demo-15-638.jpg?cb=1485320719)

```
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class Greeter extends Component {
  render() {
    return (
      <h1>{this.props.salutation}</h1>
    )
  }
}

Greeter.propTypes = {
  salutation: PropTypes.string.isRequired
}

Greeter.defaultProps = {
  salutation: "Hello World"
}

render(<Greeter salutation="Hello World" />, document.getElementById('root'));
```

> isRequired : 필수항목

### 속성 기본값

> defaultProps : 기본값 지정

### 기본 제공되는 propType 유효성 검사기

### 칸반앱 : 속성 형식 정의

### 커스텀 propType 유효성 검사기

```
import React, { Component, PropTypes } from 'react';
import marked from 'marked';
import CheckList from './CheckList' ;

let titlePropType = (props, propName, componentName) =>{
    if(props[propName]){
        let  value = props[propName] ;
        if(typeof value !== 'string' || value.length > 80){
            return new Error(
                 '${propName} in ${componentName} is longer then 80 characters '
              );
        }
    }
}

class Card extends Component{
     constructor(){ ....  }
     toggleDetails(){ .... }
     render(){ .... }    
  }

  Card.propTypes={
     id : PropTypes.number ,
     title : titlePropType ,
     description : PropTypes.string  ,
     color : PropTypes.string ,
     tasks : PropTypes.arrayOf(PropTypes.object )     
  };

  export default Card ;
```

컴퍼넌트 조합 전략과 모범 사례
------------------------------

### 상태 저장 컴퍼넌트와 순수 컴퍼넌트

-	**속성(Props)** : 컴포넌트 구성정보, 상위 컴포넌트로부터 받고 변경할수 없음
-	**상태(Stats)** : 컴포넌트 생산자에 정의된 기본값에서 시작해 여러차레 변경가능, 상태가 변경될 때마다 컴퍼넌트가 다시 렌더링

-	상태저장 컴포넌트 : 컴포넌트 상태를 관리

-	순수 컴포넌트 : 내부 상태가 없고 데이터를 표시 (속성을 받고 뷰에 렌더링 , 재사용 및 테스트 용이 )

앱의 컴포넌트 대부분 상태 비저장을 권고, 애플리케이션의 상태를 다수의 컴포넌트로 분산하면 관리하기 힘들고 작동방식을 확인하기 어려움

![](https://image.slidesharecdn.com/react-w3c-html-kig-170125044932/95/react-demo-16-638.jpg?cb=1485320719)

### 어떤 컴퍼넌트가 상태 저장이어야 할까?

```
(ex) ContactsApp : 주 컴포넌트
          SearchBar : 사용자가 연락처를 필터링 할 수 있게 입력 필드를 표시
          ContactList : 데이터를 대상으로 반복해 여러 ContactItem 생성
               ContactItem : 연락처 데이터를 표시
```

### 데이터 흐름과 컴퍼넌트 통신

컴퍼넌트 수명주기
-----------------

> 컴퍼넌트 수명주기의 특정시점에 자동으로 호출될 메서드를 선언 할수 있음
>
> 각 수명주기 메서드가 수행하는 역할과 호출되는 순서를 이해하면 컴포넌트가 생성, 삭제될때 특정한 작업을 수행( 속성,상태 변경에 적절하게 대응)

![ ](https://image.slidesharecdn.com/react-w3c-html-kig-170125044932/95/react-demo-17-638.jpg?cb=1485320719)

### 수명주기 단계와 메서드

![](https://github.com/CalyFactory/CalyFactory.github.io/blob/master/assets/img/refgjin/post7_flow.png?raw=true)

![](https://velopert.com/wp-content/uploads/2016/03/Screenshot-from-2016-12-10-00-21-26-1.png)

### 수명주기 함수의 실제 활용 : 데이터 가져오기

**컨테이너 컴포넌트** : 기존 컴포넌트에 데이터 가져오기 논리를 추가하는것이 아니고, 상태저장 컴포넌트를 새로 만든다.

(ex)ContactsApp + ContactsAppContainer 추가
