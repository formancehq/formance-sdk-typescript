/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export enum V3PaymentInitiationStatusEnum {
  Unknown = "UNKNOWN",
  WaitingForValidation = "WAITING_FOR_VALIDATION",
  ScheduledForProcessing = "SCHEDULED_FOR_PROCESSING",
  Processing = "PROCESSING",
  Processed = "PROCESSED",
  Failed = "FAILED",
  Rejected = "REJECTED",
  ReverseProcessing = "REVERSE_PROCESSING",
  ReverseFailed = "REVERSE_FAILED",
  Reversed = "REVERSED",
}

/** @internal */
export const V3PaymentInitiationStatusEnum$inboundSchema: z.ZodNativeEnum<
  typeof V3PaymentInitiationStatusEnum
> = z.nativeEnum(V3PaymentInitiationStatusEnum);

/** @internal */
export const V3PaymentInitiationStatusEnum$outboundSchema: z.ZodNativeEnum<
  typeof V3PaymentInitiationStatusEnum
> = V3PaymentInitiationStatusEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3PaymentInitiationStatusEnum$ {
  /** @deprecated use `V3PaymentInitiationStatusEnum$inboundSchema` instead. */
  export const inboundSchema = V3PaymentInitiationStatusEnum$inboundSchema;
  /** @deprecated use `V3PaymentInitiationStatusEnum$outboundSchema` instead. */
  export const outboundSchema = V3PaymentInitiationStatusEnum$outboundSchema;
}
