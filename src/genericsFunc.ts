function returnType<T>(value: T): T {
  return value;
}

console.log(returnType<number>(100));
console.log(returnType<string>("abdullah"));
console.log(returnType<boolean>(true));
console.log(returnType<number[]>([1, 2, 3, 4]));
