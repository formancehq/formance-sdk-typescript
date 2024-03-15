/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type GetConnectorTaskV1Request = {
    /**
     * The name of the connector.
     */
    connector: shared.Connector;
    /**
     * The connector ID.
     */
    connectorId: string;
    /**
     * The task ID.
     */
    taskId: string;
};

export type GetConnectorTaskV1Response = {
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
    taskResponse?: shared.TaskResponse | undefined;
};

/** @internal */
export namespace GetConnectorTaskV1Request$ {
    export type Inbound = {
        connector: shared.Connector;
        connectorId: string;
        taskId: string;
    };

    export const inboundSchema: z.ZodType<GetConnectorTaskV1Request, z.ZodTypeDef, Inbound> = z
        .object({
            connector: shared.Connector$,
            connectorId: z.string(),
            taskId: z.string(),
        })
        .transform((v) => {
            return {
                connector: v.connector,
                connectorId: v.connectorId,
                taskId: v.taskId,
            };
        });

    export type Outbound = {
        connector: shared.Connector;
        connectorId: string;
        taskId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetConnectorTaskV1Request> = z
        .object({
            connector: shared.Connector$,
            connectorId: z.string(),
            taskId: z.string(),
        })
        .transform((v) => {
            return {
                connector: v.connector,
                connectorId: v.connectorId,
                taskId: v.taskId,
            };
        });
}

/** @internal */
export namespace GetConnectorTaskV1Response$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        TaskResponse?: shared.TaskResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetConnectorTaskV1Response, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            TaskResponse: shared.TaskResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.TaskResponse === undefined ? null : { taskResponse: v.TaskResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        TaskResponse?: shared.TaskResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetConnectorTaskV1Response> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            taskResponse: shared.TaskResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.taskResponse === undefined ? null : { TaskResponse: v.taskResponse }),
            };
        });
}
