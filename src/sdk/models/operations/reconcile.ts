/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ReconcileRequest = {
  reconciliationRequest: shared.ReconciliationRequest;
  /**
   * The policy ID.
   */
  policyID: string;
};

export type ReconcileResponse = {
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
export const ReconcileRequest$inboundSchema: z.ZodType<
  ReconcileRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  ReconciliationRequest: shared.ReconciliationRequest$inboundSchema,
  policyID: z.string(),
}).transform((v) => {
  return remap$(v, {
    "ReconciliationRequest": "reconciliationRequest",
  });
});

/** @internal */
export type ReconcileRequest$Outbound = {
  ReconciliationRequest: shared.ReconciliationRequest$Outbound;
  policyID: string;
};

/** @internal */
export const ReconcileRequest$outboundSchema: z.ZodType<
  ReconcileRequest$Outbound,
  z.ZodTypeDef,
  ReconcileRequest
> = z.object({
  reconciliationRequest: shared.ReconciliationRequest$outboundSchema,
  policyID: z.string(),
}).transform((v) => {
  return remap$(v, {
    reconciliationRequest: "ReconciliationRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReconcileRequest$ {
  /** @deprecated use `ReconcileRequest$inboundSchema` instead. */
  export const inboundSchema = ReconcileRequest$inboundSchema;
  /** @deprecated use `ReconcileRequest$outboundSchema` instead. */
  export const outboundSchema = ReconcileRequest$outboundSchema;
  /** @deprecated use `ReconcileRequest$Outbound` instead. */
  export type Outbound = ReconcileRequest$Outbound;
}

export function reconcileRequestToJSON(
  reconcileRequest: ReconcileRequest,
): string {
  return JSON.stringify(
    ReconcileRequest$outboundSchema.parse(reconcileRequest),
  );
}

export function reconcileRequestFromJSON(
  jsonString: string,
): SafeParseResult<ReconcileRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReconcileRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReconcileRequest' from JSON`,
  );
}

/** @internal */
export const ReconcileResponse$inboundSchema: z.ZodType<
  ReconcileResponse,
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
export type ReconcileResponse$Outbound = {
  ContentType: string;
  ReconciliationResponse?: shared.ReconciliationResponse$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const ReconcileResponse$outboundSchema: z.ZodType<
  ReconcileResponse$Outbound,
  z.ZodTypeDef,
  ReconcileResponse
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
export namespace ReconcileResponse$ {
  /** @deprecated use `ReconcileResponse$inboundSchema` instead. */
  export const inboundSchema = ReconcileResponse$inboundSchema;
  /** @deprecated use `ReconcileResponse$outboundSchema` instead. */
  export const outboundSchema = ReconcileResponse$outboundSchema;
  /** @deprecated use `ReconcileResponse$Outbound` instead. */
  export type Outbound = ReconcileResponse$Outbound;
}

export function reconcileResponseToJSON(
  reconcileResponse: ReconcileResponse,
): string {
  return JSON.stringify(
    ReconcileResponse$outboundSchema.parse(reconcileResponse),
  );
}

export function reconcileResponseFromJSON(
  jsonString: string,
): SafeParseResult<ReconcileResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReconcileResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReconcileResponse' from JSON`,
  );
}
