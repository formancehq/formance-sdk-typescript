/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type V2StageStatus = {
    error?: string | undefined;
    instanceID: string;
    stage: number;
    startedAt: Date;
    terminatedAt?: Date | undefined;
};

/** @internal */
export const V2StageStatus$inboundSchema: z.ZodType<V2StageStatus, z.ZodTypeDef, unknown> =
    z.object({
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
    });

/** @internal */
export type V2StageStatus$Outbound = {
    error?: string | undefined;
    instanceID: string;
    stage: number;
    startedAt: string;
    terminatedAt?: string | undefined;
};

/** @internal */
export const V2StageStatus$outboundSchema: z.ZodType<
    V2StageStatus$Outbound,
    z.ZodTypeDef,
    V2StageStatus
> = z.object({
    error: z.string().optional(),
    instanceID: z.string(),
    stage: z.number(),
    startedAt: z.date().transform((v) => v.toISOString()),
    terminatedAt: z
        .date()
        .transform((v) => v.toISOString())
        .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2StageStatus$ {
    /** @deprecated use `V2StageStatus$inboundSchema` instead. */
    export const inboundSchema = V2StageStatus$inboundSchema;
    /** @deprecated use `V2StageStatus$outboundSchema` instead. */
    export const outboundSchema = V2StageStatus$outboundSchema;
    /** @deprecated use `V2StageStatus$Outbound` instead. */
    export type Outbound = V2StageStatus$Outbound;
}
