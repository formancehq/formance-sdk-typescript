/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    OrchestrationV2Transaction,
    OrchestrationV2Transaction$,
} from "./orchestrationv2transaction";
import { z } from "zod";

export type V2ActivityCreateTransactionOutput = {
    data: Array<OrchestrationV2Transaction>;
};

/** @internal */
export namespace V2ActivityCreateTransactionOutput$ {
    export type Inbound = {
        data: Array<OrchestrationV2Transaction$.Inbound>;
    };

    export const inboundSchema: z.ZodType<
        V2ActivityCreateTransactionOutput,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            data: z.array(OrchestrationV2Transaction$.inboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: Array<OrchestrationV2Transaction$.Outbound>;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        V2ActivityCreateTransactionOutput
    > = z
        .object({
            data: z.array(OrchestrationV2Transaction$.outboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}