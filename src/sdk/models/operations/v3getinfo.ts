/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type V3GetInfoResponse = {
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
   * OK
   */
  v3ConfigInfoResponse?: shared.V3ConfigInfoResponse | undefined;
};

/** @internal */
export const V3GetInfoResponse$inboundSchema: z.ZodType<
  V3GetInfoResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  V3ConfigInfoResponse: shared.V3ConfigInfoResponse$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "V3ConfigInfoResponse": "v3ConfigInfoResponse",
  });
});

/** @internal */
export type V3GetInfoResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  V3ConfigInfoResponse?: shared.V3ConfigInfoResponse$Outbound | undefined;
};

/** @internal */
export const V3GetInfoResponse$outboundSchema: z.ZodType<
  V3GetInfoResponse$Outbound,
  z.ZodTypeDef,
  V3GetInfoResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  v3ConfigInfoResponse: shared.V3ConfigInfoResponse$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    v3ConfigInfoResponse: "V3ConfigInfoResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3GetInfoResponse$ {
  /** @deprecated use `V3GetInfoResponse$inboundSchema` instead. */
  export const inboundSchema = V3GetInfoResponse$inboundSchema;
  /** @deprecated use `V3GetInfoResponse$outboundSchema` instead. */
  export const outboundSchema = V3GetInfoResponse$outboundSchema;
  /** @deprecated use `V3GetInfoResponse$Outbound` instead. */
  export type Outbound = V3GetInfoResponse$Outbound;
}

export function v3GetInfoResponseToJSON(
  v3GetInfoResponse: V3GetInfoResponse,
): string {
  return JSON.stringify(
    V3GetInfoResponse$outboundSchema.parse(v3GetInfoResponse),
  );
}

export function v3GetInfoResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3GetInfoResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3GetInfoResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3GetInfoResponse' from JSON`,
  );
}
