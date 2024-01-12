/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { MigrationInfo, MigrationInfo$ } from "./migrationinfo";
import { z } from "zod";

export type Storage = {
    migrations?: Array<MigrationInfo> | undefined;
};

export type LedgerInfo = {
    name?: string | undefined;
    storage?: Storage | undefined;
};

/** @internal */
export namespace Storage$ {
    export type Inbound = {
        migrations?: Array<MigrationInfo$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<Storage, z.ZodTypeDef, Inbound> = z
        .object({
            migrations: z.array(MigrationInfo$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.migrations === undefined ? null : { migrations: v.migrations }),
            };
        });

    export type Outbound = {
        migrations?: Array<MigrationInfo$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Storage> = z
        .object({
            migrations: z.array(MigrationInfo$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.migrations === undefined ? null : { migrations: v.migrations }),
            };
        });
}

/** @internal */
export namespace LedgerInfo$ {
    export type Inbound = {
        name?: string | undefined;
        storage?: Storage$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<LedgerInfo, z.ZodTypeDef, Inbound> = z
        .object({
            name: z.string().optional(),
            storage: z.lazy(() => Storage$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.storage === undefined ? null : { storage: v.storage }),
            };
        });

    export type Outbound = {
        name?: string | undefined;
        storage?: Storage$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LedgerInfo> = z
        .object({
            name: z.string().optional(),
            storage: z.lazy(() => Storage$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.storage === undefined ? null : { storage: v.storage }),
            };
        });
}
