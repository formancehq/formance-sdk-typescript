/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type V3ApprovePaymentInitiationRequest = {
  /**
   * The payment initiation ID
   */
  paymentInitiationID: string;
};

export type V3ApprovePaymentInitiationResponse = {
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
  v3ApprovePaymentInitiationResponse?:
    | shared.V3ApprovePaymentInitiationResponse
    | undefined;
};

/** @internal */
export const V3ApprovePaymentInitiationRequest$inboundSchema: z.ZodType<
  V3ApprovePaymentInitiationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  paymentInitiationID: z.string(),
});

/** @internal */
export type V3ApprovePaymentInitiationRequest$Outbound = {
  paymentInitiationID: string;
};

/** @internal */
export const V3ApprovePaymentInitiationRequest$outboundSchema: z.ZodType<
  V3ApprovePaymentInitiationRequest$Outbound,
  z.ZodTypeDef,
  V3ApprovePaymentInitiationRequest
> = z.object({
  paymentInitiationID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3ApprovePaymentInitiationRequest$ {
  /** @deprecated use `V3ApprovePaymentInitiationRequest$inboundSchema` instead. */
  export const inboundSchema = V3ApprovePaymentInitiationRequest$inboundSchema;
  /** @deprecated use `V3ApprovePaymentInitiationRequest$outboundSchema` instead. */
  export const outboundSchema =
    V3ApprovePaymentInitiationRequest$outboundSchema;
  /** @deprecated use `V3ApprovePaymentInitiationRequest$Outbound` instead. */
  export type Outbound = V3ApprovePaymentInitiationRequest$Outbound;
}

export function v3ApprovePaymentInitiationRequestToJSON(
  v3ApprovePaymentInitiationRequest: V3ApprovePaymentInitiationRequest,
): string {
  return JSON.stringify(
    V3ApprovePaymentInitiationRequest$outboundSchema.parse(
      v3ApprovePaymentInitiationRequest,
    ),
  );
}

export function v3ApprovePaymentInitiationRequestFromJSON(
  jsonString: string,
): SafeParseResult<V3ApprovePaymentInitiationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3ApprovePaymentInitiationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3ApprovePaymentInitiationRequest' from JSON`,
  );
}

/** @internal */
export const V3ApprovePaymentInitiationResponse$inboundSchema: z.ZodType<
  V3ApprovePaymentInitiationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  V3ApprovePaymentInitiationResponse: shared
    .V3ApprovePaymentInitiationResponse$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "V3ApprovePaymentInitiationResponse": "v3ApprovePaymentInitiationResponse",
  });
});

/** @internal */
export type V3ApprovePaymentInitiationResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  V3ApprovePaymentInitiationResponse?:
    | shared.V3ApprovePaymentInitiationResponse$Outbound
    | undefined;
};

/** @internal */
export const V3ApprovePaymentInitiationResponse$outboundSchema: z.ZodType<
  V3ApprovePaymentInitiationResponse$Outbound,
  z.ZodTypeDef,
  V3ApprovePaymentInitiationResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  v3ApprovePaymentInitiationResponse: shared
    .V3ApprovePaymentInitiationResponse$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    v3ApprovePaymentInitiationResponse: "V3ApprovePaymentInitiationResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3ApprovePaymentInitiationResponse$ {
  /** @deprecated use `V3ApprovePaymentInitiationResponse$inboundSchema` instead. */
  export const inboundSchema = V3ApprovePaymentInitiationResponse$inboundSchema;
  /** @deprecated use `V3ApprovePaymentInitiationResponse$outboundSchema` instead. */
  export const outboundSchema =
    V3ApprovePaymentInitiationResponse$outboundSchema;
  /** @deprecated use `V3ApprovePaymentInitiationResponse$Outbound` instead. */
  export type Outbound = V3ApprovePaymentInitiationResponse$Outbound;
}

export function v3ApprovePaymentInitiationResponseToJSON(
  v3ApprovePaymentInitiationResponse: V3ApprovePaymentInitiationResponse,
): string {
  return JSON.stringify(
    V3ApprovePaymentInitiationResponse$outboundSchema.parse(
      v3ApprovePaymentInitiationResponse,
    ),
  );
}

export function v3ApprovePaymentInitiationResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3ApprovePaymentInitiationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      V3ApprovePaymentInitiationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3ApprovePaymentInitiationResponse' from JSON`,
  );
}
