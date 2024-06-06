/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2Hold, V2Hold$ } from "./v2hold";
import * as z from "zod";

export type V2ActivityDebitWalletOutput = {
    data: V2Hold;
};

/** @internal */
export namespace V2ActivityDebitWalletOutput$ {
    export const inboundSchema: z.ZodType<V2ActivityDebitWalletOutput, z.ZodTypeDef, unknown> =
        z.object({
            data: V2Hold$.inboundSchema,
        });

    export type Outbound = {
        data: V2Hold$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2ActivityDebitWalletOutput> =
        z.object({
            data: V2Hold$.outboundSchema,
        });
}
