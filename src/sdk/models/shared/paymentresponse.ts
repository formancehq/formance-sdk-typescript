/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Payment, Payment$ } from "./payment";
import * as z from "zod";

export type PaymentResponse = {
    data: Payment;
};

/** @internal */
export namespace PaymentResponse$ {
    export type Inbound = {
        data: Payment$.Inbound;
    };

    export const inboundSchema: z.ZodType<PaymentResponse, z.ZodTypeDef, Inbound> = z
        .object({
            data: Payment$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: Payment$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentResponse> = z
        .object({
            data: Payment$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}
