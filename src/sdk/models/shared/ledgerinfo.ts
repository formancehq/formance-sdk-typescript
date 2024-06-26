/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { MigrationInfo, MigrationInfo$ } from "./migrationinfo";
import * as z from "zod";

export type Storage = {
    migrations?: Array<MigrationInfo> | undefined;
};

export type LedgerInfo = {
    name?: string | undefined;
    storage?: Storage | undefined;
};

/** @internal */
export namespace Storage$ {
    export const inboundSchema: z.ZodType<Storage, z.ZodTypeDef, unknown> = z.object({
        migrations: z.array(MigrationInfo$.inboundSchema).optional(),
    });

    export type Outbound = {
        migrations?: Array<MigrationInfo$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Storage> = z.object({
        migrations: z.array(MigrationInfo$.outboundSchema).optional(),
    });
}

/** @internal */
export namespace LedgerInfo$ {
    export const inboundSchema: z.ZodType<LedgerInfo, z.ZodTypeDef, unknown> = z.object({
        name: z.string().optional(),
        storage: z.lazy(() => Storage$.inboundSchema).optional(),
    });

    export type Outbound = {
        name?: string | undefined;
        storage?: Storage$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LedgerInfo> = z.object({
        name: z.string().optional(),
        storage: z.lazy(() => Storage$.outboundSchema).optional(),
    });
}
