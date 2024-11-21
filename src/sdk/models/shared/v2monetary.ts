/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V2Monetary = {
  /**
   * The amount of the monetary value.
   */
  amount: bigint;
  /**
   * The asset of the monetary value.
   */
  asset: string;
};

/** @internal */
export const V2Monetary$inboundSchema: z.ZodType<
  V2Monetary,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number().transform(v => BigInt(v)),
  asset: z.string(),
});

/** @internal */
export type V2Monetary$Outbound = {
  amount: number;
  asset: string;
};

/** @internal */
export const V2Monetary$outboundSchema: z.ZodType<
  V2Monetary$Outbound,
  z.ZodTypeDef,
  V2Monetary
> = z.object({
  amount: z.bigint().transform(v => Number(v)),
  asset: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2Monetary$ {
  /** @deprecated use `V2Monetary$inboundSchema` instead. */
  export const inboundSchema = V2Monetary$inboundSchema;
  /** @deprecated use `V2Monetary$outboundSchema` instead. */
  export const outboundSchema = V2Monetary$outboundSchema;
  /** @deprecated use `V2Monetary$Outbound` instead. */
  export type Outbound = V2Monetary$Outbound;
}

export function v2MonetaryToJSON(v2Monetary: V2Monetary): string {
  return JSON.stringify(V2Monetary$outboundSchema.parse(v2Monetary));
}

export function v2MonetaryFromJSON(
  jsonString: string,
): SafeParseResult<V2Monetary, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2Monetary$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2Monetary' from JSON`,
  );
}
