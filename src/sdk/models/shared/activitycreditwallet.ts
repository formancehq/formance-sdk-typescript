/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CreditWalletRequest, CreditWalletRequest$ } from "./creditwalletrequest";
import * as z from "zod";

export type ActivityCreditWallet = {
    data?: CreditWalletRequest | undefined;
    id?: string | undefined;
};

/** @internal */
export namespace ActivityCreditWallet$ {
    export const inboundSchema: z.ZodType<ActivityCreditWallet, z.ZodTypeDef, unknown> = z.object({
        data: CreditWalletRequest$.inboundSchema.optional(),
        id: z.string().optional(),
    });

    export type Outbound = {
        data?: CreditWalletRequest$.Outbound | undefined;
        id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ActivityCreditWallet> = z.object(
        {
            data: CreditWalletRequest$.outboundSchema.optional(),
            id: z.string().optional(),
        }
    );
}
