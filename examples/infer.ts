function fn(value: number): number {
  return value * value;
}

// достаем параметры функции (аналог utility type Parameters)
type myParameters<T> = T extends (arg: infer A) => any ? A : never;

// достаем возвращаемое значение функции (аналог utility type ReturnType)
type myReturnType<T> = T extends () => infer A ? A : never;
