/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2Connector, V2Connector$ } from "./v2connector";
import { V2PaymentAdjustment, V2PaymentAdjustment$ } from "./v2paymentadjustment";
import { V2PaymentMetadata, V2PaymentMetadata$ } from "./v2paymentmetadata";
import { V2PaymentStatus, V2PaymentStatus$ } from "./v2paymentstatus";
import * as z from "zod";

export type V2PaymentRaw = {};

export enum Scheme {
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

export enum V2PaymentType {
    PayIn = "PAY-IN",
    Payout = "PAYOUT",
    Transfer = "TRANSFER",
    Other = "OTHER",
}

export type V2Payment = {
    adjustments: Array<V2PaymentAdjustment>;
    asset: string;
    connectorID: string;
    createdAt: Date;
    destinationAccountID: string;
    id: string;
    initialAmount: bigint;
    metadata: V2PaymentMetadata | null;
    provider?: V2Connector | undefined;
    raw: V2PaymentRaw | null;
    reference: string;
    scheme: Scheme;
    sourceAccountID: string;
    status: V2PaymentStatus;
    type: V2PaymentType;
};

/** @internal */
export namespace V2PaymentRaw$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<V2PaymentRaw, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2PaymentRaw> = z.object({});
}

/** @internal */
export const Scheme$ = z.nativeEnum(Scheme);

/** @internal */
export const V2PaymentType$ = z.nativeEnum(V2PaymentType);

/** @internal */
export namespace V2Payment$ {
    export type Inbound = {
        adjustments: Array<V2PaymentAdjustment$.Inbound>;
        asset: string;
        connectorID: string;
        createdAt: string;
        destinationAccountID: string;
        id: string;
        initialAmount: number;
        metadata: V2PaymentMetadata$.Inbound | null;
        provider?: V2Connector | undefined;
        raw: V2PaymentRaw$.Inbound | null;
        reference: string;
        scheme: Scheme;
        sourceAccountID: string;
        status: V2PaymentStatus;
        type: V2PaymentType;
    };

    export const inboundSchema: z.ZodType<V2Payment, z.ZodTypeDef, Inbound> = z
        .object({
            adjustments: z.array(V2PaymentAdjustment$.inboundSchema),
            asset: z.string(),
            connectorID: z.string(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            destinationAccountID: z.string(),
            id: z.string(),
            initialAmount: z.number().transform((v) => BigInt(v)),
            metadata: z.nullable(V2PaymentMetadata$.inboundSchema),
            provider: V2Connector$.optional(),
            raw: z.nullable(z.lazy(() => V2PaymentRaw$.inboundSchema)),
            reference: z.string(),
            scheme: Scheme$,
            sourceAccountID: z.string(),
            status: V2PaymentStatus$,
            type: V2PaymentType$,
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
        adjustments: Array<V2PaymentAdjustment$.Outbound>;
        asset: string;
        connectorID: string;
        createdAt: string;
        destinationAccountID: string;
        id: string;
        initialAmount: number;
        metadata: V2PaymentMetadata$.Outbound | null;
        provider?: V2Connector | undefined;
        raw: V2PaymentRaw$.Outbound | null;
        reference: string;
        scheme: Scheme;
        sourceAccountID: string;
        status: V2PaymentStatus;
        type: V2PaymentType;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2Payment> = z
        .object({
            adjustments: z.array(V2PaymentAdjustment$.outboundSchema),
            asset: z.string(),
            connectorID: z.string(),
            createdAt: z.date().transform((v) => v.toISOString()),
            destinationAccountID: z.string(),
            id: z.string(),
            initialAmount: z.bigint().transform((v) => Number(v)),
            metadata: z.nullable(V2PaymentMetadata$.outboundSchema),
            provider: V2Connector$.optional(),
            raw: z.nullable(z.lazy(() => V2PaymentRaw$.outboundSchema)),
            reference: z.string(),
            scheme: Scheme$,
            sourceAccountID: z.string(),
            status: V2PaymentStatus$,
            type: V2PaymentType$,
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
