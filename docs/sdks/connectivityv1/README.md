# Connectivity.V1

## Overview

### Available Operations

* [connectivityInfo](#connectivityinfo) - Build information
* [createConnection](#createconnection) - Create a Connection
* [deleteConnection](#deleteconnection) - Delete a Connection
* [getConnection](#getconnection) - Get a Connection
* [getConnector](#getconnector) - Get a Connector (lean connector metadata)
* [getConnectorFacets](#getconnectorfacets) - Facet-value distribution over the published catalogue
* [getConnectorVersion](#getconnectorversion) - Get one Connector version (including its configSchema and additionalMetadata)
* [getQueryCapabilities](#getquerycapabilities) - The filterable keys, operators and value enums per resource
* [healthcheck](#healthcheck) - Health probe
* [listConnections](#listconnections) - List connector instances for this tenant
* [listConnectorVersions](#listconnectorversions) - List the installable versions of a Connector
* [listConnectors](#listconnectors) - List published Connectors with their catalogue identity
* [patchConnection](#patchconnection) - Merge-patch a connector instance configuration
* [replaceConnection](#replaceconnection) - Replace a connector instance configuration

## connectivityInfo

Version probe used by the stack gateway to report this module in the
`/versions` aggregation. Response shape follows the platform-wide
ServiceInfo contract.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="connectivityInfo" method="get" path="/api/connectivity/_info" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.connectivity.v1.connectivityInfo();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { connectivityV1ConnectivityInfo } from "@formance/formance-sdk/funcs/connectivityV1ConnectivityInfo.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await connectivityV1ConnectivityInfo(sdk);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectivityV1ConnectivityInfo failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ConnectivityInfoResponse](../../sdk/models/operations/connectivityinforesponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createConnection

Creates a new `Connection` in the caller's environment.
`configuration.connector`, `configuration.ledger` and exactly one of `configuration.version` or
`configuration.channel` are required. `env` and `files` are string key/value maps;
properties marked `format: password` by the selected connector schema
are stored confidentially and omitted from read responses.
Storage metadata and configuration references are rejected on input.
A field outside the tenant contract,
including unsupported instance fields such as `image`, `additionalEnv`,
`additionalFiles` or `replicas`, is rejected with
`400 unsupported_field`.


### Example Usage: channel

<!-- UsageSnippet language="typescript" operationID="createConnection" method="post" path="/api/connectivity/connections" example="channel" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.connectivity.v1.createConnection({
    configuration: {
      channel: "stable",
      connector: "stripe",
      env: {
        "STRIPE_API_KEY": "<your-api-key>",
      },
      ledger: "main",
      pollInterval: "30s",
    },
    name: "stripe-main",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { connectivityV1CreateConnection } from "@formance/formance-sdk/funcs/connectivityV1CreateConnection.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await connectivityV1CreateConnection(sdk, {
    configuration: {
      channel: "stable",
      connector: "stripe",
      env: {
        "STRIPE_API_KEY": "<your-api-key>",
      },
      ledger: "main",
      pollInterval: "30s",
    },
    name: "stripe-main",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectivityV1CreateConnection failed:", res.error);
  }
}

run();
```
### Example Usage: version

<!-- UsageSnippet language="typescript" operationID="createConnection" method="post" path="/api/connectivity/connections" example="version" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.connectivity.v1.createConnection({
    configuration: {
      connector: "bitcoin",
      env: {
        "RPC_URL": "http://bitcoind:8332",
      },
      files: {
        "/etc/bitcoin/ca.pem": "<PEM certificate content>",
      },
      initialCursor: "AAAAAAAAA+g=",
      ledger: "btc",
      version: "v1.4.2",
    },
    name: "bitcoin-main",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { connectivityV1CreateConnection } from "@formance/formance-sdk/funcs/connectivityV1CreateConnection.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await connectivityV1CreateConnection(sdk, {
    configuration: {
      connector: "bitcoin",
      env: {
        "RPC_URL": "http://bitcoind:8332",
      },
      files: {
        "/etc/bitcoin/ca.pem": "<PEM certificate content>",
      },
      initialCursor: "AAAAAAAAA+g=",
      ledger: "btc",
      version: "v1.4.2",
    },
    name: "bitcoin-main",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectivityV1CreateConnection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [connectivity.ConnectionCreate](../../sdk/models/connectivity/connectioncreate.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateConnectionSecurity](../../sdk/models/operations/createconnectionsecurity.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateConnectionResponse](../../sdk/models/operations/createconnectionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## deleteConnection

Delete a Connection

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteConnection" method="delete" path="/api/connectivity/connections/{name}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.connectivity.v1.deleteConnection({
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { connectivityV1DeleteConnection } from "@formance/formance-sdk/funcs/connectivityV1DeleteConnection.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await connectivityV1DeleteConnection(sdk, {
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectivityV1DeleteConnection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteConnectionRequest](../../sdk/models/operations/deleteconnectionrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteConnectionSecurity](../../sdk/models/operations/deleteconnectionsecurity.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteConnectionResponse](../../sdk/models/operations/deleteconnectionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getConnection

Get a Connection

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getConnection" method="get" path="/api/connectivity/connections/{name}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.connectivity.v1.getConnection({
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { connectivityV1GetConnection } from "@formance/formance-sdk/funcs/connectivityV1GetConnection.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await connectivityV1GetConnection(sdk, {
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectivityV1GetConnection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetConnectionRequest](../../sdk/models/operations/getconnectionrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetConnectionSecurity](../../sdk/models/operations/getconnectionsecurity.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetConnectionResponse](../../sdk/models/operations/getconnectionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getConnector

Get a Connector (lean connector metadata)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getConnector" method="get" path="/api/connectivity/connectors/{name}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.connectivity.v1.getConnector({
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { connectivityV1GetConnector } from "@formance/formance-sdk/funcs/connectivityV1GetConnector.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await connectivityV1GetConnector(sdk, {
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectivityV1GetConnector failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetConnectorRequest](../../sdk/models/operations/getconnectorrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetConnectorSecurity](../../sdk/models/operations/getconnectorsecurity.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetConnectorResponse](../../sdk/models/operations/getconnectorresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getConnectorFacets

Counts distinct published `Connector`s per `facet:value` tag (split on
the first `:`; flat tags carry no facet and are excluded), narrowed by
the same `query` filter as the list. `_facets` can never collide with
a connector: names are DNS labels, which cannot contain `_`.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getConnectorFacets" method="get" path="/api/connectivity/connectors/_facets" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.connectivity.v1.getConnectorFacets({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { connectivityV1GetConnectorFacets } from "@formance/formance-sdk/funcs/connectivityV1GetConnectorFacets.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await connectivityV1GetConnectorFacets(sdk, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectivityV1GetConnectorFacets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetConnectorFacetsRequest](../../sdk/models/operations/getconnectorfacetsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetConnectorFacetsSecurity](../../sdk/models/operations/getconnectorfacetssecurity.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetConnectorFacetsResponse](../../sdk/models/operations/getconnectorfacetsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getConnectorVersion

Get one Connector version (including its configSchema and additionalMetadata)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getConnectorVersion" method="get" path="/api/connectivity/connectors/{name}/versions/{version}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.connectivity.v1.getConnectorVersion({
    name: "<value>",
    version: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { connectivityV1GetConnectorVersion } from "@formance/formance-sdk/funcs/connectivityV1GetConnectorVersion.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await connectivityV1GetConnectorVersion(sdk, {
    name: "<value>",
    version: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectivityV1GetConnectorVersion failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetConnectorVersionRequest](../../sdk/models/operations/getconnectorversionrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetConnectorVersionSecurity](../../sdk/models/operations/getconnectorversionsecurity.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetConnectorVersionResponse](../../sdk/models/operations/getconnectorversionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getQueryCapabilities

Serialized from the same allowlist the server enforces on `?query=`,
so a UI can build its filter bar dynamically and never drift from
what the API accepts.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getQueryCapabilities" method="get" path="/api/connectivity/_query/capabilities" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.connectivity.v1.getQueryCapabilities();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { connectivityV1GetQueryCapabilities } from "@formance/formance-sdk/funcs/connectivityV1GetQueryCapabilities.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await connectivityV1GetQueryCapabilities(sdk);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectivityV1GetQueryCapabilities failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.GetQueryCapabilitiesSecurity](../../sdk/models/operations/getquerycapabilitiessecurity.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetQueryCapabilitiesResponse](../../sdk/models/operations/getquerycapabilitiesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## healthcheck

Single health endpoint, probed by the stack gateway for the `/versions`
aggregation and by service readiness/liveness probes. Ready
means the service can reach its storage dependency.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="healthcheck" method="get" path="/api/connectivity/_healthcheck" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.connectivity.v1.healthcheck();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { connectivityV1Healthcheck } from "@formance/formance-sdk/funcs/connectivityV1Healthcheck.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await connectivityV1Healthcheck(sdk);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectivityV1Healthcheck failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HealthcheckResponse](../../sdk/models/operations/healthcheckresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listConnections

List connector instances for this tenant

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listConnections" method="get" path="/api/connectivity/connections" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.connectivity.v1.listConnections({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { connectivityV1ListConnections } from "@formance/formance-sdk/funcs/connectivityV1ListConnections.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await connectivityV1ListConnections(sdk, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectivityV1ListConnections failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListConnectionsRequest](../../sdk/models/operations/listconnectionsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListConnectionsSecurity](../../sdk/models/operations/listconnectionssecurity.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListConnectionsResponse](../../sdk/models/operations/listconnectionsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listConnectorVersions

Returns the `ConnectorVersion`s published for this Connector, sorted
ascending by semantic version. Use `configuration.version` to pin a Connection,
or `configuration.channel` to track a maturity channel.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listConnectorVersions" method="get" path="/api/connectivity/connectors/{name}/versions" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.connectivity.v1.listConnectorVersions({
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { connectivityV1ListConnectorVersions } from "@formance/formance-sdk/funcs/connectivityV1ListConnectorVersions.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await connectivityV1ListConnectorVersions(sdk, {
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectivityV1ListConnectorVersions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListConnectorVersionsRequest](../../sdk/models/operations/listconnectorversionsrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListConnectorVersionsSecurity](../../sdk/models/operations/listconnectorversionssecurity.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListConnectorVersionsResponse](../../sdk/models/operations/listconnectorversionsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listConnectors

Returns the published `Connector`s, each carrying the identity of its
newest Validated version (branding, tagline, tags, `latestVersion`) so
a catalogue UI renders and filters from this single request.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listConnectors" method="get" path="/api/connectivity/connectors" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.connectivity.v1.listConnectors({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { connectivityV1ListConnectors } from "@formance/formance-sdk/funcs/connectivityV1ListConnectors.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await connectivityV1ListConnectors(sdk, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectivityV1ListConnectors failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListConnectorsRequest](../../sdk/models/operations/listconnectorsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListConnectorsSecurity](../../sdk/models/operations/listconnectorssecurity.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListConnectorsResponse](../../sdk/models/operations/listconnectorsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchConnection

JSON merge patch (RFC 7396) over tenant `configuration` fields only. Other fields
are rejected with `400 unsupported_field`. `env` and `files` are string
maps: omitted entries are preserved, including secret-backed values;
`null` deletes a field or map entry. A supplied literal replaces the
stored source. `connector` and `ledger` are not PATCH fields: any presence, including
unchanged values and null, returns `400 unsupported_field`. The merged
result must retain exactly one of `version` and `channel`, so
switching selectors sends `null` for the other one.


### Example Usage: rotatePassword

<!-- UsageSnippet language="typescript" operationID="patchConnection" method="patch" path="/api/connectivity/connections/{name}" example="rotatePassword" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.connectivity.v1.patchConnection({
    connectionPatch: {
      configuration: {
        env: {
          "STRIPE_API_KEY": "<new-api-key>",
        },
      },
    },
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { connectivityV1PatchConnection } from "@formance/formance-sdk/funcs/connectivityV1PatchConnection.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await connectivityV1PatchConnection(sdk, {
    connectionPatch: {
      configuration: {
        env: {
          "STRIPE_API_KEY": "<new-api-key>",
        },
      },
    },
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectivityV1PatchConnection failed:", res.error);
  }
}

run();
```
### Example Usage: suspend

<!-- UsageSnippet language="typescript" operationID="patchConnection" method="patch" path="/api/connectivity/connections/{name}" example="suspend" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.connectivity.v1.patchConnection({
    connectionPatch: {
      configuration: {
        suspend: true,
      },
    },
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { connectivityV1PatchConnection } from "@formance/formance-sdk/funcs/connectivityV1PatchConnection.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await connectivityV1PatchConnection(sdk, {
    connectionPatch: {
      configuration: {
        suspend: true,
      },
    },
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectivityV1PatchConnection failed:", res.error);
  }
}

run();
```
### Example Usage: switchToChannel

<!-- UsageSnippet language="typescript" operationID="patchConnection" method="patch" path="/api/connectivity/connections/{name}" example="switchToChannel" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.connectivity.v1.patchConnection({
    connectionPatch: {
      configuration: {
        channel: "stable",
        version: null,
      },
    },
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { connectivityV1PatchConnection } from "@formance/formance-sdk/funcs/connectivityV1PatchConnection.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await connectivityV1PatchConnection(sdk, {
    connectionPatch: {
      configuration: {
        channel: "stable",
        version: null,
      },
    },
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectivityV1PatchConnection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchConnectionRequest](../../sdk/models/operations/patchconnectionrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PatchConnectionSecurity](../../sdk/models/operations/patchconnectionsecurity.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchConnectionResponse](../../sdk/models/operations/patchconnectionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## replaceConnection

Full-replace semantics on mutable tenant `configuration`: omitted mutable
fields are cleared. The API does not write fields outside its tenant scope.
`status` is preserved. `connector` and `ledger` are immutable once set:
omission preserves them, first assignment and unchanged values are accepted,
and changes or null return `422 connector_immutable` or `422 ledger_immutable`. Read responses omit reference-backed entries,
so PUT must supply the complete configuration, including required secrets.
Use PATCH to preserve omitted configuration. Fields outside the tenant contract are rejected with
`400 unsupported_field`.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="replaceConnection" method="put" path="/api/connectivity/connections/{name}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.connectivity.v1.replaceConnection({
    connectionUpdate: {
      configuration: {},
    },
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { connectivityV1ReplaceConnection } from "@formance/formance-sdk/funcs/connectivityV1ReplaceConnection.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await connectivityV1ReplaceConnection(sdk, {
    connectionUpdate: {
      configuration: {},
    },
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectivityV1ReplaceConnection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ReplaceConnectionRequest](../../sdk/models/operations/replaceconnectionrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ReplaceConnectionSecurity](../../sdk/models/operations/replaceconnectionsecurity.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ReplaceConnectionResponse](../../sdk/models/operations/replaceconnectionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |