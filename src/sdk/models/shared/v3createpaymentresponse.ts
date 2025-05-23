/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  V3Payment,
  V3Payment$inboundSchema,
  V3Payment$Outbound,
  V3Payment$outboundSchema,
} from "./v3payment.js";

export type V3CreatePaymentResponse = {
  data: V3Payment;
};

/** @internal */
export const V3CreatePaymentResponse$inboundSchema: z.ZodType<
  V3CreatePaymentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: V3Payment$inboundSchema,
});

/** @internal */
export type V3CreatePaymentResponse$Outbound = {
  data: V3Payment$Outbound;
};

/** @internal */
export const V3CreatePaymentResponse$outboundSchema: z.ZodType<
  V3CreatePaymentResponse$Outbound,
  z.ZodTypeDef,
  V3CreatePaymentResponse
> = z.object({
  data: V3Payment$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3CreatePaymentResponse$ {
  /** @deprecated use `V3CreatePaymentResponse$inboundSchema` instead. */
  export const inboundSchema = V3CreatePaymentResponse$inboundSchema;
  /** @deprecated use `V3CreatePaymentResponse$outboundSchema` instead. */
  export const outboundSchema = V3CreatePaymentResponse$outboundSchema;
  /** @deprecated use `V3CreatePaymentResponse$Outbound` instead. */
  export type Outbound = V3CreatePaymentResponse$Outbound;
}

export function v3CreatePaymentResponseToJSON(
  v3CreatePaymentResponse: V3CreatePaymentResponse,
): string {
  return JSON.stringify(
    V3CreatePaymentResponse$outboundSchema.parse(v3CreatePaymentResponse),
  );
}

export function v3CreatePaymentResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3CreatePaymentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3CreatePaymentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3CreatePaymentResponse' from JSON`,
  );
}
