/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type AddAccountToPoolRequest = {
  addAccountToPoolRequest: shared.AddAccountToPoolRequest;
  /**
   * The pool ID.
   */
  poolId: string;
};

export type AddAccountToPoolResponse = {
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
export const AddAccountToPoolRequest$inboundSchema: z.ZodType<
  AddAccountToPoolRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AddAccountToPoolRequest: shared.AddAccountToPoolRequest$inboundSchema,
  poolId: z.string(),
}).transform((v) => {
  return remap$(v, {
    "AddAccountToPoolRequest": "addAccountToPoolRequest",
  });
});

/** @internal */
export type AddAccountToPoolRequest$Outbound = {
  AddAccountToPoolRequest: shared.AddAccountToPoolRequest$Outbound;
  poolId: string;
};

/** @internal */
export const AddAccountToPoolRequest$outboundSchema: z.ZodType<
  AddAccountToPoolRequest$Outbound,
  z.ZodTypeDef,
  AddAccountToPoolRequest
> = z.object({
  addAccountToPoolRequest: shared.AddAccountToPoolRequest$outboundSchema,
  poolId: z.string(),
}).transform((v) => {
  return remap$(v, {
    addAccountToPoolRequest: "AddAccountToPoolRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddAccountToPoolRequest$ {
  /** @deprecated use `AddAccountToPoolRequest$inboundSchema` instead. */
  export const inboundSchema = AddAccountToPoolRequest$inboundSchema;
  /** @deprecated use `AddAccountToPoolRequest$outboundSchema` instead. */
  export const outboundSchema = AddAccountToPoolRequest$outboundSchema;
  /** @deprecated use `AddAccountToPoolRequest$Outbound` instead. */
  export type Outbound = AddAccountToPoolRequest$Outbound;
}

export function addAccountToPoolRequestToJSON(
  addAccountToPoolRequest: AddAccountToPoolRequest,
): string {
  return JSON.stringify(
    AddAccountToPoolRequest$outboundSchema.parse(addAccountToPoolRequest),
  );
}

export function addAccountToPoolRequestFromJSON(
  jsonString: string,
): SafeParseResult<AddAccountToPoolRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddAccountToPoolRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddAccountToPoolRequest' from JSON`,
  );
}

/** @internal */
export const AddAccountToPoolResponse$inboundSchema: z.ZodType<
  AddAccountToPoolResponse,
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
export type AddAccountToPoolResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AddAccountToPoolResponse$outboundSchema: z.ZodType<
  AddAccountToPoolResponse$Outbound,
  z.ZodTypeDef,
  AddAccountToPoolResponse
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
export namespace AddAccountToPoolResponse$ {
  /** @deprecated use `AddAccountToPoolResponse$inboundSchema` instead. */
  export const inboundSchema = AddAccountToPoolResponse$inboundSchema;
  /** @deprecated use `AddAccountToPoolResponse$outboundSchema` instead. */
  export const outboundSchema = AddAccountToPoolResponse$outboundSchema;
  /** @deprecated use `AddAccountToPoolResponse$Outbound` instead. */
  export type Outbound = AddAccountToPoolResponse$Outbound;
}

export function addAccountToPoolResponseToJSON(
  addAccountToPoolResponse: AddAccountToPoolResponse,
): string {
  return JSON.stringify(
    AddAccountToPoolResponse$outboundSchema.parse(addAccountToPoolResponse),
  );
}

export function addAccountToPoolResponseFromJSON(
  jsonString: string,
): SafeParseResult<AddAccountToPoolResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddAccountToPoolResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddAccountToPoolResponse' from JSON`,
  );
}
