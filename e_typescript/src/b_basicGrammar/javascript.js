let message = "hello";

console.log(message.toUpperCase);

message();
// 컴파일 시점 오류 발생이 나지 않음
// 실행 시켜야 오류남 TypeError: message is not a function
