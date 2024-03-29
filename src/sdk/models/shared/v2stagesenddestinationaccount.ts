/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V2StageSendDestinationAccount = {
    id: string;
    ledger?: string | undefined;
};

/** @internal */
export namespace V2StageSendDestinationAccount$ {
    export type Inbound = {
        id: string;
        ledger?: string | undefined;
    };

    export const inboundSchema: z.ZodType<V2StageSendDestinationAccount, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
            ledger: z.string().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.ledger === undefined ? null : { ledger: v.ledger }),
            };
        });

    export type Outbound = {
        id: string;
        ledger?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2StageSendDestinationAccount> =
        z
            .object({
                id: z.string(),
                ledger: z.string().optional(),
            })
            .transform((v) => {
                return {
                    id: v.id,
                    ...(v.ledger === undefined ? null : { ledger: v.ledger }),
                };
            });
}
