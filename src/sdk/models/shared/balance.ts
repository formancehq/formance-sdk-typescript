/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Balance = {
  expiresAt?: Date | null | undefined;
  name: string;
  priority?: bigint | undefined;
};

/** @internal */
export const Balance$inboundSchema: z.ZodType<Balance, z.ZodTypeDef, unknown> =
  z.object({
    expiresAt: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
    name: z.string(),
    priority: z.number().transform(v => BigInt(v)).optional(),
  });

/** @internal */
export type Balance$Outbound = {
  expiresAt?: string | null | undefined;
  name: string;
  priority?: number | undefined;
};

/** @internal */
export const Balance$outboundSchema: z.ZodType<
  Balance$Outbound,
  z.ZodTypeDef,
  Balance
> = z.object({
  expiresAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  name: z.string(),
  priority: z.bigint().transform(v => Number(v)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Balance$ {
  /** @deprecated use `Balance$inboundSchema` instead. */
  export const inboundSchema = Balance$inboundSchema;
  /** @deprecated use `Balance$outboundSchema` instead. */
  export const outboundSchema = Balance$outboundSchema;
  /** @deprecated use `Balance$Outbound` instead. */
  export type Outbound = Balance$Outbound;
}

export function balanceToJSON(balance: Balance): string {
  return JSON.stringify(Balance$outboundSchema.parse(balance));
}

export function balanceFromJSON(
  jsonString: string,
): SafeParseResult<Balance, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Balance$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Balance' from JSON`,
  );
}
