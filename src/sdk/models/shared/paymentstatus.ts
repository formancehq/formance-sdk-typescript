/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export enum PaymentStatus {
  Pending = "PENDING",
  Succeeded = "SUCCEEDED",
  Cancelled = "CANCELLED",
  Failed = "FAILED",
  Expired = "EXPIRED",
  Refunded = "REFUNDED",
  RefundedFailure = "REFUNDED_FAILURE",
  Dispute = "DISPUTE",
  DisputeWon = "DISPUTE_WON",
  DisputeLost = "DISPUTE_LOST",
  Other = "OTHER",
}

/** @internal */
export const PaymentStatus$inboundSchema: z.ZodNativeEnum<
  typeof PaymentStatus
> = z.nativeEnum(PaymentStatus);

/** @internal */
export const PaymentStatus$outboundSchema: z.ZodNativeEnum<
  typeof PaymentStatus
> = PaymentStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentStatus$ {
  /** @deprecated use `PaymentStatus$inboundSchema` instead. */
  export const inboundSchema = PaymentStatus$inboundSchema;
  /** @deprecated use `PaymentStatus$outboundSchema` instead. */
  export const outboundSchema = PaymentStatus$outboundSchema;
}
