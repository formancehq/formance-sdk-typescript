/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type V3RetryPaymentInitiationRequest = {
  /**
   * The payment initiation ID
   */
  paymentInitiationID: string;
};

export type V3RetryPaymentInitiationResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
  /**
   * Accepted
   */
  v3RetryPaymentInitiationResponse?:
    | shared.V3RetryPaymentInitiationResponse
    | undefined;
};

/** @internal */
export const V3RetryPaymentInitiationRequest$inboundSchema: z.ZodType<
  V3RetryPaymentInitiationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  paymentInitiationID: z.string(),
});

/** @internal */
export type V3RetryPaymentInitiationRequest$Outbound = {
  paymentInitiationID: string;
};

/** @internal */
export const V3RetryPaymentInitiationRequest$outboundSchema: z.ZodType<
  V3RetryPaymentInitiationRequest$Outbound,
  z.ZodTypeDef,
  V3RetryPaymentInitiationRequest
> = z.object({
  paymentInitiationID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3RetryPaymentInitiationRequest$ {
  /** @deprecated use `V3RetryPaymentInitiationRequest$inboundSchema` instead. */
  export const inboundSchema = V3RetryPaymentInitiationRequest$inboundSchema;
  /** @deprecated use `V3RetryPaymentInitiationRequest$outboundSchema` instead. */
  export const outboundSchema = V3RetryPaymentInitiationRequest$outboundSchema;
  /** @deprecated use `V3RetryPaymentInitiationRequest$Outbound` instead. */
  export type Outbound = V3RetryPaymentInitiationRequest$Outbound;
}

export function v3RetryPaymentInitiationRequestToJSON(
  v3RetryPaymentInitiationRequest: V3RetryPaymentInitiationRequest,
): string {
  return JSON.stringify(
    V3RetryPaymentInitiationRequest$outboundSchema.parse(
      v3RetryPaymentInitiationRequest,
    ),
  );
}

export function v3RetryPaymentInitiationRequestFromJSON(
  jsonString: string,
): SafeParseResult<V3RetryPaymentInitiationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3RetryPaymentInitiationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3RetryPaymentInitiationRequest' from JSON`,
  );
}

/** @internal */
export const V3RetryPaymentInitiationResponse$inboundSchema: z.ZodType<
  V3RetryPaymentInitiationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  V3RetryPaymentInitiationResponse: shared
    .V3RetryPaymentInitiationResponse$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "V3RetryPaymentInitiationResponse": "v3RetryPaymentInitiationResponse",
  });
});

/** @internal */
export type V3RetryPaymentInitiationResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  V3RetryPaymentInitiationResponse?:
    | shared.V3RetryPaymentInitiationResponse$Outbound
    | undefined;
};

/** @internal */
export const V3RetryPaymentInitiationResponse$outboundSchema: z.ZodType<
  V3RetryPaymentInitiationResponse$Outbound,
  z.ZodTypeDef,
  V3RetryPaymentInitiationResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  v3RetryPaymentInitiationResponse: shared
    .V3RetryPaymentInitiationResponse$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    v3RetryPaymentInitiationResponse: "V3RetryPaymentInitiationResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3RetryPaymentInitiationResponse$ {
  /** @deprecated use `V3RetryPaymentInitiationResponse$inboundSchema` instead. */
  export const inboundSchema = V3RetryPaymentInitiationResponse$inboundSchema;
  /** @deprecated use `V3RetryPaymentInitiationResponse$outboundSchema` instead. */
  export const outboundSchema = V3RetryPaymentInitiationResponse$outboundSchema;
  /** @deprecated use `V3RetryPaymentInitiationResponse$Outbound` instead. */
  export type Outbound = V3RetryPaymentInitiationResponse$Outbound;
}

export function v3RetryPaymentInitiationResponseToJSON(
  v3RetryPaymentInitiationResponse: V3RetryPaymentInitiationResponse,
): string {
  return JSON.stringify(
    V3RetryPaymentInitiationResponse$outboundSchema.parse(
      v3RetryPaymentInitiationResponse,
    ),
  );
}

export function v3RetryPaymentInitiationResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3RetryPaymentInitiationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3RetryPaymentInitiationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3RetryPaymentInitiationResponse' from JSON`,
  );
}
