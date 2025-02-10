/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type V3ListPoolsRequest = {
  /**
   * Parameter used in pagination requests. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set.
   *
   * @remarks
   */
  cursor?: string | undefined;
  /**
   * The number of items to return
   */
  pageSize?: number | undefined;
  query?: { [k: string]: any } | undefined;
};

export type V3ListPoolsResponse = {
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
  v3PoolsCursorResponse?: shared.V3PoolsCursorResponse | undefined;
};

/** @internal */
export const V3ListPoolsRequest$inboundSchema: z.ZodType<
  V3ListPoolsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
  pageSize: z.number().int().optional(),
  query: z.record(z.any()).optional(),
});

/** @internal */
export type V3ListPoolsRequest$Outbound = {
  cursor?: string | undefined;
  pageSize?: number | undefined;
  query?: { [k: string]: any } | undefined;
};

/** @internal */
export const V3ListPoolsRequest$outboundSchema: z.ZodType<
  V3ListPoolsRequest$Outbound,
  z.ZodTypeDef,
  V3ListPoolsRequest
> = z.object({
  cursor: z.string().optional(),
  pageSize: z.number().int().optional(),
  query: z.record(z.any()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3ListPoolsRequest$ {
  /** @deprecated use `V3ListPoolsRequest$inboundSchema` instead. */
  export const inboundSchema = V3ListPoolsRequest$inboundSchema;
  /** @deprecated use `V3ListPoolsRequest$outboundSchema` instead. */
  export const outboundSchema = V3ListPoolsRequest$outboundSchema;
  /** @deprecated use `V3ListPoolsRequest$Outbound` instead. */
  export type Outbound = V3ListPoolsRequest$Outbound;
}

export function v3ListPoolsRequestToJSON(
  v3ListPoolsRequest: V3ListPoolsRequest,
): string {
  return JSON.stringify(
    V3ListPoolsRequest$outboundSchema.parse(v3ListPoolsRequest),
  );
}

export function v3ListPoolsRequestFromJSON(
  jsonString: string,
): SafeParseResult<V3ListPoolsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3ListPoolsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3ListPoolsRequest' from JSON`,
  );
}

/** @internal */
export const V3ListPoolsResponse$inboundSchema: z.ZodType<
  V3ListPoolsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  V3PoolsCursorResponse: shared.V3PoolsCursorResponse$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "V3PoolsCursorResponse": "v3PoolsCursorResponse",
  });
});

/** @internal */
export type V3ListPoolsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  V3PoolsCursorResponse?: shared.V3PoolsCursorResponse$Outbound | undefined;
};

/** @internal */
export const V3ListPoolsResponse$outboundSchema: z.ZodType<
  V3ListPoolsResponse$Outbound,
  z.ZodTypeDef,
  V3ListPoolsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  v3PoolsCursorResponse: shared.V3PoolsCursorResponse$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    v3PoolsCursorResponse: "V3PoolsCursorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3ListPoolsResponse$ {
  /** @deprecated use `V3ListPoolsResponse$inboundSchema` instead. */
  export const inboundSchema = V3ListPoolsResponse$inboundSchema;
  /** @deprecated use `V3ListPoolsResponse$outboundSchema` instead. */
  export const outboundSchema = V3ListPoolsResponse$outboundSchema;
  /** @deprecated use `V3ListPoolsResponse$Outbound` instead. */
  export type Outbound = V3ListPoolsResponse$Outbound;
}

export function v3ListPoolsResponseToJSON(
  v3ListPoolsResponse: V3ListPoolsResponse,
): string {
  return JSON.stringify(
    V3ListPoolsResponse$outboundSchema.parse(v3ListPoolsResponse),
  );
}

export function v3ListPoolsResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3ListPoolsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3ListPoolsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3ListPoolsResponse' from JSON`,
  );
}
