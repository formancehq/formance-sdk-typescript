/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type GetTransactionRequest = {
  /**
   * Name of the ledger.
   */
  ledger: string;
  /**
   * Transaction ID.
   */
  txid: bigint;
};

export type GetTransactionResponse = {
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
  transactionResponse?: shared.TransactionResponse | undefined;
};

/** @internal */
export const GetTransactionRequest$inboundSchema: z.ZodType<
  GetTransactionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  ledger: z.string(),
  txid: z.number().transform(v => BigInt(v)),
});

/** @internal */
export type GetTransactionRequest$Outbound = {
  ledger: string;
  txid: number;
};

/** @internal */
export const GetTransactionRequest$outboundSchema: z.ZodType<
  GetTransactionRequest$Outbound,
  z.ZodTypeDef,
  GetTransactionRequest
> = z.object({
  ledger: z.string(),
  txid: z.bigint().transform(v => Number(v)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTransactionRequest$ {
  /** @deprecated use `GetTransactionRequest$inboundSchema` instead. */
  export const inboundSchema = GetTransactionRequest$inboundSchema;
  /** @deprecated use `GetTransactionRequest$outboundSchema` instead. */
  export const outboundSchema = GetTransactionRequest$outboundSchema;
  /** @deprecated use `GetTransactionRequest$Outbound` instead. */
  export type Outbound = GetTransactionRequest$Outbound;
}

export function getTransactionRequestToJSON(
  getTransactionRequest: GetTransactionRequest,
): string {
  return JSON.stringify(
    GetTransactionRequest$outboundSchema.parse(getTransactionRequest),
  );
}

export function getTransactionRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetTransactionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTransactionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTransactionRequest' from JSON`,
  );
}

/** @internal */
export const GetTransactionResponse$inboundSchema: z.ZodType<
  GetTransactionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  TransactionResponse: shared.TransactionResponse$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "TransactionResponse": "transactionResponse",
  });
});

/** @internal */
export type GetTransactionResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  TransactionResponse?: shared.TransactionResponse$Outbound | undefined;
};

/** @internal */
export const GetTransactionResponse$outboundSchema: z.ZodType<
  GetTransactionResponse$Outbound,
  z.ZodTypeDef,
  GetTransactionResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  transactionResponse: shared.TransactionResponse$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    transactionResponse: "TransactionResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTransactionResponse$ {
  /** @deprecated use `GetTransactionResponse$inboundSchema` instead. */
  export const inboundSchema = GetTransactionResponse$inboundSchema;
  /** @deprecated use `GetTransactionResponse$outboundSchema` instead. */
  export const outboundSchema = GetTransactionResponse$outboundSchema;
  /** @deprecated use `GetTransactionResponse$Outbound` instead. */
  export type Outbound = GetTransactionResponse$Outbound;
}

export function getTransactionResponseToJSON(
  getTransactionResponse: GetTransactionResponse,
): string {
  return JSON.stringify(
    GetTransactionResponse$outboundSchema.parse(getTransactionResponse),
  );
}

export function getTransactionResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetTransactionResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTransactionResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTransactionResponse' from JSON`,
  );
}
