export type Path<T> = T extends object
  ? {
      [K in keyof T]: K extends string | number
        ? `${K}` | `${K}.${Path<T[K]>}`
        : never;
    }[keyof T]
  : never;

export type FieldType<
  T,
  P extends Path<T>
> = P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? Rest extends Path<T[K]>
      ? FieldType<T[K], Rest>
      : never
    : never
  : P extends keyof T
  ? T[P]
  : never;

export type MutuallyExclude<T, E extends keyof T = keyof T> =
  | {
      [K in E]: { [P in K]: T[P] } & Omit<T, E> & {
          [P in Exclude<E, K>]?: never;
        } extends infer O
        ? { [P in keyof O]: O[P] }
        : never;
    }[E]
  | ({ [K in E]?: never } & Omit<T, E>);