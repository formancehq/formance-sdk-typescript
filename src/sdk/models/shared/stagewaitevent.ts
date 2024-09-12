/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type StageWaitEvent = {
  event: string;
};

/** @internal */
export const StageWaitEvent$inboundSchema: z.ZodType<
  StageWaitEvent,
  z.ZodTypeDef,
  unknown
> = z.object({
  event: z.string(),
});

/** @internal */
export type StageWaitEvent$Outbound = {
  event: string;
};

/** @internal */
export const StageWaitEvent$outboundSchema: z.ZodType<
  StageWaitEvent$Outbound,
  z.ZodTypeDef,
  StageWaitEvent
> = z.object({
  event: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StageWaitEvent$ {
  /** @deprecated use `StageWaitEvent$inboundSchema` instead. */
  export const inboundSchema = StageWaitEvent$inboundSchema;
  /** @deprecated use `StageWaitEvent$outboundSchema` instead. */
  export const outboundSchema = StageWaitEvent$outboundSchema;
  /** @deprecated use `StageWaitEvent$Outbound` instead. */
  export type Outbound = StageWaitEvent$Outbound;
}
