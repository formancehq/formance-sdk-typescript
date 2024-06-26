/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Connector, Connector$ } from "./connector";
import { PaymentAdjustment, PaymentAdjustment$ } from "./paymentadjustment";
import { PaymentScheme, PaymentScheme$ } from "./paymentscheme";
import { PaymentStatus, PaymentStatus$ } from "./paymentstatus";
import { PaymentType, PaymentType$ } from "./paymenttype";
import * as z from "zod";

export type Raw = {};

export type Payment = {
    adjustments: Array<PaymentAdjustment>;
    amount: bigint;
    asset: string;
    connectorID: string;
    createdAt: Date;
    destinationAccountID: string;
    id: string;
    initialAmount: bigint;
    metadata: { [k: string]: string } | null;
    provider?: Connector | undefined;
    raw: Raw | null;
    reference: string;
    scheme: PaymentScheme;
    sourceAccountID: string;
    status: PaymentStatus;
    type: PaymentType;
};

/** @internal */
export namespace Raw$ {
    export const inboundSchema: z.ZodType<Raw, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Raw> = z.object({});
}

/** @internal */
export namespace Payment$ {
    export const inboundSchema: z.ZodType<Payment, z.ZodTypeDef, unknown> = z.object({
        adjustments: z.array(PaymentAdjustment$.inboundSchema),
        amount: z.number().transform((v) => BigInt(v)),
        asset: z.string(),
        connectorID: z.string(),
        createdAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        destinationAccountID: z.string(),
        id: z.string(),
        initialAmount: z.number().transform((v) => BigInt(v)),
        metadata: z.nullable(z.record(z.string())),
        provider: Connector$.inboundSchema.optional(),
        raw: z.nullable(z.lazy(() => Raw$.inboundSchema)),
        reference: z.string(),
        scheme: PaymentScheme$.inboundSchema,
        sourceAccountID: z.string(),
        status: PaymentStatus$.inboundSchema,
        type: PaymentType$.inboundSchema,
    });

    export type Outbound = {
        adjustments: Array<PaymentAdjustment$.Outbound>;
        amount: number;
        asset: string;
        connectorID: string;
        createdAt: string;
        destinationAccountID: string;
        id: string;
        initialAmount: number;
        metadata: { [k: string]: string } | null;
        provider?: string | undefined;
        raw: Raw$.Outbound | null;
        reference: string;
        scheme: string;
        sourceAccountID: string;
        status: string;
        type: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Payment> = z.object({
        adjustments: z.array(PaymentAdjustment$.outboundSchema),
        amount: z.bigint().transform((v) => Number(v)),
        asset: z.string(),
        connectorID: z.string(),
        createdAt: z.date().transform((v) => v.toISOString()),
        destinationAccountID: z.string(),
        id: z.string(),
        initialAmount: z.bigint().transform((v) => Number(v)),
        metadata: z.nullable(z.record(z.string())),
        provider: Connector$.outboundSchema.optional(),
        raw: z.nullable(z.lazy(() => Raw$.outboundSchema)),
        reference: z.string(),
        scheme: PaymentScheme$.outboundSchema,
        sourceAccountID: z.string(),
        status: PaymentStatus$.outboundSchema,
        type: PaymentType$.outboundSchema,
    });
}
