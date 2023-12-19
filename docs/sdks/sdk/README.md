# SDK


## Overview

Formance Stack API: Open, modular foundation for unique payments flows

# Introduction
This API is documented in **OpenAPI format**.

# Authentication
Formance Stack offers one forms of authentication:
  - OAuth2
OAuth2 - an open protocol to allow secure authorization in a simple
and standard method from web, mobile and desktop applications.
<SecurityDefinitions />


### Available Operations

* [getVersions](#getversions) - Show stack version information
* [getApiAuthWellKnownOpenidConfiguration](#getapiauthwellknownopenidconfiguration)

## getVersions

Show stack version information

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK();

  const res = await sdk.sdk.getVersions();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetVersionsResponse](../../models/operations/getversionsresponse.md)>**


## getApiAuthWellKnownOpenidConfiguration

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK();

  const res = await sdk.sdk.getApiAuthWellKnownOpenidConfiguration();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetApiAuthWellKnownOpenidConfigurationResponse](../../models/operations/getapiauthwellknownopenidconfigurationresponse.md)>**

