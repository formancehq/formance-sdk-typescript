/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type GetBalancesRequest = {
  /**
   * Filter balances involving given account, either as source or destination.
   */
  address?: string | undefined;
  /**
   * Pagination cursor, will return accounts after given address, in descending order.
   */
  after?: string | undefined;
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
   * The maximum number of results to return per page.
   *
   * @remarks
   */
  pageSize?: number | undefined;
};

export type GetBalancesResponse = {
  /**
   * OK
   */
  balancesCursorResponse?: shared.BalancesCursorResponse | undefined;
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
export const GetBalancesRequest$inboundSchema: z.ZodType<
  GetBalancesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  address: z.string().optional(),
  after: z.string().optional(),
  cursor: z.string().optional(),
  ledger: z.string(),
  pageSize: z.number().int().optional(),
});

/** @internal */
export type GetBalancesRequest$Outbound = {
  address?: string | undefined;
  after?: string | undefined;
  cursor?: string | undefined;
  ledger: string;
  pageSize?: number | undefined;
};

/** @internal */
export const GetBalancesRequest$outboundSchema: z.ZodType<
  GetBalancesRequest$Outbound,
  z.ZodTypeDef,
  GetBalancesRequest
> = z.object({
  address: z.string().optional(),
  after: z.string().optional(),
  cursor: z.string().optional(),
  ledger: z.string(),
  pageSize: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBalancesRequest$ {
  /** @deprecated use `GetBalancesRequest$inboundSchema` instead. */
  export const inboundSchema = GetBalancesRequest$inboundSchema;
  /** @deprecated use `GetBalancesRequest$outboundSchema` instead. */
  export const outboundSchema = GetBalancesRequest$outboundSchema;
  /** @deprecated use `GetBalancesRequest$Outbound` instead. */
  export type Outbound = GetBalancesRequest$Outbound;
}

export function getBalancesRequestToJSON(
  getBalancesRequest: GetBalancesRequest,
): string {
  return JSON.stringify(
    GetBalancesRequest$outboundSchema.parse(getBalancesRequest),
  );
}

export function getBalancesRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetBalancesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBalancesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBalancesRequest' from JSON`,
  );
}

/** @internal */
export const GetBalancesResponse$inboundSchema: z.ZodType<
  GetBalancesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  BalancesCursorResponse: shared.BalancesCursorResponse$inboundSchema
    .optional(),
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "BalancesCursorResponse": "balancesCursorResponse",
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetBalancesResponse$Outbound = {
  BalancesCursorResponse?: shared.BalancesCursorResponse$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const GetBalancesResponse$outboundSchema: z.ZodType<
  GetBalancesResponse$Outbound,
  z.ZodTypeDef,
  GetBalancesResponse
> = z.object({
  balancesCursorResponse: shared.BalancesCursorResponse$outboundSchema
    .optional(),
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    balancesCursorResponse: "BalancesCursorResponse",
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBalancesResponse$ {
  /** @deprecated use `GetBalancesResponse$inboundSchema` instead. */
  export const inboundSchema = GetBalancesResponse$inboundSchema;
  /** @deprecated use `GetBalancesResponse$outboundSchema` instead. */
  export const outboundSchema = GetBalancesResponse$outboundSchema;
  /** @deprecated use `GetBalancesResponse$Outbound` instead. */
  export type Outbound = GetBalancesResponse$Outbound;
}

export function getBalancesResponseToJSON(
  getBalancesResponse: GetBalancesResponse,
): string {
  return JSON.stringify(
    GetBalancesResponse$outboundSchema.parse(getBalancesResponse),
  );
}

export function getBalancesResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetBalancesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBalancesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBalancesResponse' from JSON`,
  );
}
