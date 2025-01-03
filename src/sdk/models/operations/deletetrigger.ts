/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteTriggerRequest = {
  /**
   * The trigger id
   */
  triggerID: string;
};

export type DeleteTriggerResponse = {
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
export const DeleteTriggerRequest$inboundSchema: z.ZodType<
  DeleteTriggerRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  triggerID: z.string(),
});

/** @internal */
export type DeleteTriggerRequest$Outbound = {
  triggerID: string;
};

/** @internal */
export const DeleteTriggerRequest$outboundSchema: z.ZodType<
  DeleteTriggerRequest$Outbound,
  z.ZodTypeDef,
  DeleteTriggerRequest
> = z.object({
  triggerID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteTriggerRequest$ {
  /** @deprecated use `DeleteTriggerRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteTriggerRequest$inboundSchema;
  /** @deprecated use `DeleteTriggerRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteTriggerRequest$outboundSchema;
  /** @deprecated use `DeleteTriggerRequest$Outbound` instead. */
  export type Outbound = DeleteTriggerRequest$Outbound;
}

export function deleteTriggerRequestToJSON(
  deleteTriggerRequest: DeleteTriggerRequest,
): string {
  return JSON.stringify(
    DeleteTriggerRequest$outboundSchema.parse(deleteTriggerRequest),
  );
}

export function deleteTriggerRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteTriggerRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteTriggerRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteTriggerRequest' from JSON`,
  );
}

/** @internal */
export const DeleteTriggerResponse$inboundSchema: z.ZodType<
  DeleteTriggerResponse,
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
export type DeleteTriggerResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const DeleteTriggerResponse$outboundSchema: z.ZodType<
  DeleteTriggerResponse$Outbound,
  z.ZodTypeDef,
  DeleteTriggerResponse
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
export namespace DeleteTriggerResponse$ {
  /** @deprecated use `DeleteTriggerResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteTriggerResponse$inboundSchema;
  /** @deprecated use `DeleteTriggerResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteTriggerResponse$outboundSchema;
  /** @deprecated use `DeleteTriggerResponse$Outbound` instead. */
  export type Outbound = DeleteTriggerResponse$Outbound;
}

export function deleteTriggerResponseToJSON(
  deleteTriggerResponse: DeleteTriggerResponse,
): string {
  return JSON.stringify(
    DeleteTriggerResponse$outboundSchema.parse(deleteTriggerResponse),
  );
}

export function deleteTriggerResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteTriggerResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteTriggerResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteTriggerResponse' from JSON`,
  );
}
