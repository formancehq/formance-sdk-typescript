/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ActivityGetAccount = {
    id: string;
    ledger: string;
};

/** @internal */
export namespace ActivityGetAccount$ {
    export const inboundSchema: z.ZodType<ActivityGetAccount, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
        ledger: z.string(),
    });

    export type Outbound = {
        id: string;
        ledger: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ActivityGetAccount> = z.object({
        id: z.string(),
        ledger: z.string(),
    });
}
