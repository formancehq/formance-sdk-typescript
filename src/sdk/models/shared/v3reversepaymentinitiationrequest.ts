/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V3ReversePaymentInitiationRequest = {
  amount: bigint;
  asset: string;
  description: string;
  metadata?: { [k: string]: string } | null | undefined;
  reference: string;
};

/** @internal */
export const V3ReversePaymentInitiationRequest$inboundSchema: z.ZodType<
  V3ReversePaymentInitiationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number().transform(v => BigInt(v)),
  asset: z.string(),
  description: z.string(),
  metadata: z.nullable(z.record(z.string())).optional(),
  reference: z.string(),
});

/** @internal */
export type V3ReversePaymentInitiationRequest$Outbound = {
  amount: number;
  asset: string;
  description: string;
  metadata?: { [k: string]: string } | null | undefined;
  reference: string;
};

/** @internal */
export const V3ReversePaymentInitiationRequest$outboundSchema: z.ZodType<
  V3ReversePaymentInitiationRequest$Outbound,
  z.ZodTypeDef,
  V3ReversePaymentInitiationRequest
> = z.object({
  amount: z.bigint().transform(v => Number(v)),
  asset: z.string(),
  description: z.string(),
  metadata: z.nullable(z.record(z.string())).optional(),
  reference: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3ReversePaymentInitiationRequest$ {
  /** @deprecated use `V3ReversePaymentInitiationRequest$inboundSchema` instead. */
  export const inboundSchema = V3ReversePaymentInitiationRequest$inboundSchema;
  /** @deprecated use `V3ReversePaymentInitiationRequest$outboundSchema` instead. */
  export const outboundSchema =
    V3ReversePaymentInitiationRequest$outboundSchema;
  /** @deprecated use `V3ReversePaymentInitiationRequest$Outbound` instead. */
  export type Outbound = V3ReversePaymentInitiationRequest$Outbound;
}

export function v3ReversePaymentInitiationRequestToJSON(
  v3ReversePaymentInitiationRequest: V3ReversePaymentInitiationRequest,
): string {
  return JSON.stringify(
    V3ReversePaymentInitiationRequest$outboundSchema.parse(
      v3ReversePaymentInitiationRequest,
    ),
  );
}

export function v3ReversePaymentInitiationRequestFromJSON(
  jsonString: string,
): SafeParseResult<V3ReversePaymentInitiationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3ReversePaymentInitiationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3ReversePaymentInitiationRequest' from JSON`,
  );
}
