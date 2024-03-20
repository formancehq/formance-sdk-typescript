/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type CreatePolicyResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * OK
     */
    policyResponse?: shared.PolicyResponse | undefined;
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
export namespace CreatePolicyResponse$ {
    export type Inbound = {
        ContentType: string;
        PolicyResponse?: shared.PolicyResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
        reconciliationErrorResponse?: shared.ReconciliationErrorResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreatePolicyResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            PolicyResponse: shared.PolicyResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            reconciliationErrorResponse:
                shared.ReconciliationErrorResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.PolicyResponse === undefined ? null : { policyResponse: v.PolicyResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.reconciliationErrorResponse === undefined
                    ? null
                    : { reconciliationErrorResponse: v.reconciliationErrorResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        PolicyResponse?: shared.PolicyResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
        reconciliationErrorResponse?: shared.ReconciliationErrorResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreatePolicyResponse> = z
        .object({
            contentType: z.string(),
            policyResponse: shared.PolicyResponse$.outboundSchema.optional(),
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
                ...(v.policyResponse === undefined ? null : { PolicyResponse: v.policyResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.reconciliationErrorResponse === undefined
                    ? null
                    : { reconciliationErrorResponse: v.reconciliationErrorResponse }),
            };
        });
}
