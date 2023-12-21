/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WebhooksConfig } from "./webhooksconfig";
import { Expose, Type } from "class-transformer";

export class ConfigsResponseCursor extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: WebhooksConfig })
    @Expose({ name: "data" })
    @Type(() => WebhooksConfig)
    data: WebhooksConfig[];

    @SpeakeasyMetadata()
    @Expose({ name: "hasMore" })
    hasMore: boolean;
}

export class ConfigsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "cursor" })
    @Type(() => ConfigsResponseCursor)
    cursor: ConfigsResponseCursor;
}
