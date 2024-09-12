/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type GetPoolRequest = {
  /**
   * The pool ID.
   */
  poolId: string;
};

export type GetPoolResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * OK
   */
  poolResponse?: shared.PoolResponse | undefined;
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
export const GetPoolRequest$inboundSchema: z.ZodType<
  GetPoolRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  poolId: z.string(),
});

/** @internal */
export type GetPoolRequest$Outbound = {
  poolId: string;
};

/** @internal */
export const GetPoolRequest$outboundSchema: z.ZodType<
  GetPoolRequest$Outbound,
  z.ZodTypeDef,
  GetPoolRequest
> = z.object({
  poolId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPoolRequest$ {
  /** @deprecated use `GetPoolRequest$inboundSchema` instead. */
  export const inboundSchema = GetPoolRequest$inboundSchema;
  /** @deprecated use `GetPoolRequest$outboundSchema` instead. */
  export const outboundSchema = GetPoolRequest$outboundSchema;
  /** @deprecated use `GetPoolRequest$Outbound` instead. */
  export type Outbound = GetPoolRequest$Outbound;
}

/** @internal */
export const GetPoolResponse$inboundSchema: z.ZodType<
  GetPoolResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  PoolResponse: shared.PoolResponse$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "PoolResponse": "poolResponse",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetPoolResponse$Outbound = {
  ContentType: string;
  PoolResponse?: shared.PoolResponse$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const GetPoolResponse$outboundSchema: z.ZodType<
  GetPoolResponse$Outbound,
  z.ZodTypeDef,
  GetPoolResponse
> = z.object({
  contentType: z.string(),
  poolResponse: shared.PoolResponse$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    poolResponse: "PoolResponse",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPoolResponse$ {
  /** @deprecated use `GetPoolResponse$inboundSchema` instead. */
  export const inboundSchema = GetPoolResponse$inboundSchema;
  /** @deprecated use `GetPoolResponse$outboundSchema` instead. */
  export const outboundSchema = GetPoolResponse$outboundSchema;
  /** @deprecated use `GetPoolResponse$Outbound` instead. */
  export type Outbound = GetPoolResponse$Outbound;
}
