/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type V2ActivityVoidHold = {
  id: string;
};

/** @internal */
export const V2ActivityVoidHold$inboundSchema: z.ZodType<
  V2ActivityVoidHold,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type V2ActivityVoidHold$Outbound = {
  id: string;
};

/** @internal */
export const V2ActivityVoidHold$outboundSchema: z.ZodType<
  V2ActivityVoidHold$Outbound,
  z.ZodTypeDef,
  V2ActivityVoidHold
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ActivityVoidHold$ {
  /** @deprecated use `V2ActivityVoidHold$inboundSchema` instead. */
  export const inboundSchema = V2ActivityVoidHold$inboundSchema;
  /** @deprecated use `V2ActivityVoidHold$outboundSchema` instead. */
  export const outboundSchema = V2ActivityVoidHold$outboundSchema;
  /** @deprecated use `V2ActivityVoidHold$Outbound` instead. */
  export type Outbound = V2ActivityVoidHold$Outbound;
}
