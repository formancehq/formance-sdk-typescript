/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Volume = {
    balance?: bigint | undefined;
    input: bigint;
    output: bigint;
};

/** @internal */
export namespace Volume$ {
    export const inboundSchema: z.ZodType<Volume, z.ZodTypeDef, unknown> = z.object({
        balance: z
            .number()
            .transform((v) => BigInt(v))
            .optional(),
        input: z.number().transform((v) => BigInt(v)),
        output: z.number().transform((v) => BigInt(v)),
    });

    export type Outbound = {
        balance?: number | undefined;
        input: number;
        output: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Volume> = z.object({
        balance: z
            .bigint()
            .transform((v) => Number(v))
            .optional(),
        input: z.bigint().transform((v) => Number(v)),
        output: z.bigint().transform((v) => Number(v)),
    });
}
