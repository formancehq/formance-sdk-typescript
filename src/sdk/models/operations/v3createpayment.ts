/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type V3CreatePaymentResponse = {
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
   * Created
   */
  v3CreatePaymentResponse?: shared.V3CreatePaymentResponse | undefined;
};

/** @internal */
export const V3CreatePaymentResponse$inboundSchema: z.ZodType<
  V3CreatePaymentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  V3CreatePaymentResponse: shared.V3CreatePaymentResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "V3CreatePaymentResponse": "v3CreatePaymentResponse",
  });
});

/** @internal */
export type V3CreatePaymentResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  V3CreatePaymentResponse?: shared.V3CreatePaymentResponse$Outbound | undefined;
};

/** @internal */
export const V3CreatePaymentResponse$outboundSchema: z.ZodType<
  V3CreatePaymentResponse$Outbound,
  z.ZodTypeDef,
  V3CreatePaymentResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  v3CreatePaymentResponse: shared.V3CreatePaymentResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    v3CreatePaymentResponse: "V3CreatePaymentResponse",
  });
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
