/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type GetInstanceHistoryRequest = {
  /**
   * The instance id
   */
  instanceID: string;
};

export type GetInstanceHistoryResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The workflow instance history
   */
  getWorkflowInstanceHistoryResponse?:
    | shared.GetWorkflowInstanceHistoryResponse
    | undefined;
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
export const GetInstanceHistoryRequest$inboundSchema: z.ZodType<
  GetInstanceHistoryRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  instanceID: z.string(),
});

/** @internal */
export type GetInstanceHistoryRequest$Outbound = {
  instanceID: string;
};

/** @internal */
export const GetInstanceHistoryRequest$outboundSchema: z.ZodType<
  GetInstanceHistoryRequest$Outbound,
  z.ZodTypeDef,
  GetInstanceHistoryRequest
> = z.object({
  instanceID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetInstanceHistoryRequest$ {
  /** @deprecated use `GetInstanceHistoryRequest$inboundSchema` instead. */
  export const inboundSchema = GetInstanceHistoryRequest$inboundSchema;
  /** @deprecated use `GetInstanceHistoryRequest$outboundSchema` instead. */
  export const outboundSchema = GetInstanceHistoryRequest$outboundSchema;
  /** @deprecated use `GetInstanceHistoryRequest$Outbound` instead. */
  export type Outbound = GetInstanceHistoryRequest$Outbound;
}

export function getInstanceHistoryRequestToJSON(
  getInstanceHistoryRequest: GetInstanceHistoryRequest,
): string {
  return JSON.stringify(
    GetInstanceHistoryRequest$outboundSchema.parse(getInstanceHistoryRequest),
  );
}

export function getInstanceHistoryRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetInstanceHistoryRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetInstanceHistoryRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetInstanceHistoryRequest' from JSON`,
  );
}

/** @internal */
export const GetInstanceHistoryResponse$inboundSchema: z.ZodType<
  GetInstanceHistoryResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  GetWorkflowInstanceHistoryResponse: shared
    .GetWorkflowInstanceHistoryResponse$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "GetWorkflowInstanceHistoryResponse": "getWorkflowInstanceHistoryResponse",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetInstanceHistoryResponse$Outbound = {
  ContentType: string;
  GetWorkflowInstanceHistoryResponse?:
    | shared.GetWorkflowInstanceHistoryResponse$Outbound
    | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const GetInstanceHistoryResponse$outboundSchema: z.ZodType<
  GetInstanceHistoryResponse$Outbound,
  z.ZodTypeDef,
  GetInstanceHistoryResponse
> = z.object({
  contentType: z.string(),
  getWorkflowInstanceHistoryResponse: shared
    .GetWorkflowInstanceHistoryResponse$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    getWorkflowInstanceHistoryResponse: "GetWorkflowInstanceHistoryResponse",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetInstanceHistoryResponse$ {
  /** @deprecated use `GetInstanceHistoryResponse$inboundSchema` instead. */
  export const inboundSchema = GetInstanceHistoryResponse$inboundSchema;
  /** @deprecated use `GetInstanceHistoryResponse$outboundSchema` instead. */
  export const outboundSchema = GetInstanceHistoryResponse$outboundSchema;
  /** @deprecated use `GetInstanceHistoryResponse$Outbound` instead. */
  export type Outbound = GetInstanceHistoryResponse$Outbound;
}

export function getInstanceHistoryResponseToJSON(
  getInstanceHistoryResponse: GetInstanceHistoryResponse,
): string {
  return JSON.stringify(
    GetInstanceHistoryResponse$outboundSchema.parse(getInstanceHistoryResponse),
  );
}

export function getInstanceHistoryResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetInstanceHistoryResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetInstanceHistoryResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetInstanceHistoryResponse' from JSON`,
  );
}
