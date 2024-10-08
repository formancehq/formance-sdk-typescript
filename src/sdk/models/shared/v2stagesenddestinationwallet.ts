/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type V2StageSendDestinationWallet = {
  balance?: string | undefined;
  id: string;
};

/** @internal */
export const V2StageSendDestinationWallet$inboundSchema: z.ZodType<
  V2StageSendDestinationWallet,
  z.ZodTypeDef,
  unknown
> = z.object({
  balance: z.string().optional(),
  id: z.string(),
});

/** @internal */
export type V2StageSendDestinationWallet$Outbound = {
  balance?: string | undefined;
  id: string;
};

/** @internal */
export const V2StageSendDestinationWallet$outboundSchema: z.ZodType<
  V2StageSendDestinationWallet$Outbound,
  z.ZodTypeDef,
  V2StageSendDestinationWallet
> = z.object({
  balance: z.string().optional(),
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2StageSendDestinationWallet$ {
  /** @deprecated use `V2StageSendDestinationWallet$inboundSchema` instead. */
  export const inboundSchema = V2StageSendDestinationWallet$inboundSchema;
  /** @deprecated use `V2StageSendDestinationWallet$outboundSchema` instead. */
  export const outboundSchema = V2StageSendDestinationWallet$outboundSchema;
  /** @deprecated use `V2StageSendDestinationWallet$Outbound` instead. */
  export type Outbound = V2StageSendDestinationWallet$Outbound;
}
