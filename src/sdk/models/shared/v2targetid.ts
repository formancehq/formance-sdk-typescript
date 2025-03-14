/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V2TargetId = string | bigint;

/** @internal */
export const V2TargetId$inboundSchema: z.ZodType<
  V2TargetId,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().transform(v => BigInt(v))]);

/** @internal */
export type V2TargetId$Outbound = string | number;

/** @internal */
export const V2TargetId$outboundSchema: z.ZodType<
  V2TargetId$Outbound,
  z.ZodTypeDef,
  V2TargetId
> = z.union([z.string(), z.bigint().transform(v => Number(v))]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2TargetId$ {
  /** @deprecated use `V2TargetId$inboundSchema` instead. */
  export const inboundSchema = V2TargetId$inboundSchema;
  /** @deprecated use `V2TargetId$outboundSchema` instead. */
  export const outboundSchema = V2TargetId$outboundSchema;
  /** @deprecated use `V2TargetId$Outbound` instead. */
  export type Outbound = V2TargetId$Outbound;
}

export function v2TargetIdToJSON(v2TargetId: V2TargetId): string {
  return JSON.stringify(V2TargetId$outboundSchema.parse(v2TargetId));
}

export function v2TargetIdFromJSON(
  jsonString: string,
): SafeParseResult<V2TargetId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2TargetId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2TargetId' from JSON`,
  );
}
