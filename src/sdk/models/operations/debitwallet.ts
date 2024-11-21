/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type DebitWalletRequest = {
  debitWalletRequest?: shared.DebitWalletRequest | undefined;
  /**
   * Use an idempotency key
   */
  idempotencyKey?: string | undefined;
  id: string;
};

export type DebitWalletResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * Wallet successfully debited as a pending hold
   */
  debitWalletResponse?: shared.DebitWalletResponse | undefined;
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
export const DebitWalletRequest$inboundSchema: z.ZodType<
  DebitWalletRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  DebitWalletRequest: shared.DebitWalletRequest$inboundSchema.optional(),
  "Idempotency-Key": z.string().optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "DebitWalletRequest": "debitWalletRequest",
    "Idempotency-Key": "idempotencyKey",
  });
});

/** @internal */
export type DebitWalletRequest$Outbound = {
  DebitWalletRequest?: shared.DebitWalletRequest$Outbound | undefined;
  "Idempotency-Key"?: string | undefined;
  id: string;
};

/** @internal */
export const DebitWalletRequest$outboundSchema: z.ZodType<
  DebitWalletRequest$Outbound,
  z.ZodTypeDef,
  DebitWalletRequest
> = z.object({
  debitWalletRequest: shared.DebitWalletRequest$outboundSchema.optional(),
  idempotencyKey: z.string().optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    debitWalletRequest: "DebitWalletRequest",
    idempotencyKey: "Idempotency-Key",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DebitWalletRequest$ {
  /** @deprecated use `DebitWalletRequest$inboundSchema` instead. */
  export const inboundSchema = DebitWalletRequest$inboundSchema;
  /** @deprecated use `DebitWalletRequest$outboundSchema` instead. */
  export const outboundSchema = DebitWalletRequest$outboundSchema;
  /** @deprecated use `DebitWalletRequest$Outbound` instead. */
  export type Outbound = DebitWalletRequest$Outbound;
}

export function debitWalletRequestToJSON(
  debitWalletRequest: DebitWalletRequest,
): string {
  return JSON.stringify(
    DebitWalletRequest$outboundSchema.parse(debitWalletRequest),
  );
}

export function debitWalletRequestFromJSON(
  jsonString: string,
): SafeParseResult<DebitWalletRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DebitWalletRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DebitWalletRequest' from JSON`,
  );
}

/** @internal */
export const DebitWalletResponse$inboundSchema: z.ZodType<
  DebitWalletResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  DebitWalletResponse: shared.DebitWalletResponse$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "DebitWalletResponse": "debitWalletResponse",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type DebitWalletResponse$Outbound = {
  ContentType: string;
  DebitWalletResponse?: shared.DebitWalletResponse$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const DebitWalletResponse$outboundSchema: z.ZodType<
  DebitWalletResponse$Outbound,
  z.ZodTypeDef,
  DebitWalletResponse
> = z.object({
  contentType: z.string(),
  debitWalletResponse: shared.DebitWalletResponse$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    debitWalletResponse: "DebitWalletResponse",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DebitWalletResponse$ {
  /** @deprecated use `DebitWalletResponse$inboundSchema` instead. */
  export const inboundSchema = DebitWalletResponse$inboundSchema;
  /** @deprecated use `DebitWalletResponse$outboundSchema` instead. */
  export const outboundSchema = DebitWalletResponse$outboundSchema;
  /** @deprecated use `DebitWalletResponse$Outbound` instead. */
  export type Outbound = DebitWalletResponse$Outbound;
}

export function debitWalletResponseToJSON(
  debitWalletResponse: DebitWalletResponse,
): string {
  return JSON.stringify(
    DebitWalletResponse$outboundSchema.parse(debitWalletResponse),
  );
}

export function debitWalletResponseFromJSON(
  jsonString: string,
): SafeParseResult<DebitWalletResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DebitWalletResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DebitWalletResponse' from JSON`,
  );
}
