/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type GetPolicyRequest = {
    /**
     * The policy ID.
     */
    policyID: string;
};

export type GetPolicyResponse = {
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
};

/** @internal */
export namespace GetPolicyRequest$ {
    export const inboundSchema: z.ZodType<GetPolicyRequest, z.ZodTypeDef, unknown> = z.object({
        policyID: z.string(),
    });

    export type Outbound = {
        policyID: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPolicyRequest> = z.object({
        policyID: z.string(),
    });
}

/** @internal */
export namespace GetPolicyResponse$ {
    export const inboundSchema: z.ZodType<GetPolicyResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            PolicyResponse: shared.PolicyResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                PolicyResponse: "policyResponse",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        PolicyResponse?: shared.PolicyResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPolicyResponse> = z
        .object({
            contentType: z.string(),
            policyResponse: shared.PolicyResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                policyResponse: "PolicyResponse",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
