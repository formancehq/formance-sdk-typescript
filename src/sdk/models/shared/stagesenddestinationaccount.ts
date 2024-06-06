/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type StageSendDestinationAccount = {
    id: string;
    ledger?: string | undefined;
};

/** @internal */
export namespace StageSendDestinationAccount$ {
    export const inboundSchema: z.ZodType<StageSendDestinationAccount, z.ZodTypeDef, unknown> =
        z.object({
            id: z.string(),
            ledger: z.string().optional(),
        });

    export type Outbound = {
        id: string;
        ledger?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StageSendDestinationAccount> =
        z.object({
            id: z.string(),
            ledger: z.string().optional(),
        });
}
