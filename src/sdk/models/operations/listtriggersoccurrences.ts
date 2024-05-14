/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type ListTriggersOccurrencesRequest = {
    /**
     * The trigger id
     */
    triggerID: string;
};

export type ListTriggersOccurrencesResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * List of triggers occurrences
     */
    listTriggersOccurrencesResponse?: shared.ListTriggersOccurrencesResponse | undefined;
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
export namespace ListTriggersOccurrencesRequest$ {
    export const inboundSchema: z.ZodType<ListTriggersOccurrencesRequest, z.ZodTypeDef, unknown> = z
        .object({
            triggerID: z.string(),
        })
        .transform((v) => {
            return {
                triggerID: v.triggerID,
            };
        });

    export type Outbound = {
        triggerID: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListTriggersOccurrencesRequest> =
        z
            .object({
                triggerID: z.string(),
            })
            .transform((v) => {
                return {
                    triggerID: v.triggerID,
                };
            });
}

/** @internal */
export namespace ListTriggersOccurrencesResponse$ {
    export const inboundSchema: z.ZodType<ListTriggersOccurrencesResponse, z.ZodTypeDef, unknown> =
        z
            .object({
                ContentType: z.string(),
                ListTriggersOccurrencesResponse:
                    shared.ListTriggersOccurrencesResponse$.inboundSchema.optional(),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
            })
            .transform((v) => {
                return {
                    contentType: v.ContentType,
                    ...(v.ListTriggersOccurrencesResponse === undefined
                        ? null
                        : { listTriggersOccurrencesResponse: v.ListTriggersOccurrencesResponse }),
                    statusCode: v.StatusCode,
                    rawResponse: v.RawResponse,
                };
            });

    export type Outbound = {
        ContentType: string;
        ListTriggersOccurrencesResponse?:
            | shared.ListTriggersOccurrencesResponse$.Outbound
            | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListTriggersOccurrencesResponse
    > = z
        .object({
            contentType: z.string(),
            listTriggersOccurrencesResponse:
                shared.ListTriggersOccurrencesResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.listTriggersOccurrencesResponse === undefined
                    ? null
                    : { ListTriggersOccurrencesResponse: v.listTriggersOccurrencesResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
