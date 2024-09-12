/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  V2StageSendDestinationAccount,
  V2StageSendDestinationAccount$inboundSchema,
  V2StageSendDestinationAccount$Outbound,
  V2StageSendDestinationAccount$outboundSchema,
} from "./v2stagesenddestinationaccount.js";
import {
  V2StageSendDestinationPayment,
  V2StageSendDestinationPayment$inboundSchema,
  V2StageSendDestinationPayment$Outbound,
  V2StageSendDestinationPayment$outboundSchema,
} from "./v2stagesenddestinationpayment.js";
import {
  V2StageSendDestinationWallet,
  V2StageSendDestinationWallet$inboundSchema,
  V2StageSendDestinationWallet$Outbound,
  V2StageSendDestinationWallet$outboundSchema,
} from "./v2stagesenddestinationwallet.js";

export type V2StageSendDestination = {
  account?: V2StageSendDestinationAccount | undefined;
  payment?: V2StageSendDestinationPayment | undefined;
  wallet?: V2StageSendDestinationWallet | undefined;
};

/** @internal */
export const V2StageSendDestination$inboundSchema: z.ZodType<
  V2StageSendDestination,
  z.ZodTypeDef,
  unknown
> = z.object({
  account: V2StageSendDestinationAccount$inboundSchema.optional(),
  payment: V2StageSendDestinationPayment$inboundSchema.optional(),
  wallet: V2StageSendDestinationWallet$inboundSchema.optional(),
});

/** @internal */
export type V2StageSendDestination$Outbound = {
  account?: V2StageSendDestinationAccount$Outbound | undefined;
  payment?: V2StageSendDestinationPayment$Outbound | undefined;
  wallet?: V2StageSendDestinationWallet$Outbound | undefined;
};

/** @internal */
export const V2StageSendDestination$outboundSchema: z.ZodType<
  V2StageSendDestination$Outbound,
  z.ZodTypeDef,
  V2StageSendDestination
> = z.object({
  account: V2StageSendDestinationAccount$outboundSchema.optional(),
  payment: V2StageSendDestinationPayment$outboundSchema.optional(),
  wallet: V2StageSendDestinationWallet$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2StageSendDestination$ {
  /** @deprecated use `V2StageSendDestination$inboundSchema` instead. */
  export const inboundSchema = V2StageSendDestination$inboundSchema;
  /** @deprecated use `V2StageSendDestination$outboundSchema` instead. */
  export const outboundSchema = V2StageSendDestination$outboundSchema;
  /** @deprecated use `V2StageSendDestination$Outbound` instead. */
  export type Outbound = V2StageSendDestination$Outbound;
}
