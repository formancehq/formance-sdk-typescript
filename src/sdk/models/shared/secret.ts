/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Secret = {
    clear: string;
    id: string;
    lastDigits: string;
    metadata?: { [k: string]: any } | undefined;
    name: string;
};

/** @internal */
export namespace Secret$ {
    export const inboundSchema: z.ZodType<Secret, z.ZodTypeDef, unknown> = z
        .object({
            clear: z.string(),
            id: z.string(),
            lastDigits: z.string(),
            metadata: z.record(z.any()).optional(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                clear: v.clear,
                id: v.id,
                lastDigits: v.lastDigits,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                name: v.name,
            };
        });

    export type Outbound = {
        clear: string;
        id: string;
        lastDigits: string;
        metadata?: { [k: string]: any } | undefined;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Secret> = z
        .object({
            clear: z.string(),
            id: z.string(),
            lastDigits: z.string(),
            metadata: z.record(z.any()).optional(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                clear: v.clear,
                id: v.id,
                lastDigits: v.lastDigits,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                name: v.name,
            };
        });
}
