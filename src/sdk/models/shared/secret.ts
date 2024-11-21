/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Secret = {
  clear: string;
  id: string;
  lastDigits: string;
  metadata?: { [k: string]: any } | undefined;
  name: string;
};

/** @internal */
export const Secret$inboundSchema: z.ZodType<Secret, z.ZodTypeDef, unknown> = z
  .object({
    clear: z.string(),
    id: z.string(),
    lastDigits: z.string(),
    metadata: z.record(z.any()).optional(),
    name: z.string(),
  });

/** @internal */
export type Secret$Outbound = {
  clear: string;
  id: string;
  lastDigits: string;
  metadata?: { [k: string]: any } | undefined;
  name: string;
};

/** @internal */
export const Secret$outboundSchema: z.ZodType<
  Secret$Outbound,
  z.ZodTypeDef,
  Secret
> = z.object({
  clear: z.string(),
  id: z.string(),
  lastDigits: z.string(),
  metadata: z.record(z.any()).optional(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Secret$ {
  /** @deprecated use `Secret$inboundSchema` instead. */
  export const inboundSchema = Secret$inboundSchema;
  /** @deprecated use `Secret$outboundSchema` instead. */
  export const outboundSchema = Secret$outboundSchema;
  /** @deprecated use `Secret$Outbound` instead. */
  export type Outbound = Secret$Outbound;
}

export function secretToJSON(secret: Secret): string {
  return JSON.stringify(Secret$outboundSchema.parse(secret));
}

export function secretFromJSON(
  jsonString: string,
): SafeParseResult<Secret, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Secret$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Secret' from JSON`,
  );
}
