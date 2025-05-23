/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V2StageDelay = {
  duration?: string | undefined;
  until?: Date | undefined;
};

/** @internal */
export const V2StageDelay$inboundSchema: z.ZodType<
  V2StageDelay,
  z.ZodTypeDef,
  unknown
> = z.object({
  duration: z.string().optional(),
  until: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
});

/** @internal */
export type V2StageDelay$Outbound = {
  duration?: string | undefined;
  until?: string | undefined;
};

/** @internal */
export const V2StageDelay$outboundSchema: z.ZodType<
  V2StageDelay$Outbound,
  z.ZodTypeDef,
  V2StageDelay
> = z.object({
  duration: z.string().optional(),
  until: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2StageDelay$ {
  /** @deprecated use `V2StageDelay$inboundSchema` instead. */
  export const inboundSchema = V2StageDelay$inboundSchema;
  /** @deprecated use `V2StageDelay$outboundSchema` instead. */
  export const outboundSchema = V2StageDelay$outboundSchema;
  /** @deprecated use `V2StageDelay$Outbound` instead. */
  export type Outbound = V2StageDelay$Outbound;
}

export function v2StageDelayToJSON(v2StageDelay: V2StageDelay): string {
  return JSON.stringify(V2StageDelay$outboundSchema.parse(v2StageDelay));
}

export function v2StageDelayFromJSON(
  jsonString: string,
): SafeParseResult<V2StageDelay, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2StageDelay$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2StageDelay' from JSON`,
  );
}
