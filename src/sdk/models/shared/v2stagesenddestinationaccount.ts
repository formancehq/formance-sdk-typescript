/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V2StageSendDestinationAccount = {
  id: string;
  ledger?: string | undefined;
};

/** @internal */
export const V2StageSendDestinationAccount$inboundSchema: z.ZodType<
  V2StageSendDestinationAccount,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  ledger: z.string().optional(),
});

/** @internal */
export type V2StageSendDestinationAccount$Outbound = {
  id: string;
  ledger?: string | undefined;
};

/** @internal */
export const V2StageSendDestinationAccount$outboundSchema: z.ZodType<
  V2StageSendDestinationAccount$Outbound,
  z.ZodTypeDef,
  V2StageSendDestinationAccount
> = z.object({
  id: z.string(),
  ledger: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2StageSendDestinationAccount$ {
  /** @deprecated use `V2StageSendDestinationAccount$inboundSchema` instead. */
  export const inboundSchema = V2StageSendDestinationAccount$inboundSchema;
  /** @deprecated use `V2StageSendDestinationAccount$outboundSchema` instead. */
  export const outboundSchema = V2StageSendDestinationAccount$outboundSchema;
  /** @deprecated use `V2StageSendDestinationAccount$Outbound` instead. */
  export type Outbound = V2StageSendDestinationAccount$Outbound;
}

export function v2StageSendDestinationAccountToJSON(
  v2StageSendDestinationAccount: V2StageSendDestinationAccount,
): string {
  return JSON.stringify(
    V2StageSendDestinationAccount$outboundSchema.parse(
      v2StageSendDestinationAccount,
    ),
  );
}

export function v2StageSendDestinationAccountFromJSON(
  jsonString: string,
): SafeParseResult<V2StageSendDestinationAccount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2StageSendDestinationAccount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2StageSendDestinationAccount' from JSON`,
  );
}
