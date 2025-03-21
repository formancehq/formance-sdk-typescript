/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type V3ListAccountsRequest = {
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

export type V3ListAccountsResponse = {
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
  v3AccountsCursorResponse?: shared.V3AccountsCursorResponse | undefined;
};

/** @internal */
export const V3ListAccountsRequest$inboundSchema: z.ZodType<
  V3ListAccountsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
  pageSize: z.number().int().optional(),
  query: z.record(z.any()).optional(),
});

/** @internal */
export type V3ListAccountsRequest$Outbound = {
  cursor?: string | undefined;
  pageSize?: number | undefined;
  query?: { [k: string]: any } | undefined;
};

/** @internal */
export const V3ListAccountsRequest$outboundSchema: z.ZodType<
  V3ListAccountsRequest$Outbound,
  z.ZodTypeDef,
  V3ListAccountsRequest
> = z.object({
  cursor: z.string().optional(),
  pageSize: z.number().int().optional(),
  query: z.record(z.any()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3ListAccountsRequest$ {
  /** @deprecated use `V3ListAccountsRequest$inboundSchema` instead. */
  export const inboundSchema = V3ListAccountsRequest$inboundSchema;
  /** @deprecated use `V3ListAccountsRequest$outboundSchema` instead. */
  export const outboundSchema = V3ListAccountsRequest$outboundSchema;
  /** @deprecated use `V3ListAccountsRequest$Outbound` instead. */
  export type Outbound = V3ListAccountsRequest$Outbound;
}

export function v3ListAccountsRequestToJSON(
  v3ListAccountsRequest: V3ListAccountsRequest,
): string {
  return JSON.stringify(
    V3ListAccountsRequest$outboundSchema.parse(v3ListAccountsRequest),
  );
}

export function v3ListAccountsRequestFromJSON(
  jsonString: string,
): SafeParseResult<V3ListAccountsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3ListAccountsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3ListAccountsRequest' from JSON`,
  );
}

/** @internal */
export const V3ListAccountsResponse$inboundSchema: z.ZodType<
  V3ListAccountsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  V3AccountsCursorResponse: shared.V3AccountsCursorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "V3AccountsCursorResponse": "v3AccountsCursorResponse",
  });
});

/** @internal */
export type V3ListAccountsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  V3AccountsCursorResponse?:
    | shared.V3AccountsCursorResponse$Outbound
    | undefined;
};

/** @internal */
export const V3ListAccountsResponse$outboundSchema: z.ZodType<
  V3ListAccountsResponse$Outbound,
  z.ZodTypeDef,
  V3ListAccountsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  v3AccountsCursorResponse: shared.V3AccountsCursorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    v3AccountsCursorResponse: "V3AccountsCursorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3ListAccountsResponse$ {
  /** @deprecated use `V3ListAccountsResponse$inboundSchema` instead. */
  export const inboundSchema = V3ListAccountsResponse$inboundSchema;
  /** @deprecated use `V3ListAccountsResponse$outboundSchema` instead. */
  export const outboundSchema = V3ListAccountsResponse$outboundSchema;
  /** @deprecated use `V3ListAccountsResponse$Outbound` instead. */
  export type Outbound = V3ListAccountsResponse$Outbound;
}

export function v3ListAccountsResponseToJSON(
  v3ListAccountsResponse: V3ListAccountsResponse,
): string {
  return JSON.stringify(
    V3ListAccountsResponse$outboundSchema.parse(v3ListAccountsResponse),
  );
}

export function v3ListAccountsResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3ListAccountsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3ListAccountsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3ListAccountsResponse' from JSON`,
  );
}
