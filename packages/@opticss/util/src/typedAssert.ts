import * as assert from "assert";

export function isDefined<X>(value: X | undefined): {and: (cb: (defValue: X) => unknown) => void } {
  if (value) {
    return {
      and: function(cb: (v: X) => void) {
        cb(value);
      },
    };
  } else {
    assert(value !== undefined, `expected to be defined`);
    throw new Error("this is unreachable");
  }
}

export function isNotNull<X>(value: X | null): {and: (cb: (defValue: X) => unknown) => void } {
  if (value) {
    return {
      and: function(cb: (v: X) => void) {
        cb(value);
      },
    };
  } else {
    assert(value !== null, `expected to not be null`);
    throw new Error("this is unreachable");
  }
}

export function isExisting<X>(value: X | null | undefined): {and: (cb: (defValue: X) => unknown) => void } {
  if (value) {
    return {
      and: function(cb: (v: X) => void) {
        cb(value);
      },
    };
  } else {
    assert(value, `expected to exist`);
    throw new Error("this is unreachable");
  }
}

export function isType<
  ArgumentType,
  AssertedType extends ArgumentType
>(
  typeGuard: (x: ArgumentType) => x is AssertedType,
  x: ArgumentType,

): { and: (cb: (x: AssertedType) => unknown) => void } {
  if (typeGuard(x)) {
    return {
      and: function(cb: (x: AssertedType) => void) {
        cb(x);
      },
    };
  } else {
    assert.fail(`is not the expected type`);
    throw new Error("this is unreachable");
  }
}
