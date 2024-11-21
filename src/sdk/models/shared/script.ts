/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Script = {
  metadata?: { [k: string]: any } | null | undefined;
  plain: string;
  /**
   * Reference to attach to the generated transaction
   */
  reference?: string | undefined;
  vars?: { [k: string]: any } | undefined;
};

/** @internal */
export const Script$inboundSchema: z.ZodType<Script, z.ZodTypeDef, unknown> = z
  .object({
    metadata: z.nullable(z.record(z.any())).optional(),
    plain: z.string(),
    reference: z.string().optional(),
    vars: z.record(z.any()).optional(),
  });

/** @internal */
export type Script$Outbound = {
  metadata?: { [k: string]: any } | null | undefined;
  plain: string;
  reference?: string | undefined;
  vars?: { [k: string]: any } | undefined;
};

/** @internal */
export const Script$outboundSchema: z.ZodType<
  Script$Outbound,
  z.ZodTypeDef,
  Script
> = z.object({
  metadata: z.nullable(z.record(z.any())).optional(),
  plain: z.string(),
  reference: z.string().optional(),
  vars: z.record(z.any()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Script$ {
  /** @deprecated use `Script$inboundSchema` instead. */
  export const inboundSchema = Script$inboundSchema;
  /** @deprecated use `Script$outboundSchema` instead. */
  export const outboundSchema = Script$outboundSchema;
  /** @deprecated use `Script$Outbound` instead. */
  export type Outbound = Script$Outbound;
}

export function scriptToJSON(script: Script): string {
  return JSON.stringify(Script$outboundSchema.parse(script));
}

export function scriptFromJSON(
  jsonString: string,
): SafeParseResult<Script, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Script$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Script' from JSON`,
  );
}
