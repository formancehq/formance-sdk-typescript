/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Hold, Hold$ } from "./hold";
import * as z from "zod";

export type ActivityDebitWalletOutput = {
    data: Hold;
};

/** @internal */
export namespace ActivityDebitWalletOutput$ {
    export type Inbound = {
        data: Hold$.Inbound;
    };

    export const inboundSchema: z.ZodType<ActivityDebitWalletOutput, z.ZodTypeDef, Inbound> = z
        .object({
            data: Hold$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: Hold$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ActivityDebitWalletOutput> = z
        .object({
            data: Hold$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}
