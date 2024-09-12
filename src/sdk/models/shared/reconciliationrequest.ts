/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ReconciliationRequest = {
  reconciledAtLedger: Date;
  reconciledAtPayments: Date;
};

/** @internal */
export const ReconciliationRequest$inboundSchema: z.ZodType<
  ReconciliationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  reconciledAtLedger: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
  reconciledAtPayments: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
});

/** @internal */
export type ReconciliationRequest$Outbound = {
  reconciledAtLedger: string;
  reconciledAtPayments: string;
};

/** @internal */
export const ReconciliationRequest$outboundSchema: z.ZodType<
  ReconciliationRequest$Outbound,
  z.ZodTypeDef,
  ReconciliationRequest
> = z.object({
  reconciledAtLedger: z.date().transform(v => v.toISOString()),
  reconciledAtPayments: z.date().transform(v => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReconciliationRequest$ {
  /** @deprecated use `ReconciliationRequest$inboundSchema` instead. */
  export const inboundSchema = ReconciliationRequest$inboundSchema;
  /** @deprecated use `ReconciliationRequest$outboundSchema` instead. */
  export const outboundSchema = ReconciliationRequest$outboundSchema;
  /** @deprecated use `ReconciliationRequest$Outbound` instead. */
  export type Outbound = ReconciliationRequest$Outbound;
}
