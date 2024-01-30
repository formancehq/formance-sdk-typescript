/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    StageSendDestinationAccount,
    StageSendDestinationAccount$,
} from "./stagesenddestinationaccount";
import {
    StageSendDestinationPayment,
    StageSendDestinationPayment$,
} from "./stagesenddestinationpayment";
import {
    StageSendDestinationWallet,
    StageSendDestinationWallet$,
} from "./stagesenddestinationwallet";
import { z } from "zod";

export type StageSendDestination = {
    account?: StageSendDestinationAccount | undefined;
    payment?: StageSendDestinationPayment | undefined;
    wallet?: StageSendDestinationWallet | undefined;
};

/** @internal */
export namespace StageSendDestination$ {
    export type Inbound = {
        account?: StageSendDestinationAccount$.Inbound | undefined;
        payment?: StageSendDestinationPayment$.Inbound | undefined;
        wallet?: StageSendDestinationWallet$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<StageSendDestination, z.ZodTypeDef, Inbound> = z
        .object({
            account: StageSendDestinationAccount$.inboundSchema.optional(),
            payment: StageSendDestinationPayment$.inboundSchema.optional(),
            wallet: StageSendDestinationWallet$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.account === undefined ? null : { account: v.account }),
                ...(v.payment === undefined ? null : { payment: v.payment }),
                ...(v.wallet === undefined ? null : { wallet: v.wallet }),
            };
        });

    export type Outbound = {
        account?: StageSendDestinationAccount$.Outbound | undefined;
        payment?: StageSendDestinationPayment$.Outbound | undefined;
        wallet?: StageSendDestinationWallet$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StageSendDestination> = z
        .object({
            account: StageSendDestinationAccount$.outboundSchema.optional(),
            payment: StageSendDestinationPayment$.outboundSchema.optional(),
            wallet: StageSendDestinationWallet$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.account === undefined ? null : { account: v.account }),
                ...(v.payment === undefined ? null : { payment: v.payment }),
                ...(v.wallet === undefined ? null : { wallet: v.wallet }),
            };
        });
}