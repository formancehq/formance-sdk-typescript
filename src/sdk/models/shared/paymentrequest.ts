/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PaymentScheme, PaymentScheme$ } from "./paymentscheme";
import { PaymentStatus, PaymentStatus$ } from "./paymentstatus";
import { PaymentType, PaymentType$ } from "./paymenttype";
import { z } from "zod";

export type PaymentRequest = {
    amount: number;
    asset: string;
    connectorID: string;
    createdAt: Date;
    destinationAccountID?: string | undefined;
    reference: string;
    scheme: PaymentScheme;
    sourceAccountID?: string | undefined;
    status: PaymentStatus;
    type: PaymentType;
};

/** @internal */
export namespace PaymentRequest$ {
    export type Inbound = {
        amount: number;
        asset: string;
        connectorID: string;
        createdAt: string;
        destinationAccountID?: string | undefined;
        reference: string;
        scheme: PaymentScheme;
        sourceAccountID?: string | undefined;
        status: PaymentStatus;
        type: PaymentType;
    };

    export const inboundSchema: z.ZodType<PaymentRequest, z.ZodTypeDef, Inbound> = z
        .object({
            amount: z.number().int(),
            asset: z.string(),
            connectorID: z.string(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            destinationAccountID: z.string().optional(),
            reference: z.string(),
            scheme: PaymentScheme$,
            sourceAccountID: z.string().optional(),
            status: PaymentStatus$,
            type: PaymentType$,
        })
        .transform((v) => {
            return {
                amount: v.amount,
                asset: v.asset,
                connectorID: v.connectorID,
                createdAt: v.createdAt,
                ...(v.destinationAccountID === undefined
                    ? null
                    : { destinationAccountID: v.destinationAccountID }),
                reference: v.reference,
                scheme: v.scheme,
                ...(v.sourceAccountID === undefined
                    ? null
                    : { sourceAccountID: v.sourceAccountID }),
                status: v.status,
                type: v.type,
            };
        });

    export type Outbound = {
        amount: number;
        asset: string;
        connectorID: string;
        createdAt: string;
        destinationAccountID?: string | undefined;
        reference: string;
        scheme: PaymentScheme;
        sourceAccountID?: string | undefined;
        status: PaymentStatus;
        type: PaymentType;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentRequest> = z
        .object({
            amount: z.number().int(),
            asset: z.string(),
            connectorID: z.string(),
            createdAt: z.date().transform((v) => v.toISOString()),
            destinationAccountID: z.string().optional(),
            reference: z.string(),
            scheme: PaymentScheme$,
            sourceAccountID: z.string().optional(),
            status: PaymentStatus$,
            type: PaymentType$,
        })
        .transform((v) => {
            return {
                amount: v.amount,
                asset: v.asset,
                connectorID: v.connectorID,
                createdAt: v.createdAt,
                ...(v.destinationAccountID === undefined
                    ? null
                    : { destinationAccountID: v.destinationAccountID }),
                reference: v.reference,
                scheme: v.scheme,
                ...(v.sourceAccountID === undefined
                    ? null
                    : { sourceAccountID: v.sourceAccountID }),
                status: v.status,
                type: v.type,
            };
        });
}