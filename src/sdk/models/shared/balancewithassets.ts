/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type BalanceWithAssets = {
    assets: Record<string, bigint>;
    expiresAt?: Date | undefined;
    name: string;
    priority?: bigint | undefined;
};

/** @internal */
export namespace BalanceWithAssets$ {
    export type Inbound = {
        assets: Record<string, number>;
        expiresAt?: string | undefined;
        name: string;
        priority?: number | undefined;
    };

    export const inboundSchema: z.ZodType<BalanceWithAssets, z.ZodTypeDef, Inbound> = z
        .object({
            assets: z.record(z.number().transform((v) => BigInt(v))),
            expiresAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            name: z.string(),
            priority: z
                .number()
                .transform((v) => BigInt(v))
                .optional(),
        })
        .transform((v) => {
            return {
                assets: v.assets,
                ...(v.expiresAt === undefined ? null : { expiresAt: v.expiresAt }),
                name: v.name,
                ...(v.priority === undefined ? null : { priority: v.priority }),
            };
        });

    export type Outbound = {
        assets: Record<string, number>;
        expiresAt?: string | undefined;
        name: string;
        priority?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BalanceWithAssets> = z
        .object({
            assets: z.record(z.bigint().transform((v) => Number(v))),
            expiresAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            name: z.string(),
            priority: z
                .bigint()
                .transform((v) => Number(v))
                .optional(),
        })
        .transform((v) => {
            return {
                assets: v.assets,
                ...(v.expiresAt === undefined ? null : { expiresAt: v.expiresAt }),
                name: v.name,
                ...(v.priority === undefined ? null : { priority: v.priority }),
            };
        });
}
