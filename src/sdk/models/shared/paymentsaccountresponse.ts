/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PaymentsAccount, PaymentsAccount$ } from "./paymentsaccount";
import * as z from "zod";

export type PaymentsAccountResponse = {
    data: PaymentsAccount;
};

/** @internal */
export namespace PaymentsAccountResponse$ {
    export type Inbound = {
        data: PaymentsAccount$.Inbound;
    };

    export const inboundSchema: z.ZodType<PaymentsAccountResponse, z.ZodTypeDef, Inbound> = z
        .object({
            data: PaymentsAccount$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: PaymentsAccount$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentsAccountResponse> = z
        .object({
            data: PaymentsAccount$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}
