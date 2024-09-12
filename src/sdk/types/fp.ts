/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

/**
 * A monad that captures the result of a function call or an error if it was not
 * successful. Railway programming, enabled by this type, can be a nicer
 * alternative to traditional exception throwing because it allows functions to
 * declare all _known_ errors with static types and then check for them
 * exhaustively in application code. Thrown exception have a type of `unknown`
 * and break out of regular control flow of programs making them harder to
 * inspect and more verbose work with due to try-catch blocks.
 */
export type Result<T, E = unknown> =
  | { ok: true; value: T; error?: never }
  | { ok: false; value?: never; error: E };

export function OK<V>(value: V): Result<V, never> {
  return { ok: true, value };
}

export function ERR<E>(error: E): Result<never, E> {
  return { ok: false, error };
}

/**
 * unwrap is a convenience function for extracting a value from a result or
 * throwing if there was an error.
 */
export function unwrap<T>(r: Result<T, unknown>): T {
  if (!r.ok) {
    throw r.error;
  }
  return r.value;
}

/**
 * unwrapAsync is a convenience function for resolving a value from a Promise
 * of a result or rejecting if an error occurred.
 */
export async function unwrapAsync<T>(
  pr: Promise<Result<T, unknown>>,
): Promise<T> {
  const r = await pr;
  if (!r.ok) {
    throw r.error;
  }

  return r.value;
}
