자바스크립트는 어느 위치든 사용 가능하다. 
자바스크립트의 실행은 위에서 아래로 실행된다. 절차지향 방식이지만
상속, 다형성, 생성자 같은 객체지향 언어의 특징도 가지고 있다.

Inline, Internal, External 방식의 사용
HTML 파일 내에 선언하는 Internal 태그사용
HTML 파일 내에 선언하는 Inline 태그사용안함
외부파일로 분리해서 사용하는 External 방식

데이터 출력
<script type="text/javascript">
  document.write("hello world");
  alert("hello~!");
  document.body.innerHTML += "helloooo";
  console.log("heeeelloo");
</script>

데이터 입력
<script type="text/javascript">
  window.onload = function(){ //body태그 위에서 사용할 때
    document.body.innerHTML += 
    (confirm("당신은 남자입니까?")?"남":"여")+"탕으로 가시오.";
  }  
</script>
