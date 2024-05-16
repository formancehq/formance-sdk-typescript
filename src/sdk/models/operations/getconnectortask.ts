/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type GetConnectorTaskRequest = {
    /**
     * The name of the connector.
     */
    connector: shared.Connector;
    /**
     * The task ID.
     */
    taskId: string;
};

/** @internal */
export namespace GetConnectorTaskRequest$ {
    export const inboundSchema: z.ZodType<GetConnectorTaskRequest, z.ZodTypeDef, unknown> = z
        .object({
            connector: shared.Connector$.inboundSchema,
            taskId: z.string(),
        })
        .transform((v) => {
            return {
                connector: v.connector,
                taskId: v.taskId,
            };
        });

    export type Outbound = {
        connector: string;
        taskId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetConnectorTaskRequest> = z
        .object({
            connector: shared.Connector$.outboundSchema,
            taskId: z.string(),
        })
        .transform((v) => {
            return {
                connector: v.connector,
                taskId: v.taskId,
            };
        });
}
