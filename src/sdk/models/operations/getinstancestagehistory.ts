/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type GetInstanceStageHistoryRequest = {
  /**
   * The instance id
   */
  instanceID: string;
  /**
   * The stage number
   */
  number: number;
};

export type GetInstanceStageHistoryResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The workflow instance stage history
   */
  getWorkflowInstanceHistoryStageResponse?:
    | shared.GetWorkflowInstanceHistoryStageResponse
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
export const GetInstanceStageHistoryRequest$inboundSchema: z.ZodType<
  GetInstanceStageHistoryRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  instanceID: z.string(),
  number: z.number().int(),
});

/** @internal */
export type GetInstanceStageHistoryRequest$Outbound = {
  instanceID: string;
  number: number;
};

/** @internal */
export const GetInstanceStageHistoryRequest$outboundSchema: z.ZodType<
  GetInstanceStageHistoryRequest$Outbound,
  z.ZodTypeDef,
  GetInstanceStageHistoryRequest
> = z.object({
  instanceID: z.string(),
  number: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetInstanceStageHistoryRequest$ {
  /** @deprecated use `GetInstanceStageHistoryRequest$inboundSchema` instead. */
  export const inboundSchema = GetInstanceStageHistoryRequest$inboundSchema;
  /** @deprecated use `GetInstanceStageHistoryRequest$outboundSchema` instead. */
  export const outboundSchema = GetInstanceStageHistoryRequest$outboundSchema;
  /** @deprecated use `GetInstanceStageHistoryRequest$Outbound` instead. */
  export type Outbound = GetInstanceStageHistoryRequest$Outbound;
}

export function getInstanceStageHistoryRequestToJSON(
  getInstanceStageHistoryRequest: GetInstanceStageHistoryRequest,
): string {
  return JSON.stringify(
    GetInstanceStageHistoryRequest$outboundSchema.parse(
      getInstanceStageHistoryRequest,
    ),
  );
}

export function getInstanceStageHistoryRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetInstanceStageHistoryRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetInstanceStageHistoryRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetInstanceStageHistoryRequest' from JSON`,
  );
}

/** @internal */
export const GetInstanceStageHistoryResponse$inboundSchema: z.ZodType<
  GetInstanceStageHistoryResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  GetWorkflowInstanceHistoryStageResponse: shared
    .GetWorkflowInstanceHistoryStageResponse$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "GetWorkflowInstanceHistoryStageResponse":
      "getWorkflowInstanceHistoryStageResponse",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetInstanceStageHistoryResponse$Outbound = {
  ContentType: string;
  GetWorkflowInstanceHistoryStageResponse?:
    | shared.GetWorkflowInstanceHistoryStageResponse$Outbound
    | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const GetInstanceStageHistoryResponse$outboundSchema: z.ZodType<
  GetInstanceStageHistoryResponse$Outbound,
  z.ZodTypeDef,
  GetInstanceStageHistoryResponse
> = z.object({
  contentType: z.string(),
  getWorkflowInstanceHistoryStageResponse: shared
    .GetWorkflowInstanceHistoryStageResponse$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    getWorkflowInstanceHistoryStageResponse:
      "GetWorkflowInstanceHistoryStageResponse",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetInstanceStageHistoryResponse$ {
  /** @deprecated use `GetInstanceStageHistoryResponse$inboundSchema` instead. */
  export const inboundSchema = GetInstanceStageHistoryResponse$inboundSchema;
  /** @deprecated use `GetInstanceStageHistoryResponse$outboundSchema` instead. */
  export const outboundSchema = GetInstanceStageHistoryResponse$outboundSchema;
  /** @deprecated use `GetInstanceStageHistoryResponse$Outbound` instead. */
  export type Outbound = GetInstanceStageHistoryResponse$Outbound;
}

export function getInstanceStageHistoryResponseToJSON(
  getInstanceStageHistoryResponse: GetInstanceStageHistoryResponse,
): string {
  return JSON.stringify(
    GetInstanceStageHistoryResponse$outboundSchema.parse(
      getInstanceStageHistoryResponse,
    ),
  );
}

export function getInstanceStageHistoryResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetInstanceStageHistoryResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetInstanceStageHistoryResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetInstanceStageHistoryResponse' from JSON`,
  );
}
