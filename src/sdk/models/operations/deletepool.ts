/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeletePoolRequest = {
  /**
   * The pool ID.
   */
  poolId: string;
};

export type DeletePoolResponse = {
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
export const DeletePoolRequest$inboundSchema: z.ZodType<
  DeletePoolRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  poolId: z.string(),
});

/** @internal */
export type DeletePoolRequest$Outbound = {
  poolId: string;
};

/** @internal */
export const DeletePoolRequest$outboundSchema: z.ZodType<
  DeletePoolRequest$Outbound,
  z.ZodTypeDef,
  DeletePoolRequest
> = z.object({
  poolId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeletePoolRequest$ {
  /** @deprecated use `DeletePoolRequest$inboundSchema` instead. */
  export const inboundSchema = DeletePoolRequest$inboundSchema;
  /** @deprecated use `DeletePoolRequest$outboundSchema` instead. */
  export const outboundSchema = DeletePoolRequest$outboundSchema;
  /** @deprecated use `DeletePoolRequest$Outbound` instead. */
  export type Outbound = DeletePoolRequest$Outbound;
}

export function deletePoolRequestToJSON(
  deletePoolRequest: DeletePoolRequest,
): string {
  return JSON.stringify(
    DeletePoolRequest$outboundSchema.parse(deletePoolRequest),
  );
}

export function deletePoolRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeletePoolRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeletePoolRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeletePoolRequest' from JSON`,
  );
}

/** @internal */
export const DeletePoolResponse$inboundSchema: z.ZodType<
  DeletePoolResponse,
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
export type DeletePoolResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const DeletePoolResponse$outboundSchema: z.ZodType<
  DeletePoolResponse$Outbound,
  z.ZodTypeDef,
  DeletePoolResponse
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
export namespace DeletePoolResponse$ {
  /** @deprecated use `DeletePoolResponse$inboundSchema` instead. */
  export const inboundSchema = DeletePoolResponse$inboundSchema;
  /** @deprecated use `DeletePoolResponse$outboundSchema` instead. */
  export const outboundSchema = DeletePoolResponse$outboundSchema;
  /** @deprecated use `DeletePoolResponse$Outbound` instead. */
  export type Outbound = DeletePoolResponse$Outbound;
}

export function deletePoolResponseToJSON(
  deletePoolResponse: DeletePoolResponse,
): string {
  return JSON.stringify(
    DeletePoolResponse$outboundSchema.parse(deletePoolResponse),
  );
}

export function deletePoolResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeletePoolResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeletePoolResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeletePoolResponse' from JSON`,
  );
}
