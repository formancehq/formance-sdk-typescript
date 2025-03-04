/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V2StageSendSourceWallet = {
  balance?: string | undefined;
  id: string;
};

/** @internal */
export const V2StageSendSourceWallet$inboundSchema: z.ZodType<
  V2StageSendSourceWallet,
  z.ZodTypeDef,
  unknown
> = z.object({
  balance: z.string().optional(),
  id: z.string(),
});

/** @internal */
export type V2StageSendSourceWallet$Outbound = {
  balance?: string | undefined;
  id: string;
};

/** @internal */
export const V2StageSendSourceWallet$outboundSchema: z.ZodType<
  V2StageSendSourceWallet$Outbound,
  z.ZodTypeDef,
  V2StageSendSourceWallet
> = z.object({
  balance: z.string().optional(),
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2StageSendSourceWallet$ {
  /** @deprecated use `V2StageSendSourceWallet$inboundSchema` instead. */
  export const inboundSchema = V2StageSendSourceWallet$inboundSchema;
  /** @deprecated use `V2StageSendSourceWallet$outboundSchema` instead. */
  export const outboundSchema = V2StageSendSourceWallet$outboundSchema;
  /** @deprecated use `V2StageSendSourceWallet$Outbound` instead. */
  export type Outbound = V2StageSendSourceWallet$Outbound;
}

export function v2StageSendSourceWalletToJSON(
  v2StageSendSourceWallet: V2StageSendSourceWallet,
): string {
  return JSON.stringify(
    V2StageSendSourceWallet$outboundSchema.parse(v2StageSendSourceWallet),
  );
}

export function v2StageSendSourceWalletFromJSON(
  jsonString: string,
): SafeParseResult<V2StageSendSourceWallet, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2StageSendSourceWallet$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2StageSendSourceWallet' from JSON`,
  );
}
