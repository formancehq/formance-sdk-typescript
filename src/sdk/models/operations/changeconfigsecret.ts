/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ChangeConfigSecretRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    configChangeSecret?: shared.ConfigChangeSecret;

    /**
     * Config ID
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class ChangeConfigSecretResponse extends SpeakeasyBase {
    /**
     * Secret successfully changed.
     */
    @SpeakeasyMetadata()
    configResponse?: shared.ConfigResponse;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Error
     */
    @SpeakeasyMetadata()
    webhooksErrorResponse?: shared.WebhooksErrorResponse;
}