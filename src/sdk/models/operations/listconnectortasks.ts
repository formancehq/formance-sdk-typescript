/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type ListConnectorTasksRequest = {
    /**
     * The name of the connector.
     */
    connector: shared.Connector;
    /**
     * Parameter used in pagination requests. Maximum page size is set to 15.
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

export type ListConnectorTasksResponse = {
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
     * OK
     */
    tasksCursor?: shared.TasksCursor | undefined;
};

/** @internal */
export namespace ListConnectorTasksRequest$ {
    export type Inbound = {
        connector: shared.Connector;
        cursor?: string | undefined;
        pageSize?: number | undefined;
    };

    export const inboundSchema: z.ZodType<ListConnectorTasksRequest, z.ZodTypeDef, Inbound> = z
        .object({
            connector: shared.Connector$,
            cursor: z.string().optional(),
            pageSize: z.number().int().default(15),
        })
        .transform((v) => {
            return {
                connector: v.connector,
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
            };
        });

    export type Outbound = {
        connector: shared.Connector;
        cursor?: string | undefined;
        pageSize: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListConnectorTasksRequest> = z
        .object({
            connector: shared.Connector$,
            cursor: z.string().optional(),
            pageSize: z.number().int().default(15),
        })
        .transform((v) => {
            return {
                connector: v.connector,
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                pageSize: v.pageSize,
            };
        });
}

/** @internal */
export namespace ListConnectorTasksResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        TasksCursor?: shared.TasksCursor$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ListConnectorTasksResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            TasksCursor: shared.TasksCursor$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.TasksCursor === undefined ? null : { tasksCursor: v.TasksCursor }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        TasksCursor?: shared.TasksCursor$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListConnectorTasksResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            tasksCursor: shared.TasksCursor$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.tasksCursor === undefined ? null : { TasksCursor: v.tasksCursor }),
            };
        });
}
