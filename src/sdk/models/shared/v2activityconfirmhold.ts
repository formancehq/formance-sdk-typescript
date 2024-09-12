/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type V2ActivityConfirmHold = {
  id: string;
};

/** @internal */
export const V2ActivityConfirmHold$inboundSchema: z.ZodType<
  V2ActivityConfirmHold,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type V2ActivityConfirmHold$Outbound = {
  id: string;
};

/** @internal */
export const V2ActivityConfirmHold$outboundSchema: z.ZodType<
  V2ActivityConfirmHold$Outbound,
  z.ZodTypeDef,
  V2ActivityConfirmHold
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ActivityConfirmHold$ {
  /** @deprecated use `V2ActivityConfirmHold$inboundSchema` instead. */
  export const inboundSchema = V2ActivityConfirmHold$inboundSchema;
  /** @deprecated use `V2ActivityConfirmHold$outboundSchema` instead. */
  export const outboundSchema = V2ActivityConfirmHold$outboundSchema;
  /** @deprecated use `V2ActivityConfirmHold$Outbound` instead. */
  export type Outbound = V2ActivityConfirmHold$Outbound;
}
