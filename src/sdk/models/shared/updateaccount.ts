/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateAccount = {
  id: string;
  ledger: string;
  metadata: { [k: string]: string };
};

/** @internal */
export const UpdateAccount$inboundSchema: z.ZodType<
  UpdateAccount,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  ledger: z.string(),
  metadata: z.record(z.string()),
});

/** @internal */
export type UpdateAccount$Outbound = {
  id: string;
  ledger: string;
  metadata: { [k: string]: string };
};

/** @internal */
export const UpdateAccount$outboundSchema: z.ZodType<
  UpdateAccount$Outbound,
  z.ZodTypeDef,
  UpdateAccount
> = z.object({
  id: z.string(),
  ledger: z.string(),
  metadata: z.record(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAccount$ {
  /** @deprecated use `UpdateAccount$inboundSchema` instead. */
  export const inboundSchema = UpdateAccount$inboundSchema;
  /** @deprecated use `UpdateAccount$outboundSchema` instead. */
  export const outboundSchema = UpdateAccount$outboundSchema;
  /** @deprecated use `UpdateAccount$Outbound` instead. */
  export type Outbound = UpdateAccount$Outbound;
}

export function updateAccountToJSON(updateAccount: UpdateAccount): string {
  return JSON.stringify(UpdateAccount$outboundSchema.parse(updateAccount));
}

export function updateAccountFromJSON(
  jsonString: string,
): SafeParseResult<UpdateAccount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateAccount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateAccount' from JSON`,
  );
}
