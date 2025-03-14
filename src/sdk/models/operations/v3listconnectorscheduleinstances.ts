/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type V3ListConnectorScheduleInstancesRequest = {
  /**
   * The connector ID
   */
  connectorID: string;
  /**
   * Parameter used in pagination requests. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set.
   *
   * @remarks
   */
  cursor?: string | undefined;
  /**
   * The number of items to return
   */
  pageSize?: number | undefined;
  /**
   * The schedule ID
   */
  scheduleID: string;
};

export type V3ListConnectorScheduleInstancesResponse = {
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
  v3ConnectorScheduleInstancesCursorResponse?:
    | shared.V3ConnectorScheduleInstancesCursorResponse
    | undefined;
};

/** @internal */
export const V3ListConnectorScheduleInstancesRequest$inboundSchema: z.ZodType<
  V3ListConnectorScheduleInstancesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connectorID: z.string(),
  cursor: z.string().optional(),
  pageSize: z.number().int().optional(),
  scheduleID: z.string(),
});

/** @internal */
export type V3ListConnectorScheduleInstancesRequest$Outbound = {
  connectorID: string;
  cursor?: string | undefined;
  pageSize?: number | undefined;
  scheduleID: string;
};

/** @internal */
export const V3ListConnectorScheduleInstancesRequest$outboundSchema: z.ZodType<
  V3ListConnectorScheduleInstancesRequest$Outbound,
  z.ZodTypeDef,
  V3ListConnectorScheduleInstancesRequest
> = z.object({
  connectorID: z.string(),
  cursor: z.string().optional(),
  pageSize: z.number().int().optional(),
  scheduleID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3ListConnectorScheduleInstancesRequest$ {
  /** @deprecated use `V3ListConnectorScheduleInstancesRequest$inboundSchema` instead. */
  export const inboundSchema =
    V3ListConnectorScheduleInstancesRequest$inboundSchema;
  /** @deprecated use `V3ListConnectorScheduleInstancesRequest$outboundSchema` instead. */
  export const outboundSchema =
    V3ListConnectorScheduleInstancesRequest$outboundSchema;
  /** @deprecated use `V3ListConnectorScheduleInstancesRequest$Outbound` instead. */
  export type Outbound = V3ListConnectorScheduleInstancesRequest$Outbound;
}

export function v3ListConnectorScheduleInstancesRequestToJSON(
  v3ListConnectorScheduleInstancesRequest:
    V3ListConnectorScheduleInstancesRequest,
): string {
  return JSON.stringify(
    V3ListConnectorScheduleInstancesRequest$outboundSchema.parse(
      v3ListConnectorScheduleInstancesRequest,
    ),
  );
}

export function v3ListConnectorScheduleInstancesRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  V3ListConnectorScheduleInstancesRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      V3ListConnectorScheduleInstancesRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'V3ListConnectorScheduleInstancesRequest' from JSON`,
  );
}

/** @internal */
export const V3ListConnectorScheduleInstancesResponse$inboundSchema: z.ZodType<
  V3ListConnectorScheduleInstancesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  V3ConnectorScheduleInstancesCursorResponse: shared
    .V3ConnectorScheduleInstancesCursorResponse$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "V3ConnectorScheduleInstancesCursorResponse":
      "v3ConnectorScheduleInstancesCursorResponse",
  });
});

/** @internal */
export type V3ListConnectorScheduleInstancesResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  V3ConnectorScheduleInstancesCursorResponse?:
    | shared.V3ConnectorScheduleInstancesCursorResponse$Outbound
    | undefined;
};

/** @internal */
export const V3ListConnectorScheduleInstancesResponse$outboundSchema: z.ZodType<
  V3ListConnectorScheduleInstancesResponse$Outbound,
  z.ZodTypeDef,
  V3ListConnectorScheduleInstancesResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  v3ConnectorScheduleInstancesCursorResponse: shared
    .V3ConnectorScheduleInstancesCursorResponse$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    v3ConnectorScheduleInstancesCursorResponse:
      "V3ConnectorScheduleInstancesCursorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3ListConnectorScheduleInstancesResponse$ {
  /** @deprecated use `V3ListConnectorScheduleInstancesResponse$inboundSchema` instead. */
  export const inboundSchema =
    V3ListConnectorScheduleInstancesResponse$inboundSchema;
  /** @deprecated use `V3ListConnectorScheduleInstancesResponse$outboundSchema` instead. */
  export const outboundSchema =
    V3ListConnectorScheduleInstancesResponse$outboundSchema;
  /** @deprecated use `V3ListConnectorScheduleInstancesResponse$Outbound` instead. */
  export type Outbound = V3ListConnectorScheduleInstancesResponse$Outbound;
}

export function v3ListConnectorScheduleInstancesResponseToJSON(
  v3ListConnectorScheduleInstancesResponse:
    V3ListConnectorScheduleInstancesResponse,
): string {
  return JSON.stringify(
    V3ListConnectorScheduleInstancesResponse$outboundSchema.parse(
      v3ListConnectorScheduleInstancesResponse,
    ),
  );
}

export function v3ListConnectorScheduleInstancesResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  V3ListConnectorScheduleInstancesResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      V3ListConnectorScheduleInstancesResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'V3ListConnectorScheduleInstancesResponse' from JSON`,
  );
}
