/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type V2RunWorkflowRequest = {
  requestBody?: { [k: string]: string } | undefined;
  /**
   * Wait end of the workflow before return
   */
  wait?: boolean | undefined;
  /**
   * The flow id
   */
  workflowID: string;
};

export type V2RunWorkflowResponse = {
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
   * The workflow instance
   */
  v2RunWorkflowResponse?: shared.V2RunWorkflowResponse | undefined;
};

/** @internal */
export const V2RunWorkflowRequest$inboundSchema: z.ZodType<
  V2RunWorkflowRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  RequestBody: z.record(z.string()).optional(),
  wait: z.boolean().optional(),
  workflowID: z.string(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type V2RunWorkflowRequest$Outbound = {
  RequestBody?: { [k: string]: string } | undefined;
  wait?: boolean | undefined;
  workflowID: string;
};

/** @internal */
export const V2RunWorkflowRequest$outboundSchema: z.ZodType<
  V2RunWorkflowRequest$Outbound,
  z.ZodTypeDef,
  V2RunWorkflowRequest
> = z.object({
  requestBody: z.record(z.string()).optional(),
  wait: z.boolean().optional(),
  workflowID: z.string(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2RunWorkflowRequest$ {
  /** @deprecated use `V2RunWorkflowRequest$inboundSchema` instead. */
  export const inboundSchema = V2RunWorkflowRequest$inboundSchema;
  /** @deprecated use `V2RunWorkflowRequest$outboundSchema` instead. */
  export const outboundSchema = V2RunWorkflowRequest$outboundSchema;
  /** @deprecated use `V2RunWorkflowRequest$Outbound` instead. */
  export type Outbound = V2RunWorkflowRequest$Outbound;
}

export function v2RunWorkflowRequestToJSON(
  v2RunWorkflowRequest: V2RunWorkflowRequest,
): string {
  return JSON.stringify(
    V2RunWorkflowRequest$outboundSchema.parse(v2RunWorkflowRequest),
  );
}

export function v2RunWorkflowRequestFromJSON(
  jsonString: string,
): SafeParseResult<V2RunWorkflowRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2RunWorkflowRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2RunWorkflowRequest' from JSON`,
  );
}

/** @internal */
export const V2RunWorkflowResponse$inboundSchema: z.ZodType<
  V2RunWorkflowResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  V2RunWorkflowResponse: shared.V2RunWorkflowResponse$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "V2RunWorkflowResponse": "v2RunWorkflowResponse",
  });
});

/** @internal */
export type V2RunWorkflowResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  V2RunWorkflowResponse?: shared.V2RunWorkflowResponse$Outbound | undefined;
};

/** @internal */
export const V2RunWorkflowResponse$outboundSchema: z.ZodType<
  V2RunWorkflowResponse$Outbound,
  z.ZodTypeDef,
  V2RunWorkflowResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  v2RunWorkflowResponse: shared.V2RunWorkflowResponse$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    v2RunWorkflowResponse: "V2RunWorkflowResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2RunWorkflowResponse$ {
  /** @deprecated use `V2RunWorkflowResponse$inboundSchema` instead. */
  export const inboundSchema = V2RunWorkflowResponse$inboundSchema;
  /** @deprecated use `V2RunWorkflowResponse$outboundSchema` instead. */
  export const outboundSchema = V2RunWorkflowResponse$outboundSchema;
  /** @deprecated use `V2RunWorkflowResponse$Outbound` instead. */
  export type Outbound = V2RunWorkflowResponse$Outbound;
}

export function v2RunWorkflowResponseToJSON(
  v2RunWorkflowResponse: V2RunWorkflowResponse,
): string {
  return JSON.stringify(
    V2RunWorkflowResponse$outboundSchema.parse(v2RunWorkflowResponse),
  );
}

export function v2RunWorkflowResponseFromJSON(
  jsonString: string,
): SafeParseResult<V2RunWorkflowResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2RunWorkflowResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2RunWorkflowResponse' from JSON`,
  );
}
