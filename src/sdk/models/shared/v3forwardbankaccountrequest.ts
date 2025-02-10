/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V3ForwardBankAccountRequest = {
  connectorID: string;
};

/** @internal */
export const V3ForwardBankAccountRequest$inboundSchema: z.ZodType<
  V3ForwardBankAccountRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connectorID: z.string(),
});

/** @internal */
export type V3ForwardBankAccountRequest$Outbound = {
  connectorID: string;
};

/** @internal */
export const V3ForwardBankAccountRequest$outboundSchema: z.ZodType<
  V3ForwardBankAccountRequest$Outbound,
  z.ZodTypeDef,
  V3ForwardBankAccountRequest
> = z.object({
  connectorID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3ForwardBankAccountRequest$ {
  /** @deprecated use `V3ForwardBankAccountRequest$inboundSchema` instead. */
  export const inboundSchema = V3ForwardBankAccountRequest$inboundSchema;
  /** @deprecated use `V3ForwardBankAccountRequest$outboundSchema` instead. */
  export const outboundSchema = V3ForwardBankAccountRequest$outboundSchema;
  /** @deprecated use `V3ForwardBankAccountRequest$Outbound` instead. */
  export type Outbound = V3ForwardBankAccountRequest$Outbound;
}

export function v3ForwardBankAccountRequestToJSON(
  v3ForwardBankAccountRequest: V3ForwardBankAccountRequest,
): string {
  return JSON.stringify(
    V3ForwardBankAccountRequest$outboundSchema.parse(
      v3ForwardBankAccountRequest,
    ),
  );
}

export function v3ForwardBankAccountRequestFromJSON(
  jsonString: string,
): SafeParseResult<V3ForwardBankAccountRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3ForwardBankAccountRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3ForwardBankAccountRequest' from JSON`,
  );
}
