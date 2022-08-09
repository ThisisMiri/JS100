// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

const n = prompt("입력하세요.");

const reverseString = n.split("").reverse().join("");

console.log(reverseString);
