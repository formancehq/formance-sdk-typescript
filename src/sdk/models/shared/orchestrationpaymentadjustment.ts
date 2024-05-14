/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    OrchestrationPaymentStatus,
    OrchestrationPaymentStatus$,
} from "./orchestrationpaymentstatus";
import * as z from "zod";

export type OrchestrationPaymentAdjustmentRaw = {};

export type OrchestrationPaymentAdjustment = {
    absolute: boolean;
    amount: bigint;
    date: Date;
    raw: OrchestrationPaymentAdjustmentRaw;
    status: OrchestrationPaymentStatus;
};

/** @internal */
export namespace OrchestrationPaymentAdjustmentRaw$ {
    export const inboundSchema: z.ZodType<
        OrchestrationPaymentAdjustmentRaw,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        OrchestrationPaymentAdjustmentRaw
    > = z.object({});
}

/** @internal */
export namespace OrchestrationPaymentAdjustment$ {
    export const inboundSchema: z.ZodType<OrchestrationPaymentAdjustment, z.ZodTypeDef, unknown> = z
        .object({
            absolute: z.boolean(),
            amount: z.number().transform((v) => BigInt(v)),
            date: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            raw: z.lazy(() => OrchestrationPaymentAdjustmentRaw$.inboundSchema),
            status: OrchestrationPaymentStatus$,
        })
        .transform((v) => {
            return {
                absolute: v.absolute,
                amount: v.amount,
                date: v.date,
                raw: v.raw,
                status: v.status,
            };
        });

    export type Outbound = {
        absolute: boolean;
        amount: number;
        date: string;
        raw: OrchestrationPaymentAdjustmentRaw$.Outbound;
        status: OrchestrationPaymentStatus;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OrchestrationPaymentAdjustment> =
        z
            .object({
                absolute: z.boolean(),
                amount: z.bigint().transform((v) => Number(v)),
                date: z.date().transform((v) => v.toISOString()),
                raw: z.lazy(() => OrchestrationPaymentAdjustmentRaw$.outboundSchema),
                status: OrchestrationPaymentStatus$,
            })
            .transform((v) => {
                return {
                    absolute: v.absolute,
                    amount: v.amount,
                    date: v.date,
                    raw: v.raw,
                    status: v.status,
                };
            });
}
