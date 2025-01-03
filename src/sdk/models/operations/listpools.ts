/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ListPoolsRequest = {
  /**
   * Parameter used in pagination requests. Maximum page size is set to 15.
   *
   * @remarks
   * Set to the value of next for the next page of results.
   * Set to the value of previous for the previous page of results.
   * No other parameters can be set when this parameter is set.
   */
  cursor?: string | undefined;
  /**
   * The maximum number of results to return per page.
   *
   * @remarks
   */
  pageSize?: number | undefined;
  /**
   * Filters used to filter resources.
   *
   * @remarks
   */
  query?: string | undefined;
  /**
   * Fields used to sort payments (default is date:desc).
   */
  sort?: Array<string> | undefined;
};

export type ListPoolsResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * OK
   */
  poolsCursor?: shared.PoolsCursor | undefined;
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
export const ListPoolsRequest$inboundSchema: z.ZodType<
  ListPoolsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
  pageSize: z.number().int().default(15),
  query: z.string().optional(),
  sort: z.array(z.string()).optional(),
});

/** @internal */
export type ListPoolsRequest$Outbound = {
  cursor?: string | undefined;
  pageSize: number;
  query?: string | undefined;
  sort?: Array<string> | undefined;
};

/** @internal */
export const ListPoolsRequest$outboundSchema: z.ZodType<
  ListPoolsRequest$Outbound,
  z.ZodTypeDef,
  ListPoolsRequest
> = z.object({
  cursor: z.string().optional(),
  pageSize: z.number().int().default(15),
  query: z.string().optional(),
  sort: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPoolsRequest$ {
  /** @deprecated use `ListPoolsRequest$inboundSchema` instead. */
  export const inboundSchema = ListPoolsRequest$inboundSchema;
  /** @deprecated use `ListPoolsRequest$outboundSchema` instead. */
  export const outboundSchema = ListPoolsRequest$outboundSchema;
  /** @deprecated use `ListPoolsRequest$Outbound` instead. */
  export type Outbound = ListPoolsRequest$Outbound;
}

export function listPoolsRequestToJSON(
  listPoolsRequest: ListPoolsRequest,
): string {
  return JSON.stringify(
    ListPoolsRequest$outboundSchema.parse(listPoolsRequest),
  );
}

export function listPoolsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListPoolsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPoolsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPoolsRequest' from JSON`,
  );
}

/** @internal */
export const ListPoolsResponse$inboundSchema: z.ZodType<
  ListPoolsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  PoolsCursor: shared.PoolsCursor$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "PoolsCursor": "poolsCursor",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type ListPoolsResponse$Outbound = {
  ContentType: string;
  PoolsCursor?: shared.PoolsCursor$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const ListPoolsResponse$outboundSchema: z.ZodType<
  ListPoolsResponse$Outbound,
  z.ZodTypeDef,
  ListPoolsResponse
> = z.object({
  contentType: z.string(),
  poolsCursor: shared.PoolsCursor$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    poolsCursor: "PoolsCursor",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPoolsResponse$ {
  /** @deprecated use `ListPoolsResponse$inboundSchema` instead. */
  export const inboundSchema = ListPoolsResponse$inboundSchema;
  /** @deprecated use `ListPoolsResponse$outboundSchema` instead. */
  export const outboundSchema = ListPoolsResponse$outboundSchema;
  /** @deprecated use `ListPoolsResponse$Outbound` instead. */
  export type Outbound = ListPoolsResponse$Outbound;
}

export function listPoolsResponseToJSON(
  listPoolsResponse: ListPoolsResponse,
): string {
  return JSON.stringify(
    ListPoolsResponse$outboundSchema.parse(listPoolsResponse),
  );
}

export function listPoolsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListPoolsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPoolsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPoolsResponse' from JSON`,
  );
}
