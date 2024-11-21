/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type GetReconciliationRequest = {
  /**
   * The reconciliation ID.
   */
  reconciliationID: string;
};

export type GetReconciliationResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * OK
   */
  reconciliationResponse?: shared.ReconciliationResponse | undefined;
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
export const GetReconciliationRequest$inboundSchema: z.ZodType<
  GetReconciliationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  reconciliationID: z.string(),
});

/** @internal */
export type GetReconciliationRequest$Outbound = {
  reconciliationID: string;
};

/** @internal */
export const GetReconciliationRequest$outboundSchema: z.ZodType<
  GetReconciliationRequest$Outbound,
  z.ZodTypeDef,
  GetReconciliationRequest
> = z.object({
  reconciliationID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetReconciliationRequest$ {
  /** @deprecated use `GetReconciliationRequest$inboundSchema` instead. */
  export const inboundSchema = GetReconciliationRequest$inboundSchema;
  /** @deprecated use `GetReconciliationRequest$outboundSchema` instead. */
  export const outboundSchema = GetReconciliationRequest$outboundSchema;
  /** @deprecated use `GetReconciliationRequest$Outbound` instead. */
  export type Outbound = GetReconciliationRequest$Outbound;
}

export function getReconciliationRequestToJSON(
  getReconciliationRequest: GetReconciliationRequest,
): string {
  return JSON.stringify(
    GetReconciliationRequest$outboundSchema.parse(getReconciliationRequest),
  );
}

export function getReconciliationRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetReconciliationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetReconciliationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetReconciliationRequest' from JSON`,
  );
}

/** @internal */
export const GetReconciliationResponse$inboundSchema: z.ZodType<
  GetReconciliationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  ReconciliationResponse: shared.ReconciliationResponse$inboundSchema
    .optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "ReconciliationResponse": "reconciliationResponse",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetReconciliationResponse$Outbound = {
  ContentType: string;
  ReconciliationResponse?: shared.ReconciliationResponse$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const GetReconciliationResponse$outboundSchema: z.ZodType<
  GetReconciliationResponse$Outbound,
  z.ZodTypeDef,
  GetReconciliationResponse
> = z.object({
  contentType: z.string(),
  reconciliationResponse: shared.ReconciliationResponse$outboundSchema
    .optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    reconciliationResponse: "ReconciliationResponse",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetReconciliationResponse$ {
  /** @deprecated use `GetReconciliationResponse$inboundSchema` instead. */
  export const inboundSchema = GetReconciliationResponse$inboundSchema;
  /** @deprecated use `GetReconciliationResponse$outboundSchema` instead. */
  export const outboundSchema = GetReconciliationResponse$outboundSchema;
  /** @deprecated use `GetReconciliationResponse$Outbound` instead. */
  export type Outbound = GetReconciliationResponse$Outbound;
}

export function getReconciliationResponseToJSON(
  getReconciliationResponse: GetReconciliationResponse,
): string {
  return JSON.stringify(
    GetReconciliationResponse$outboundSchema.parse(getReconciliationResponse),
  );
}

export function getReconciliationResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetReconciliationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetReconciliationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetReconciliationResponse' from JSON`,
  );
}
