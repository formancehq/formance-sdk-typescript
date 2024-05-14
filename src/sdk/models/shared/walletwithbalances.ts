/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AssetHolder, AssetHolder$ } from "./assetholder";
import * as z from "zod";

export type WalletWithBalancesBalances = {
    main: AssetHolder;
};

export type WalletWithBalances = {
    balances: WalletWithBalancesBalances;
    createdAt: Date;
    /**
     * The unique ID of the wallet.
     */
    id: string;
    ledger: string;
    /**
     * Metadata associated with the wallet.
     */
    metadata: Record<string, string>;
    name: string;
};

/** @internal */
export namespace WalletWithBalancesBalances$ {
    export const inboundSchema: z.ZodType<WalletWithBalancesBalances, z.ZodTypeDef, unknown> = z
        .object({
            main: AssetHolder$.inboundSchema,
        })
        .transform((v) => {
            return {
                main: v.main,
            };
        });

    export type Outbound = {
        main: AssetHolder$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WalletWithBalancesBalances> = z
        .object({
            main: AssetHolder$.outboundSchema,
        })
        .transform((v) => {
            return {
                main: v.main,
            };
        });
}

/** @internal */
export namespace WalletWithBalances$ {
    export const inboundSchema: z.ZodType<WalletWithBalances, z.ZodTypeDef, unknown> = z
        .object({
            balances: z.lazy(() => WalletWithBalancesBalances$.inboundSchema),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            id: z.string(),
            ledger: z.string(),
            metadata: z.record(z.string()),
            name: z.string(),
        })
        .transform((v) => {
            return {
                balances: v.balances,
                createdAt: v.createdAt,
                id: v.id,
                ledger: v.ledger,
                metadata: v.metadata,
                name: v.name,
            };
        });

    export type Outbound = {
        balances: WalletWithBalancesBalances$.Outbound;
        createdAt: string;
        id: string;
        ledger: string;
        metadata: Record<string, string>;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WalletWithBalances> = z
        .object({
            balances: z.lazy(() => WalletWithBalancesBalances$.outboundSchema),
            createdAt: z.date().transform((v) => v.toISOString()),
            id: z.string(),
            ledger: z.string(),
            metadata: z.record(z.string()),
            name: z.string(),
        })
        .transform((v) => {
            return {
                balances: v.balances,
                createdAt: v.createdAt,
                id: v.id,
                ledger: v.ledger,
                metadata: v.metadata,
                name: v.name,
            };
        });
}
