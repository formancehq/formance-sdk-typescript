/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ListWorkflowsResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * List of workflows
   */
  listWorkflowsResponse?: shared.ListWorkflowsResponse | undefined;
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
export const ListWorkflowsResponse$inboundSchema: z.ZodType<
  ListWorkflowsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  ListWorkflowsResponse: shared.ListWorkflowsResponse$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "ListWorkflowsResponse": "listWorkflowsResponse",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type ListWorkflowsResponse$Outbound = {
  ContentType: string;
  ListWorkflowsResponse?: shared.ListWorkflowsResponse$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const ListWorkflowsResponse$outboundSchema: z.ZodType<
  ListWorkflowsResponse$Outbound,
  z.ZodTypeDef,
  ListWorkflowsResponse
> = z.object({
  contentType: z.string(),
  listWorkflowsResponse: shared.ListWorkflowsResponse$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    listWorkflowsResponse: "ListWorkflowsResponse",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWorkflowsResponse$ {
  /** @deprecated use `ListWorkflowsResponse$inboundSchema` instead. */
  export const inboundSchema = ListWorkflowsResponse$inboundSchema;
  /** @deprecated use `ListWorkflowsResponse$outboundSchema` instead. */
  export const outboundSchema = ListWorkflowsResponse$outboundSchema;
  /** @deprecated use `ListWorkflowsResponse$Outbound` instead. */
  export type Outbound = ListWorkflowsResponse$Outbound;
}

export function listWorkflowsResponseToJSON(
  listWorkflowsResponse: ListWorkflowsResponse,
): string {
  return JSON.stringify(
    ListWorkflowsResponse$outboundSchema.parse(listWorkflowsResponse),
  );
}

export function listWorkflowsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListWorkflowsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListWorkflowsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListWorkflowsResponse' from JSON`,
  );
}
