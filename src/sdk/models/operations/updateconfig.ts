/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdateConfigRequest = {
  configUser: shared.ConfigUser;
  /**
   * Config ID
   */
  id: string;
};

export type UpdateConfigResponse = {
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
export const UpdateConfigRequest$inboundSchema: z.ZodType<
  UpdateConfigRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  ConfigUser: shared.ConfigUser$inboundSchema,
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "ConfigUser": "configUser",
  });
});

/** @internal */
export type UpdateConfigRequest$Outbound = {
  ConfigUser: shared.ConfigUser$Outbound;
  id: string;
};

/** @internal */
export const UpdateConfigRequest$outboundSchema: z.ZodType<
  UpdateConfigRequest$Outbound,
  z.ZodTypeDef,
  UpdateConfigRequest
> = z.object({
  configUser: shared.ConfigUser$outboundSchema,
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    configUser: "ConfigUser",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateConfigRequest$ {
  /** @deprecated use `UpdateConfigRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateConfigRequest$inboundSchema;
  /** @deprecated use `UpdateConfigRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateConfigRequest$outboundSchema;
  /** @deprecated use `UpdateConfigRequest$Outbound` instead. */
  export type Outbound = UpdateConfigRequest$Outbound;
}

export function updateConfigRequestToJSON(
  updateConfigRequest: UpdateConfigRequest,
): string {
  return JSON.stringify(
    UpdateConfigRequest$outboundSchema.parse(updateConfigRequest),
  );
}

export function updateConfigRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateConfigRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateConfigRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateConfigRequest' from JSON`,
  );
}

/** @internal */
export const UpdateConfigResponse$inboundSchema: z.ZodType<
  UpdateConfigResponse,
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
export type UpdateConfigResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const UpdateConfigResponse$outboundSchema: z.ZodType<
  UpdateConfigResponse$Outbound,
  z.ZodTypeDef,
  UpdateConfigResponse
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
export namespace UpdateConfigResponse$ {
  /** @deprecated use `UpdateConfigResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateConfigResponse$inboundSchema;
  /** @deprecated use `UpdateConfigResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateConfigResponse$outboundSchema;
  /** @deprecated use `UpdateConfigResponse$Outbound` instead. */
  export type Outbound = UpdateConfigResponse$Outbound;
}

export function updateConfigResponseToJSON(
  updateConfigResponse: UpdateConfigResponse,
): string {
  return JSON.stringify(
    UpdateConfigResponse$outboundSchema.parse(updateConfigResponse),
  );
}

export function updateConfigResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateConfigResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateConfigResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateConfigResponse' from JSON`,
  );
}
