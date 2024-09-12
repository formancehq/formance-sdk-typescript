/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type CreateWalletRequest = {
  createWalletRequest?: shared.CreateWalletRequest | undefined;
  /**
   * Use an idempotency key
   */
  idempotencyKey?: string | undefined;
};

export type CreateWalletResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * Wallet created
   */
  createWalletResponse?: shared.CreateWalletResponse | undefined;
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
export const CreateWalletRequest$inboundSchema: z.ZodType<
  CreateWalletRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CreateWalletRequest: shared.CreateWalletRequest$inboundSchema.optional(),
  "Idempotency-Key": z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "CreateWalletRequest": "createWalletRequest",
    "Idempotency-Key": "idempotencyKey",
  });
});

/** @internal */
export type CreateWalletRequest$Outbound = {
  CreateWalletRequest?: shared.CreateWalletRequest$Outbound | undefined;
  "Idempotency-Key"?: string | undefined;
};

/** @internal */
export const CreateWalletRequest$outboundSchema: z.ZodType<
  CreateWalletRequest$Outbound,
  z.ZodTypeDef,
  CreateWalletRequest
> = z.object({
  createWalletRequest: shared.CreateWalletRequest$outboundSchema.optional(),
  idempotencyKey: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    createWalletRequest: "CreateWalletRequest",
    idempotencyKey: "Idempotency-Key",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWalletRequest$ {
  /** @deprecated use `CreateWalletRequest$inboundSchema` instead. */
  export const inboundSchema = CreateWalletRequest$inboundSchema;
  /** @deprecated use `CreateWalletRequest$outboundSchema` instead. */
  export const outboundSchema = CreateWalletRequest$outboundSchema;
  /** @deprecated use `CreateWalletRequest$Outbound` instead. */
  export type Outbound = CreateWalletRequest$Outbound;
}

/** @internal */
export const CreateWalletResponse$inboundSchema: z.ZodType<
  CreateWalletResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  CreateWalletResponse: shared.CreateWalletResponse$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "CreateWalletResponse": "createWalletResponse",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type CreateWalletResponse$Outbound = {
  ContentType: string;
  CreateWalletResponse?: shared.CreateWalletResponse$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const CreateWalletResponse$outboundSchema: z.ZodType<
  CreateWalletResponse$Outbound,
  z.ZodTypeDef,
  CreateWalletResponse
> = z.object({
  contentType: z.string(),
  createWalletResponse: shared.CreateWalletResponse$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    createWalletResponse: "CreateWalletResponse",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWalletResponse$ {
  /** @deprecated use `CreateWalletResponse$inboundSchema` instead. */
  export const inboundSchema = CreateWalletResponse$inboundSchema;
  /** @deprecated use `CreateWalletResponse$outboundSchema` instead. */
  export const outboundSchema = CreateWalletResponse$outboundSchema;
  /** @deprecated use `CreateWalletResponse$Outbound` instead. */
  export type Outbound = CreateWalletResponse$Outbound;
}
