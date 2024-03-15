/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type LedgerStorage = {
    driver: string;
    ledgers: Array<string>;
};

/** @internal */
export namespace LedgerStorage$ {
    export type Inbound = {
        driver: string;
        ledgers: Array<string>;
    };

    export const inboundSchema: z.ZodType<LedgerStorage, z.ZodTypeDef, Inbound> = z
        .object({
            driver: z.string(),
            ledgers: z.array(z.string()),
        })
        .transform((v) => {
            return {
                driver: v.driver,
                ledgers: v.ledgers,
            };
        });

    export type Outbound = {
        driver: string;
        ledgers: Array<string>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LedgerStorage> = z
        .object({
            driver: z.string(),
            ledgers: z.array(z.string()),
        })
        .transform((v) => {
            return {
                driver: v.driver,
                ledgers: v.ledgers,
            };
        });
}
