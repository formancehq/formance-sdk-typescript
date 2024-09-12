/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type V2StageSendDestinationPayment = {
  psp: string;
};

/** @internal */
export const V2StageSendDestinationPayment$inboundSchema: z.ZodType<
  V2StageSendDestinationPayment,
  z.ZodTypeDef,
  unknown
> = z.object({
  psp: z.string(),
});

/** @internal */
export type V2StageSendDestinationPayment$Outbound = {
  psp: string;
};

/** @internal */
export const V2StageSendDestinationPayment$outboundSchema: z.ZodType<
  V2StageSendDestinationPayment$Outbound,
  z.ZodTypeDef,
  V2StageSendDestinationPayment
> = z.object({
  psp: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2StageSendDestinationPayment$ {
  /** @deprecated use `V2StageSendDestinationPayment$inboundSchema` instead. */
  export const inboundSchema = V2StageSendDestinationPayment$inboundSchema;
  /** @deprecated use `V2StageSendDestinationPayment$outboundSchema` instead. */
  export const outboundSchema = V2StageSendDestinationPayment$outboundSchema;
  /** @deprecated use `V2StageSendDestinationPayment$Outbound` instead. */
  export type Outbound = V2StageSendDestinationPayment$Outbound;
}
