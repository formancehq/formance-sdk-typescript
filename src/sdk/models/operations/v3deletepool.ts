/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V3DeletePoolRequest = {
  /**
   * The pool ID
   */
  poolID: string;
};

export type V3DeletePoolResponse = {
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
};

/** @internal */
export const V3DeletePoolRequest$inboundSchema: z.ZodType<
  V3DeletePoolRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  poolID: z.string(),
});

/** @internal */
export type V3DeletePoolRequest$Outbound = {
  poolID: string;
};

/** @internal */
export const V3DeletePoolRequest$outboundSchema: z.ZodType<
  V3DeletePoolRequest$Outbound,
  z.ZodTypeDef,
  V3DeletePoolRequest
> = z.object({
  poolID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3DeletePoolRequest$ {
  /** @deprecated use `V3DeletePoolRequest$inboundSchema` instead. */
  export const inboundSchema = V3DeletePoolRequest$inboundSchema;
  /** @deprecated use `V3DeletePoolRequest$outboundSchema` instead. */
  export const outboundSchema = V3DeletePoolRequest$outboundSchema;
  /** @deprecated use `V3DeletePoolRequest$Outbound` instead. */
  export type Outbound = V3DeletePoolRequest$Outbound;
}

export function v3DeletePoolRequestToJSON(
  v3DeletePoolRequest: V3DeletePoolRequest,
): string {
  return JSON.stringify(
    V3DeletePoolRequest$outboundSchema.parse(v3DeletePoolRequest),
  );
}

export function v3DeletePoolRequestFromJSON(
  jsonString: string,
): SafeParseResult<V3DeletePoolRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3DeletePoolRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3DeletePoolRequest' from JSON`,
  );
}

/** @internal */
export const V3DeletePoolResponse$inboundSchema: z.ZodType<
  V3DeletePoolResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type V3DeletePoolResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const V3DeletePoolResponse$outboundSchema: z.ZodType<
  V3DeletePoolResponse$Outbound,
  z.ZodTypeDef,
  V3DeletePoolResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3DeletePoolResponse$ {
  /** @deprecated use `V3DeletePoolResponse$inboundSchema` instead. */
  export const inboundSchema = V3DeletePoolResponse$inboundSchema;
  /** @deprecated use `V3DeletePoolResponse$outboundSchema` instead. */
  export const outboundSchema = V3DeletePoolResponse$outboundSchema;
  /** @deprecated use `V3DeletePoolResponse$Outbound` instead. */
  export type Outbound = V3DeletePoolResponse$Outbound;
}

export function v3DeletePoolResponseToJSON(
  v3DeletePoolResponse: V3DeletePoolResponse,
): string {
  return JSON.stringify(
    V3DeletePoolResponse$outboundSchema.parse(v3DeletePoolResponse),
  );
}

export function v3DeletePoolResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3DeletePoolResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3DeletePoolResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3DeletePoolResponse' from JSON`,
  );
}
