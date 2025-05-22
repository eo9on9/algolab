/**
 * 대부분의 JS 엔진에서는 for 가 reduce 보다 약간 더 빠름
 * (reduce는 함수 호출과 스코프 관리 비용이 있기 때문에)
 */

function testForLoop(numbers: number[]): number {
  const start = performance.now();
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const end = performance.now();
  console.log(`for loop time: ${(end - start).toFixed(3)} ms`);
  return sum;
}

function testReduce(numbers: number[]): number {
  const start = performance.now();
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  const end = performance.now();
  console.log(`reduce time: ${(end - start).toFixed(3)} ms`);
  return sum;
}

// 큰 배열 생성
const SIZE = 10_000_000;
const numbers = Array.from({ length: SIZE }, (_, i) => i);

// 실행
console.log(`\nRunning test with ${SIZE.toLocaleString()} elements...\n`);
const forSum = testForLoop(numbers);
const reduceSum = testReduce(numbers);

console.log(`\nfor sum: ${forSum}`);
console.log(`reduce sum: ${reduceSum}`);