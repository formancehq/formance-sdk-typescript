/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdateTransferInitiationStatusRequest = {
  updateTransferInitiationStatusRequest:
    shared.UpdateTransferInitiationStatusRequest;
  /**
   * The transfer ID.
   */
  transferId: string;
};

export type UpdateTransferInitiationStatusResponse = {
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
export const UpdateTransferInitiationStatusRequest$inboundSchema: z.ZodType<
  UpdateTransferInitiationStatusRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  UpdateTransferInitiationStatusRequest:
    shared.UpdateTransferInitiationStatusRequest$inboundSchema,
  transferId: z.string(),
}).transform((v) => {
  return remap$(v, {
    "UpdateTransferInitiationStatusRequest":
      "updateTransferInitiationStatusRequest",
  });
});

/** @internal */
export type UpdateTransferInitiationStatusRequest$Outbound = {
  UpdateTransferInitiationStatusRequest:
    shared.UpdateTransferInitiationStatusRequest$Outbound;
  transferId: string;
};

/** @internal */
export const UpdateTransferInitiationStatusRequest$outboundSchema: z.ZodType<
  UpdateTransferInitiationStatusRequest$Outbound,
  z.ZodTypeDef,
  UpdateTransferInitiationStatusRequest
> = z.object({
  updateTransferInitiationStatusRequest:
    shared.UpdateTransferInitiationStatusRequest$outboundSchema,
  transferId: z.string(),
}).transform((v) => {
  return remap$(v, {
    updateTransferInitiationStatusRequest:
      "UpdateTransferInitiationStatusRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTransferInitiationStatusRequest$ {
  /** @deprecated use `UpdateTransferInitiationStatusRequest$inboundSchema` instead. */
  export const inboundSchema =
    UpdateTransferInitiationStatusRequest$inboundSchema;
  /** @deprecated use `UpdateTransferInitiationStatusRequest$outboundSchema` instead. */
  export const outboundSchema =
    UpdateTransferInitiationStatusRequest$outboundSchema;
  /** @deprecated use `UpdateTransferInitiationStatusRequest$Outbound` instead. */
  export type Outbound = UpdateTransferInitiationStatusRequest$Outbound;
}

export function updateTransferInitiationStatusRequestToJSON(
  updateTransferInitiationStatusRequest: UpdateTransferInitiationStatusRequest,
): string {
  return JSON.stringify(
    UpdateTransferInitiationStatusRequest$outboundSchema.parse(
      updateTransferInitiationStatusRequest,
    ),
  );
}

export function updateTransferInitiationStatusRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateTransferInitiationStatusRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateTransferInitiationStatusRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateTransferInitiationStatusRequest' from JSON`,
  );
}

/** @internal */
export const UpdateTransferInitiationStatusResponse$inboundSchema: z.ZodType<
  UpdateTransferInitiationStatusResponse,
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
export type UpdateTransferInitiationStatusResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const UpdateTransferInitiationStatusResponse$outboundSchema: z.ZodType<
  UpdateTransferInitiationStatusResponse$Outbound,
  z.ZodTypeDef,
  UpdateTransferInitiationStatusResponse
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
export namespace UpdateTransferInitiationStatusResponse$ {
  /** @deprecated use `UpdateTransferInitiationStatusResponse$inboundSchema` instead. */
  export const inboundSchema =
    UpdateTransferInitiationStatusResponse$inboundSchema;
  /** @deprecated use `UpdateTransferInitiationStatusResponse$outboundSchema` instead. */
  export const outboundSchema =
    UpdateTransferInitiationStatusResponse$outboundSchema;
  /** @deprecated use `UpdateTransferInitiationStatusResponse$Outbound` instead. */
  export type Outbound = UpdateTransferInitiationStatusResponse$Outbound;
}

export function updateTransferInitiationStatusResponseToJSON(
  updateTransferInitiationStatusResponse:
    UpdateTransferInitiationStatusResponse,
): string {
  return JSON.stringify(
    UpdateTransferInitiationStatusResponse$outboundSchema.parse(
      updateTransferInitiationStatusResponse,
    ),
  );
}

export function updateTransferInitiationStatusResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateTransferInitiationStatusResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateTransferInitiationStatusResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateTransferInitiationStatusResponse' from JSON`,
  );
}
