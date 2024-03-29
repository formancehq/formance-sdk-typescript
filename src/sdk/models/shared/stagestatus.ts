/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type StageStatus = {
    error?: string | undefined;
    instanceID: string;
    stage: number;
    startedAt: Date;
    terminatedAt?: Date | undefined;
};

/** @internal */
export namespace StageStatus$ {
    export type Inbound = {
        error?: string | undefined;
        instanceID: string;
        stage: number;
        startedAt: string;
        terminatedAt?: string | undefined;
    };

    export const inboundSchema: z.ZodType<StageStatus, z.ZodTypeDef, Inbound> = z
        .object({
            error: z.string().optional(),
            instanceID: z.string(),
            stage: z.number(),
            startedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            terminatedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.error === undefined ? null : { error: v.error }),
                instanceID: v.instanceID,
                stage: v.stage,
                startedAt: v.startedAt,
                ...(v.terminatedAt === undefined ? null : { terminatedAt: v.terminatedAt }),
            };
        });

    export type Outbound = {
        error?: string | undefined;
        instanceID: string;
        stage: number;
        startedAt: string;
        terminatedAt?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StageStatus> = z
        .object({
            error: z.string().optional(),
            instanceID: z.string(),
            stage: z.number(),
            startedAt: z.date().transform((v) => v.toISOString()),
            terminatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.error === undefined ? null : { error: v.error }),
                instanceID: v.instanceID,
                stage: v.stage,
                startedAt: v.startedAt,
                ...(v.terminatedAt === undefined ? null : { terminatedAt: v.terminatedAt }),
            };
        });
}
