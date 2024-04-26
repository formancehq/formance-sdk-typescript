/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type V2ListTriggersRequest = {
    /**
     * Parameter used in pagination requests.
     *
     * @remarks
     * Set to the value of next for the next page of results.
     * Set to the value of previous for the previous page of results.
     * No other parameters can be set when this parameter is set.
     *
     */
    cursor?: string | undefined;
    /**
     * The maximum number of results to return per page.
     *
     * @remarks
     *
     */
    pageSize?: number | undefined;
};

export type V2ListTriggersResponse = {
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
     * List of triggers
     */
    v2ListTriggersResponse?: shared.V2ListTriggersResponse | undefined;
};

/** @internal */
export namespace V2ListTriggersRequest$ {
    export type Inbound = {
        cursor?: string | undefined;
        pageSize?: number | undefined;
    };

    export const inboundSchema: z.ZodType<V2ListTriggersRequest, z.ZodTypeDef, Inbound> = z
        .object({
            cursor: z.string().optional(),
            pageSize: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
            };
        });

    export type Outbound = {
        cursor?: string | undefined;
        pageSize?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2ListTriggersRequest> = z
        .object({
            cursor: z.string().optional(),
            pageSize: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
            };
        });
}

/** @internal */
export namespace V2ListTriggersResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        V2ListTriggersResponse?: shared.V2ListTriggersResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<V2ListTriggersResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            V2ListTriggersResponse: shared.V2ListTriggersResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.V2ListTriggersResponse === undefined
                    ? null
                    : { v2ListTriggersResponse: v.V2ListTriggersResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        V2ListTriggersResponse?: shared.V2ListTriggersResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2ListTriggersResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            v2ListTriggersResponse: shared.V2ListTriggersResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.v2ListTriggersResponse === undefined
                    ? null
                    : { V2ListTriggersResponse: v.v2ListTriggersResponse }),
            };
        });
}
