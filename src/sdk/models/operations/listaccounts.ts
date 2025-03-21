/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ListAccountsRequest = {
  /**
   * Filter accounts by address pattern (regular expression placed between ^ and $).
   */
  address?: string | undefined;
  /**
   * Pagination cursor, will return accounts after given address, in descending order.
   */
  after?: string | undefined;
  /**
   * Filter accounts by their balance (default operator is gte)
   */
  balance?: number | undefined;
  /**
   * Parameter used in pagination requests. Maximum page size is set to 1000.
   *
   * @remarks
   * Set to the value of next for the next page of results.
   * Set to the value of previous for the previous page of results.
   * No other parameters can be set when this parameter is set.
   */
  cursor?: string | undefined;
  /**
   * Name of the ledger.
   */
  ledger: string;
  /**
   * Filter accounts by metadata key value pairs. Nested objects can be used as seen in the example below.
   */
  metadata?: { [k: string]: any } | undefined;
  /**
   * The maximum number of results to return per page.
   *
   * @remarks
   */
  pageSize?: number | undefined;
  /**
   * Parameter used in pagination requests. Maximum page size is set to 1000.
   *
   * @remarks
   * Set to the value of next for the next page of results.
   * Set to the value of previous for the previous page of results.
   * No other parameters can be set when this parameter is set.
   * Deprecated, please use `cursor` instead.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  paginationToken?: string | undefined;
};

export type ListAccountsResponse = {
  /**
   * OK
   */
  accountsCursorResponse?: shared.AccountsCursorResponse | undefined;
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * Not found
   */
  errorResponse?: shared.ErrorResponse | undefined;
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
export const ListAccountsRequest$inboundSchema: z.ZodType<
  ListAccountsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  address: z.string().optional(),
  after: z.string().optional(),
  balance: z.number().int().optional(),
  cursor: z.string().optional(),
  ledger: z.string(),
  metadata: z.record(z.any()).optional(),
  pageSize: z.number().int().optional(),
  pagination_token: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "pagination_token": "paginationToken",
  });
});

/** @internal */
export type ListAccountsRequest$Outbound = {
  address?: string | undefined;
  after?: string | undefined;
  balance?: number | undefined;
  cursor?: string | undefined;
  ledger: string;
  metadata?: { [k: string]: any } | undefined;
  pageSize?: number | undefined;
  pagination_token?: string | undefined;
};

/** @internal */
export const ListAccountsRequest$outboundSchema: z.ZodType<
  ListAccountsRequest$Outbound,
  z.ZodTypeDef,
  ListAccountsRequest
> = z.object({
  address: z.string().optional(),
  after: z.string().optional(),
  balance: z.number().int().optional(),
  cursor: z.string().optional(),
  ledger: z.string(),
  metadata: z.record(z.any()).optional(),
  pageSize: z.number().int().optional(),
  paginationToken: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    paginationToken: "pagination_token",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccountsRequest$ {
  /** @deprecated use `ListAccountsRequest$inboundSchema` instead. */
  export const inboundSchema = ListAccountsRequest$inboundSchema;
  /** @deprecated use `ListAccountsRequest$outboundSchema` instead. */
  export const outboundSchema = ListAccountsRequest$outboundSchema;
  /** @deprecated use `ListAccountsRequest$Outbound` instead. */
  export type Outbound = ListAccountsRequest$Outbound;
}

export function listAccountsRequestToJSON(
  listAccountsRequest: ListAccountsRequest,
): string {
  return JSON.stringify(
    ListAccountsRequest$outboundSchema.parse(listAccountsRequest),
  );
}

export function listAccountsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListAccountsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAccountsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccountsRequest' from JSON`,
  );
}

/** @internal */
export const ListAccountsResponse$inboundSchema: z.ZodType<
  ListAccountsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  AccountsCursorResponse: shared.AccountsCursorResponse$inboundSchema
    .optional(),
  ContentType: z.string(),
  ErrorResponse: shared.ErrorResponse$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "AccountsCursorResponse": "accountsCursorResponse",
    "ContentType": "contentType",
    "ErrorResponse": "errorResponse",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type ListAccountsResponse$Outbound = {
  AccountsCursorResponse?: shared.AccountsCursorResponse$Outbound | undefined;
  ContentType: string;
  ErrorResponse?: shared.ErrorResponse$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const ListAccountsResponse$outboundSchema: z.ZodType<
  ListAccountsResponse$Outbound,
  z.ZodTypeDef,
  ListAccountsResponse
> = z.object({
  accountsCursorResponse: shared.AccountsCursorResponse$outboundSchema
    .optional(),
  contentType: z.string(),
  errorResponse: shared.ErrorResponse$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    accountsCursorResponse: "AccountsCursorResponse",
    contentType: "ContentType",
    errorResponse: "ErrorResponse",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccountsResponse$ {
  /** @deprecated use `ListAccountsResponse$inboundSchema` instead. */
  export const inboundSchema = ListAccountsResponse$inboundSchema;
  /** @deprecated use `ListAccountsResponse$outboundSchema` instead. */
  export const outboundSchema = ListAccountsResponse$outboundSchema;
  /** @deprecated use `ListAccountsResponse$Outbound` instead. */
  export type Outbound = ListAccountsResponse$Outbound;
}

export function listAccountsResponseToJSON(
  listAccountsResponse: ListAccountsResponse,
): string {
  return JSON.stringify(
    ListAccountsResponse$outboundSchema.parse(listAccountsResponse),
  );
}

export function listAccountsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListAccountsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAccountsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccountsResponse' from JSON`,
  );
}
