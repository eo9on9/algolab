/**
 * if + if: 항상 2번 실행으로 두 조건 모두 평가
 * if + else if: 첫 조건이 참이면 두 번째 조건은 건너뜀
 * 
 * 되도록 if + else if를 쓰자!
 */

const N: number = 1_000_000;
const LOOP: number = 10;

let totalIfIf: number = 0;
let totalElseIf: number = 0;

for (let run = 0; run < LOOP; run++) {
  const a: number[] = Array.from({ length: N }, () => Math.floor(Math.random() * 100));
  const b: number[] = Array.from({ length: N }, () => Math.floor(Math.random() * 100));

  let pointA1 = 0, pointB1 = 0;
  const t1 = performance.now();
  for (let i = 0; i < N; i++) {
    if (a[i] > b[i]) pointA1++;
    if (b[i] > a[i]) pointB1++;
  }
  totalIfIf += performance.now() - t1;

  let pointA2 = 0, pointB2 = 0;
  const t2 = performance.now();
  for (let i = 0; i < N; i++) {
    if (a[i] > b[i]) {
      pointA2++;
    } else if (b[i] > a[i]) {
      pointB2++;
    }
  }
  totalElseIf += performance.now() - t2;
}

console.log(`if-if avg: ${(totalIfIf / LOOP).toFixed(3)} ms`);
console.log(`if-else-if avg: ${(totalElseIf / LOOP).toFixed(3)} ms`);