/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Reconciliation = {
    createdAt: Date;
    driftBalances: Record<string, number>;
    error?: string | undefined;
    id: string;
    ledgerBalances: Record<string, number>;
    paymentsBalances: Record<string, number>;
    policyID: string;
    reconciledAtLedger: Date;
    reconciledAtPayments: Date;
    status: string;
};

/** @internal */
export namespace Reconciliation$ {
    export type Inbound = {
        createdAt: string;
        driftBalances: Record<string, number>;
        error?: string | undefined;
        id: string;
        ledgerBalances: Record<string, number>;
        paymentsBalances: Record<string, number>;
        policyID: string;
        reconciledAtLedger: string;
        reconciledAtPayments: string;
        status: string;
    };

    export const inboundSchema: z.ZodType<Reconciliation, z.ZodTypeDef, Inbound> = z
        .object({
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            driftBalances: z.record(z.number().int()),
            error: z.string().optional(),
            id: z.string(),
            ledgerBalances: z.record(z.number().int()),
            paymentsBalances: z.record(z.number().int()),
            policyID: z.string(),
            reconciledAtLedger: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            reconciledAtPayments: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            status: z.string(),
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                driftBalances: v.driftBalances,
                ...(v.error === undefined ? null : { error: v.error }),
                id: v.id,
                ledgerBalances: v.ledgerBalances,
                paymentsBalances: v.paymentsBalances,
                policyID: v.policyID,
                reconciledAtLedger: v.reconciledAtLedger,
                reconciledAtPayments: v.reconciledAtPayments,
                status: v.status,
            };
        });

    export type Outbound = {
        createdAt: string;
        driftBalances: Record<string, number>;
        error?: string | undefined;
        id: string;
        ledgerBalances: Record<string, number>;
        paymentsBalances: Record<string, number>;
        policyID: string;
        reconciledAtLedger: string;
        reconciledAtPayments: string;
        status: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Reconciliation> = z
        .object({
            createdAt: z.date().transform((v) => v.toISOString()),
            driftBalances: z.record(z.number().int()),
            error: z.string().optional(),
            id: z.string(),
            ledgerBalances: z.record(z.number().int()),
            paymentsBalances: z.record(z.number().int()),
            policyID: z.string(),
            reconciledAtLedger: z.date().transform((v) => v.toISOString()),
            reconciledAtPayments: z.date().transform((v) => v.toISOString()),
            status: z.string(),
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                driftBalances: v.driftBalances,
                ...(v.error === undefined ? null : { error: v.error }),
                id: v.id,
                ledgerBalances: v.ledgerBalances,
                paymentsBalances: v.paymentsBalances,
                policyID: v.policyID,
                reconciledAtLedger: v.reconciledAtLedger,
                reconciledAtPayments: v.reconciledAtPayments,
                status: v.status,
            };
        });
}
