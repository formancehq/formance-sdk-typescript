/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { OrchestrationPayment, OrchestrationPayment$ } from "./orchestrationpayment";
import { z } from "zod";

export type ActivityGetPaymentOutput = {
    data: OrchestrationPayment;
};

/** @internal */
export namespace ActivityGetPaymentOutput$ {
    export type Inbound = {
        data: OrchestrationPayment$.Inbound;
    };

    export const inboundSchema: z.ZodType<ActivityGetPaymentOutput, z.ZodTypeDef, Inbound> = z
        .object({
            data: OrchestrationPayment$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: OrchestrationPayment$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ActivityGetPaymentOutput> = z
        .object({
            data: OrchestrationPayment$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}
