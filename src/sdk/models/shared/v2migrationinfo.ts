/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import * as z from "zod";

export const V2MigrationInfoState = {
    ToDo: "TO DO",
    Done: "DONE",
} as const;
export type V2MigrationInfoState = ClosedEnum<typeof V2MigrationInfoState>;

export type V2MigrationInfo = {
    date?: Date | undefined;
    name?: string | undefined;
    state?: V2MigrationInfoState | undefined;
    version?: number | undefined;
};

/** @internal */
export namespace V2MigrationInfoState$ {
    export const inboundSchema = z.nativeEnum(V2MigrationInfoState);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace V2MigrationInfo$ {
    export const inboundSchema: z.ZodType<V2MigrationInfo, z.ZodTypeDef, unknown> = z
        .object({
            date: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            name: z.string().optional(),
            state: V2MigrationInfoState$.inboundSchema.optional(),
            version: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.date === undefined ? null : { date: v.date }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.state === undefined ? null : { state: v.state }),
                ...(v.version === undefined ? null : { version: v.version }),
            };
        });

    export type Outbound = {
        date?: string | undefined;
        name?: string | undefined;
        state?: string | undefined;
        version?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2MigrationInfo> = z
        .object({
            date: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            name: z.string().optional(),
            state: V2MigrationInfoState$.outboundSchema.optional(),
            version: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.date === undefined ? null : { date: v.date }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.state === undefined ? null : { state: v.state }),
                ...(v.version === undefined ? null : { version: v.version }),
            };
        });
}
