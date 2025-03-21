/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type V3InitiatePaymentRequest = {
  v3InitiatePaymentRequest?: shared.V3InitiatePaymentRequest | undefined;
  /**
   * If set to true, the request will not have to be validated. This is useful if we want to directly forward the request to the PSP.
   *
   * @remarks
   */
  noValidation?: boolean | undefined;
};

export type V3InitiatePaymentResponse = {
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
  v3InitiatePaymentResponse?: shared.V3InitiatePaymentResponse | undefined;
};

/** @internal */
export const V3InitiatePaymentRequest$inboundSchema: z.ZodType<
  V3InitiatePaymentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  V3InitiatePaymentRequest: shared.V3InitiatePaymentRequest$inboundSchema
    .optional(),
  noValidation: z.boolean().default(false),
}).transform((v) => {
  return remap$(v, {
    "V3InitiatePaymentRequest": "v3InitiatePaymentRequest",
  });
});

/** @internal */
export type V3InitiatePaymentRequest$Outbound = {
  V3InitiatePaymentRequest?:
    | shared.V3InitiatePaymentRequest$Outbound
    | undefined;
  noValidation: boolean;
};

/** @internal */
export const V3InitiatePaymentRequest$outboundSchema: z.ZodType<
  V3InitiatePaymentRequest$Outbound,
  z.ZodTypeDef,
  V3InitiatePaymentRequest
> = z.object({
  v3InitiatePaymentRequest: shared.V3InitiatePaymentRequest$outboundSchema
    .optional(),
  noValidation: z.boolean().default(false),
}).transform((v) => {
  return remap$(v, {
    v3InitiatePaymentRequest: "V3InitiatePaymentRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3InitiatePaymentRequest$ {
  /** @deprecated use `V3InitiatePaymentRequest$inboundSchema` instead. */
  export const inboundSchema = V3InitiatePaymentRequest$inboundSchema;
  /** @deprecated use `V3InitiatePaymentRequest$outboundSchema` instead. */
  export const outboundSchema = V3InitiatePaymentRequest$outboundSchema;
  /** @deprecated use `V3InitiatePaymentRequest$Outbound` instead. */
  export type Outbound = V3InitiatePaymentRequest$Outbound;
}

export function v3InitiatePaymentRequestToJSON(
  v3InitiatePaymentRequest: V3InitiatePaymentRequest,
): string {
  return JSON.stringify(
    V3InitiatePaymentRequest$outboundSchema.parse(v3InitiatePaymentRequest),
  );
}

export function v3InitiatePaymentRequestFromJSON(
  jsonString: string,
): SafeParseResult<V3InitiatePaymentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3InitiatePaymentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3InitiatePaymentRequest' from JSON`,
  );
}

/** @internal */
export const V3InitiatePaymentResponse$inboundSchema: z.ZodType<
  V3InitiatePaymentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  V3InitiatePaymentResponse: shared.V3InitiatePaymentResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "V3InitiatePaymentResponse": "v3InitiatePaymentResponse",
  });
});

/** @internal */
export type V3InitiatePaymentResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  V3InitiatePaymentResponse?:
    | shared.V3InitiatePaymentResponse$Outbound
    | undefined;
};

/** @internal */
export const V3InitiatePaymentResponse$outboundSchema: z.ZodType<
  V3InitiatePaymentResponse$Outbound,
  z.ZodTypeDef,
  V3InitiatePaymentResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  v3InitiatePaymentResponse: shared.V3InitiatePaymentResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    v3InitiatePaymentResponse: "V3InitiatePaymentResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3InitiatePaymentResponse$ {
  /** @deprecated use `V3InitiatePaymentResponse$inboundSchema` instead. */
  export const inboundSchema = V3InitiatePaymentResponse$inboundSchema;
  /** @deprecated use `V3InitiatePaymentResponse$outboundSchema` instead. */
  export const outboundSchema = V3InitiatePaymentResponse$outboundSchema;
  /** @deprecated use `V3InitiatePaymentResponse$Outbound` instead. */
  export type Outbound = V3InitiatePaymentResponse$Outbound;
}

export function v3InitiatePaymentResponseToJSON(
  v3InitiatePaymentResponse: V3InitiatePaymentResponse,
): string {
  return JSON.stringify(
    V3InitiatePaymentResponse$outboundSchema.parse(v3InitiatePaymentResponse),
  );
}

export function v3InitiatePaymentResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3InitiatePaymentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3InitiatePaymentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3InitiatePaymentResponse' from JSON`,
  );
}
