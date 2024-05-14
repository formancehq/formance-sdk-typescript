/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type ReconcileRequest = {
    /**
     * The policy ID.
     */
    policyID: string;
    reconciliationRequest: shared.ReconciliationRequest;
};

/** @internal */
export namespace ReconcileRequest$ {
    export const inboundSchema: z.ZodType<ReconcileRequest, z.ZodTypeDef, unknown> = z
        .object({
            policyID: z.string(),
            ReconciliationRequest: shared.ReconciliationRequest$.inboundSchema,
        })
        .transform((v) => {
            return {
                policyID: v.policyID,
                reconciliationRequest: v.ReconciliationRequest,
            };
        });

    export type Outbound = {
        policyID: string;
        ReconciliationRequest: shared.ReconciliationRequest$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReconcileRequest> = z
        .object({
            policyID: z.string(),
            reconciliationRequest: shared.ReconciliationRequest$.outboundSchema,
        })
        .transform((v) => {
            return {
                policyID: v.policyID,
                ReconciliationRequest: v.reconciliationRequest,
            };
        });
}
