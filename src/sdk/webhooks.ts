/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Webhooks {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * Activate one config
   *
   * @remarks
   * Activate a webhooks config by ID, to start receiving webhooks to its endpoint.
   */
  async activateConfig(
    id: string,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivateConfigResponse> {
    const req = new operations.ActivateConfigRequest({
      id: id,
    });
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/webhooks/configs/{id}/activate",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    headers["Accept"] = "application/json;q=1, application/json;q=0";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "put",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.ActivateConfigResponse =
      new operations.ActivateConfigResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.configResponse = utils.objectToClass(
            httpRes?.data,
            shared.ConfigResponse
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.webhooksErrorResponse = utils.objectToClass(
            httpRes?.data,
            shared.WebhooksErrorResponse
          );
        }
        break;
    }

    return res;
  }

  /**
   * Change the signing secret of a config
   *
   * @remarks
   * Change the signing secret of the endpoint of a webhooks config.
   *
   * If not passed or empty, a secret is automatically generated.
   * The format is a random string of bytes of size 24, base64 encoded. (larger size after encoding)
   *
   */
  async changeConfigSecret(
    id: string,
    configChangeSecret?: shared.ConfigChangeSecret,
    config?: AxiosRequestConfig
  ): Promise<operations.ChangeConfigSecretResponse> {
    const req = new operations.ChangeConfigSecretRequest({
      id: id,
      configChangeSecret: configChangeSecret,
    });
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/webhooks/configs/{id}/secret/change",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "configChangeSecret",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    headers["Accept"] = "application/json;q=1, application/json;q=0";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "put",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.ChangeConfigSecretResponse =
      new operations.ChangeConfigSecretResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.configResponse = utils.objectToClass(
            httpRes?.data,
            shared.ConfigResponse
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.webhooksErrorResponse = utils.objectToClass(
            httpRes?.data,
            shared.WebhooksErrorResponse
          );
        }
        break;
    }

    return res;
  }

  /**
   * Deactivate one config
   *
   * @remarks
   * Deactivate a webhooks config by ID, to stop receiving webhooks to its endpoint.
   */
  async deactivateConfig(
    id: string,
    config?: AxiosRequestConfig
  ): Promise<operations.DeactivateConfigResponse> {
    const req = new operations.DeactivateConfigRequest({
      id: id,
    });
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/webhooks/configs/{id}/deactivate",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    headers["Accept"] = "application/json;q=1, application/json;q=0";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "put",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.DeactivateConfigResponse =
      new operations.DeactivateConfigResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.configResponse = utils.objectToClass(
            httpRes?.data,
            shared.ConfigResponse
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.webhooksErrorResponse = utils.objectToClass(
            httpRes?.data,
            shared.WebhooksErrorResponse
          );
        }
        break;
    }

    return res;
  }

  /**
   * Delete one config
   *
   * @remarks
   * Delete a webhooks config by ID.
   */
  async deleteConfig(
    id: string,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteConfigResponse> {
    const req = new operations.DeleteConfigRequest({
      id: id,
    });
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/webhooks/configs/{id}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    headers["Accept"] = "application/json";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "delete",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.DeleteConfigResponse =
      new operations.DeleteConfigResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.webhooksErrorResponse = utils.objectToClass(
            httpRes?.data,
            shared.WebhooksErrorResponse
          );
        }
        break;
    }

    return res;
  }

  /**
   * Get many configs
   *
   * @remarks
   * Sorted by updated date descending
   */
  async getManyConfigs(
    endpoint?: string,
    id?: string,
    config?: AxiosRequestConfig
  ): Promise<operations.GetManyConfigsResponse> {
    const req = new operations.GetManyConfigsRequest({
      endpoint: endpoint,
      id: id,
    });
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/webhooks/configs";

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    headers["Accept"] = "application/json;q=1, application/json;q=0";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetManyConfigsResponse =
      new operations.GetManyConfigsResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.configsResponse = utils.objectToClass(
            httpRes?.data,
            shared.ConfigsResponse
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.webhooksErrorResponse = utils.objectToClass(
            httpRes?.data,
            shared.WebhooksErrorResponse
          );
        }
        break;
    }

    return res;
  }

  /**
   * Insert a new config
   *
   * @remarks
   * Insert a new webhooks config.
   *
   * The endpoint should be a valid https URL and be unique.
   *
   * The secret is the endpoint's verification secret.
   * If not passed or empty, a secret is automatically generated.
   * The format is a random string of bytes of size 24, base64 encoded. (larger size after encoding)
   *
   * All eventTypes are converted to lower-case when inserted.
   *
   */
  async insertConfig(
    req: shared.ConfigUser,
    config?: AxiosRequestConfig
  ): Promise<operations.InsertConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new shared.ConfigUser(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/webhooks/configs";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");
    headers["Accept"] = "application/json;q=1, application/json;q=0";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.InsertConfigResponse =
      new operations.InsertConfigResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.configResponse = utils.objectToClass(
            httpRes?.data,
            shared.ConfigResponse
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.webhooksErrorResponse = utils.objectToClass(
            httpRes?.data,
            shared.WebhooksErrorResponse
          );
        }
        break;
    }

    return res;
  }

  /**
   * Test one config
   *
   * @remarks
   * Test a config by sending a webhook to its endpoint.
   */
  async testConfig(
    id: string,
    config?: AxiosRequestConfig
  ): Promise<operations.TestConfigResponse> {
    const req = new operations.TestConfigRequest({
      id: id,
    });
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/webhooks/configs/{id}/test",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    headers["Accept"] = "application/json;q=1, application/json;q=0";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.TestConfigResponse =
      new operations.TestConfigResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.attemptResponse = utils.objectToClass(
            httpRes?.data,
            shared.AttemptResponse
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.webhooksErrorResponse = utils.objectToClass(
            httpRes?.data,
            shared.WebhooksErrorResponse
          );
        }
        break;
    }

    return res;
  }
}
