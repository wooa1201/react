컴포넌트를 이용한 애플리케이션 구축
===================================

속성 유효성 검사
----------------

![](https://image.slidesharecdn.com/react-w3c-html-kig-170125044932/95/react-demo-15-638.jpg?cb=1485320719)

> isRequired : 필수항목

### 속성 기본값

> defaultProps : 기본값 지정

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

- ** 속성(Props)** : 컴포넌트 구성정보, 상위 컴포넌트로부터 받고 변경할수 없음
- ** 상태(Stats)** : 컴포넌트 생산자에 정의된 기본값에서 시작해 여러차레 변경가능, 상태가 변경될 때마다  컴퍼넌트가 다시 렌더링  

![](https://image.slidesharecdn.com/react-w3c-html-kig-170125044932/95/react-demo-16-638.jpg?cb=1485320719)

### 어떤 컴퍼넌트가 상태 저장이어야 할까? 


### 데이터 흐름과 컴퍼넌트 통신

컴퍼넌트 수명주기

![](https://image.slidesharecdn.com/react-w3c-html-kig-170125044932/95/react-demo-17-638.jpg?cb=1485320719)
-----------------------------------------------------------------------------------------------------------

### 수명주기 단계와 메서드

### 수명주기 함수의 실제 활용 : 데이터 가져오기
