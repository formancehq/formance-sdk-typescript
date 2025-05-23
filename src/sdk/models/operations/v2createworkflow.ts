/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type V2CreateWorkflowResponse = {
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
   * Created workflow
   */
  v2CreateWorkflowResponse?: shared.V2CreateWorkflowResponse | undefined;
};

/** @internal */
export const V2CreateWorkflowResponse$inboundSchema: z.ZodType<
  V2CreateWorkflowResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  V2CreateWorkflowResponse: shared.V2CreateWorkflowResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "V2CreateWorkflowResponse": "v2CreateWorkflowResponse",
  });
});

/** @internal */
export type V2CreateWorkflowResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  V2CreateWorkflowResponse?:
    | shared.V2CreateWorkflowResponse$Outbound
    | undefined;
};

/** @internal */
export const V2CreateWorkflowResponse$outboundSchema: z.ZodType<
  V2CreateWorkflowResponse$Outbound,
  z.ZodTypeDef,
  V2CreateWorkflowResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  v2CreateWorkflowResponse: shared.V2CreateWorkflowResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    v2CreateWorkflowResponse: "V2CreateWorkflowResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2CreateWorkflowResponse$ {
  /** @deprecated use `V2CreateWorkflowResponse$inboundSchema` instead. */
  export const inboundSchema = V2CreateWorkflowResponse$inboundSchema;
  /** @deprecated use `V2CreateWorkflowResponse$outboundSchema` instead. */
  export const outboundSchema = V2CreateWorkflowResponse$outboundSchema;
  /** @deprecated use `V2CreateWorkflowResponse$Outbound` instead. */
  export type Outbound = V2CreateWorkflowResponse$Outbound;
}

export function v2CreateWorkflowResponseToJSON(
  v2CreateWorkflowResponse: V2CreateWorkflowResponse,
): string {
  return JSON.stringify(
    V2CreateWorkflowResponse$outboundSchema.parse(v2CreateWorkflowResponse),
  );
}

export function v2CreateWorkflowResponseFromJSON(
  jsonString: string,
): SafeParseResult<V2CreateWorkflowResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2CreateWorkflowResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2CreateWorkflowResponse' from JSON`,
  );
}
