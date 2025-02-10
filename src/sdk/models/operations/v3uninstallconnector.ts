/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type V3UninstallConnectorRequest = {
  /**
   * The connector ID
   */
  connectorID: string;
};

export type V3UninstallConnectorResponse = {
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
   * Accepted
   */
  v3UninstallConnectorResponse?:
    | shared.V3UninstallConnectorResponse
    | undefined;
};

/** @internal */
export const V3UninstallConnectorRequest$inboundSchema: z.ZodType<
  V3UninstallConnectorRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connectorID: z.string(),
});

/** @internal */
export type V3UninstallConnectorRequest$Outbound = {
  connectorID: string;
};

/** @internal */
export const V3UninstallConnectorRequest$outboundSchema: z.ZodType<
  V3UninstallConnectorRequest$Outbound,
  z.ZodTypeDef,
  V3UninstallConnectorRequest
> = z.object({
  connectorID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3UninstallConnectorRequest$ {
  /** @deprecated use `V3UninstallConnectorRequest$inboundSchema` instead. */
  export const inboundSchema = V3UninstallConnectorRequest$inboundSchema;
  /** @deprecated use `V3UninstallConnectorRequest$outboundSchema` instead. */
  export const outboundSchema = V3UninstallConnectorRequest$outboundSchema;
  /** @deprecated use `V3UninstallConnectorRequest$Outbound` instead. */
  export type Outbound = V3UninstallConnectorRequest$Outbound;
}

export function v3UninstallConnectorRequestToJSON(
  v3UninstallConnectorRequest: V3UninstallConnectorRequest,
): string {
  return JSON.stringify(
    V3UninstallConnectorRequest$outboundSchema.parse(
      v3UninstallConnectorRequest,
    ),
  );
}

export function v3UninstallConnectorRequestFromJSON(
  jsonString: string,
): SafeParseResult<V3UninstallConnectorRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3UninstallConnectorRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3UninstallConnectorRequest' from JSON`,
  );
}

/** @internal */
export const V3UninstallConnectorResponse$inboundSchema: z.ZodType<
  V3UninstallConnectorResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  V3UninstallConnectorResponse: shared
    .V3UninstallConnectorResponse$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "V3UninstallConnectorResponse": "v3UninstallConnectorResponse",
  });
});

/** @internal */
export type V3UninstallConnectorResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  V3UninstallConnectorResponse?:
    | shared.V3UninstallConnectorResponse$Outbound
    | undefined;
};

/** @internal */
export const V3UninstallConnectorResponse$outboundSchema: z.ZodType<
  V3UninstallConnectorResponse$Outbound,
  z.ZodTypeDef,
  V3UninstallConnectorResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  v3UninstallConnectorResponse: shared
    .V3UninstallConnectorResponse$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    v3UninstallConnectorResponse: "V3UninstallConnectorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3UninstallConnectorResponse$ {
  /** @deprecated use `V3UninstallConnectorResponse$inboundSchema` instead. */
  export const inboundSchema = V3UninstallConnectorResponse$inboundSchema;
  /** @deprecated use `V3UninstallConnectorResponse$outboundSchema` instead. */
  export const outboundSchema = V3UninstallConnectorResponse$outboundSchema;
  /** @deprecated use `V3UninstallConnectorResponse$Outbound` instead. */
  export type Outbound = V3UninstallConnectorResponse$Outbound;
}

export function v3UninstallConnectorResponseToJSON(
  v3UninstallConnectorResponse: V3UninstallConnectorResponse,
): string {
  return JSON.stringify(
    V3UninstallConnectorResponse$outboundSchema.parse(
      v3UninstallConnectorResponse,
    ),
  );
}

export function v3UninstallConnectorResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3UninstallConnectorResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3UninstallConnectorResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3UninstallConnectorResponse' from JSON`,
  );
}
