/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type ReconcileRequest = {
    reconciliationRequest: shared.ReconciliationRequest;
    /**
     * The policy ID.
     */
    policyID: string;
};

export type ReconcileResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * OK
     */
    reconciliationResponse?: shared.ReconciliationResponse | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Error response
     */
    reconciliationErrorResponse?: shared.ReconciliationErrorResponse | undefined;
};

/** @internal */
export namespace ReconcileRequest$ {
    export type Inbound = {
        ReconciliationRequest: shared.ReconciliationRequest$.Inbound;
        policyID: string;
    };

    export const inboundSchema: z.ZodType<ReconcileRequest, z.ZodTypeDef, Inbound> = z
        .object({
            ReconciliationRequest: shared.ReconciliationRequest$.inboundSchema,
            policyID: z.string(),
        })
        .transform((v) => {
            return {
                reconciliationRequest: v.ReconciliationRequest,
                policyID: v.policyID,
            };
        });

    export type Outbound = {
        ReconciliationRequest: shared.ReconciliationRequest$.Outbound;
        policyID: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReconcileRequest> = z
        .object({
            reconciliationRequest: shared.ReconciliationRequest$.outboundSchema,
            policyID: z.string(),
        })
        .transform((v) => {
            return {
                ReconciliationRequest: v.reconciliationRequest,
                policyID: v.policyID,
            };
        });
}

/** @internal */
export namespace ReconcileResponse$ {
    export type Inbound = {
        ContentType: string;
        ReconciliationResponse?: shared.ReconciliationResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
        reconciliationErrorResponse?: shared.ReconciliationErrorResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ReconcileResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            ReconciliationResponse: shared.ReconciliationResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            reconciliationErrorResponse:
                shared.ReconciliationErrorResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.ReconciliationResponse === undefined
                    ? null
                    : { reconciliationResponse: v.ReconciliationResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.reconciliationErrorResponse === undefined
                    ? null
                    : { reconciliationErrorResponse: v.reconciliationErrorResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        ReconciliationResponse?: shared.ReconciliationResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
        reconciliationErrorResponse?: shared.ReconciliationErrorResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReconcileResponse> = z
        .object({
            contentType: z.string(),
            reconciliationResponse: shared.ReconciliationResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            reconciliationErrorResponse:
                shared.ReconciliationErrorResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.reconciliationResponse === undefined
                    ? null
                    : { ReconciliationResponse: v.reconciliationResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.reconciliationErrorResponse === undefined
                    ? null
                    : { reconciliationErrorResponse: v.reconciliationErrorResponse }),
            };
        });
}
