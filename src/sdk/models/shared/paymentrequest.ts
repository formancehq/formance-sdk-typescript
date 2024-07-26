/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    PaymentScheme,
    PaymentScheme$inboundSchema,
    PaymentScheme$outboundSchema,
} from "./paymentscheme.js";
import {
    PaymentStatus,
    PaymentStatus$inboundSchema,
    PaymentStatus$outboundSchema,
} from "./paymentstatus.js";
import {
    PaymentType,
    PaymentType$inboundSchema,
    PaymentType$outboundSchema,
} from "./paymenttype.js";
import * as z from "zod";

export type PaymentRequest = {
    amount: bigint;
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
export const PaymentRequest$inboundSchema: z.ZodType<PaymentRequest, z.ZodTypeDef, unknown> =
    z.object({
        amount: z.number().transform((v) => BigInt(v)),
        asset: z.string(),
        connectorID: z.string(),
        createdAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        destinationAccountID: z.string().optional(),
        reference: z.string(),
        scheme: PaymentScheme$inboundSchema,
        sourceAccountID: z.string().optional(),
        status: PaymentStatus$inboundSchema,
        type: PaymentType$inboundSchema,
    });

/** @internal */
export type PaymentRequest$Outbound = {
    amount: number;
    asset: string;
    connectorID: string;
    createdAt: string;
    destinationAccountID?: string | undefined;
    reference: string;
    scheme: string;
    sourceAccountID?: string | undefined;
    status: string;
    type: string;
};

/** @internal */
export const PaymentRequest$outboundSchema: z.ZodType<
    PaymentRequest$Outbound,
    z.ZodTypeDef,
    PaymentRequest
> = z.object({
    amount: z.bigint().transform((v) => Number(v)),
    asset: z.string(),
    connectorID: z.string(),
    createdAt: z.date().transform((v) => v.toISOString()),
    destinationAccountID: z.string().optional(),
    reference: z.string(),
    scheme: PaymentScheme$outboundSchema,
    sourceAccountID: z.string().optional(),
    status: PaymentStatus$outboundSchema,
    type: PaymentType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentRequest$ {
    /** @deprecated use `PaymentRequest$inboundSchema` instead. */
    export const inboundSchema = PaymentRequest$inboundSchema;
    /** @deprecated use `PaymentRequest$outboundSchema` instead. */
    export const outboundSchema = PaymentRequest$outboundSchema;
    /** @deprecated use `PaymentRequest$Outbound` instead. */
    export type Outbound = PaymentRequest$Outbound;
}
