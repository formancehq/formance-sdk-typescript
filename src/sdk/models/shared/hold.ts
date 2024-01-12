/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Hold = {
    description: string;
    destination?: any | undefined;
    /**
     * The unique ID of the hold.
     */
    id: string;
    /**
     * Metadata associated with the hold.
     */
    metadata: Record<string, string>;
    /**
     * The ID of the wallet the hold is associated with.
     */
    walletID: string;
};

/** @internal */
export namespace Hold$ {
    export type Inbound = {
        description: string;
        destination?: any | undefined;
        id: string;
        metadata: Record<string, string>;
        walletID: string;
    };

    export const inboundSchema: z.ZodType<Hold, z.ZodTypeDef, Inbound> = z
        .object({
            description: z.string(),
            destination: z.any().optional(),
            id: z.string(),
            metadata: z.record(z.string()),
            walletID: z.string(),
        })
        .transform((v) => {
            return {
                description: v.description,
                ...(v.destination === undefined ? null : { destination: v.destination }),
                id: v.id,
                metadata: v.metadata,
                walletID: v.walletID,
            };
        });

    export type Outbound = {
        description: string;
        destination?: any | undefined;
        id: string;
        metadata: Record<string, string>;
        walletID: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Hold> = z
        .object({
            description: z.string(),
            destination: z.any().optional(),
            id: z.string(),
            metadata: z.record(z.string()),
            walletID: z.string(),
        })
        .transform((v) => {
            return {
                description: v.description,
                ...(v.destination === undefined ? null : { destination: v.destination }),
                id: v.id,
                metadata: v.metadata,
                walletID: v.walletID,
            };
        });
}
