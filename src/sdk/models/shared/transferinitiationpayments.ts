/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { TransferInitiationStatus, TransferInitiationStatus$ } from "./transferinitiationstatus";
import * as z from "zod";

export type TransferInitiationPayments = {
    createdAt: Date;
    error: string;
    paymentID: string;
    status: TransferInitiationStatus;
};

/** @internal */
export namespace TransferInitiationPayments$ {
    export const inboundSchema: z.ZodType<TransferInitiationPayments, z.ZodTypeDef, unknown> =
        z.object({
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            error: z.string(),
            paymentID: z.string(),
            status: TransferInitiationStatus$.inboundSchema,
        });

    export type Outbound = {
        createdAt: string;
        error: string;
        paymentID: string;
        status: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TransferInitiationPayments> =
        z.object({
            createdAt: z.date().transform((v) => v.toISOString()),
            error: z.string(),
            paymentID: z.string(),
            status: TransferInitiationStatus$.outboundSchema,
        });
}
