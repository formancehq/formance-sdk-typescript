/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V3PoolBalance = {
  amount: bigint;
  asset: string;
};

/** @internal */
export const V3PoolBalance$inboundSchema: z.ZodType<
  V3PoolBalance,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number().transform(v => BigInt(v)),
  asset: z.string(),
});

/** @internal */
export type V3PoolBalance$Outbound = {
  amount: number;
  asset: string;
};

/** @internal */
export const V3PoolBalance$outboundSchema: z.ZodType<
  V3PoolBalance$Outbound,
  z.ZodTypeDef,
  V3PoolBalance
> = z.object({
  amount: z.bigint().transform(v => Number(v)),
  asset: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3PoolBalance$ {
  /** @deprecated use `V3PoolBalance$inboundSchema` instead. */
  export const inboundSchema = V3PoolBalance$inboundSchema;
  /** @deprecated use `V3PoolBalance$outboundSchema` instead. */
  export const outboundSchema = V3PoolBalance$outboundSchema;
  /** @deprecated use `V3PoolBalance$Outbound` instead. */
  export type Outbound = V3PoolBalance$Outbound;
}

export function v3PoolBalanceToJSON(v3PoolBalance: V3PoolBalance): string {
  return JSON.stringify(V3PoolBalance$outboundSchema.parse(v3PoolBalance));
}

export function v3PoolBalanceFromJSON(
  jsonString: string,
): SafeParseResult<V3PoolBalance, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3PoolBalance$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3PoolBalance' from JSON`,
  );
}
