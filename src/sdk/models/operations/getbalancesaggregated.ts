/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type GetBalancesAggregatedRequest = {
  /**
   * Filter balances involving given account, either as source or destination.
   */
  address?: string | undefined;
  /**
   * Name of the ledger.
   */
  ledger: string;
  /**
   * Use insertion date instead of effective date
   */
  useInsertionDate?: boolean | undefined;
};

export type GetBalancesAggregatedResponse = {
  /**
   * OK
   */
  aggregateBalancesResponse?: shared.AggregateBalancesResponse | undefined;
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
export const GetBalancesAggregatedRequest$inboundSchema: z.ZodType<
  GetBalancesAggregatedRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  address: z.string().optional(),
  ledger: z.string(),
  useInsertionDate: z.boolean().optional(),
});

/** @internal */
export type GetBalancesAggregatedRequest$Outbound = {
  address?: string | undefined;
  ledger: string;
  useInsertionDate?: boolean | undefined;
};

/** @internal */
export const GetBalancesAggregatedRequest$outboundSchema: z.ZodType<
  GetBalancesAggregatedRequest$Outbound,
  z.ZodTypeDef,
  GetBalancesAggregatedRequest
> = z.object({
  address: z.string().optional(),
  ledger: z.string(),
  useInsertionDate: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBalancesAggregatedRequest$ {
  /** @deprecated use `GetBalancesAggregatedRequest$inboundSchema` instead. */
  export const inboundSchema = GetBalancesAggregatedRequest$inboundSchema;
  /** @deprecated use `GetBalancesAggregatedRequest$outboundSchema` instead. */
  export const outboundSchema = GetBalancesAggregatedRequest$outboundSchema;
  /** @deprecated use `GetBalancesAggregatedRequest$Outbound` instead. */
  export type Outbound = GetBalancesAggregatedRequest$Outbound;
}

export function getBalancesAggregatedRequestToJSON(
  getBalancesAggregatedRequest: GetBalancesAggregatedRequest,
): string {
  return JSON.stringify(
    GetBalancesAggregatedRequest$outboundSchema.parse(
      getBalancesAggregatedRequest,
    ),
  );
}

export function getBalancesAggregatedRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetBalancesAggregatedRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBalancesAggregatedRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBalancesAggregatedRequest' from JSON`,
  );
}

/** @internal */
export const GetBalancesAggregatedResponse$inboundSchema: z.ZodType<
  GetBalancesAggregatedResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  AggregateBalancesResponse: shared.AggregateBalancesResponse$inboundSchema
    .optional(),
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "AggregateBalancesResponse": "aggregateBalancesResponse",
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetBalancesAggregatedResponse$Outbound = {
  AggregateBalancesResponse?:
    | shared.AggregateBalancesResponse$Outbound
    | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const GetBalancesAggregatedResponse$outboundSchema: z.ZodType<
  GetBalancesAggregatedResponse$Outbound,
  z.ZodTypeDef,
  GetBalancesAggregatedResponse
> = z.object({
  aggregateBalancesResponse: shared.AggregateBalancesResponse$outboundSchema
    .optional(),
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    aggregateBalancesResponse: "AggregateBalancesResponse",
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBalancesAggregatedResponse$ {
  /** @deprecated use `GetBalancesAggregatedResponse$inboundSchema` instead. */
  export const inboundSchema = GetBalancesAggregatedResponse$inboundSchema;
  /** @deprecated use `GetBalancesAggregatedResponse$outboundSchema` instead. */
  export const outboundSchema = GetBalancesAggregatedResponse$outboundSchema;
  /** @deprecated use `GetBalancesAggregatedResponse$Outbound` instead. */
  export type Outbound = GetBalancesAggregatedResponse$Outbound;
}

export function getBalancesAggregatedResponseToJSON(
  getBalancesAggregatedResponse: GetBalancesAggregatedResponse,
): string {
  return JSON.stringify(
    GetBalancesAggregatedResponse$outboundSchema.parse(
      getBalancesAggregatedResponse,
    ),
  );
}

export function getBalancesAggregatedResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetBalancesAggregatedResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBalancesAggregatedResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBalancesAggregatedResponse' from JSON`,
  );
}
