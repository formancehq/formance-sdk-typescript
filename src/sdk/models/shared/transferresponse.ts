/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * OK
 */
export type TransferResponse = {
  id?: string | undefined;
};

/** @internal */
export const TransferResponse$inboundSchema: z.ZodType<
  TransferResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
});

/** @internal */
export type TransferResponse$Outbound = {
  id?: string | undefined;
};

/** @internal */
export const TransferResponse$outboundSchema: z.ZodType<
  TransferResponse$Outbound,
  z.ZodTypeDef,
  TransferResponse
> = z.object({
  id: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransferResponse$ {
  /** @deprecated use `TransferResponse$inboundSchema` instead. */
  export const inboundSchema = TransferResponse$inboundSchema;
  /** @deprecated use `TransferResponse$outboundSchema` instead. */
  export const outboundSchema = TransferResponse$outboundSchema;
  /** @deprecated use `TransferResponse$Outbound` instead. */
  export type Outbound = TransferResponse$Outbound;
}
