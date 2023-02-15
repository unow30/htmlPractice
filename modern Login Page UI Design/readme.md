# scss에 대해서
참조링크 https://heropy.blog/2018/01/31/sass/
## 전처리기 CSS Preprocessor 란?
scss는 css 전처리기로 css가 동작하기 전에 사용하는 기능으로, css의 불편함을 해결해주는 확장 기능이다.
웹에서는 css만 동작하기 때문에 그냥 전처리기를 실행시킬 수는 없다. 전처리기로 작성하고 css로 컴파일해서 동작시킨다.

## node-sass 설치
여러 전처리기 중 하나이다.
npm install -g node-sass로 전역설치를 한다.

## node-sass 사용법
컴파일하려는 파일의 경로와 컴파일된 파일이 저장될 경로를 설정한다. "node-sass[옵션]<입력파일경로>[출력파일경로]"
ex: node-sass scss/main.scss public/main.css

여러 출력 경로를 설정할 수 있다.
ex: node-sass scss/main.scss public/main.css dist/style.css

--watch 혹은 -w를 입력하면 런타임 중 파일을 감시하여 저장 시 자동으로 변경 사항을컴파일 한다.
node-sass --watch scss/main.scss public/main.css

## 적용하기
현재 폴더에서 다음과 같이 cli를 입력함
node-sass style.scss style.css
그러자 style.css가 생성되었다. 해당 css를     <link rel="stylesheet" href="style.css"> 이렇게 적용하였다.
scss파일 자체를 직접 적용할 수 없을까? 영상에선 href="style.scss"로 입력해서 작동하던데 => 컴파일된 style.css를 이용한다.

## live sass compiler 확장 프로그램을 설치해도 된다.
설치 후 아래 watch sass만 눌러도 style.css, style.css.map이 생성된다. watching중에도 scss를 변경하면 style.css가 자동으로 변경한다. *style.css를 직접 변경해선 안된다.





