/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { OrchestrationConnector, OrchestrationConnector$ } from "./orchestrationconnector";
import {
    OrchestrationPaymentAdjustment,
    OrchestrationPaymentAdjustment$,
} from "./orchestrationpaymentadjustment";
import {
    OrchestrationPaymentMetadata,
    OrchestrationPaymentMetadata$,
} from "./orchestrationpaymentmetadata";
import {
    OrchestrationPaymentStatus,
    OrchestrationPaymentStatus$,
} from "./orchestrationpaymentstatus";
import * as z from "zod";

export type OrchestrationPaymentRaw = {};

export enum OrchestrationPaymentScheme {
    Visa = "visa",
    Mastercard = "mastercard",
    Amex = "amex",
    Diners = "diners",
    Discover = "discover",
    Jcb = "jcb",
    Unionpay = "unionpay",
    SepaDebit = "sepa debit",
    SepaCredit = "sepa credit",
    Sepa = "sepa",
    ApplePay = "apple pay",
    GooglePay = "google pay",
    A2a = "a2a",
    AchDebit = "ach debit",
    Ach = "ach",
    Rtp = "rtp",
    Unknown = "unknown",
    Other = "other",
}

export enum OrchestrationPaymentType {
    PayIn = "PAY-IN",
    Payout = "PAYOUT",
    Transfer = "TRANSFER",
    Other = "OTHER",
}

export type OrchestrationPayment = {
    adjustments: Array<OrchestrationPaymentAdjustment>;
    asset: string;
    connectorID: string;
    createdAt: Date;
    destinationAccountID: string;
    id: string;
    initialAmount: bigint;
    metadata: OrchestrationPaymentMetadata | null;
    provider?: OrchestrationConnector | undefined;
    raw: OrchestrationPaymentRaw | null;
    reference: string;
    scheme: OrchestrationPaymentScheme;
    sourceAccountID: string;
    status: OrchestrationPaymentStatus;
    type: OrchestrationPaymentType;
};

/** @internal */
export namespace OrchestrationPaymentRaw$ {
    export const inboundSchema: z.ZodType<OrchestrationPaymentRaw, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OrchestrationPaymentRaw> =
        z.object({});
}

/** @internal */
export namespace OrchestrationPaymentScheme$ {
    export const inboundSchema = z.nativeEnum(OrchestrationPaymentScheme);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace OrchestrationPaymentType$ {
    export const inboundSchema = z.nativeEnum(OrchestrationPaymentType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace OrchestrationPayment$ {
    export const inboundSchema: z.ZodType<OrchestrationPayment, z.ZodTypeDef, unknown> = z
        .object({
            adjustments: z.array(OrchestrationPaymentAdjustment$.inboundSchema),
            asset: z.string(),
            connectorID: z.string(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            destinationAccountID: z.string(),
            id: z.string(),
            initialAmount: z.number().transform((v) => BigInt(v)),
            metadata: z.nullable(OrchestrationPaymentMetadata$.inboundSchema),
            provider: OrchestrationConnector$.inboundSchema.optional(),
            raw: z.nullable(z.lazy(() => OrchestrationPaymentRaw$.inboundSchema)),
            reference: z.string(),
            scheme: OrchestrationPaymentScheme$.inboundSchema,
            sourceAccountID: z.string(),
            status: OrchestrationPaymentStatus$.inboundSchema,
            type: OrchestrationPaymentType$.inboundSchema,
        })
        .transform((v) => {
            return {
                adjustments: v.adjustments,
                asset: v.asset,
                connectorID: v.connectorID,
                createdAt: v.createdAt,
                destinationAccountID: v.destinationAccountID,
                id: v.id,
                initialAmount: v.initialAmount,
                metadata: v.metadata,
                ...(v.provider === undefined ? null : { provider: v.provider }),
                raw: v.raw,
                reference: v.reference,
                scheme: v.scheme,
                sourceAccountID: v.sourceAccountID,
                status: v.status,
                type: v.type,
            };
        });

    export type Outbound = {
        adjustments: Array<OrchestrationPaymentAdjustment$.Outbound>;
        asset: string;
        connectorID: string;
        createdAt: string;
        destinationAccountID: string;
        id: string;
        initialAmount: number;
        metadata: OrchestrationPaymentMetadata$.Outbound | null;
        provider?: string | undefined;
        raw: OrchestrationPaymentRaw$.Outbound | null;
        reference: string;
        scheme: string;
        sourceAccountID: string;
        status: string;
        type: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OrchestrationPayment> = z
        .object({
            adjustments: z.array(OrchestrationPaymentAdjustment$.outboundSchema),
            asset: z.string(),
            connectorID: z.string(),
            createdAt: z.date().transform((v) => v.toISOString()),
            destinationAccountID: z.string(),
            id: z.string(),
            initialAmount: z.bigint().transform((v) => Number(v)),
            metadata: z.nullable(OrchestrationPaymentMetadata$.outboundSchema),
            provider: OrchestrationConnector$.outboundSchema.optional(),
            raw: z.nullable(z.lazy(() => OrchestrationPaymentRaw$.outboundSchema)),
            reference: z.string(),
            scheme: OrchestrationPaymentScheme$.outboundSchema,
            sourceAccountID: z.string(),
            status: OrchestrationPaymentStatus$.outboundSchema,
            type: OrchestrationPaymentType$.outboundSchema,
        })
        .transform((v) => {
            return {
                adjustments: v.adjustments,
                asset: v.asset,
                connectorID: v.connectorID,
                createdAt: v.createdAt,
                destinationAccountID: v.destinationAccountID,
                id: v.id,
                initialAmount: v.initialAmount,
                metadata: v.metadata,
                ...(v.provider === undefined ? null : { provider: v.provider }),
                raw: v.raw,
                reference: v.reference,
                scheme: v.scheme,
                sourceAccountID: v.sourceAccountID,
                status: v.status,
                type: v.type,
            };
        });
}
