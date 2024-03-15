/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type ListTriggersResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * General error
     */
    error?: shared.ErrorT | undefined;
    /**
     * List of triggers
     */
    listTriggersResponse?: shared.ListTriggersResponse | undefined;
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
export namespace ListTriggersResponse$ {
    export type Inbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Inbound | undefined;
        ListTriggersResponse?: shared.ListTriggersResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<ListTriggersResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Error: shared.ErrorT$.inboundSchema.optional(),
            ListTriggersResponse: shared.ListTriggersResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Error === undefined ? null : { error: v.Error }),
                ...(v.ListTriggersResponse === undefined
                    ? null
                    : { listTriggersResponse: v.ListTriggersResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Outbound | undefined;
        ListTriggersResponse?: shared.ListTriggersResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListTriggersResponse> = z
        .object({
            contentType: z.string(),
            error: shared.ErrorT$.outboundSchema.optional(),
            listTriggersResponse: shared.ListTriggersResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.error === undefined ? null : { Error: v.error }),
                ...(v.listTriggersResponse === undefined
                    ? null
                    : { ListTriggersResponse: v.listTriggersResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
