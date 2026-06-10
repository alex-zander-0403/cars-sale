// =============== asserts condition (простое утверждение), не изменяет тип

function assertNotNull(arg: unknown): asserts arg {
  if (arg === null || arg === undefined) {
    throw new Error("Arg is null or undefined");
  }
}

// =============== asserts value is Type (утверждение с сужением типа), изменяет тип

interface User {
  id: number;
  login: string;
}

function assertsInUser(data: any): asserts data is User {
  if (typeof data !== "object" || data === null) {
    throw new Error("data не объект!");
  }

  if (typeof data.id !== "number") {
    throw new Error("data.id не число!");
  }

  if (typeof data.login !== "string") {
    throw new Error("data.login не строка!");
  }
}
