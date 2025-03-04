/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type V3GetConnectorScheduleRequest = {
  /**
   * The connector ID
   */
  connectorID: string;
  /**
   * The schedule ID
   */
  scheduleID: string;
};

export type V3GetConnectorScheduleResponse = {
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
   * OK
   */
  v3ConnectorScheduleResponse?: shared.V3ConnectorScheduleResponse | undefined;
};

/** @internal */
export const V3GetConnectorScheduleRequest$inboundSchema: z.ZodType<
  V3GetConnectorScheduleRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connectorID: z.string(),
  scheduleID: z.string(),
});

/** @internal */
export type V3GetConnectorScheduleRequest$Outbound = {
  connectorID: string;
  scheduleID: string;
};

/** @internal */
export const V3GetConnectorScheduleRequest$outboundSchema: z.ZodType<
  V3GetConnectorScheduleRequest$Outbound,
  z.ZodTypeDef,
  V3GetConnectorScheduleRequest
> = z.object({
  connectorID: z.string(),
  scheduleID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3GetConnectorScheduleRequest$ {
  /** @deprecated use `V3GetConnectorScheduleRequest$inboundSchema` instead. */
  export const inboundSchema = V3GetConnectorScheduleRequest$inboundSchema;
  /** @deprecated use `V3GetConnectorScheduleRequest$outboundSchema` instead. */
  export const outboundSchema = V3GetConnectorScheduleRequest$outboundSchema;
  /** @deprecated use `V3GetConnectorScheduleRequest$Outbound` instead. */
  export type Outbound = V3GetConnectorScheduleRequest$Outbound;
}

export function v3GetConnectorScheduleRequestToJSON(
  v3GetConnectorScheduleRequest: V3GetConnectorScheduleRequest,
): string {
  return JSON.stringify(
    V3GetConnectorScheduleRequest$outboundSchema.parse(
      v3GetConnectorScheduleRequest,
    ),
  );
}

export function v3GetConnectorScheduleRequestFromJSON(
  jsonString: string,
): SafeParseResult<V3GetConnectorScheduleRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3GetConnectorScheduleRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3GetConnectorScheduleRequest' from JSON`,
  );
}

/** @internal */
export const V3GetConnectorScheduleResponse$inboundSchema: z.ZodType<
  V3GetConnectorScheduleResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  V3ConnectorScheduleResponse: shared.V3ConnectorScheduleResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "V3ConnectorScheduleResponse": "v3ConnectorScheduleResponse",
  });
});

/** @internal */
export type V3GetConnectorScheduleResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  V3ConnectorScheduleResponse?:
    | shared.V3ConnectorScheduleResponse$Outbound
    | undefined;
};

/** @internal */
export const V3GetConnectorScheduleResponse$outboundSchema: z.ZodType<
  V3GetConnectorScheduleResponse$Outbound,
  z.ZodTypeDef,
  V3GetConnectorScheduleResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  v3ConnectorScheduleResponse: shared.V3ConnectorScheduleResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    v3ConnectorScheduleResponse: "V3ConnectorScheduleResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3GetConnectorScheduleResponse$ {
  /** @deprecated use `V3GetConnectorScheduleResponse$inboundSchema` instead. */
  export const inboundSchema = V3GetConnectorScheduleResponse$inboundSchema;
  /** @deprecated use `V3GetConnectorScheduleResponse$outboundSchema` instead. */
  export const outboundSchema = V3GetConnectorScheduleResponse$outboundSchema;
  /** @deprecated use `V3GetConnectorScheduleResponse$Outbound` instead. */
  export type Outbound = V3GetConnectorScheduleResponse$Outbound;
}

export function v3GetConnectorScheduleResponseToJSON(
  v3GetConnectorScheduleResponse: V3GetConnectorScheduleResponse,
): string {
  return JSON.stringify(
    V3GetConnectorScheduleResponse$outboundSchema.parse(
      v3GetConnectorScheduleResponse,
    ),
  );
}

export function v3GetConnectorScheduleResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3GetConnectorScheduleResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3GetConnectorScheduleResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3GetConnectorScheduleResponse' from JSON`,
  );
}
