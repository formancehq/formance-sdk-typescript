/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type V2CreateWorkflowResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Created workflow
     */
    v2CreateWorkflowResponse?: shared.V2CreateWorkflowResponse | undefined;
};

/** @internal */
export namespace V2CreateWorkflowResponse$ {
    export const inboundSchema: z.ZodType<V2CreateWorkflowResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            V2CreateWorkflowResponse: shared.V2CreateWorkflowResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.V2CreateWorkflowResponse === undefined
                    ? null
                    : { v2CreateWorkflowResponse: v.V2CreateWorkflowResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        V2CreateWorkflowResponse?: shared.V2CreateWorkflowResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2CreateWorkflowResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            v2CreateWorkflowResponse: shared.V2CreateWorkflowResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.v2CreateWorkflowResponse === undefined
                    ? null
                    : { V2CreateWorkflowResponse: v.v2CreateWorkflowResponse }),
            };
        });
}
