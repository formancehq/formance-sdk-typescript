/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ReadUserRequest extends SpeakeasyBase {
    /**
     * User ID
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
    userId: string;
}

export class ReadUserResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Retrieved user
     */
    @SpeakeasyMetadata()
    readUserResponse?: shared.ReadUserResponse;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
