/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V2LedgerAccountSubject = {
  identifier: string;
  type: string;
};

/** @internal */
export const V2LedgerAccountSubject$inboundSchema: z.ZodType<
  V2LedgerAccountSubject,
  z.ZodTypeDef,
  unknown
> = z.object({
  identifier: z.string(),
  type: z.string(),
});

/** @internal */
export type V2LedgerAccountSubject$Outbound = {
  identifier: string;
  type: string;
};

/** @internal */
export const V2LedgerAccountSubject$outboundSchema: z.ZodType<
  V2LedgerAccountSubject$Outbound,
  z.ZodTypeDef,
  V2LedgerAccountSubject
> = z.object({
  identifier: z.string(),
  type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2LedgerAccountSubject$ {
  /** @deprecated use `V2LedgerAccountSubject$inboundSchema` instead. */
  export const inboundSchema = V2LedgerAccountSubject$inboundSchema;
  /** @deprecated use `V2LedgerAccountSubject$outboundSchema` instead. */
  export const outboundSchema = V2LedgerAccountSubject$outboundSchema;
  /** @deprecated use `V2LedgerAccountSubject$Outbound` instead. */
  export type Outbound = V2LedgerAccountSubject$Outbound;
}

export function v2LedgerAccountSubjectToJSON(
  v2LedgerAccountSubject: V2LedgerAccountSubject,
): string {
  return JSON.stringify(
    V2LedgerAccountSubject$outboundSchema.parse(v2LedgerAccountSubject),
  );
}

export function v2LedgerAccountSubjectFromJSON(
  jsonString: string,
): SafeParseResult<V2LedgerAccountSubject, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2LedgerAccountSubject$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2LedgerAccountSubject' from JSON`,
  );
}
