/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V2Posting = {
  amount: bigint;
  asset: string;
  destination: string;
  source: string;
};

/** @internal */
export const V2Posting$inboundSchema: z.ZodType<
  V2Posting,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number().transform(v => BigInt(v)),
  asset: z.string(),
  destination: z.string(),
  source: z.string(),
});

/** @internal */
export type V2Posting$Outbound = {
  amount: number;
  asset: string;
  destination: string;
  source: string;
};

/** @internal */
export const V2Posting$outboundSchema: z.ZodType<
  V2Posting$Outbound,
  z.ZodTypeDef,
  V2Posting
> = z.object({
  amount: z.bigint().transform(v => Number(v)),
  asset: z.string(),
  destination: z.string(),
  source: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2Posting$ {
  /** @deprecated use `V2Posting$inboundSchema` instead. */
  export const inboundSchema = V2Posting$inboundSchema;
  /** @deprecated use `V2Posting$outboundSchema` instead. */
  export const outboundSchema = V2Posting$outboundSchema;
  /** @deprecated use `V2Posting$Outbound` instead. */
  export type Outbound = V2Posting$Outbound;
}

export function v2PostingToJSON(v2Posting: V2Posting): string {
  return JSON.stringify(V2Posting$outboundSchema.parse(v2Posting));
}

export function v2PostingFromJSON(
  jsonString: string,
): SafeParseResult<V2Posting, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2Posting$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2Posting' from JSON`,
  );
}
