
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Staff
 * 
 */
export type Staff = $Result.DefaultSelection<Prisma.$StaffPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Items
 * 
 */
export type Items = $Result.DefaultSelection<Prisma.$ItemsPayload>
/**
 * Model Charity
 * 
 */
export type Charity = $Result.DefaultSelection<Prisma.$CharityPayload>
/**
 * Model Fumes
 * 
 */
export type Fumes = $Result.DefaultSelection<Prisma.$FumesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Times: {
  Morning: 'Morning',
  Afternoon: 'Afternoon',
  Evening: 'Evening'
};

export type Times = (typeof Times)[keyof typeof Times]


export const Size: {
  XS: 'XS',
  S: 'S',
  M: 'M',
  L: 'L',
  XL: 'XL',
  XXL: 'XXL',
  XXXL: 'XXXL'
};

export type Size = (typeof Size)[keyof typeof Size]


export const Condition: {
  New: 'New',
  LikeNew: 'LikeNew',
  Worn: 'Worn',
  HeavilyWorn: 'HeavilyWorn'
};

export type Condition = (typeof Condition)[keyof typeof Condition]


export const Role: {
  USER: 'USER',
  STAFF: 'STAFF',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Times = $Enums.Times

export const Times: typeof $Enums.Times

export type Size = $Enums.Size

export const Size: typeof $Enums.Size

export type Condition = $Enums.Condition

export const Condition: typeof $Enums.Condition

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.items`: Exposes CRUD operations for the **Items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.items.findMany()
    * ```
    */
  get items(): Prisma.ItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.charity`: Exposes CRUD operations for the **Charity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Charities
    * const charities = await prisma.charity.findMany()
    * ```
    */
  get charity(): Prisma.CharityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fumes`: Exposes CRUD operations for the **Fumes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fumes
    * const fumes = await prisma.fumes.findMany()
    * ```
    */
  get fumes(): Prisma.FumesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Staff: 'Staff',
    Admin: 'Admin',
    Items: 'Items',
    Charity: 'Charity',
    Fumes: 'Fumes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "staff" | "admin" | "items" | "charity" | "fumes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Staff: {
        payload: Prisma.$StaffPayload<ExtArgs>
        fields: Prisma.StaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findFirst: {
            args: Prisma.StaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findMany: {
            args: Prisma.StaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          create: {
            args: Prisma.StaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          createMany: {
            args: Prisma.StaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          delete: {
            args: Prisma.StaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          update: {
            args: Prisma.StaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          deleteMany: {
            args: Prisma.StaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          upsert: {
            args: Prisma.StaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.StaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Items: {
        payload: Prisma.$ItemsPayload<ExtArgs>
        fields: Prisma.ItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          findFirst: {
            args: Prisma.ItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          findMany: {
            args: Prisma.ItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>[]
          }
          create: {
            args: Prisma.ItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          createMany: {
            args: Prisma.ItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>[]
          }
          delete: {
            args: Prisma.ItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          update: {
            args: Prisma.ItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          deleteMany: {
            args: Prisma.ItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>[]
          }
          upsert: {
            args: Prisma.ItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          aggregate: {
            args: Prisma.ItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItems>
          }
          groupBy: {
            args: Prisma.ItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemsCountArgs<ExtArgs>
            result: $Utils.Optional<ItemsCountAggregateOutputType> | number
          }
        }
      }
      Charity: {
        payload: Prisma.$CharityPayload<ExtArgs>
        fields: Prisma.CharityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>
          }
          findFirst: {
            args: Prisma.CharityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>
          }
          findMany: {
            args: Prisma.CharityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>[]
          }
          create: {
            args: Prisma.CharityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>
          }
          createMany: {
            args: Prisma.CharityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>[]
          }
          delete: {
            args: Prisma.CharityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>
          }
          update: {
            args: Prisma.CharityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>
          }
          deleteMany: {
            args: Prisma.CharityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>[]
          }
          upsert: {
            args: Prisma.CharityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>
          }
          aggregate: {
            args: Prisma.CharityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharity>
          }
          groupBy: {
            args: Prisma.CharityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharityCountArgs<ExtArgs>
            result: $Utils.Optional<CharityCountAggregateOutputType> | number
          }
        }
      }
      Fumes: {
        payload: Prisma.$FumesPayload<ExtArgs>
        fields: Prisma.FumesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FumesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FumesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FumesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FumesPayload>
          }
          findFirst: {
            args: Prisma.FumesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FumesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FumesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FumesPayload>
          }
          findMany: {
            args: Prisma.FumesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FumesPayload>[]
          }
          create: {
            args: Prisma.FumesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FumesPayload>
          }
          createMany: {
            args: Prisma.FumesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FumesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FumesPayload>[]
          }
          delete: {
            args: Prisma.FumesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FumesPayload>
          }
          update: {
            args: Prisma.FumesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FumesPayload>
          }
          deleteMany: {
            args: Prisma.FumesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FumesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FumesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FumesPayload>[]
          }
          upsert: {
            args: Prisma.FumesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FumesPayload>
          }
          aggregate: {
            args: Prisma.FumesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFumes>
          }
          groupBy: {
            args: Prisma.FumesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FumesGroupByOutputType>[]
          }
          count: {
            args: Prisma.FumesCountArgs<ExtArgs>
            result: $Utils.Optional<FumesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    staff?: StaffOmit
    admin?: AdminOmit
    items?: ItemsOmit
    charity?: CharityOmit
    fumes?: FumesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Staff: number
    Admin: number
    Items: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Staff?: boolean | UserCountOutputTypeCountStaffArgs
    Admin?: boolean | UserCountOutputTypeCountAdminArgs
    Items?: boolean | UserCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemsWhereInput
  }


  /**
   * Count Type CharityCountOutputType
   */

  export type CharityCountOutputType = {
    Staff: number
    Items: number
  }

  export type CharityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Staff?: boolean | CharityCountOutputTypeCountStaffArgs
    Items?: boolean | CharityCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CharityCountOutputType without action
   */
  export type CharityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharityCountOutputType
     */
    select?: CharityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharityCountOutputType without action
   */
  export type CharityCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
  }

  /**
   * CharityCountOutputType without action
   */
  export type CharityCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    User_ID: number | null
  }

  export type UserSumAggregateOutputType = {
    User_ID: number | null
  }

  export type UserMinAggregateOutputType = {
    User_ID: number | null
    Username: string | null
    Email: string | null
    Phone: string | null
    Password: string | null
    Address: string | null
    Postcode: string | null
  }

  export type UserMaxAggregateOutputType = {
    User_ID: number | null
    Username: string | null
    Email: string | null
    Phone: string | null
    Password: string | null
    Address: string | null
    Postcode: string | null
  }

  export type UserCountAggregateOutputType = {
    User_ID: number
    Username: number
    Email: number
    Phone: number
    Password: number
    Address: number
    Postcode: number
    Role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    User_ID?: true
  }

  export type UserSumAggregateInputType = {
    User_ID?: true
  }

  export type UserMinAggregateInputType = {
    User_ID?: true
    Username?: true
    Email?: true
    Phone?: true
    Password?: true
    Address?: true
    Postcode?: true
  }

  export type UserMaxAggregateInputType = {
    User_ID?: true
    Username?: true
    Email?: true
    Phone?: true
    Password?: true
    Address?: true
    Postcode?: true
  }

  export type UserCountAggregateInputType = {
    User_ID?: true
    Username?: true
    Email?: true
    Phone?: true
    Password?: true
    Address?: true
    Postcode?: true
    Role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    User_ID: number
    Username: string
    Email: string
    Phone: string | null
    Password: string
    Address: string
    Postcode: string
    Role: $Enums.Role[]
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    User_ID?: boolean
    Username?: boolean
    Email?: boolean
    Phone?: boolean
    Password?: boolean
    Address?: boolean
    Postcode?: boolean
    Role?: boolean
    Staff?: boolean | User$StaffArgs<ExtArgs>
    Admin?: boolean | User$AdminArgs<ExtArgs>
    Items?: boolean | User$ItemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    User_ID?: boolean
    Username?: boolean
    Email?: boolean
    Phone?: boolean
    Password?: boolean
    Address?: boolean
    Postcode?: boolean
    Role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    User_ID?: boolean
    Username?: boolean
    Email?: boolean
    Phone?: boolean
    Password?: boolean
    Address?: boolean
    Postcode?: boolean
    Role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    User_ID?: boolean
    Username?: boolean
    Email?: boolean
    Phone?: boolean
    Password?: boolean
    Address?: boolean
    Postcode?: boolean
    Role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"User_ID" | "Username" | "Email" | "Phone" | "Password" | "Address" | "Postcode" | "Role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Staff?: boolean | User$StaffArgs<ExtArgs>
    Admin?: boolean | User$AdminArgs<ExtArgs>
    Items?: boolean | User$ItemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Staff: Prisma.$StaffPayload<ExtArgs>[]
      Admin: Prisma.$AdminPayload<ExtArgs>[]
      Items: Prisma.$ItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      User_ID: number
      Username: string
      Email: string
      Phone: string | null
      Password: string
      Address: string
      Postcode: string
      Role: $Enums.Role[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `User_ID`
     * const userWithUser_IDOnly = await prisma.user.findMany({ select: { User_ID: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `User_ID`
     * const userWithUser_IDOnly = await prisma.user.createManyAndReturn({
     *   select: { User_ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `User_ID`
     * const userWithUser_IDOnly = await prisma.user.updateManyAndReturn({
     *   select: { User_ID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Staff<T extends User$StaffArgs<ExtArgs> = {}>(args?: Subset<T, User$StaffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Admin<T extends User$AdminArgs<ExtArgs> = {}>(args?: Subset<T, User$AdminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Items<T extends User$ItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$ItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly User_ID: FieldRef<"User", 'Int'>
    readonly Username: FieldRef<"User", 'String'>
    readonly Email: FieldRef<"User", 'String'>
    readonly Phone: FieldRef<"User", 'String'>
    readonly Password: FieldRef<"User", 'String'>
    readonly Address: FieldRef<"User", 'String'>
    readonly Postcode: FieldRef<"User", 'String'>
    readonly Role: FieldRef<"User", 'Role[]'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Staff
   */
  export type User$StaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    cursor?: StaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * User.Admin
   */
  export type User$AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    cursor?: AdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * User.Items
   */
  export type User$ItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    where?: ItemsWhereInput
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    cursor?: ItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffAvgAggregateOutputType = {
    Staff_ID: number | null
    User_ID: number | null
    Charity_ID: number | null
  }

  export type StaffSumAggregateOutputType = {
    Staff_ID: number | null
    User_ID: number | null
    Charity_ID: number | null
  }

  export type StaffMinAggregateOutputType = {
    Staff_ID: number | null
    User_ID: number | null
    Charity_ID: number | null
  }

  export type StaffMaxAggregateOutputType = {
    Staff_ID: number | null
    User_ID: number | null
    Charity_ID: number | null
  }

  export type StaffCountAggregateOutputType = {
    Staff_ID: number
    User_ID: number
    Charity_ID: number
    _all: number
  }


  export type StaffAvgAggregateInputType = {
    Staff_ID?: true
    User_ID?: true
    Charity_ID?: true
  }

  export type StaffSumAggregateInputType = {
    Staff_ID?: true
    User_ID?: true
    Charity_ID?: true
  }

  export type StaffMinAggregateInputType = {
    Staff_ID?: true
    User_ID?: true
    Charity_ID?: true
  }

  export type StaffMaxAggregateInputType = {
    Staff_ID?: true
    User_ID?: true
    Charity_ID?: true
  }

  export type StaffCountAggregateInputType = {
    Staff_ID?: true
    User_ID?: true
    Charity_ID?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to aggregate.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithAggregationInput | StaffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: StaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _avg?: StaffAvgAggregateInputType
    _sum?: StaffSumAggregateInputType
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    Staff_ID: number
    User_ID: number
    Charity_ID: number
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Staff_ID?: boolean
    User_ID?: boolean
    Charity_ID?: boolean
    Donor?: boolean | UserDefaultArgs<ExtArgs>
    Charity?: boolean | CharityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Staff_ID?: boolean
    User_ID?: boolean
    Charity_ID?: boolean
    Donor?: boolean | UserDefaultArgs<ExtArgs>
    Charity?: boolean | CharityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Staff_ID?: boolean
    User_ID?: boolean
    Charity_ID?: boolean
    Donor?: boolean | UserDefaultArgs<ExtArgs>
    Charity?: boolean | CharityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectScalar = {
    Staff_ID?: boolean
    User_ID?: boolean
    Charity_ID?: boolean
  }

  export type StaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Staff_ID" | "User_ID" | "Charity_ID", ExtArgs["result"]["staff"]>
  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Donor?: boolean | UserDefaultArgs<ExtArgs>
    Charity?: boolean | CharityDefaultArgs<ExtArgs>
  }
  export type StaffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Donor?: boolean | UserDefaultArgs<ExtArgs>
    Charity?: boolean | CharityDefaultArgs<ExtArgs>
  }
  export type StaffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Donor?: boolean | UserDefaultArgs<ExtArgs>
    Charity?: boolean | CharityDefaultArgs<ExtArgs>
  }

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      Donor: Prisma.$UserPayload<ExtArgs>
      Charity: Prisma.$CharityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Staff_ID: number
      User_ID: number
      Charity_ID: number
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type StaffGetPayload<S extends boolean | null | undefined | StaffDefaultArgs> = $Result.GetResult<Prisma.$StaffPayload, S>

  type StaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface StaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff'], meta: { name: 'Staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFindUniqueArgs>(args: SelectSubset<T, StaffFindUniqueArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFindFirstArgs>(args?: SelectSubset<T, StaffFindFirstArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `Staff_ID`
     * const staffWithStaff_IDOnly = await prisma.staff.findMany({ select: { Staff_ID: true } })
     * 
     */
    findMany<T extends StaffFindManyArgs>(args?: SelectSubset<T, StaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends StaffCreateArgs>(args: SelectSubset<T, StaffCreateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Staff.
     * @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffCreateManyArgs>(args?: SelectSubset<T, StaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff and returns the data saved in the database.
     * @param {StaffCreateManyAndReturnArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff and only return the `Staff_ID`
     * const staffWithStaff_IDOnly = await prisma.staff.createManyAndReturn({
     *   select: { Staff_ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends StaffDeleteArgs>(args: SelectSubset<T, StaffDeleteArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUpdateArgs>(args: SelectSubset<T, StaffUpdateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffDeleteManyArgs>(args?: SelectSubset<T, StaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUpdateManyArgs>(args: SelectSubset<T, StaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff and returns the data updated in the database.
     * @param {StaffUpdateManyAndReturnArgs} args - Arguments to update many Staff.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staff and only return the `Staff_ID`
     * const staffWithStaff_IDOnly = await prisma.staff.updateManyAndReturn({
     *   select: { Staff_ID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaffUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends StaffUpsertArgs>(args: SelectSubset<T, StaffUpsertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff model
   */
  readonly fields: StaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Donor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Charity<T extends CharityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharityDefaultArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Staff model
   */ 
  interface StaffFieldRefs {
    readonly Staff_ID: FieldRef<"Staff", 'Int'>
    readonly User_ID: FieldRef<"Staff", 'Int'>
    readonly Charity_ID: FieldRef<"Staff", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findMany
   */
  export type StaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff create
   */
  export type StaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to create a Staff.
     */
    data: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }

  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff createManyAndReturn
   */
  export type StaffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff update
   */
  export type StaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to update a Staff.
     */
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff updateManyAndReturn
   */
  export type StaffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff upsert
   */
  export type StaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The filter to search for the Staff to update in case it exists.
     */
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     */
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }

  /**
   * Staff delete
   */
  export type StaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter which Staff to delete.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to delete
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to delete.
     */
    limit?: number
  }

  /**
   * Staff without action
   */
  export type StaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    Admin_ID: number | null
    User_ID: number | null
  }

  export type AdminSumAggregateOutputType = {
    Admin_ID: number | null
    User_ID: number | null
  }

  export type AdminMinAggregateOutputType = {
    Admin_ID: number | null
    User_ID: number | null
  }

  export type AdminMaxAggregateOutputType = {
    Admin_ID: number | null
    User_ID: number | null
  }

  export type AdminCountAggregateOutputType = {
    Admin_ID: number
    User_ID: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    Admin_ID?: true
    User_ID?: true
  }

  export type AdminSumAggregateInputType = {
    Admin_ID?: true
    User_ID?: true
  }

  export type AdminMinAggregateInputType = {
    Admin_ID?: true
    User_ID?: true
  }

  export type AdminMaxAggregateInputType = {
    Admin_ID?: true
    User_ID?: true
  }

  export type AdminCountAggregateInputType = {
    Admin_ID?: true
    User_ID?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    Admin_ID: number
    User_ID: number
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Admin_ID?: boolean
    User_ID?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Admin_ID?: boolean
    User_ID?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Admin_ID?: boolean
    User_ID?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    Admin_ID?: boolean
    User_ID?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Admin_ID" | "User_ID", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Admin_ID: number
      User_ID: number
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `Admin_ID`
     * const adminWithAdmin_IDOnly = await prisma.admin.findMany({ select: { Admin_ID: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `Admin_ID`
     * const adminWithAdmin_IDOnly = await prisma.admin.createManyAndReturn({
     *   select: { Admin_ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `Admin_ID`
     * const adminWithAdmin_IDOnly = await prisma.admin.updateManyAndReturn({
     *   select: { Admin_ID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly Admin_ID: FieldRef<"Admin", 'Int'>
    readonly User_ID: FieldRef<"Admin", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Items
   */

  export type AggregateItems = {
    _count: ItemsCountAggregateOutputType | null
    _avg: ItemsAvgAggregateOutputType | null
    _sum: ItemsSumAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  export type ItemsAvgAggregateOutputType = {
    Item_No: number | null
    Donor_ID: number | null
    Charity_ID: number | null
  }

  export type ItemsSumAggregateOutputType = {
    Item_No: number | null
    Donor_ID: number | null
    Charity_ID: number | null
  }

  export type ItemsMinAggregateOutputType = {
    Item_No: number | null
    Item_Name: string | null
    Brand: string | null
    Colour: string | null
    Image: string | null
    Pickup_Date: Date | null
    Distributed: boolean | null
    Donor_ID: number | null
    Charity_ID: number | null
    Date_Added: Date | null
  }

  export type ItemsMaxAggregateOutputType = {
    Item_No: number | null
    Item_Name: string | null
    Brand: string | null
    Colour: string | null
    Image: string | null
    Pickup_Date: Date | null
    Distributed: boolean | null
    Donor_ID: number | null
    Charity_ID: number | null
    Date_Added: Date | null
  }

  export type ItemsCountAggregateOutputType = {
    Item_No: number
    Item_Name: number
    Brand: number
    Size: number
    Colour: number
    Condition: number
    Image: number
    Time: number
    Pickup_Date: number
    Distributed: number
    Donor_ID: number
    Charity_ID: number
    Date_Added: number
    _all: number
  }


  export type ItemsAvgAggregateInputType = {
    Item_No?: true
    Donor_ID?: true
    Charity_ID?: true
  }

  export type ItemsSumAggregateInputType = {
    Item_No?: true
    Donor_ID?: true
    Charity_ID?: true
  }

  export type ItemsMinAggregateInputType = {
    Item_No?: true
    Item_Name?: true
    Brand?: true
    Colour?: true
    Image?: true
    Pickup_Date?: true
    Distributed?: true
    Donor_ID?: true
    Charity_ID?: true
    Date_Added?: true
  }

  export type ItemsMaxAggregateInputType = {
    Item_No?: true
    Item_Name?: true
    Brand?: true
    Colour?: true
    Image?: true
    Pickup_Date?: true
    Distributed?: true
    Donor_ID?: true
    Charity_ID?: true
    Date_Added?: true
  }

  export type ItemsCountAggregateInputType = {
    Item_No?: true
    Item_Name?: true
    Brand?: true
    Size?: true
    Colour?: true
    Condition?: true
    Image?: true
    Time?: true
    Pickup_Date?: true
    Distributed?: true
    Donor_ID?: true
    Charity_ID?: true
    Date_Added?: true
    _all?: true
  }

  export type ItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to aggregate.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemsMaxAggregateInputType
  }

  export type GetItemsAggregateType<T extends ItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItems[P]>
      : GetScalarType<T[P], AggregateItems[P]>
  }




  export type ItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemsWhereInput
    orderBy?: ItemsOrderByWithAggregationInput | ItemsOrderByWithAggregationInput[]
    by: ItemsScalarFieldEnum[] | ItemsScalarFieldEnum
    having?: ItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemsCountAggregateInputType | true
    _avg?: ItemsAvgAggregateInputType
    _sum?: ItemsSumAggregateInputType
    _min?: ItemsMinAggregateInputType
    _max?: ItemsMaxAggregateInputType
  }

  export type ItemsGroupByOutputType = {
    Item_No: number
    Item_Name: string
    Brand: string
    Size: $Enums.Size[]
    Colour: string
    Condition: $Enums.Condition[]
    Image: string
    Time: $Enums.Times[]
    Pickup_Date: Date
    Distributed: boolean
    Donor_ID: number
    Charity_ID: number
    Date_Added: Date
    _count: ItemsCountAggregateOutputType | null
    _avg: ItemsAvgAggregateOutputType | null
    _sum: ItemsSumAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  type GetItemsGroupByPayload<T extends ItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemsGroupByOutputType[P]>
            : GetScalarType<T[P], ItemsGroupByOutputType[P]>
        }
      >
    >


  export type ItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Item_No?: boolean
    Item_Name?: boolean
    Brand?: boolean
    Size?: boolean
    Colour?: boolean
    Condition?: boolean
    Image?: boolean
    Time?: boolean
    Pickup_Date?: boolean
    Distributed?: boolean
    Donor_ID?: boolean
    Charity_ID?: boolean
    Date_Added?: boolean
    Donor?: boolean | UserDefaultArgs<ExtArgs>
    Charity?: boolean | CharityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["items"]>

  export type ItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Item_No?: boolean
    Item_Name?: boolean
    Brand?: boolean
    Size?: boolean
    Colour?: boolean
    Condition?: boolean
    Image?: boolean
    Time?: boolean
    Pickup_Date?: boolean
    Distributed?: boolean
    Donor_ID?: boolean
    Charity_ID?: boolean
    Date_Added?: boolean
    Donor?: boolean | UserDefaultArgs<ExtArgs>
    Charity?: boolean | CharityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["items"]>

  export type ItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Item_No?: boolean
    Item_Name?: boolean
    Brand?: boolean
    Size?: boolean
    Colour?: boolean
    Condition?: boolean
    Image?: boolean
    Time?: boolean
    Pickup_Date?: boolean
    Distributed?: boolean
    Donor_ID?: boolean
    Charity_ID?: boolean
    Date_Added?: boolean
    Donor?: boolean | UserDefaultArgs<ExtArgs>
    Charity?: boolean | CharityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["items"]>

  export type ItemsSelectScalar = {
    Item_No?: boolean
    Item_Name?: boolean
    Brand?: boolean
    Size?: boolean
    Colour?: boolean
    Condition?: boolean
    Image?: boolean
    Time?: boolean
    Pickup_Date?: boolean
    Distributed?: boolean
    Donor_ID?: boolean
    Charity_ID?: boolean
    Date_Added?: boolean
  }

  export type ItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Item_No" | "Item_Name" | "Brand" | "Size" | "Colour" | "Condition" | "Image" | "Time" | "Pickup_Date" | "Distributed" | "Donor_ID" | "Charity_ID" | "Date_Added", ExtArgs["result"]["items"]>
  export type ItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Donor?: boolean | UserDefaultArgs<ExtArgs>
    Charity?: boolean | CharityDefaultArgs<ExtArgs>
  }
  export type ItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Donor?: boolean | UserDefaultArgs<ExtArgs>
    Charity?: boolean | CharityDefaultArgs<ExtArgs>
  }
  export type ItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Donor?: boolean | UserDefaultArgs<ExtArgs>
    Charity?: boolean | CharityDefaultArgs<ExtArgs>
  }

  export type $ItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Items"
    objects: {
      Donor: Prisma.$UserPayload<ExtArgs>
      Charity: Prisma.$CharityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Item_No: number
      Item_Name: string
      Brand: string
      Size: $Enums.Size[]
      Colour: string
      Condition: $Enums.Condition[]
      Image: string
      Time: $Enums.Times[]
      Pickup_Date: Date
      Distributed: boolean
      Donor_ID: number
      Charity_ID: number
      Date_Added: Date
    }, ExtArgs["result"]["items"]>
    composites: {}
  }

  type ItemsGetPayload<S extends boolean | null | undefined | ItemsDefaultArgs> = $Result.GetResult<Prisma.$ItemsPayload, S>

  type ItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemsCountAggregateInputType | true
    }

  export interface ItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Items'], meta: { name: 'Items' } }
    /**
     * Find zero or one Items that matches the filter.
     * @param {ItemsFindUniqueArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemsFindUniqueArgs>(args: SelectSubset<T, ItemsFindUniqueArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemsFindUniqueOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindFirstArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemsFindFirstArgs>(args?: SelectSubset<T, ItemsFindFirstArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindFirstOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.items.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.items.findMany({ take: 10 })
     * 
     * // Only select the `Item_No`
     * const itemsWithItem_NoOnly = await prisma.items.findMany({ select: { Item_No: true } })
     * 
     */
    findMany<T extends ItemsFindManyArgs>(args?: SelectSubset<T, ItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Items.
     * @param {ItemsCreateArgs} args - Arguments to create a Items.
     * @example
     * // Create one Items
     * const Items = await prisma.items.create({
     *   data: {
     *     // ... data to create a Items
     *   }
     * })
     * 
     */
    create<T extends ItemsCreateArgs>(args: SelectSubset<T, ItemsCreateArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Items.
     * @param {ItemsCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const items = await prisma.items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemsCreateManyArgs>(args?: SelectSubset<T, ItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemsCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const items = await prisma.items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `Item_No`
     * const itemsWithItem_NoOnly = await prisma.items.createManyAndReturn({
     *   select: { Item_No: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Items.
     * @param {ItemsDeleteArgs} args - Arguments to delete one Items.
     * @example
     * // Delete one Items
     * const Items = await prisma.items.delete({
     *   where: {
     *     // ... filter to delete one Items
     *   }
     * })
     * 
     */
    delete<T extends ItemsDeleteArgs>(args: SelectSubset<T, ItemsDeleteArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Items.
     * @param {ItemsUpdateArgs} args - Arguments to update one Items.
     * @example
     * // Update one Items
     * const items = await prisma.items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemsUpdateArgs>(args: SelectSubset<T, ItemsUpdateArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemsDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemsDeleteManyArgs>(args?: SelectSubset<T, ItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const items = await prisma.items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemsUpdateManyArgs>(args: SelectSubset<T, ItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemsUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const items = await prisma.items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `Item_No`
     * const itemsWithItem_NoOnly = await prisma.items.updateManyAndReturn({
     *   select: { Item_No: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Items.
     * @param {ItemsUpsertArgs} args - Arguments to update or create a Items.
     * @example
     * // Update or create a Items
     * const items = await prisma.items.upsert({
     *   create: {
     *     // ... data to create a Items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Items we want to update
     *   }
     * })
     */
    upsert<T extends ItemsUpsertArgs>(args: SelectSubset<T, ItemsUpsertArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.items.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemsCountArgs>(
      args?: Subset<T, ItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemsAggregateArgs>(args: Subset<T, ItemsAggregateArgs>): Prisma.PrismaPromise<GetItemsAggregateType<T>>

    /**
     * Group by Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemsGroupByArgs['orderBy'] }
        : { orderBy?: ItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Items model
   */
  readonly fields: ItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Donor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Charity<T extends CharityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharityDefaultArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Items model
   */ 
  interface ItemsFieldRefs {
    readonly Item_No: FieldRef<"Items", 'Int'>
    readonly Item_Name: FieldRef<"Items", 'String'>
    readonly Brand: FieldRef<"Items", 'String'>
    readonly Size: FieldRef<"Items", 'Size[]'>
    readonly Colour: FieldRef<"Items", 'String'>
    readonly Condition: FieldRef<"Items", 'Condition[]'>
    readonly Image: FieldRef<"Items", 'String'>
    readonly Time: FieldRef<"Items", 'Times[]'>
    readonly Pickup_Date: FieldRef<"Items", 'DateTime'>
    readonly Distributed: FieldRef<"Items", 'Boolean'>
    readonly Donor_ID: FieldRef<"Items", 'Int'>
    readonly Charity_ID: FieldRef<"Items", 'Int'>
    readonly Date_Added: FieldRef<"Items", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Items findUnique
   */
  export type ItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items findUniqueOrThrow
   */
  export type ItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items findFirst
   */
  export type ItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * Items findFirstOrThrow
   */
  export type ItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * Items findMany
   */
  export type ItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * Items create
   */
  export type ItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a Items.
     */
    data: XOR<ItemsCreateInput, ItemsUncheckedCreateInput>
  }

  /**
   * Items createMany
   */
  export type ItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemsCreateManyInput | ItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Items createManyAndReturn
   */
  export type ItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemsCreateManyInput | ItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Items update
   */
  export type ItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a Items.
     */
    data: XOR<ItemsUpdateInput, ItemsUncheckedUpdateInput>
    /**
     * Choose, which Items to update.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items updateMany
   */
  export type ItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemsUpdateManyMutationInput, ItemsUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemsWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Items updateManyAndReturn
   */
  export type ItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemsUpdateManyMutationInput, ItemsUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemsWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Items upsert
   */
  export type ItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the Items to update in case it exists.
     */
    where: ItemsWhereUniqueInput
    /**
     * In case the Items found by the `where` argument doesn't exist, create a new Items with this data.
     */
    create: XOR<ItemsCreateInput, ItemsUncheckedCreateInput>
    /**
     * In case the Items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemsUpdateInput, ItemsUncheckedUpdateInput>
  }

  /**
   * Items delete
   */
  export type ItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter which Items to delete.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items deleteMany
   */
  export type ItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemsWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Items without action
   */
  export type ItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
  }


  /**
   * Model Charity
   */

  export type AggregateCharity = {
    _count: CharityCountAggregateOutputType | null
    _avg: CharityAvgAggregateOutputType | null
    _sum: CharitySumAggregateOutputType | null
    _min: CharityMinAggregateOutputType | null
    _max: CharityMaxAggregateOutputType | null
  }

  export type CharityAvgAggregateOutputType = {
    Charity_ID: number | null
  }

  export type CharitySumAggregateOutputType = {
    Charity_ID: number | null
  }

  export type CharityMinAggregateOutputType = {
    Charity_ID: number | null
    Charity_Name: string | null
    About: string | null
    Logo: string | null
  }

  export type CharityMaxAggregateOutputType = {
    Charity_ID: number | null
    Charity_Name: string | null
    About: string | null
    Logo: string | null
  }

  export type CharityCountAggregateOutputType = {
    Charity_ID: number
    Charity_Name: number
    About: number
    Logo: number
    _all: number
  }


  export type CharityAvgAggregateInputType = {
    Charity_ID?: true
  }

  export type CharitySumAggregateInputType = {
    Charity_ID?: true
  }

  export type CharityMinAggregateInputType = {
    Charity_ID?: true
    Charity_Name?: true
    About?: true
    Logo?: true
  }

  export type CharityMaxAggregateInputType = {
    Charity_ID?: true
    Charity_Name?: true
    About?: true
    Logo?: true
  }

  export type CharityCountAggregateInputType = {
    Charity_ID?: true
    Charity_Name?: true
    About?: true
    Logo?: true
    _all?: true
  }

  export type CharityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Charity to aggregate.
     */
    where?: CharityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charities to fetch.
     */
    orderBy?: CharityOrderByWithRelationInput | CharityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Charities
    **/
    _count?: true | CharityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharityMaxAggregateInputType
  }

  export type GetCharityAggregateType<T extends CharityAggregateArgs> = {
        [P in keyof T & keyof AggregateCharity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharity[P]>
      : GetScalarType<T[P], AggregateCharity[P]>
  }




  export type CharityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharityWhereInput
    orderBy?: CharityOrderByWithAggregationInput | CharityOrderByWithAggregationInput[]
    by: CharityScalarFieldEnum[] | CharityScalarFieldEnum
    having?: CharityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharityCountAggregateInputType | true
    _avg?: CharityAvgAggregateInputType
    _sum?: CharitySumAggregateInputType
    _min?: CharityMinAggregateInputType
    _max?: CharityMaxAggregateInputType
  }

  export type CharityGroupByOutputType = {
    Charity_ID: number
    Charity_Name: string
    About: string
    Logo: string
    _count: CharityCountAggregateOutputType | null
    _avg: CharityAvgAggregateOutputType | null
    _sum: CharitySumAggregateOutputType | null
    _min: CharityMinAggregateOutputType | null
    _max: CharityMaxAggregateOutputType | null
  }

  type GetCharityGroupByPayload<T extends CharityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharityGroupByOutputType[P]>
            : GetScalarType<T[P], CharityGroupByOutputType[P]>
        }
      >
    >


  export type CharitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Charity_ID?: boolean
    Charity_Name?: boolean
    About?: boolean
    Logo?: boolean
    Staff?: boolean | Charity$StaffArgs<ExtArgs>
    Items?: boolean | Charity$ItemsArgs<ExtArgs>
    _count?: boolean | CharityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["charity"]>

  export type CharitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Charity_ID?: boolean
    Charity_Name?: boolean
    About?: boolean
    Logo?: boolean
  }, ExtArgs["result"]["charity"]>

  export type CharitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Charity_ID?: boolean
    Charity_Name?: boolean
    About?: boolean
    Logo?: boolean
  }, ExtArgs["result"]["charity"]>

  export type CharitySelectScalar = {
    Charity_ID?: boolean
    Charity_Name?: boolean
    About?: boolean
    Logo?: boolean
  }

  export type CharityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Charity_ID" | "Charity_Name" | "About" | "Logo", ExtArgs["result"]["charity"]>
  export type CharityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Staff?: boolean | Charity$StaffArgs<ExtArgs>
    Items?: boolean | Charity$ItemsArgs<ExtArgs>
    _count?: boolean | CharityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CharityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CharityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CharityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Charity"
    objects: {
      Staff: Prisma.$StaffPayload<ExtArgs>[]
      Items: Prisma.$ItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Charity_ID: number
      Charity_Name: string
      About: string
      Logo: string
    }, ExtArgs["result"]["charity"]>
    composites: {}
  }

  type CharityGetPayload<S extends boolean | null | undefined | CharityDefaultArgs> = $Result.GetResult<Prisma.$CharityPayload, S>

  type CharityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharityCountAggregateInputType | true
    }

  export interface CharityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Charity'], meta: { name: 'Charity' } }
    /**
     * Find zero or one Charity that matches the filter.
     * @param {CharityFindUniqueArgs} args - Arguments to find a Charity
     * @example
     * // Get one Charity
     * const charity = await prisma.charity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharityFindUniqueArgs>(args: SelectSubset<T, CharityFindUniqueArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Charity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharityFindUniqueOrThrowArgs} args - Arguments to find a Charity
     * @example
     * // Get one Charity
     * const charity = await prisma.charity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharityFindUniqueOrThrowArgs>(args: SelectSubset<T, CharityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Charity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityFindFirstArgs} args - Arguments to find a Charity
     * @example
     * // Get one Charity
     * const charity = await prisma.charity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharityFindFirstArgs>(args?: SelectSubset<T, CharityFindFirstArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Charity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityFindFirstOrThrowArgs} args - Arguments to find a Charity
     * @example
     * // Get one Charity
     * const charity = await prisma.charity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharityFindFirstOrThrowArgs>(args?: SelectSubset<T, CharityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Charities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Charities
     * const charities = await prisma.charity.findMany()
     * 
     * // Get first 10 Charities
     * const charities = await prisma.charity.findMany({ take: 10 })
     * 
     * // Only select the `Charity_ID`
     * const charityWithCharity_IDOnly = await prisma.charity.findMany({ select: { Charity_ID: true } })
     * 
     */
    findMany<T extends CharityFindManyArgs>(args?: SelectSubset<T, CharityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Charity.
     * @param {CharityCreateArgs} args - Arguments to create a Charity.
     * @example
     * // Create one Charity
     * const Charity = await prisma.charity.create({
     *   data: {
     *     // ... data to create a Charity
     *   }
     * })
     * 
     */
    create<T extends CharityCreateArgs>(args: SelectSubset<T, CharityCreateArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Charities.
     * @param {CharityCreateManyArgs} args - Arguments to create many Charities.
     * @example
     * // Create many Charities
     * const charity = await prisma.charity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharityCreateManyArgs>(args?: SelectSubset<T, CharityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Charities and returns the data saved in the database.
     * @param {CharityCreateManyAndReturnArgs} args - Arguments to create many Charities.
     * @example
     * // Create many Charities
     * const charity = await prisma.charity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Charities and only return the `Charity_ID`
     * const charityWithCharity_IDOnly = await prisma.charity.createManyAndReturn({
     *   select: { Charity_ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharityCreateManyAndReturnArgs>(args?: SelectSubset<T, CharityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Charity.
     * @param {CharityDeleteArgs} args - Arguments to delete one Charity.
     * @example
     * // Delete one Charity
     * const Charity = await prisma.charity.delete({
     *   where: {
     *     // ... filter to delete one Charity
     *   }
     * })
     * 
     */
    delete<T extends CharityDeleteArgs>(args: SelectSubset<T, CharityDeleteArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Charity.
     * @param {CharityUpdateArgs} args - Arguments to update one Charity.
     * @example
     * // Update one Charity
     * const charity = await prisma.charity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharityUpdateArgs>(args: SelectSubset<T, CharityUpdateArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Charities.
     * @param {CharityDeleteManyArgs} args - Arguments to filter Charities to delete.
     * @example
     * // Delete a few Charities
     * const { count } = await prisma.charity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharityDeleteManyArgs>(args?: SelectSubset<T, CharityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Charities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Charities
     * const charity = await prisma.charity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharityUpdateManyArgs>(args: SelectSubset<T, CharityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Charities and returns the data updated in the database.
     * @param {CharityUpdateManyAndReturnArgs} args - Arguments to update many Charities.
     * @example
     * // Update many Charities
     * const charity = await prisma.charity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Charities and only return the `Charity_ID`
     * const charityWithCharity_IDOnly = await prisma.charity.updateManyAndReturn({
     *   select: { Charity_ID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CharityUpdateManyAndReturnArgs>(args: SelectSubset<T, CharityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Charity.
     * @param {CharityUpsertArgs} args - Arguments to update or create a Charity.
     * @example
     * // Update or create a Charity
     * const charity = await prisma.charity.upsert({
     *   create: {
     *     // ... data to create a Charity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Charity we want to update
     *   }
     * })
     */
    upsert<T extends CharityUpsertArgs>(args: SelectSubset<T, CharityUpsertArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Charities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityCountArgs} args - Arguments to filter Charities to count.
     * @example
     * // Count the number of Charities
     * const count = await prisma.charity.count({
     *   where: {
     *     // ... the filter for the Charities we want to count
     *   }
     * })
    **/
    count<T extends CharityCountArgs>(
      args?: Subset<T, CharityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Charity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharityAggregateArgs>(args: Subset<T, CharityAggregateArgs>): Prisma.PrismaPromise<GetCharityAggregateType<T>>

    /**
     * Group by Charity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharityGroupByArgs['orderBy'] }
        : { orderBy?: CharityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Charity model
   */
  readonly fields: CharityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Charity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Staff<T extends Charity$StaffArgs<ExtArgs> = {}>(args?: Subset<T, Charity$StaffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Items<T extends Charity$ItemsArgs<ExtArgs> = {}>(args?: Subset<T, Charity$ItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Charity model
   */ 
  interface CharityFieldRefs {
    readonly Charity_ID: FieldRef<"Charity", 'Int'>
    readonly Charity_Name: FieldRef<"Charity", 'String'>
    readonly About: FieldRef<"Charity", 'String'>
    readonly Logo: FieldRef<"Charity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Charity findUnique
   */
  export type CharityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * Filter, which Charity to fetch.
     */
    where: CharityWhereUniqueInput
  }

  /**
   * Charity findUniqueOrThrow
   */
  export type CharityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * Filter, which Charity to fetch.
     */
    where: CharityWhereUniqueInput
  }

  /**
   * Charity findFirst
   */
  export type CharityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * Filter, which Charity to fetch.
     */
    where?: CharityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charities to fetch.
     */
    orderBy?: CharityOrderByWithRelationInput | CharityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Charities.
     */
    cursor?: CharityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Charities.
     */
    distinct?: CharityScalarFieldEnum | CharityScalarFieldEnum[]
  }

  /**
   * Charity findFirstOrThrow
   */
  export type CharityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * Filter, which Charity to fetch.
     */
    where?: CharityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charities to fetch.
     */
    orderBy?: CharityOrderByWithRelationInput | CharityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Charities.
     */
    cursor?: CharityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Charities.
     */
    distinct?: CharityScalarFieldEnum | CharityScalarFieldEnum[]
  }

  /**
   * Charity findMany
   */
  export type CharityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * Filter, which Charities to fetch.
     */
    where?: CharityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charities to fetch.
     */
    orderBy?: CharityOrderByWithRelationInput | CharityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Charities.
     */
    cursor?: CharityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charities.
     */
    skip?: number
    distinct?: CharityScalarFieldEnum | CharityScalarFieldEnum[]
  }

  /**
   * Charity create
   */
  export type CharityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * The data needed to create a Charity.
     */
    data: XOR<CharityCreateInput, CharityUncheckedCreateInput>
  }

  /**
   * Charity createMany
   */
  export type CharityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Charities.
     */
    data: CharityCreateManyInput | CharityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Charity createManyAndReturn
   */
  export type CharityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * The data used to create many Charities.
     */
    data: CharityCreateManyInput | CharityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Charity update
   */
  export type CharityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * The data needed to update a Charity.
     */
    data: XOR<CharityUpdateInput, CharityUncheckedUpdateInput>
    /**
     * Choose, which Charity to update.
     */
    where: CharityWhereUniqueInput
  }

  /**
   * Charity updateMany
   */
  export type CharityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Charities.
     */
    data: XOR<CharityUpdateManyMutationInput, CharityUncheckedUpdateManyInput>
    /**
     * Filter which Charities to update
     */
    where?: CharityWhereInput
    /**
     * Limit how many Charities to update.
     */
    limit?: number
  }

  /**
   * Charity updateManyAndReturn
   */
  export type CharityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * The data used to update Charities.
     */
    data: XOR<CharityUpdateManyMutationInput, CharityUncheckedUpdateManyInput>
    /**
     * Filter which Charities to update
     */
    where?: CharityWhereInput
    /**
     * Limit how many Charities to update.
     */
    limit?: number
  }

  /**
   * Charity upsert
   */
  export type CharityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * The filter to search for the Charity to update in case it exists.
     */
    where: CharityWhereUniqueInput
    /**
     * In case the Charity found by the `where` argument doesn't exist, create a new Charity with this data.
     */
    create: XOR<CharityCreateInput, CharityUncheckedCreateInput>
    /**
     * In case the Charity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharityUpdateInput, CharityUncheckedUpdateInput>
  }

  /**
   * Charity delete
   */
  export type CharityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * Filter which Charity to delete.
     */
    where: CharityWhereUniqueInput
  }

  /**
   * Charity deleteMany
   */
  export type CharityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Charities to delete
     */
    where?: CharityWhereInput
    /**
     * Limit how many Charities to delete.
     */
    limit?: number
  }

  /**
   * Charity.Staff
   */
  export type Charity$StaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    cursor?: StaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Charity.Items
   */
  export type Charity$ItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    where?: ItemsWhereInput
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    cursor?: ItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * Charity without action
   */
  export type CharityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
  }


  /**
   * Model Fumes
   */

  export type AggregateFumes = {
    _count: FumesCountAggregateOutputType | null
    _avg: FumesAvgAggregateOutputType | null
    _sum: FumesSumAggregateOutputType | null
    _min: FumesMinAggregateOutputType | null
    _max: FumesMaxAggregateOutputType | null
  }

  export type FumesAvgAggregateOutputType = {
    Entry_No: number | null
    CO2_Saved: number | null
  }

  export type FumesSumAggregateOutputType = {
    Entry_No: number | null
    CO2_Saved: number | null
  }

  export type FumesMinAggregateOutputType = {
    Entry_No: number | null
    CO2_Saved: number | null
    Date_Logged: Date | null
  }

  export type FumesMaxAggregateOutputType = {
    Entry_No: number | null
    CO2_Saved: number | null
    Date_Logged: Date | null
  }

  export type FumesCountAggregateOutputType = {
    Entry_No: number
    CO2_Saved: number
    Date_Logged: number
    _all: number
  }


  export type FumesAvgAggregateInputType = {
    Entry_No?: true
    CO2_Saved?: true
  }

  export type FumesSumAggregateInputType = {
    Entry_No?: true
    CO2_Saved?: true
  }

  export type FumesMinAggregateInputType = {
    Entry_No?: true
    CO2_Saved?: true
    Date_Logged?: true
  }

  export type FumesMaxAggregateInputType = {
    Entry_No?: true
    CO2_Saved?: true
    Date_Logged?: true
  }

  export type FumesCountAggregateInputType = {
    Entry_No?: true
    CO2_Saved?: true
    Date_Logged?: true
    _all?: true
  }

  export type FumesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fumes to aggregate.
     */
    where?: FumesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fumes to fetch.
     */
    orderBy?: FumesOrderByWithRelationInput | FumesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FumesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fumes
    **/
    _count?: true | FumesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FumesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FumesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FumesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FumesMaxAggregateInputType
  }

  export type GetFumesAggregateType<T extends FumesAggregateArgs> = {
        [P in keyof T & keyof AggregateFumes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFumes[P]>
      : GetScalarType<T[P], AggregateFumes[P]>
  }




  export type FumesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FumesWhereInput
    orderBy?: FumesOrderByWithAggregationInput | FumesOrderByWithAggregationInput[]
    by: FumesScalarFieldEnum[] | FumesScalarFieldEnum
    having?: FumesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FumesCountAggregateInputType | true
    _avg?: FumesAvgAggregateInputType
    _sum?: FumesSumAggregateInputType
    _min?: FumesMinAggregateInputType
    _max?: FumesMaxAggregateInputType
  }

  export type FumesGroupByOutputType = {
    Entry_No: number
    CO2_Saved: number
    Date_Logged: Date
    _count: FumesCountAggregateOutputType | null
    _avg: FumesAvgAggregateOutputType | null
    _sum: FumesSumAggregateOutputType | null
    _min: FumesMinAggregateOutputType | null
    _max: FumesMaxAggregateOutputType | null
  }

  type GetFumesGroupByPayload<T extends FumesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FumesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FumesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FumesGroupByOutputType[P]>
            : GetScalarType<T[P], FumesGroupByOutputType[P]>
        }
      >
    >


  export type FumesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Entry_No?: boolean
    CO2_Saved?: boolean
    Date_Logged?: boolean
  }, ExtArgs["result"]["fumes"]>

  export type FumesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Entry_No?: boolean
    CO2_Saved?: boolean
    Date_Logged?: boolean
  }, ExtArgs["result"]["fumes"]>

  export type FumesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Entry_No?: boolean
    CO2_Saved?: boolean
    Date_Logged?: boolean
  }, ExtArgs["result"]["fumes"]>

  export type FumesSelectScalar = {
    Entry_No?: boolean
    CO2_Saved?: boolean
    Date_Logged?: boolean
  }

  export type FumesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Entry_No" | "CO2_Saved" | "Date_Logged", ExtArgs["result"]["fumes"]>

  export type $FumesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fumes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Entry_No: number
      CO2_Saved: number
      Date_Logged: Date
    }, ExtArgs["result"]["fumes"]>
    composites: {}
  }

  type FumesGetPayload<S extends boolean | null | undefined | FumesDefaultArgs> = $Result.GetResult<Prisma.$FumesPayload, S>

  type FumesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FumesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FumesCountAggregateInputType | true
    }

  export interface FumesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fumes'], meta: { name: 'Fumes' } }
    /**
     * Find zero or one Fumes that matches the filter.
     * @param {FumesFindUniqueArgs} args - Arguments to find a Fumes
     * @example
     * // Get one Fumes
     * const fumes = await prisma.fumes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FumesFindUniqueArgs>(args: SelectSubset<T, FumesFindUniqueArgs<ExtArgs>>): Prisma__FumesClient<$Result.GetResult<Prisma.$FumesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Fumes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FumesFindUniqueOrThrowArgs} args - Arguments to find a Fumes
     * @example
     * // Get one Fumes
     * const fumes = await prisma.fumes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FumesFindUniqueOrThrowArgs>(args: SelectSubset<T, FumesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FumesClient<$Result.GetResult<Prisma.$FumesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Fumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FumesFindFirstArgs} args - Arguments to find a Fumes
     * @example
     * // Get one Fumes
     * const fumes = await prisma.fumes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FumesFindFirstArgs>(args?: SelectSubset<T, FumesFindFirstArgs<ExtArgs>>): Prisma__FumesClient<$Result.GetResult<Prisma.$FumesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Fumes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FumesFindFirstOrThrowArgs} args - Arguments to find a Fumes
     * @example
     * // Get one Fumes
     * const fumes = await prisma.fumes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FumesFindFirstOrThrowArgs>(args?: SelectSubset<T, FumesFindFirstOrThrowArgs<ExtArgs>>): Prisma__FumesClient<$Result.GetResult<Prisma.$FumesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Fumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FumesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fumes
     * const fumes = await prisma.fumes.findMany()
     * 
     * // Get first 10 Fumes
     * const fumes = await prisma.fumes.findMany({ take: 10 })
     * 
     * // Only select the `Entry_No`
     * const fumesWithEntry_NoOnly = await prisma.fumes.findMany({ select: { Entry_No: true } })
     * 
     */
    findMany<T extends FumesFindManyArgs>(args?: SelectSubset<T, FumesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FumesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Fumes.
     * @param {FumesCreateArgs} args - Arguments to create a Fumes.
     * @example
     * // Create one Fumes
     * const Fumes = await prisma.fumes.create({
     *   data: {
     *     // ... data to create a Fumes
     *   }
     * })
     * 
     */
    create<T extends FumesCreateArgs>(args: SelectSubset<T, FumesCreateArgs<ExtArgs>>): Prisma__FumesClient<$Result.GetResult<Prisma.$FumesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Fumes.
     * @param {FumesCreateManyArgs} args - Arguments to create many Fumes.
     * @example
     * // Create many Fumes
     * const fumes = await prisma.fumes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FumesCreateManyArgs>(args?: SelectSubset<T, FumesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fumes and returns the data saved in the database.
     * @param {FumesCreateManyAndReturnArgs} args - Arguments to create many Fumes.
     * @example
     * // Create many Fumes
     * const fumes = await prisma.fumes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fumes and only return the `Entry_No`
     * const fumesWithEntry_NoOnly = await prisma.fumes.createManyAndReturn({
     *   select: { Entry_No: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FumesCreateManyAndReturnArgs>(args?: SelectSubset<T, FumesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FumesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Fumes.
     * @param {FumesDeleteArgs} args - Arguments to delete one Fumes.
     * @example
     * // Delete one Fumes
     * const Fumes = await prisma.fumes.delete({
     *   where: {
     *     // ... filter to delete one Fumes
     *   }
     * })
     * 
     */
    delete<T extends FumesDeleteArgs>(args: SelectSubset<T, FumesDeleteArgs<ExtArgs>>): Prisma__FumesClient<$Result.GetResult<Prisma.$FumesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Fumes.
     * @param {FumesUpdateArgs} args - Arguments to update one Fumes.
     * @example
     * // Update one Fumes
     * const fumes = await prisma.fumes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FumesUpdateArgs>(args: SelectSubset<T, FumesUpdateArgs<ExtArgs>>): Prisma__FumesClient<$Result.GetResult<Prisma.$FumesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Fumes.
     * @param {FumesDeleteManyArgs} args - Arguments to filter Fumes to delete.
     * @example
     * // Delete a few Fumes
     * const { count } = await prisma.fumes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FumesDeleteManyArgs>(args?: SelectSubset<T, FumesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FumesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fumes
     * const fumes = await prisma.fumes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FumesUpdateManyArgs>(args: SelectSubset<T, FumesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fumes and returns the data updated in the database.
     * @param {FumesUpdateManyAndReturnArgs} args - Arguments to update many Fumes.
     * @example
     * // Update many Fumes
     * const fumes = await prisma.fumes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fumes and only return the `Entry_No`
     * const fumesWithEntry_NoOnly = await prisma.fumes.updateManyAndReturn({
     *   select: { Entry_No: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FumesUpdateManyAndReturnArgs>(args: SelectSubset<T, FumesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FumesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Fumes.
     * @param {FumesUpsertArgs} args - Arguments to update or create a Fumes.
     * @example
     * // Update or create a Fumes
     * const fumes = await prisma.fumes.upsert({
     *   create: {
     *     // ... data to create a Fumes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fumes we want to update
     *   }
     * })
     */
    upsert<T extends FumesUpsertArgs>(args: SelectSubset<T, FumesUpsertArgs<ExtArgs>>): Prisma__FumesClient<$Result.GetResult<Prisma.$FumesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Fumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FumesCountArgs} args - Arguments to filter Fumes to count.
     * @example
     * // Count the number of Fumes
     * const count = await prisma.fumes.count({
     *   where: {
     *     // ... the filter for the Fumes we want to count
     *   }
     * })
    **/
    count<T extends FumesCountArgs>(
      args?: Subset<T, FumesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FumesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FumesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FumesAggregateArgs>(args: Subset<T, FumesAggregateArgs>): Prisma.PrismaPromise<GetFumesAggregateType<T>>

    /**
     * Group by Fumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FumesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FumesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FumesGroupByArgs['orderBy'] }
        : { orderBy?: FumesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FumesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFumesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fumes model
   */
  readonly fields: FumesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fumes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FumesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fumes model
   */ 
  interface FumesFieldRefs {
    readonly Entry_No: FieldRef<"Fumes", 'Int'>
    readonly CO2_Saved: FieldRef<"Fumes", 'Int'>
    readonly Date_Logged: FieldRef<"Fumes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fumes findUnique
   */
  export type FumesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fumes
     */
    select?: FumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fumes
     */
    omit?: FumesOmit<ExtArgs> | null
    /**
     * Filter, which Fumes to fetch.
     */
    where: FumesWhereUniqueInput
  }

  /**
   * Fumes findUniqueOrThrow
   */
  export type FumesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fumes
     */
    select?: FumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fumes
     */
    omit?: FumesOmit<ExtArgs> | null
    /**
     * Filter, which Fumes to fetch.
     */
    where: FumesWhereUniqueInput
  }

  /**
   * Fumes findFirst
   */
  export type FumesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fumes
     */
    select?: FumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fumes
     */
    omit?: FumesOmit<ExtArgs> | null
    /**
     * Filter, which Fumes to fetch.
     */
    where?: FumesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fumes to fetch.
     */
    orderBy?: FumesOrderByWithRelationInput | FumesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fumes.
     */
    cursor?: FumesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fumes.
     */
    distinct?: FumesScalarFieldEnum | FumesScalarFieldEnum[]
  }

  /**
   * Fumes findFirstOrThrow
   */
  export type FumesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fumes
     */
    select?: FumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fumes
     */
    omit?: FumesOmit<ExtArgs> | null
    /**
     * Filter, which Fumes to fetch.
     */
    where?: FumesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fumes to fetch.
     */
    orderBy?: FumesOrderByWithRelationInput | FumesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fumes.
     */
    cursor?: FumesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fumes.
     */
    distinct?: FumesScalarFieldEnum | FumesScalarFieldEnum[]
  }

  /**
   * Fumes findMany
   */
  export type FumesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fumes
     */
    select?: FumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fumes
     */
    omit?: FumesOmit<ExtArgs> | null
    /**
     * Filter, which Fumes to fetch.
     */
    where?: FumesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fumes to fetch.
     */
    orderBy?: FumesOrderByWithRelationInput | FumesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fumes.
     */
    cursor?: FumesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fumes.
     */
    skip?: number
    distinct?: FumesScalarFieldEnum | FumesScalarFieldEnum[]
  }

  /**
   * Fumes create
   */
  export type FumesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fumes
     */
    select?: FumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fumes
     */
    omit?: FumesOmit<ExtArgs> | null
    /**
     * The data needed to create a Fumes.
     */
    data: XOR<FumesCreateInput, FumesUncheckedCreateInput>
  }

  /**
   * Fumes createMany
   */
  export type FumesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fumes.
     */
    data: FumesCreateManyInput | FumesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fumes createManyAndReturn
   */
  export type FumesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fumes
     */
    select?: FumesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fumes
     */
    omit?: FumesOmit<ExtArgs> | null
    /**
     * The data used to create many Fumes.
     */
    data: FumesCreateManyInput | FumesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fumes update
   */
  export type FumesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fumes
     */
    select?: FumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fumes
     */
    omit?: FumesOmit<ExtArgs> | null
    /**
     * The data needed to update a Fumes.
     */
    data: XOR<FumesUpdateInput, FumesUncheckedUpdateInput>
    /**
     * Choose, which Fumes to update.
     */
    where: FumesWhereUniqueInput
  }

  /**
   * Fumes updateMany
   */
  export type FumesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fumes.
     */
    data: XOR<FumesUpdateManyMutationInput, FumesUncheckedUpdateManyInput>
    /**
     * Filter which Fumes to update
     */
    where?: FumesWhereInput
    /**
     * Limit how many Fumes to update.
     */
    limit?: number
  }

  /**
   * Fumes updateManyAndReturn
   */
  export type FumesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fumes
     */
    select?: FumesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fumes
     */
    omit?: FumesOmit<ExtArgs> | null
    /**
     * The data used to update Fumes.
     */
    data: XOR<FumesUpdateManyMutationInput, FumesUncheckedUpdateManyInput>
    /**
     * Filter which Fumes to update
     */
    where?: FumesWhereInput
    /**
     * Limit how many Fumes to update.
     */
    limit?: number
  }

  /**
   * Fumes upsert
   */
  export type FumesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fumes
     */
    select?: FumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fumes
     */
    omit?: FumesOmit<ExtArgs> | null
    /**
     * The filter to search for the Fumes to update in case it exists.
     */
    where: FumesWhereUniqueInput
    /**
     * In case the Fumes found by the `where` argument doesn't exist, create a new Fumes with this data.
     */
    create: XOR<FumesCreateInput, FumesUncheckedCreateInput>
    /**
     * In case the Fumes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FumesUpdateInput, FumesUncheckedUpdateInput>
  }

  /**
   * Fumes delete
   */
  export type FumesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fumes
     */
    select?: FumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fumes
     */
    omit?: FumesOmit<ExtArgs> | null
    /**
     * Filter which Fumes to delete.
     */
    where: FumesWhereUniqueInput
  }

  /**
   * Fumes deleteMany
   */
  export type FumesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fumes to delete
     */
    where?: FumesWhereInput
    /**
     * Limit how many Fumes to delete.
     */
    limit?: number
  }

  /**
   * Fumes without action
   */
  export type FumesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fumes
     */
    select?: FumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fumes
     */
    omit?: FumesOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    User_ID: 'User_ID',
    Username: 'Username',
    Email: 'Email',
    Phone: 'Phone',
    Password: 'Password',
    Address: 'Address',
    Postcode: 'Postcode',
    Role: 'Role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    Staff_ID: 'Staff_ID',
    User_ID: 'User_ID',
    Charity_ID: 'Charity_ID'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    Admin_ID: 'Admin_ID',
    User_ID: 'User_ID'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const ItemsScalarFieldEnum: {
    Item_No: 'Item_No',
    Item_Name: 'Item_Name',
    Brand: 'Brand',
    Size: 'Size',
    Colour: 'Colour',
    Condition: 'Condition',
    Image: 'Image',
    Time: 'Time',
    Pickup_Date: 'Pickup_Date',
    Distributed: 'Distributed',
    Donor_ID: 'Donor_ID',
    Charity_ID: 'Charity_ID',
    Date_Added: 'Date_Added'
  };

  export type ItemsScalarFieldEnum = (typeof ItemsScalarFieldEnum)[keyof typeof ItemsScalarFieldEnum]


  export const CharityScalarFieldEnum: {
    Charity_ID: 'Charity_ID',
    Charity_Name: 'Charity_Name',
    About: 'About',
    Logo: 'Logo'
  };

  export type CharityScalarFieldEnum = (typeof CharityScalarFieldEnum)[keyof typeof CharityScalarFieldEnum]


  export const FumesScalarFieldEnum: {
    Entry_No: 'Entry_No',
    CO2_Saved: 'CO2_Saved',
    Date_Logged: 'Date_Logged'
  };

  export type FumesScalarFieldEnum = (typeof FumesScalarFieldEnum)[keyof typeof FumesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Size[]'
   */
  export type ListEnumSizeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Size[]'>
    


  /**
   * Reference to a field of type 'Size'
   */
  export type EnumSizeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Size'>
    


  /**
   * Reference to a field of type 'Condition[]'
   */
  export type ListEnumConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Condition[]'>
    


  /**
   * Reference to a field of type 'Condition'
   */
  export type EnumConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Condition'>
    


  /**
   * Reference to a field of type 'Times[]'
   */
  export type ListEnumTimesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Times[]'>
    


  /**
   * Reference to a field of type 'Times'
   */
  export type EnumTimesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Times'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    User_ID?: IntFilter<"User"> | number
    Username?: StringFilter<"User"> | string
    Email?: StringFilter<"User"> | string
    Phone?: StringNullableFilter<"User"> | string | null
    Password?: StringFilter<"User"> | string
    Address?: StringFilter<"User"> | string
    Postcode?: StringFilter<"User"> | string
    Role?: EnumRoleNullableListFilter<"User">
    Staff?: StaffListRelationFilter
    Admin?: AdminListRelationFilter
    Items?: ItemsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    User_ID?: SortOrder
    Username?: SortOrder
    Email?: SortOrder
    Phone?: SortOrderInput | SortOrder
    Password?: SortOrder
    Address?: SortOrder
    Postcode?: SortOrder
    Role?: SortOrder
    Staff?: StaffOrderByRelationAggregateInput
    Admin?: AdminOrderByRelationAggregateInput
    Items?: ItemsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    User_ID?: number
    Username?: string
    Email?: string
    Phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    Password?: StringFilter<"User"> | string
    Address?: StringFilter<"User"> | string
    Postcode?: StringFilter<"User"> | string
    Role?: EnumRoleNullableListFilter<"User">
    Staff?: StaffListRelationFilter
    Admin?: AdminListRelationFilter
    Items?: ItemsListRelationFilter
  }, "User_ID" | "Username" | "Email" | "Phone">

  export type UserOrderByWithAggregationInput = {
    User_ID?: SortOrder
    Username?: SortOrder
    Email?: SortOrder
    Phone?: SortOrderInput | SortOrder
    Password?: SortOrder
    Address?: SortOrder
    Postcode?: SortOrder
    Role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    User_ID?: IntWithAggregatesFilter<"User"> | number
    Username?: StringWithAggregatesFilter<"User"> | string
    Email?: StringWithAggregatesFilter<"User"> | string
    Phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    Password?: StringWithAggregatesFilter<"User"> | string
    Address?: StringWithAggregatesFilter<"User"> | string
    Postcode?: StringWithAggregatesFilter<"User"> | string
    Role?: EnumRoleNullableListFilter<"User">
  }

  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    Staff_ID?: IntFilter<"Staff"> | number
    User_ID?: IntFilter<"Staff"> | number
    Charity_ID?: IntFilter<"Staff"> | number
    Donor?: XOR<UserScalarRelationFilter, UserWhereInput>
    Charity?: XOR<CharityScalarRelationFilter, CharityWhereInput>
  }

  export type StaffOrderByWithRelationInput = {
    Staff_ID?: SortOrder
    User_ID?: SortOrder
    Charity_ID?: SortOrder
    Donor?: UserOrderByWithRelationInput
    Charity?: CharityOrderByWithRelationInput
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    Staff_ID?: number
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    User_ID?: IntFilter<"Staff"> | number
    Charity_ID?: IntFilter<"Staff"> | number
    Donor?: XOR<UserScalarRelationFilter, UserWhereInput>
    Charity?: XOR<CharityScalarRelationFilter, CharityWhereInput>
  }, "Staff_ID">

  export type StaffOrderByWithAggregationInput = {
    Staff_ID?: SortOrder
    User_ID?: SortOrder
    Charity_ID?: SortOrder
    _count?: StaffCountOrderByAggregateInput
    _avg?: StaffAvgOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
    _sum?: StaffSumOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    OR?: StaffScalarWhereWithAggregatesInput[]
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    Staff_ID?: IntWithAggregatesFilter<"Staff"> | number
    User_ID?: IntWithAggregatesFilter<"Staff"> | number
    Charity_ID?: IntWithAggregatesFilter<"Staff"> | number
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    Admin_ID?: IntFilter<"Admin"> | number
    User_ID?: IntFilter<"Admin"> | number
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    Admin_ID?: SortOrder
    User_ID?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    Admin_ID?: number
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    User_ID?: IntFilter<"Admin"> | number
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "Admin_ID">

  export type AdminOrderByWithAggregationInput = {
    Admin_ID?: SortOrder
    User_ID?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    Admin_ID?: IntWithAggregatesFilter<"Admin"> | number
    User_ID?: IntWithAggregatesFilter<"Admin"> | number
  }

  export type ItemsWhereInput = {
    AND?: ItemsWhereInput | ItemsWhereInput[]
    OR?: ItemsWhereInput[]
    NOT?: ItemsWhereInput | ItemsWhereInput[]
    Item_No?: IntFilter<"Items"> | number
    Item_Name?: StringFilter<"Items"> | string
    Brand?: StringFilter<"Items"> | string
    Size?: EnumSizeNullableListFilter<"Items">
    Colour?: StringFilter<"Items"> | string
    Condition?: EnumConditionNullableListFilter<"Items">
    Image?: StringFilter<"Items"> | string
    Time?: EnumTimesNullableListFilter<"Items">
    Pickup_Date?: DateTimeFilter<"Items"> | Date | string
    Distributed?: BoolFilter<"Items"> | boolean
    Donor_ID?: IntFilter<"Items"> | number
    Charity_ID?: IntFilter<"Items"> | number
    Date_Added?: DateTimeFilter<"Items"> | Date | string
    Donor?: XOR<UserScalarRelationFilter, UserWhereInput>
    Charity?: XOR<CharityScalarRelationFilter, CharityWhereInput>
  }

  export type ItemsOrderByWithRelationInput = {
    Item_No?: SortOrder
    Item_Name?: SortOrder
    Brand?: SortOrder
    Size?: SortOrder
    Colour?: SortOrder
    Condition?: SortOrder
    Image?: SortOrder
    Time?: SortOrder
    Pickup_Date?: SortOrder
    Distributed?: SortOrder
    Donor_ID?: SortOrder
    Charity_ID?: SortOrder
    Date_Added?: SortOrder
    Donor?: UserOrderByWithRelationInput
    Charity?: CharityOrderByWithRelationInput
  }

  export type ItemsWhereUniqueInput = Prisma.AtLeast<{
    Item_No?: number
    AND?: ItemsWhereInput | ItemsWhereInput[]
    OR?: ItemsWhereInput[]
    NOT?: ItemsWhereInput | ItemsWhereInput[]
    Item_Name?: StringFilter<"Items"> | string
    Brand?: StringFilter<"Items"> | string
    Size?: EnumSizeNullableListFilter<"Items">
    Colour?: StringFilter<"Items"> | string
    Condition?: EnumConditionNullableListFilter<"Items">
    Image?: StringFilter<"Items"> | string
    Time?: EnumTimesNullableListFilter<"Items">
    Pickup_Date?: DateTimeFilter<"Items"> | Date | string
    Distributed?: BoolFilter<"Items"> | boolean
    Donor_ID?: IntFilter<"Items"> | number
    Charity_ID?: IntFilter<"Items"> | number
    Date_Added?: DateTimeFilter<"Items"> | Date | string
    Donor?: XOR<UserScalarRelationFilter, UserWhereInput>
    Charity?: XOR<CharityScalarRelationFilter, CharityWhereInput>
  }, "Item_No">

  export type ItemsOrderByWithAggregationInput = {
    Item_No?: SortOrder
    Item_Name?: SortOrder
    Brand?: SortOrder
    Size?: SortOrder
    Colour?: SortOrder
    Condition?: SortOrder
    Image?: SortOrder
    Time?: SortOrder
    Pickup_Date?: SortOrder
    Distributed?: SortOrder
    Donor_ID?: SortOrder
    Charity_ID?: SortOrder
    Date_Added?: SortOrder
    _count?: ItemsCountOrderByAggregateInput
    _avg?: ItemsAvgOrderByAggregateInput
    _max?: ItemsMaxOrderByAggregateInput
    _min?: ItemsMinOrderByAggregateInput
    _sum?: ItemsSumOrderByAggregateInput
  }

  export type ItemsScalarWhereWithAggregatesInput = {
    AND?: ItemsScalarWhereWithAggregatesInput | ItemsScalarWhereWithAggregatesInput[]
    OR?: ItemsScalarWhereWithAggregatesInput[]
    NOT?: ItemsScalarWhereWithAggregatesInput | ItemsScalarWhereWithAggregatesInput[]
    Item_No?: IntWithAggregatesFilter<"Items"> | number
    Item_Name?: StringWithAggregatesFilter<"Items"> | string
    Brand?: StringWithAggregatesFilter<"Items"> | string
    Size?: EnumSizeNullableListFilter<"Items">
    Colour?: StringWithAggregatesFilter<"Items"> | string
    Condition?: EnumConditionNullableListFilter<"Items">
    Image?: StringWithAggregatesFilter<"Items"> | string
    Time?: EnumTimesNullableListFilter<"Items">
    Pickup_Date?: DateTimeWithAggregatesFilter<"Items"> | Date | string
    Distributed?: BoolWithAggregatesFilter<"Items"> | boolean
    Donor_ID?: IntWithAggregatesFilter<"Items"> | number
    Charity_ID?: IntWithAggregatesFilter<"Items"> | number
    Date_Added?: DateTimeWithAggregatesFilter<"Items"> | Date | string
  }

  export type CharityWhereInput = {
    AND?: CharityWhereInput | CharityWhereInput[]
    OR?: CharityWhereInput[]
    NOT?: CharityWhereInput | CharityWhereInput[]
    Charity_ID?: IntFilter<"Charity"> | number
    Charity_Name?: StringFilter<"Charity"> | string
    About?: StringFilter<"Charity"> | string
    Logo?: StringFilter<"Charity"> | string
    Staff?: StaffListRelationFilter
    Items?: ItemsListRelationFilter
  }

  export type CharityOrderByWithRelationInput = {
    Charity_ID?: SortOrder
    Charity_Name?: SortOrder
    About?: SortOrder
    Logo?: SortOrder
    Staff?: StaffOrderByRelationAggregateInput
    Items?: ItemsOrderByRelationAggregateInput
  }

  export type CharityWhereUniqueInput = Prisma.AtLeast<{
    Charity_ID?: number
    Charity_Name?: string
    AND?: CharityWhereInput | CharityWhereInput[]
    OR?: CharityWhereInput[]
    NOT?: CharityWhereInput | CharityWhereInput[]
    About?: StringFilter<"Charity"> | string
    Logo?: StringFilter<"Charity"> | string
    Staff?: StaffListRelationFilter
    Items?: ItemsListRelationFilter
  }, "Charity_ID" | "Charity_Name">

  export type CharityOrderByWithAggregationInput = {
    Charity_ID?: SortOrder
    Charity_Name?: SortOrder
    About?: SortOrder
    Logo?: SortOrder
    _count?: CharityCountOrderByAggregateInput
    _avg?: CharityAvgOrderByAggregateInput
    _max?: CharityMaxOrderByAggregateInput
    _min?: CharityMinOrderByAggregateInput
    _sum?: CharitySumOrderByAggregateInput
  }

  export type CharityScalarWhereWithAggregatesInput = {
    AND?: CharityScalarWhereWithAggregatesInput | CharityScalarWhereWithAggregatesInput[]
    OR?: CharityScalarWhereWithAggregatesInput[]
    NOT?: CharityScalarWhereWithAggregatesInput | CharityScalarWhereWithAggregatesInput[]
    Charity_ID?: IntWithAggregatesFilter<"Charity"> | number
    Charity_Name?: StringWithAggregatesFilter<"Charity"> | string
    About?: StringWithAggregatesFilter<"Charity"> | string
    Logo?: StringWithAggregatesFilter<"Charity"> | string
  }

  export type FumesWhereInput = {
    AND?: FumesWhereInput | FumesWhereInput[]
    OR?: FumesWhereInput[]
    NOT?: FumesWhereInput | FumesWhereInput[]
    Entry_No?: IntFilter<"Fumes"> | number
    CO2_Saved?: IntFilter<"Fumes"> | number
    Date_Logged?: DateTimeFilter<"Fumes"> | Date | string
  }

  export type FumesOrderByWithRelationInput = {
    Entry_No?: SortOrder
    CO2_Saved?: SortOrder
    Date_Logged?: SortOrder
  }

  export type FumesWhereUniqueInput = Prisma.AtLeast<{
    Entry_No?: number
    AND?: FumesWhereInput | FumesWhereInput[]
    OR?: FumesWhereInput[]
    NOT?: FumesWhereInput | FumesWhereInput[]
    CO2_Saved?: IntFilter<"Fumes"> | number
    Date_Logged?: DateTimeFilter<"Fumes"> | Date | string
  }, "Entry_No">

  export type FumesOrderByWithAggregationInput = {
    Entry_No?: SortOrder
    CO2_Saved?: SortOrder
    Date_Logged?: SortOrder
    _count?: FumesCountOrderByAggregateInput
    _avg?: FumesAvgOrderByAggregateInput
    _max?: FumesMaxOrderByAggregateInput
    _min?: FumesMinOrderByAggregateInput
    _sum?: FumesSumOrderByAggregateInput
  }

  export type FumesScalarWhereWithAggregatesInput = {
    AND?: FumesScalarWhereWithAggregatesInput | FumesScalarWhereWithAggregatesInput[]
    OR?: FumesScalarWhereWithAggregatesInput[]
    NOT?: FumesScalarWhereWithAggregatesInput | FumesScalarWhereWithAggregatesInput[]
    Entry_No?: IntWithAggregatesFilter<"Fumes"> | number
    CO2_Saved?: IntWithAggregatesFilter<"Fumes"> | number
    Date_Logged?: DateTimeWithAggregatesFilter<"Fumes"> | Date | string
  }

  export type UserCreateInput = {
    Username: string
    Email: string
    Phone?: string | null
    Password: string
    Address: string
    Postcode: string
    Role?: UserCreateRoleInput | $Enums.Role[]
    Staff?: StaffCreateNestedManyWithoutDonorInput
    Admin?: AdminCreateNestedManyWithoutUserInput
    Items?: ItemsCreateNestedManyWithoutDonorInput
  }

  export type UserUncheckedCreateInput = {
    User_ID?: number
    Username: string
    Email: string
    Phone?: string | null
    Password: string
    Address: string
    Postcode: string
    Role?: UserCreateRoleInput | $Enums.Role[]
    Staff?: StaffUncheckedCreateNestedManyWithoutDonorInput
    Admin?: AdminUncheckedCreateNestedManyWithoutUserInput
    Items?: ItemsUncheckedCreateNestedManyWithoutDonorInput
  }

  export type UserUpdateInput = {
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Postcode?: StringFieldUpdateOperationsInput | string
    Role?: UserUpdateRoleInput | $Enums.Role[]
    Staff?: StaffUpdateManyWithoutDonorNestedInput
    Admin?: AdminUpdateManyWithoutUserNestedInput
    Items?: ItemsUpdateManyWithoutDonorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    User_ID?: IntFieldUpdateOperationsInput | number
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Postcode?: StringFieldUpdateOperationsInput | string
    Role?: UserUpdateRoleInput | $Enums.Role[]
    Staff?: StaffUncheckedUpdateManyWithoutDonorNestedInput
    Admin?: AdminUncheckedUpdateManyWithoutUserNestedInput
    Items?: ItemsUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type UserCreateManyInput = {
    User_ID?: number
    Username: string
    Email: string
    Phone?: string | null
    Password: string
    Address: string
    Postcode: string
    Role?: UserCreateRoleInput | $Enums.Role[]
  }

  export type UserUpdateManyMutationInput = {
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Postcode?: StringFieldUpdateOperationsInput | string
    Role?: UserUpdateRoleInput | $Enums.Role[]
  }

  export type UserUncheckedUpdateManyInput = {
    User_ID?: IntFieldUpdateOperationsInput | number
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Postcode?: StringFieldUpdateOperationsInput | string
    Role?: UserUpdateRoleInput | $Enums.Role[]
  }

  export type StaffCreateInput = {
    Donor: UserCreateNestedOneWithoutStaffInput
    Charity: CharityCreateNestedOneWithoutStaffInput
  }

  export type StaffUncheckedCreateInput = {
    Staff_ID?: number
    User_ID: number
    Charity_ID: number
  }

  export type StaffUpdateInput = {
    Donor?: UserUpdateOneRequiredWithoutStaffNestedInput
    Charity?: CharityUpdateOneRequiredWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    Staff_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    Charity_ID?: IntFieldUpdateOperationsInput | number
  }

  export type StaffCreateManyInput = {
    Staff_ID?: number
    User_ID: number
    Charity_ID: number
  }

  export type StaffUpdateManyMutationInput = {

  }

  export type StaffUncheckedUpdateManyInput = {
    Staff_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    Charity_ID?: IntFieldUpdateOperationsInput | number
  }

  export type AdminCreateInput = {
    User: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    Admin_ID?: number
    User_ID: number
  }

  export type AdminUpdateInput = {
    User?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    Admin_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
  }

  export type AdminCreateManyInput = {
    Admin_ID?: number
    User_ID: number
  }

  export type AdminUpdateManyMutationInput = {

  }

  export type AdminUncheckedUpdateManyInput = {
    Admin_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsCreateInput = {
    Item_Name: string
    Brand: string
    Size?: ItemsCreateSizeInput | $Enums.Size[]
    Colour: string
    Condition?: ItemsCreateConditionInput | $Enums.Condition[]
    Image: string
    Time?: ItemsCreateTimeInput | $Enums.Times[]
    Pickup_Date: Date | string
    Distributed?: boolean
    Date_Added?: Date | string
    Donor: UserCreateNestedOneWithoutItemsInput
    Charity: CharityCreateNestedOneWithoutItemsInput
  }

  export type ItemsUncheckedCreateInput = {
    Item_No?: number
    Item_Name: string
    Brand: string
    Size?: ItemsCreateSizeInput | $Enums.Size[]
    Colour: string
    Condition?: ItemsCreateConditionInput | $Enums.Condition[]
    Image: string
    Time?: ItemsCreateTimeInput | $Enums.Times[]
    Pickup_Date: Date | string
    Distributed?: boolean
    Donor_ID: number
    Charity_ID: number
    Date_Added?: Date | string
  }

  export type ItemsUpdateInput = {
    Item_Name?: StringFieldUpdateOperationsInput | string
    Brand?: StringFieldUpdateOperationsInput | string
    Size?: ItemsUpdateSizeInput | $Enums.Size[]
    Colour?: StringFieldUpdateOperationsInput | string
    Condition?: ItemsUpdateConditionInput | $Enums.Condition[]
    Image?: StringFieldUpdateOperationsInput | string
    Time?: ItemsUpdateTimeInput | $Enums.Times[]
    Pickup_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Distributed?: BoolFieldUpdateOperationsInput | boolean
    Date_Added?: DateTimeFieldUpdateOperationsInput | Date | string
    Donor?: UserUpdateOneRequiredWithoutItemsNestedInput
    Charity?: CharityUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemsUncheckedUpdateInput = {
    Item_No?: IntFieldUpdateOperationsInput | number
    Item_Name?: StringFieldUpdateOperationsInput | string
    Brand?: StringFieldUpdateOperationsInput | string
    Size?: ItemsUpdateSizeInput | $Enums.Size[]
    Colour?: StringFieldUpdateOperationsInput | string
    Condition?: ItemsUpdateConditionInput | $Enums.Condition[]
    Image?: StringFieldUpdateOperationsInput | string
    Time?: ItemsUpdateTimeInput | $Enums.Times[]
    Pickup_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Distributed?: BoolFieldUpdateOperationsInput | boolean
    Donor_ID?: IntFieldUpdateOperationsInput | number
    Charity_ID?: IntFieldUpdateOperationsInput | number
    Date_Added?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemsCreateManyInput = {
    Item_No?: number
    Item_Name: string
    Brand: string
    Size?: ItemsCreateSizeInput | $Enums.Size[]
    Colour: string
    Condition?: ItemsCreateConditionInput | $Enums.Condition[]
    Image: string
    Time?: ItemsCreateTimeInput | $Enums.Times[]
    Pickup_Date: Date | string
    Distributed?: boolean
    Donor_ID: number
    Charity_ID: number
    Date_Added?: Date | string
  }

  export type ItemsUpdateManyMutationInput = {
    Item_Name?: StringFieldUpdateOperationsInput | string
    Brand?: StringFieldUpdateOperationsInput | string
    Size?: ItemsUpdateSizeInput | $Enums.Size[]
    Colour?: StringFieldUpdateOperationsInput | string
    Condition?: ItemsUpdateConditionInput | $Enums.Condition[]
    Image?: StringFieldUpdateOperationsInput | string
    Time?: ItemsUpdateTimeInput | $Enums.Times[]
    Pickup_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Distributed?: BoolFieldUpdateOperationsInput | boolean
    Date_Added?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemsUncheckedUpdateManyInput = {
    Item_No?: IntFieldUpdateOperationsInput | number
    Item_Name?: StringFieldUpdateOperationsInput | string
    Brand?: StringFieldUpdateOperationsInput | string
    Size?: ItemsUpdateSizeInput | $Enums.Size[]
    Colour?: StringFieldUpdateOperationsInput | string
    Condition?: ItemsUpdateConditionInput | $Enums.Condition[]
    Image?: StringFieldUpdateOperationsInput | string
    Time?: ItemsUpdateTimeInput | $Enums.Times[]
    Pickup_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Distributed?: BoolFieldUpdateOperationsInput | boolean
    Donor_ID?: IntFieldUpdateOperationsInput | number
    Charity_ID?: IntFieldUpdateOperationsInput | number
    Date_Added?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharityCreateInput = {
    Charity_Name: string
    About: string
    Logo: string
    Staff?: StaffCreateNestedManyWithoutCharityInput
    Items?: ItemsCreateNestedManyWithoutCharityInput
  }

  export type CharityUncheckedCreateInput = {
    Charity_ID?: number
    Charity_Name: string
    About: string
    Logo: string
    Staff?: StaffUncheckedCreateNestedManyWithoutCharityInput
    Items?: ItemsUncheckedCreateNestedManyWithoutCharityInput
  }

  export type CharityUpdateInput = {
    Charity_Name?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
    Logo?: StringFieldUpdateOperationsInput | string
    Staff?: StaffUpdateManyWithoutCharityNestedInput
    Items?: ItemsUpdateManyWithoutCharityNestedInput
  }

  export type CharityUncheckedUpdateInput = {
    Charity_ID?: IntFieldUpdateOperationsInput | number
    Charity_Name?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
    Logo?: StringFieldUpdateOperationsInput | string
    Staff?: StaffUncheckedUpdateManyWithoutCharityNestedInput
    Items?: ItemsUncheckedUpdateManyWithoutCharityNestedInput
  }

  export type CharityCreateManyInput = {
    Charity_ID?: number
    Charity_Name: string
    About: string
    Logo: string
  }

  export type CharityUpdateManyMutationInput = {
    Charity_Name?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
    Logo?: StringFieldUpdateOperationsInput | string
  }

  export type CharityUncheckedUpdateManyInput = {
    Charity_ID?: IntFieldUpdateOperationsInput | number
    Charity_Name?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
    Logo?: StringFieldUpdateOperationsInput | string
  }

  export type FumesCreateInput = {
    CO2_Saved: number
    Date_Logged?: Date | string
  }

  export type FumesUncheckedCreateInput = {
    Entry_No?: number
    CO2_Saved: number
    Date_Logged?: Date | string
  }

  export type FumesUpdateInput = {
    CO2_Saved?: IntFieldUpdateOperationsInput | number
    Date_Logged?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FumesUncheckedUpdateInput = {
    Entry_No?: IntFieldUpdateOperationsInput | number
    CO2_Saved?: IntFieldUpdateOperationsInput | number
    Date_Logged?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FumesCreateManyInput = {
    Entry_No?: number
    CO2_Saved: number
    Date_Logged?: Date | string
  }

  export type FumesUpdateManyMutationInput = {
    CO2_Saved?: IntFieldUpdateOperationsInput | number
    Date_Logged?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FumesUncheckedUpdateManyInput = {
    Entry_No?: IntFieldUpdateOperationsInput | number
    CO2_Saved?: IntFieldUpdateOperationsInput | number
    Date_Logged?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    has?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StaffListRelationFilter = {
    every?: StaffWhereInput
    some?: StaffWhereInput
    none?: StaffWhereInput
  }

  export type AdminListRelationFilter = {
    every?: AdminWhereInput
    some?: AdminWhereInput
    none?: AdminWhereInput
  }

  export type ItemsListRelationFilter = {
    every?: ItemsWhereInput
    some?: ItemsWhereInput
    none?: ItemsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StaffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    User_ID?: SortOrder
    Username?: SortOrder
    Email?: SortOrder
    Phone?: SortOrder
    Password?: SortOrder
    Address?: SortOrder
    Postcode?: SortOrder
    Role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    User_ID?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    User_ID?: SortOrder
    Username?: SortOrder
    Email?: SortOrder
    Phone?: SortOrder
    Password?: SortOrder
    Address?: SortOrder
    Postcode?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    User_ID?: SortOrder
    Username?: SortOrder
    Email?: SortOrder
    Phone?: SortOrder
    Password?: SortOrder
    Address?: SortOrder
    Postcode?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    User_ID?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CharityScalarRelationFilter = {
    is?: CharityWhereInput
    isNot?: CharityWhereInput
  }

  export type StaffCountOrderByAggregateInput = {
    Staff_ID?: SortOrder
    User_ID?: SortOrder
    Charity_ID?: SortOrder
  }

  export type StaffAvgOrderByAggregateInput = {
    Staff_ID?: SortOrder
    User_ID?: SortOrder
    Charity_ID?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    Staff_ID?: SortOrder
    User_ID?: SortOrder
    Charity_ID?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    Staff_ID?: SortOrder
    User_ID?: SortOrder
    Charity_ID?: SortOrder
  }

  export type StaffSumOrderByAggregateInput = {
    Staff_ID?: SortOrder
    User_ID?: SortOrder
    Charity_ID?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    Admin_ID?: SortOrder
    User_ID?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    Admin_ID?: SortOrder
    User_ID?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    Admin_ID?: SortOrder
    User_ID?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    Admin_ID?: SortOrder
    User_ID?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    Admin_ID?: SortOrder
    User_ID?: SortOrder
  }

  export type EnumSizeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Size[] | ListEnumSizeFieldRefInput<$PrismaModel> | null
    has?: $Enums.Size | EnumSizeFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Size[] | ListEnumSizeFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Size[] | ListEnumSizeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumConditionNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel> | null
    has?: $Enums.Condition | EnumConditionFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumTimesNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Times[] | ListEnumTimesFieldRefInput<$PrismaModel> | null
    has?: $Enums.Times | EnumTimesFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Times[] | ListEnumTimesFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Times[] | ListEnumTimesFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ItemsCountOrderByAggregateInput = {
    Item_No?: SortOrder
    Item_Name?: SortOrder
    Brand?: SortOrder
    Size?: SortOrder
    Colour?: SortOrder
    Condition?: SortOrder
    Image?: SortOrder
    Time?: SortOrder
    Pickup_Date?: SortOrder
    Distributed?: SortOrder
    Donor_ID?: SortOrder
    Charity_ID?: SortOrder
    Date_Added?: SortOrder
  }

  export type ItemsAvgOrderByAggregateInput = {
    Item_No?: SortOrder
    Donor_ID?: SortOrder
    Charity_ID?: SortOrder
  }

  export type ItemsMaxOrderByAggregateInput = {
    Item_No?: SortOrder
    Item_Name?: SortOrder
    Brand?: SortOrder
    Colour?: SortOrder
    Image?: SortOrder
    Pickup_Date?: SortOrder
    Distributed?: SortOrder
    Donor_ID?: SortOrder
    Charity_ID?: SortOrder
    Date_Added?: SortOrder
  }

  export type ItemsMinOrderByAggregateInput = {
    Item_No?: SortOrder
    Item_Name?: SortOrder
    Brand?: SortOrder
    Colour?: SortOrder
    Image?: SortOrder
    Pickup_Date?: SortOrder
    Distributed?: SortOrder
    Donor_ID?: SortOrder
    Charity_ID?: SortOrder
    Date_Added?: SortOrder
  }

  export type ItemsSumOrderByAggregateInput = {
    Item_No?: SortOrder
    Donor_ID?: SortOrder
    Charity_ID?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CharityCountOrderByAggregateInput = {
    Charity_ID?: SortOrder
    Charity_Name?: SortOrder
    About?: SortOrder
    Logo?: SortOrder
  }

  export type CharityAvgOrderByAggregateInput = {
    Charity_ID?: SortOrder
  }

  export type CharityMaxOrderByAggregateInput = {
    Charity_ID?: SortOrder
    Charity_Name?: SortOrder
    About?: SortOrder
    Logo?: SortOrder
  }

  export type CharityMinOrderByAggregateInput = {
    Charity_ID?: SortOrder
    Charity_Name?: SortOrder
    About?: SortOrder
    Logo?: SortOrder
  }

  export type CharitySumOrderByAggregateInput = {
    Charity_ID?: SortOrder
  }

  export type FumesCountOrderByAggregateInput = {
    Entry_No?: SortOrder
    CO2_Saved?: SortOrder
    Date_Logged?: SortOrder
  }

  export type FumesAvgOrderByAggregateInput = {
    Entry_No?: SortOrder
    CO2_Saved?: SortOrder
  }

  export type FumesMaxOrderByAggregateInput = {
    Entry_No?: SortOrder
    CO2_Saved?: SortOrder
    Date_Logged?: SortOrder
  }

  export type FumesMinOrderByAggregateInput = {
    Entry_No?: SortOrder
    CO2_Saved?: SortOrder
    Date_Logged?: SortOrder
  }

  export type FumesSumOrderByAggregateInput = {
    Entry_No?: SortOrder
    CO2_Saved?: SortOrder
  }

  export type UserCreateRoleInput = {
    set: $Enums.Role[]
  }

  export type StaffCreateNestedManyWithoutDonorInput = {
    create?: XOR<StaffCreateWithoutDonorInput, StaffUncheckedCreateWithoutDonorInput> | StaffCreateWithoutDonorInput[] | StaffUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutDonorInput | StaffCreateOrConnectWithoutDonorInput[]
    createMany?: StaffCreateManyDonorInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type AdminCreateNestedManyWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput> | AdminCreateWithoutUserInput[] | AdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput | AdminCreateOrConnectWithoutUserInput[]
    createMany?: AdminCreateManyUserInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type ItemsCreateNestedManyWithoutDonorInput = {
    create?: XOR<ItemsCreateWithoutDonorInput, ItemsUncheckedCreateWithoutDonorInput> | ItemsCreateWithoutDonorInput[] | ItemsUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: ItemsCreateOrConnectWithoutDonorInput | ItemsCreateOrConnectWithoutDonorInput[]
    createMany?: ItemsCreateManyDonorInputEnvelope
    connect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
  }

  export type StaffUncheckedCreateNestedManyWithoutDonorInput = {
    create?: XOR<StaffCreateWithoutDonorInput, StaffUncheckedCreateWithoutDonorInput> | StaffCreateWithoutDonorInput[] | StaffUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutDonorInput | StaffCreateOrConnectWithoutDonorInput[]
    createMany?: StaffCreateManyDonorInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type AdminUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput> | AdminCreateWithoutUserInput[] | AdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput | AdminCreateOrConnectWithoutUserInput[]
    createMany?: AdminCreateManyUserInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type ItemsUncheckedCreateNestedManyWithoutDonorInput = {
    create?: XOR<ItemsCreateWithoutDonorInput, ItemsUncheckedCreateWithoutDonorInput> | ItemsCreateWithoutDonorInput[] | ItemsUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: ItemsCreateOrConnectWithoutDonorInput | ItemsCreateOrConnectWithoutDonorInput[]
    createMany?: ItemsCreateManyDonorInputEnvelope
    connect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateRoleInput = {
    set?: $Enums.Role[]
    push?: $Enums.Role | $Enums.Role[]
  }

  export type StaffUpdateManyWithoutDonorNestedInput = {
    create?: XOR<StaffCreateWithoutDonorInput, StaffUncheckedCreateWithoutDonorInput> | StaffCreateWithoutDonorInput[] | StaffUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutDonorInput | StaffCreateOrConnectWithoutDonorInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutDonorInput | StaffUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: StaffCreateManyDonorInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutDonorInput | StaffUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutDonorInput | StaffUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type AdminUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput> | AdminCreateWithoutUserInput[] | AdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput | AdminCreateOrConnectWithoutUserInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutUserInput | AdminUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdminCreateManyUserInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutUserInput | AdminUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutUserInput | AdminUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type ItemsUpdateManyWithoutDonorNestedInput = {
    create?: XOR<ItemsCreateWithoutDonorInput, ItemsUncheckedCreateWithoutDonorInput> | ItemsCreateWithoutDonorInput[] | ItemsUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: ItemsCreateOrConnectWithoutDonorInput | ItemsCreateOrConnectWithoutDonorInput[]
    upsert?: ItemsUpsertWithWhereUniqueWithoutDonorInput | ItemsUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: ItemsCreateManyDonorInputEnvelope
    set?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    disconnect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    delete?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    connect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    update?: ItemsUpdateWithWhereUniqueWithoutDonorInput | ItemsUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: ItemsUpdateManyWithWhereWithoutDonorInput | ItemsUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: ItemsScalarWhereInput | ItemsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StaffUncheckedUpdateManyWithoutDonorNestedInput = {
    create?: XOR<StaffCreateWithoutDonorInput, StaffUncheckedCreateWithoutDonorInput> | StaffCreateWithoutDonorInput[] | StaffUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutDonorInput | StaffCreateOrConnectWithoutDonorInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutDonorInput | StaffUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: StaffCreateManyDonorInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutDonorInput | StaffUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutDonorInput | StaffUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type AdminUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput> | AdminCreateWithoutUserInput[] | AdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput | AdminCreateOrConnectWithoutUserInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutUserInput | AdminUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdminCreateManyUserInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutUserInput | AdminUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutUserInput | AdminUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type ItemsUncheckedUpdateManyWithoutDonorNestedInput = {
    create?: XOR<ItemsCreateWithoutDonorInput, ItemsUncheckedCreateWithoutDonorInput> | ItemsCreateWithoutDonorInput[] | ItemsUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: ItemsCreateOrConnectWithoutDonorInput | ItemsCreateOrConnectWithoutDonorInput[]
    upsert?: ItemsUpsertWithWhereUniqueWithoutDonorInput | ItemsUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: ItemsCreateManyDonorInputEnvelope
    set?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    disconnect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    delete?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    connect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    update?: ItemsUpdateWithWhereUniqueWithoutDonorInput | ItemsUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: ItemsUpdateManyWithWhereWithoutDonorInput | ItemsUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: ItemsScalarWhereInput | ItemsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStaffInput = {
    create?: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffInput
    connect?: UserWhereUniqueInput
  }

  export type CharityCreateNestedOneWithoutStaffInput = {
    create?: XOR<CharityCreateWithoutStaffInput, CharityUncheckedCreateWithoutStaffInput>
    connectOrCreate?: CharityCreateOrConnectWithoutStaffInput
    connect?: CharityWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffInput
    upsert?: UserUpsertWithoutStaffInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStaffInput, UserUpdateWithoutStaffInput>, UserUncheckedUpdateWithoutStaffInput>
  }

  export type CharityUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<CharityCreateWithoutStaffInput, CharityUncheckedCreateWithoutStaffInput>
    connectOrCreate?: CharityCreateOrConnectWithoutStaffInput
    upsert?: CharityUpsertWithoutStaffInput
    connect?: CharityWhereUniqueInput
    update?: XOR<XOR<CharityUpdateToOneWithWhereWithoutStaffInput, CharityUpdateWithoutStaffInput>, CharityUncheckedUpdateWithoutStaffInput>
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type ItemsCreateSizeInput = {
    set: $Enums.Size[]
  }

  export type ItemsCreateConditionInput = {
    set: $Enums.Condition[]
  }

  export type ItemsCreateTimeInput = {
    set: $Enums.Times[]
  }

  export type UserCreateNestedOneWithoutItemsInput = {
    create?: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemsInput
    connect?: UserWhereUniqueInput
  }

  export type CharityCreateNestedOneWithoutItemsInput = {
    create?: XOR<CharityCreateWithoutItemsInput, CharityUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CharityCreateOrConnectWithoutItemsInput
    connect?: CharityWhereUniqueInput
  }

  export type ItemsUpdateSizeInput = {
    set?: $Enums.Size[]
    push?: $Enums.Size | $Enums.Size[]
  }

  export type ItemsUpdateConditionInput = {
    set?: $Enums.Condition[]
    push?: $Enums.Condition | $Enums.Condition[]
  }

  export type ItemsUpdateTimeInput = {
    set?: $Enums.Times[]
    push?: $Enums.Times | $Enums.Times[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemsInput
    upsert?: UserUpsertWithoutItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutItemsInput, UserUpdateWithoutItemsInput>, UserUncheckedUpdateWithoutItemsInput>
  }

  export type CharityUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CharityCreateWithoutItemsInput, CharityUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CharityCreateOrConnectWithoutItemsInput
    upsert?: CharityUpsertWithoutItemsInput
    connect?: CharityWhereUniqueInput
    update?: XOR<XOR<CharityUpdateToOneWithWhereWithoutItemsInput, CharityUpdateWithoutItemsInput>, CharityUncheckedUpdateWithoutItemsInput>
  }

  export type StaffCreateNestedManyWithoutCharityInput = {
    create?: XOR<StaffCreateWithoutCharityInput, StaffUncheckedCreateWithoutCharityInput> | StaffCreateWithoutCharityInput[] | StaffUncheckedCreateWithoutCharityInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutCharityInput | StaffCreateOrConnectWithoutCharityInput[]
    createMany?: StaffCreateManyCharityInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type ItemsCreateNestedManyWithoutCharityInput = {
    create?: XOR<ItemsCreateWithoutCharityInput, ItemsUncheckedCreateWithoutCharityInput> | ItemsCreateWithoutCharityInput[] | ItemsUncheckedCreateWithoutCharityInput[]
    connectOrCreate?: ItemsCreateOrConnectWithoutCharityInput | ItemsCreateOrConnectWithoutCharityInput[]
    createMany?: ItemsCreateManyCharityInputEnvelope
    connect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
  }

  export type StaffUncheckedCreateNestedManyWithoutCharityInput = {
    create?: XOR<StaffCreateWithoutCharityInput, StaffUncheckedCreateWithoutCharityInput> | StaffCreateWithoutCharityInput[] | StaffUncheckedCreateWithoutCharityInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutCharityInput | StaffCreateOrConnectWithoutCharityInput[]
    createMany?: StaffCreateManyCharityInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type ItemsUncheckedCreateNestedManyWithoutCharityInput = {
    create?: XOR<ItemsCreateWithoutCharityInput, ItemsUncheckedCreateWithoutCharityInput> | ItemsCreateWithoutCharityInput[] | ItemsUncheckedCreateWithoutCharityInput[]
    connectOrCreate?: ItemsCreateOrConnectWithoutCharityInput | ItemsCreateOrConnectWithoutCharityInput[]
    createMany?: ItemsCreateManyCharityInputEnvelope
    connect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
  }

  export type StaffUpdateManyWithoutCharityNestedInput = {
    create?: XOR<StaffCreateWithoutCharityInput, StaffUncheckedCreateWithoutCharityInput> | StaffCreateWithoutCharityInput[] | StaffUncheckedCreateWithoutCharityInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutCharityInput | StaffCreateOrConnectWithoutCharityInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutCharityInput | StaffUpsertWithWhereUniqueWithoutCharityInput[]
    createMany?: StaffCreateManyCharityInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutCharityInput | StaffUpdateWithWhereUniqueWithoutCharityInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutCharityInput | StaffUpdateManyWithWhereWithoutCharityInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type ItemsUpdateManyWithoutCharityNestedInput = {
    create?: XOR<ItemsCreateWithoutCharityInput, ItemsUncheckedCreateWithoutCharityInput> | ItemsCreateWithoutCharityInput[] | ItemsUncheckedCreateWithoutCharityInput[]
    connectOrCreate?: ItemsCreateOrConnectWithoutCharityInput | ItemsCreateOrConnectWithoutCharityInput[]
    upsert?: ItemsUpsertWithWhereUniqueWithoutCharityInput | ItemsUpsertWithWhereUniqueWithoutCharityInput[]
    createMany?: ItemsCreateManyCharityInputEnvelope
    set?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    disconnect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    delete?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    connect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    update?: ItemsUpdateWithWhereUniqueWithoutCharityInput | ItemsUpdateWithWhereUniqueWithoutCharityInput[]
    updateMany?: ItemsUpdateManyWithWhereWithoutCharityInput | ItemsUpdateManyWithWhereWithoutCharityInput[]
    deleteMany?: ItemsScalarWhereInput | ItemsScalarWhereInput[]
  }

  export type StaffUncheckedUpdateManyWithoutCharityNestedInput = {
    create?: XOR<StaffCreateWithoutCharityInput, StaffUncheckedCreateWithoutCharityInput> | StaffCreateWithoutCharityInput[] | StaffUncheckedCreateWithoutCharityInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutCharityInput | StaffCreateOrConnectWithoutCharityInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutCharityInput | StaffUpsertWithWhereUniqueWithoutCharityInput[]
    createMany?: StaffCreateManyCharityInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutCharityInput | StaffUpdateWithWhereUniqueWithoutCharityInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutCharityInput | StaffUpdateManyWithWhereWithoutCharityInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type ItemsUncheckedUpdateManyWithoutCharityNestedInput = {
    create?: XOR<ItemsCreateWithoutCharityInput, ItemsUncheckedCreateWithoutCharityInput> | ItemsCreateWithoutCharityInput[] | ItemsUncheckedCreateWithoutCharityInput[]
    connectOrCreate?: ItemsCreateOrConnectWithoutCharityInput | ItemsCreateOrConnectWithoutCharityInput[]
    upsert?: ItemsUpsertWithWhereUniqueWithoutCharityInput | ItemsUpsertWithWhereUniqueWithoutCharityInput[]
    createMany?: ItemsCreateManyCharityInputEnvelope
    set?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    disconnect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    delete?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    connect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    update?: ItemsUpdateWithWhereUniqueWithoutCharityInput | ItemsUpdateWithWhereUniqueWithoutCharityInput[]
    updateMany?: ItemsUpdateManyWithWhereWithoutCharityInput | ItemsUpdateManyWithWhereWithoutCharityInput[]
    deleteMany?: ItemsScalarWhereInput | ItemsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StaffCreateWithoutDonorInput = {
    Charity: CharityCreateNestedOneWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutDonorInput = {
    Staff_ID?: number
    Charity_ID: number
  }

  export type StaffCreateOrConnectWithoutDonorInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutDonorInput, StaffUncheckedCreateWithoutDonorInput>
  }

  export type StaffCreateManyDonorInputEnvelope = {
    data: StaffCreateManyDonorInput | StaffCreateManyDonorInput[]
    skipDuplicates?: boolean
  }

  export type AdminCreateWithoutUserInput = {

  }

  export type AdminUncheckedCreateWithoutUserInput = {
    Admin_ID?: number
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type AdminCreateManyUserInputEnvelope = {
    data: AdminCreateManyUserInput | AdminCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ItemsCreateWithoutDonorInput = {
    Item_Name: string
    Brand: string
    Size?: ItemsCreateSizeInput | $Enums.Size[]
    Colour: string
    Condition?: ItemsCreateConditionInput | $Enums.Condition[]
    Image: string
    Time?: ItemsCreateTimeInput | $Enums.Times[]
    Pickup_Date: Date | string
    Distributed?: boolean
    Date_Added?: Date | string
    Charity: CharityCreateNestedOneWithoutItemsInput
  }

  export type ItemsUncheckedCreateWithoutDonorInput = {
    Item_No?: number
    Item_Name: string
    Brand: string
    Size?: ItemsCreateSizeInput | $Enums.Size[]
    Colour: string
    Condition?: ItemsCreateConditionInput | $Enums.Condition[]
    Image: string
    Time?: ItemsCreateTimeInput | $Enums.Times[]
    Pickup_Date: Date | string
    Distributed?: boolean
    Charity_ID: number
    Date_Added?: Date | string
  }

  export type ItemsCreateOrConnectWithoutDonorInput = {
    where: ItemsWhereUniqueInput
    create: XOR<ItemsCreateWithoutDonorInput, ItemsUncheckedCreateWithoutDonorInput>
  }

  export type ItemsCreateManyDonorInputEnvelope = {
    data: ItemsCreateManyDonorInput | ItemsCreateManyDonorInput[]
    skipDuplicates?: boolean
  }

  export type StaffUpsertWithWhereUniqueWithoutDonorInput = {
    where: StaffWhereUniqueInput
    update: XOR<StaffUpdateWithoutDonorInput, StaffUncheckedUpdateWithoutDonorInput>
    create: XOR<StaffCreateWithoutDonorInput, StaffUncheckedCreateWithoutDonorInput>
  }

  export type StaffUpdateWithWhereUniqueWithoutDonorInput = {
    where: StaffWhereUniqueInput
    data: XOR<StaffUpdateWithoutDonorInput, StaffUncheckedUpdateWithoutDonorInput>
  }

  export type StaffUpdateManyWithWhereWithoutDonorInput = {
    where: StaffScalarWhereInput
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyWithoutDonorInput>
  }

  export type StaffScalarWhereInput = {
    AND?: StaffScalarWhereInput | StaffScalarWhereInput[]
    OR?: StaffScalarWhereInput[]
    NOT?: StaffScalarWhereInput | StaffScalarWhereInput[]
    Staff_ID?: IntFilter<"Staff"> | number
    User_ID?: IntFilter<"Staff"> | number
    Charity_ID?: IntFilter<"Staff"> | number
  }

  export type AdminUpsertWithWhereUniqueWithoutUserInput = {
    where: AdminWhereUniqueInput
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type AdminUpdateWithWhereUniqueWithoutUserInput = {
    where: AdminWhereUniqueInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateManyWithWhereWithoutUserInput = {
    where: AdminScalarWhereInput
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyWithoutUserInput>
  }

  export type AdminScalarWhereInput = {
    AND?: AdminScalarWhereInput | AdminScalarWhereInput[]
    OR?: AdminScalarWhereInput[]
    NOT?: AdminScalarWhereInput | AdminScalarWhereInput[]
    Admin_ID?: IntFilter<"Admin"> | number
    User_ID?: IntFilter<"Admin"> | number
  }

  export type ItemsUpsertWithWhereUniqueWithoutDonorInput = {
    where: ItemsWhereUniqueInput
    update: XOR<ItemsUpdateWithoutDonorInput, ItemsUncheckedUpdateWithoutDonorInput>
    create: XOR<ItemsCreateWithoutDonorInput, ItemsUncheckedCreateWithoutDonorInput>
  }

  export type ItemsUpdateWithWhereUniqueWithoutDonorInput = {
    where: ItemsWhereUniqueInput
    data: XOR<ItemsUpdateWithoutDonorInput, ItemsUncheckedUpdateWithoutDonorInput>
  }

  export type ItemsUpdateManyWithWhereWithoutDonorInput = {
    where: ItemsScalarWhereInput
    data: XOR<ItemsUpdateManyMutationInput, ItemsUncheckedUpdateManyWithoutDonorInput>
  }

  export type ItemsScalarWhereInput = {
    AND?: ItemsScalarWhereInput | ItemsScalarWhereInput[]
    OR?: ItemsScalarWhereInput[]
    NOT?: ItemsScalarWhereInput | ItemsScalarWhereInput[]
    Item_No?: IntFilter<"Items"> | number
    Item_Name?: StringFilter<"Items"> | string
    Brand?: StringFilter<"Items"> | string
    Size?: EnumSizeNullableListFilter<"Items">
    Colour?: StringFilter<"Items"> | string
    Condition?: EnumConditionNullableListFilter<"Items">
    Image?: StringFilter<"Items"> | string
    Time?: EnumTimesNullableListFilter<"Items">
    Pickup_Date?: DateTimeFilter<"Items"> | Date | string
    Distributed?: BoolFilter<"Items"> | boolean
    Donor_ID?: IntFilter<"Items"> | number
    Charity_ID?: IntFilter<"Items"> | number
    Date_Added?: DateTimeFilter<"Items"> | Date | string
  }

  export type UserCreateWithoutStaffInput = {
    Username: string
    Email: string
    Phone?: string | null
    Password: string
    Address: string
    Postcode: string
    Role?: UserCreateRoleInput | $Enums.Role[]
    Admin?: AdminCreateNestedManyWithoutUserInput
    Items?: ItemsCreateNestedManyWithoutDonorInput
  }

  export type UserUncheckedCreateWithoutStaffInput = {
    User_ID?: number
    Username: string
    Email: string
    Phone?: string | null
    Password: string
    Address: string
    Postcode: string
    Role?: UserCreateRoleInput | $Enums.Role[]
    Admin?: AdminUncheckedCreateNestedManyWithoutUserInput
    Items?: ItemsUncheckedCreateNestedManyWithoutDonorInput
  }

  export type UserCreateOrConnectWithoutStaffInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
  }

  export type CharityCreateWithoutStaffInput = {
    Charity_Name: string
    About: string
    Logo: string
    Items?: ItemsCreateNestedManyWithoutCharityInput
  }

  export type CharityUncheckedCreateWithoutStaffInput = {
    Charity_ID?: number
    Charity_Name: string
    About: string
    Logo: string
    Items?: ItemsUncheckedCreateNestedManyWithoutCharityInput
  }

  export type CharityCreateOrConnectWithoutStaffInput = {
    where: CharityWhereUniqueInput
    create: XOR<CharityCreateWithoutStaffInput, CharityUncheckedCreateWithoutStaffInput>
  }

  export type UserUpsertWithoutStaffInput = {
    update: XOR<UserUpdateWithoutStaffInput, UserUncheckedUpdateWithoutStaffInput>
    create: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStaffInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStaffInput, UserUncheckedUpdateWithoutStaffInput>
  }

  export type UserUpdateWithoutStaffInput = {
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Postcode?: StringFieldUpdateOperationsInput | string
    Role?: UserUpdateRoleInput | $Enums.Role[]
    Admin?: AdminUpdateManyWithoutUserNestedInput
    Items?: ItemsUpdateManyWithoutDonorNestedInput
  }

  export type UserUncheckedUpdateWithoutStaffInput = {
    User_ID?: IntFieldUpdateOperationsInput | number
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Postcode?: StringFieldUpdateOperationsInput | string
    Role?: UserUpdateRoleInput | $Enums.Role[]
    Admin?: AdminUncheckedUpdateManyWithoutUserNestedInput
    Items?: ItemsUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type CharityUpsertWithoutStaffInput = {
    update: XOR<CharityUpdateWithoutStaffInput, CharityUncheckedUpdateWithoutStaffInput>
    create: XOR<CharityCreateWithoutStaffInput, CharityUncheckedCreateWithoutStaffInput>
    where?: CharityWhereInput
  }

  export type CharityUpdateToOneWithWhereWithoutStaffInput = {
    where?: CharityWhereInput
    data: XOR<CharityUpdateWithoutStaffInput, CharityUncheckedUpdateWithoutStaffInput>
  }

  export type CharityUpdateWithoutStaffInput = {
    Charity_Name?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
    Logo?: StringFieldUpdateOperationsInput | string
    Items?: ItemsUpdateManyWithoutCharityNestedInput
  }

  export type CharityUncheckedUpdateWithoutStaffInput = {
    Charity_ID?: IntFieldUpdateOperationsInput | number
    Charity_Name?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
    Logo?: StringFieldUpdateOperationsInput | string
    Items?: ItemsUncheckedUpdateManyWithoutCharityNestedInput
  }

  export type UserCreateWithoutAdminInput = {
    Username: string
    Email: string
    Phone?: string | null
    Password: string
    Address: string
    Postcode: string
    Role?: UserCreateRoleInput | $Enums.Role[]
    Staff?: StaffCreateNestedManyWithoutDonorInput
    Items?: ItemsCreateNestedManyWithoutDonorInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    User_ID?: number
    Username: string
    Email: string
    Phone?: string | null
    Password: string
    Address: string
    Postcode: string
    Role?: UserCreateRoleInput | $Enums.Role[]
    Staff?: StaffUncheckedCreateNestedManyWithoutDonorInput
    Items?: ItemsUncheckedCreateNestedManyWithoutDonorInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Postcode?: StringFieldUpdateOperationsInput | string
    Role?: UserUpdateRoleInput | $Enums.Role[]
    Staff?: StaffUpdateManyWithoutDonorNestedInput
    Items?: ItemsUpdateManyWithoutDonorNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    User_ID?: IntFieldUpdateOperationsInput | number
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Postcode?: StringFieldUpdateOperationsInput | string
    Role?: UserUpdateRoleInput | $Enums.Role[]
    Staff?: StaffUncheckedUpdateManyWithoutDonorNestedInput
    Items?: ItemsUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type UserCreateWithoutItemsInput = {
    Username: string
    Email: string
    Phone?: string | null
    Password: string
    Address: string
    Postcode: string
    Role?: UserCreateRoleInput | $Enums.Role[]
    Staff?: StaffCreateNestedManyWithoutDonorInput
    Admin?: AdminCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutItemsInput = {
    User_ID?: number
    Username: string
    Email: string
    Phone?: string | null
    Password: string
    Address: string
    Postcode: string
    Role?: UserCreateRoleInput | $Enums.Role[]
    Staff?: StaffUncheckedCreateNestedManyWithoutDonorInput
    Admin?: AdminUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
  }

  export type CharityCreateWithoutItemsInput = {
    Charity_Name: string
    About: string
    Logo: string
    Staff?: StaffCreateNestedManyWithoutCharityInput
  }

  export type CharityUncheckedCreateWithoutItemsInput = {
    Charity_ID?: number
    Charity_Name: string
    About: string
    Logo: string
    Staff?: StaffUncheckedCreateNestedManyWithoutCharityInput
  }

  export type CharityCreateOrConnectWithoutItemsInput = {
    where: CharityWhereUniqueInput
    create: XOR<CharityCreateWithoutItemsInput, CharityUncheckedCreateWithoutItemsInput>
  }

  export type UserUpsertWithoutItemsInput = {
    update: XOR<UserUpdateWithoutItemsInput, UserUncheckedUpdateWithoutItemsInput>
    create: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutItemsInput, UserUncheckedUpdateWithoutItemsInput>
  }

  export type UserUpdateWithoutItemsInput = {
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Postcode?: StringFieldUpdateOperationsInput | string
    Role?: UserUpdateRoleInput | $Enums.Role[]
    Staff?: StaffUpdateManyWithoutDonorNestedInput
    Admin?: AdminUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutItemsInput = {
    User_ID?: IntFieldUpdateOperationsInput | number
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Postcode?: StringFieldUpdateOperationsInput | string
    Role?: UserUpdateRoleInput | $Enums.Role[]
    Staff?: StaffUncheckedUpdateManyWithoutDonorNestedInput
    Admin?: AdminUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CharityUpsertWithoutItemsInput = {
    update: XOR<CharityUpdateWithoutItemsInput, CharityUncheckedUpdateWithoutItemsInput>
    create: XOR<CharityCreateWithoutItemsInput, CharityUncheckedCreateWithoutItemsInput>
    where?: CharityWhereInput
  }

  export type CharityUpdateToOneWithWhereWithoutItemsInput = {
    where?: CharityWhereInput
    data: XOR<CharityUpdateWithoutItemsInput, CharityUncheckedUpdateWithoutItemsInput>
  }

  export type CharityUpdateWithoutItemsInput = {
    Charity_Name?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
    Logo?: StringFieldUpdateOperationsInput | string
    Staff?: StaffUpdateManyWithoutCharityNestedInput
  }

  export type CharityUncheckedUpdateWithoutItemsInput = {
    Charity_ID?: IntFieldUpdateOperationsInput | number
    Charity_Name?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
    Logo?: StringFieldUpdateOperationsInput | string
    Staff?: StaffUncheckedUpdateManyWithoutCharityNestedInput
  }

  export type StaffCreateWithoutCharityInput = {
    Donor: UserCreateNestedOneWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutCharityInput = {
    Staff_ID?: number
    User_ID: number
  }

  export type StaffCreateOrConnectWithoutCharityInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutCharityInput, StaffUncheckedCreateWithoutCharityInput>
  }

  export type StaffCreateManyCharityInputEnvelope = {
    data: StaffCreateManyCharityInput | StaffCreateManyCharityInput[]
    skipDuplicates?: boolean
  }

  export type ItemsCreateWithoutCharityInput = {
    Item_Name: string
    Brand: string
    Size?: ItemsCreateSizeInput | $Enums.Size[]
    Colour: string
    Condition?: ItemsCreateConditionInput | $Enums.Condition[]
    Image: string
    Time?: ItemsCreateTimeInput | $Enums.Times[]
    Pickup_Date: Date | string
    Distributed?: boolean
    Date_Added?: Date | string
    Donor: UserCreateNestedOneWithoutItemsInput
  }

  export type ItemsUncheckedCreateWithoutCharityInput = {
    Item_No?: number
    Item_Name: string
    Brand: string
    Size?: ItemsCreateSizeInput | $Enums.Size[]
    Colour: string
    Condition?: ItemsCreateConditionInput | $Enums.Condition[]
    Image: string
    Time?: ItemsCreateTimeInput | $Enums.Times[]
    Pickup_Date: Date | string
    Distributed?: boolean
    Donor_ID: number
    Date_Added?: Date | string
  }

  export type ItemsCreateOrConnectWithoutCharityInput = {
    where: ItemsWhereUniqueInput
    create: XOR<ItemsCreateWithoutCharityInput, ItemsUncheckedCreateWithoutCharityInput>
  }

  export type ItemsCreateManyCharityInputEnvelope = {
    data: ItemsCreateManyCharityInput | ItemsCreateManyCharityInput[]
    skipDuplicates?: boolean
  }

  export type StaffUpsertWithWhereUniqueWithoutCharityInput = {
    where: StaffWhereUniqueInput
    update: XOR<StaffUpdateWithoutCharityInput, StaffUncheckedUpdateWithoutCharityInput>
    create: XOR<StaffCreateWithoutCharityInput, StaffUncheckedCreateWithoutCharityInput>
  }

  export type StaffUpdateWithWhereUniqueWithoutCharityInput = {
    where: StaffWhereUniqueInput
    data: XOR<StaffUpdateWithoutCharityInput, StaffUncheckedUpdateWithoutCharityInput>
  }

  export type StaffUpdateManyWithWhereWithoutCharityInput = {
    where: StaffScalarWhereInput
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyWithoutCharityInput>
  }

  export type ItemsUpsertWithWhereUniqueWithoutCharityInput = {
    where: ItemsWhereUniqueInput
    update: XOR<ItemsUpdateWithoutCharityInput, ItemsUncheckedUpdateWithoutCharityInput>
    create: XOR<ItemsCreateWithoutCharityInput, ItemsUncheckedCreateWithoutCharityInput>
  }

  export type ItemsUpdateWithWhereUniqueWithoutCharityInput = {
    where: ItemsWhereUniqueInput
    data: XOR<ItemsUpdateWithoutCharityInput, ItemsUncheckedUpdateWithoutCharityInput>
  }

  export type ItemsUpdateManyWithWhereWithoutCharityInput = {
    where: ItemsScalarWhereInput
    data: XOR<ItemsUpdateManyMutationInput, ItemsUncheckedUpdateManyWithoutCharityInput>
  }

  export type StaffCreateManyDonorInput = {
    Staff_ID?: number
    Charity_ID: number
  }

  export type AdminCreateManyUserInput = {
    Admin_ID?: number
  }

  export type ItemsCreateManyDonorInput = {
    Item_No?: number
    Item_Name: string
    Brand: string
    Size?: ItemsCreateSizeInput | $Enums.Size[]
    Colour: string
    Condition?: ItemsCreateConditionInput | $Enums.Condition[]
    Image: string
    Time?: ItemsCreateTimeInput | $Enums.Times[]
    Pickup_Date: Date | string
    Distributed?: boolean
    Charity_ID: number
    Date_Added?: Date | string
  }

  export type StaffUpdateWithoutDonorInput = {
    Charity?: CharityUpdateOneRequiredWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutDonorInput = {
    Staff_ID?: IntFieldUpdateOperationsInput | number
    Charity_ID?: IntFieldUpdateOperationsInput | number
  }

  export type StaffUncheckedUpdateManyWithoutDonorInput = {
    Staff_ID?: IntFieldUpdateOperationsInput | number
    Charity_ID?: IntFieldUpdateOperationsInput | number
  }

  export type AdminUpdateWithoutUserInput = {

  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    Admin_ID?: IntFieldUpdateOperationsInput | number
  }

  export type AdminUncheckedUpdateManyWithoutUserInput = {
    Admin_ID?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsUpdateWithoutDonorInput = {
    Item_Name?: StringFieldUpdateOperationsInput | string
    Brand?: StringFieldUpdateOperationsInput | string
    Size?: ItemsUpdateSizeInput | $Enums.Size[]
    Colour?: StringFieldUpdateOperationsInput | string
    Condition?: ItemsUpdateConditionInput | $Enums.Condition[]
    Image?: StringFieldUpdateOperationsInput | string
    Time?: ItemsUpdateTimeInput | $Enums.Times[]
    Pickup_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Distributed?: BoolFieldUpdateOperationsInput | boolean
    Date_Added?: DateTimeFieldUpdateOperationsInput | Date | string
    Charity?: CharityUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemsUncheckedUpdateWithoutDonorInput = {
    Item_No?: IntFieldUpdateOperationsInput | number
    Item_Name?: StringFieldUpdateOperationsInput | string
    Brand?: StringFieldUpdateOperationsInput | string
    Size?: ItemsUpdateSizeInput | $Enums.Size[]
    Colour?: StringFieldUpdateOperationsInput | string
    Condition?: ItemsUpdateConditionInput | $Enums.Condition[]
    Image?: StringFieldUpdateOperationsInput | string
    Time?: ItemsUpdateTimeInput | $Enums.Times[]
    Pickup_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Distributed?: BoolFieldUpdateOperationsInput | boolean
    Charity_ID?: IntFieldUpdateOperationsInput | number
    Date_Added?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemsUncheckedUpdateManyWithoutDonorInput = {
    Item_No?: IntFieldUpdateOperationsInput | number
    Item_Name?: StringFieldUpdateOperationsInput | string
    Brand?: StringFieldUpdateOperationsInput | string
    Size?: ItemsUpdateSizeInput | $Enums.Size[]
    Colour?: StringFieldUpdateOperationsInput | string
    Condition?: ItemsUpdateConditionInput | $Enums.Condition[]
    Image?: StringFieldUpdateOperationsInput | string
    Time?: ItemsUpdateTimeInput | $Enums.Times[]
    Pickup_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Distributed?: BoolFieldUpdateOperationsInput | boolean
    Charity_ID?: IntFieldUpdateOperationsInput | number
    Date_Added?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffCreateManyCharityInput = {
    Staff_ID?: number
    User_ID: number
  }

  export type ItemsCreateManyCharityInput = {
    Item_No?: number
    Item_Name: string
    Brand: string
    Size?: ItemsCreateSizeInput | $Enums.Size[]
    Colour: string
    Condition?: ItemsCreateConditionInput | $Enums.Condition[]
    Image: string
    Time?: ItemsCreateTimeInput | $Enums.Times[]
    Pickup_Date: Date | string
    Distributed?: boolean
    Donor_ID: number
    Date_Added?: Date | string
  }

  export type StaffUpdateWithoutCharityInput = {
    Donor?: UserUpdateOneRequiredWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutCharityInput = {
    Staff_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
  }

  export type StaffUncheckedUpdateManyWithoutCharityInput = {
    Staff_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsUpdateWithoutCharityInput = {
    Item_Name?: StringFieldUpdateOperationsInput | string
    Brand?: StringFieldUpdateOperationsInput | string
    Size?: ItemsUpdateSizeInput | $Enums.Size[]
    Colour?: StringFieldUpdateOperationsInput | string
    Condition?: ItemsUpdateConditionInput | $Enums.Condition[]
    Image?: StringFieldUpdateOperationsInput | string
    Time?: ItemsUpdateTimeInput | $Enums.Times[]
    Pickup_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Distributed?: BoolFieldUpdateOperationsInput | boolean
    Date_Added?: DateTimeFieldUpdateOperationsInput | Date | string
    Donor?: UserUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemsUncheckedUpdateWithoutCharityInput = {
    Item_No?: IntFieldUpdateOperationsInput | number
    Item_Name?: StringFieldUpdateOperationsInput | string
    Brand?: StringFieldUpdateOperationsInput | string
    Size?: ItemsUpdateSizeInput | $Enums.Size[]
    Colour?: StringFieldUpdateOperationsInput | string
    Condition?: ItemsUpdateConditionInput | $Enums.Condition[]
    Image?: StringFieldUpdateOperationsInput | string
    Time?: ItemsUpdateTimeInput | $Enums.Times[]
    Pickup_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Distributed?: BoolFieldUpdateOperationsInput | boolean
    Donor_ID?: IntFieldUpdateOperationsInput | number
    Date_Added?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemsUncheckedUpdateManyWithoutCharityInput = {
    Item_No?: IntFieldUpdateOperationsInput | number
    Item_Name?: StringFieldUpdateOperationsInput | string
    Brand?: StringFieldUpdateOperationsInput | string
    Size?: ItemsUpdateSizeInput | $Enums.Size[]
    Colour?: StringFieldUpdateOperationsInput | string
    Condition?: ItemsUpdateConditionInput | $Enums.Condition[]
    Image?: StringFieldUpdateOperationsInput | string
    Time?: ItemsUpdateTimeInput | $Enums.Times[]
    Pickup_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Distributed?: BoolFieldUpdateOperationsInput | boolean
    Donor_ID?: IntFieldUpdateOperationsInput | number
    Date_Added?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}