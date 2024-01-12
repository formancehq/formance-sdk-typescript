/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type ClientSecret = {
    id: string;
    lastDigits: string;
    metadata?: Record<string, any> | undefined;
    name: string;
};

/** @internal */
export namespace ClientSecret$ {
    export type Inbound = {
        id: string;
        lastDigits: string;
        metadata?: Record<string, any> | undefined;
        name: string;
    };

    export const inboundSchema: z.ZodType<ClientSecret, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
            lastDigits: z.string(),
            metadata: z.record(z.any()).optional(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
                lastDigits: v.lastDigits,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                name: v.name,
            };
        });

    export type Outbound = {
        id: string;
        lastDigits: string;
        metadata?: Record<string, any> | undefined;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ClientSecret> = z
        .object({
            id: z.string(),
            lastDigits: z.string(),
            metadata: z.record(z.any()).optional(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
                lastDigits: v.lastDigits,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                name: v.name,
            };
        });
}
