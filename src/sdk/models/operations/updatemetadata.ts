/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateMetadataRequest = {
  requestBody: { [k: string]: string } | null;
  /**
   * The payment ID.
   */
  paymentId: string;
};

export type UpdateMetadataResponse = {
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
export const UpdateMetadataRequest$inboundSchema: z.ZodType<
  UpdateMetadataRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  RequestBody: z.nullable(z.record(z.string())),
  paymentId: z.string(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateMetadataRequest$Outbound = {
  RequestBody: { [k: string]: string } | null;
  paymentId: string;
};

/** @internal */
export const UpdateMetadataRequest$outboundSchema: z.ZodType<
  UpdateMetadataRequest$Outbound,
  z.ZodTypeDef,
  UpdateMetadataRequest
> = z.object({
  requestBody: z.nullable(z.record(z.string())),
  paymentId: z.string(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMetadataRequest$ {
  /** @deprecated use `UpdateMetadataRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateMetadataRequest$inboundSchema;
  /** @deprecated use `UpdateMetadataRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateMetadataRequest$outboundSchema;
  /** @deprecated use `UpdateMetadataRequest$Outbound` instead. */
  export type Outbound = UpdateMetadataRequest$Outbound;
}

export function updateMetadataRequestToJSON(
  updateMetadataRequest: UpdateMetadataRequest,
): string {
  return JSON.stringify(
    UpdateMetadataRequest$outboundSchema.parse(updateMetadataRequest),
  );
}

export function updateMetadataRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMetadataRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMetadataRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMetadataRequest' from JSON`,
  );
}

/** @internal */
export const UpdateMetadataResponse$inboundSchema: z.ZodType<
  UpdateMetadataResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type UpdateMetadataResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const UpdateMetadataResponse$outboundSchema: z.ZodType<
  UpdateMetadataResponse$Outbound,
  z.ZodTypeDef,
  UpdateMetadataResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMetadataResponse$ {
  /** @deprecated use `UpdateMetadataResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateMetadataResponse$inboundSchema;
  /** @deprecated use `UpdateMetadataResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateMetadataResponse$outboundSchema;
  /** @deprecated use `UpdateMetadataResponse$Outbound` instead. */
  export type Outbound = UpdateMetadataResponse$Outbound;
}

export function updateMetadataResponseToJSON(
  updateMetadataResponse: UpdateMetadataResponse,
): string {
  return JSON.stringify(
    UpdateMetadataResponse$outboundSchema.parse(updateMetadataResponse),
  );
}

export function updateMetadataResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMetadataResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMetadataResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMetadataResponse' from JSON`,
  );
}
