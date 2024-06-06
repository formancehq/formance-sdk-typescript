/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    V2StageSendDestinationAccount,
    V2StageSendDestinationAccount$,
} from "./v2stagesenddestinationaccount";
import {
    V2StageSendDestinationPayment,
    V2StageSendDestinationPayment$,
} from "./v2stagesenddestinationpayment";
import {
    V2StageSendDestinationWallet,
    V2StageSendDestinationWallet$,
} from "./v2stagesenddestinationwallet";
import * as z from "zod";

export type V2StageSendDestination = {
    account?: V2StageSendDestinationAccount | undefined;
    payment?: V2StageSendDestinationPayment | undefined;
    wallet?: V2StageSendDestinationWallet | undefined;
};

/** @internal */
export namespace V2StageSendDestination$ {
    export const inboundSchema: z.ZodType<V2StageSendDestination, z.ZodTypeDef, unknown> = z.object(
        {
            account: V2StageSendDestinationAccount$.inboundSchema.optional(),
            payment: V2StageSendDestinationPayment$.inboundSchema.optional(),
            wallet: V2StageSendDestinationWallet$.inboundSchema.optional(),
        }
    );

    export type Outbound = {
        account?: V2StageSendDestinationAccount$.Outbound | undefined;
        payment?: V2StageSendDestinationPayment$.Outbound | undefined;
        wallet?: V2StageSendDestinationWallet$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2StageSendDestination> =
        z.object({
            account: V2StageSendDestinationAccount$.outboundSchema.optional(),
            payment: V2StageSendDestinationPayment$.outboundSchema.optional(),
            wallet: V2StageSendDestinationWallet$.outboundSchema.optional(),
        });
}
