# auth

### Available Operations

* [addScopeToClient](#addscopetoclient) - Add scope to client
* [addTransientScope](#addtransientscope) - Add a transient scope to a scope
* [createClient](#createclient) - Create client
* [createScope](#createscope) - Create scope
* [createSecret](#createsecret) - Add a secret to a client
* [deleteClient](#deleteclient) - Delete client
* [deleteScope](#deletescope) - Delete scope
* [deleteScopeFromClient](#deletescopefromclient) - Delete scope from client
* [deleteSecret](#deletesecret) - Delete a secret from a client
* [deleteTransientScope](#deletetransientscope) - Delete a transient scope from a scope
* [getServerInfo](#getserverinfo) - Get server info
* [listClients](#listclients) - List clients
* [listScopes](#listscopes) - List scopes
* [listUsers](#listusers) - List users
* [readClient](#readclient) - Read client
* [readScope](#readscope) - Read scope
* [readUser](#readuser) - Read user
* [updateClient](#updateclient) - Update client
* [updateScope](#updatescope) - Update scope

## addScopeToClient

Add scope to client

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { AddScopeToClientResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.auth.addScopeToClient("corrupti", "provident").then((res: AddScopeToClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `clientId`                                                   | *string*                                                     | :heavy_check_mark:                                           | Client ID                                                    |
| `scopeId`                                                    | *string*                                                     | :heavy_check_mark:                                           | Scope ID                                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.AddScopeToClientResponse](../../models/operations/addscopetoclientresponse.md)>**


## addTransientScope

Add a transient scope to a scope

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { AddTransientScopeResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.auth.addTransientScope("distinctio", "quibusdam").then((res: AddTransientScopeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `scopeId`                                                    | *string*                                                     | :heavy_check_mark:                                           | Scope ID                                                     |
| `transientScopeId`                                           | *string*                                                     | :heavy_check_mark:                                           | Transient scope ID                                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.AddTransientScopeResponse](../../models/operations/addtransientscoperesponse.md)>**


## createClient

Create client

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { CreateClientResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.auth.createClient({
  description: "unde",
  metadata: {
    "corrupti": "illum",
    "vel": "error",
    "deserunt": "suscipit",
    "iure": "magnam",
  },
  name: "Larry Windler",
  postLogoutRedirectUris: [
    "minus",
    "placeat",
  ],
  public: false,
  redirectUris: [
    "iusto",
    "excepturi",
    "nisi",
  ],
  trusted: false,
}).then((res: CreateClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.CreateClientRequest](../../models/shared/createclientrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.CreateClientResponse](../../models/operations/createclientresponse.md)>**


## createScope

Create scope

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { CreateScopeResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.auth.createScope({
  label: "recusandae",
  metadata: {
    "ab": "quis",
    "veritatis": "deserunt",
    "perferendis": "ipsam",
    "repellendus": "sapiente",
  },
}).then((res: CreateScopeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.CreateScopeRequest](../../models/shared/createscoperequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.CreateScopeResponse](../../models/operations/createscoperesponse.md)>**


## createSecret

Add a secret to a client

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { CreateSecretResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.auth.createSecret("quo", {
  metadata: {
    "at": "at",
  },
  name: "Javier Schmidt",
}).then((res: CreateSecretResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `clientId`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | Client ID                                                                |
| `createSecretRequest`                                                    | [shared.CreateSecretRequest](../../models/shared/createsecretrequest.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.CreateSecretResponse](../../models/operations/createsecretresponse.md)>**


## deleteClient

Delete client

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { DeleteClientResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.auth.deleteClient("totam").then((res: DeleteClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `clientId`                                                   | *string*                                                     | :heavy_check_mark:                                           | Client ID                                                    |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteClientResponse](../../models/operations/deleteclientresponse.md)>**


## deleteScope

Delete scope

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { DeleteScopeResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.auth.deleteScope("porro").then((res: DeleteScopeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `scopeId`                                                    | *string*                                                     | :heavy_check_mark:                                           | Scope ID                                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteScopeResponse](../../models/operations/deletescoperesponse.md)>**


## deleteScopeFromClient

Delete scope from client

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { DeleteScopeFromClientResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.auth.deleteScopeFromClient("dolorum", "dicta").then((res: DeleteScopeFromClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `clientId`                                                   | *string*                                                     | :heavy_check_mark:                                           | Client ID                                                    |
| `scopeId`                                                    | *string*                                                     | :heavy_check_mark:                                           | Scope ID                                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteScopeFromClientResponse](../../models/operations/deletescopefromclientresponse.md)>**


## deleteSecret

Delete a secret from a client

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { DeleteSecretResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.auth.deleteSecret("nam", "officia").then((res: DeleteSecretResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `clientId`                                                   | *string*                                                     | :heavy_check_mark:                                           | Client ID                                                    |
| `secretId`                                                   | *string*                                                     | :heavy_check_mark:                                           | Secret ID                                                    |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteSecretResponse](../../models/operations/deletesecretresponse.md)>**


## deleteTransientScope

Delete a transient scope from a scope

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { DeleteTransientScopeResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.auth.deleteTransientScope("occaecati", "fugit").then((res: DeleteTransientScopeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `scopeId`                                                    | *string*                                                     | :heavy_check_mark:                                           | Scope ID                                                     |
| `transientScopeId`                                           | *string*                                                     | :heavy_check_mark:                                           | Transient scope ID                                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteTransientScopeResponse](../../models/operations/deletetransientscoperesponse.md)>**


## getServerInfo

Get server info

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetServerInfoResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.auth.getServerInfo().then((res: GetServerInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetServerInfoResponse](../../models/operations/getserverinforesponse.md)>**


## listClients

List clients

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ListClientsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.auth.listClients().then((res: ListClientsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListClientsResponse](../../models/operations/listclientsresponse.md)>**


## listScopes

List Scopes

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ListScopesResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.auth.listScopes().then((res: ListScopesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListScopesResponse](../../models/operations/listscopesresponse.md)>**


## listUsers

List users

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ListUsersResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.auth.listUsers().then((res: ListUsersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListUsersResponse](../../models/operations/listusersresponse.md)>**


## readClient

Read client

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ReadClientResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.auth.readClient("deleniti").then((res: ReadClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `clientId`                                                   | *string*                                                     | :heavy_check_mark:                                           | Client ID                                                    |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ReadClientResponse](../../models/operations/readclientresponse.md)>**


## readScope

Read scope

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ReadScopeResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.auth.readScope("hic").then((res: ReadScopeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `scopeId`                                                    | *string*                                                     | :heavy_check_mark:                                           | Scope ID                                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ReadScopeResponse](../../models/operations/readscoperesponse.md)>**


## readUser

Read user

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ReadUserResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.auth.readUser("optio").then((res: ReadUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `userId`                                                     | *string*                                                     | :heavy_check_mark:                                           | User ID                                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ReadUserResponse](../../models/operations/readuserresponse.md)>**


## updateClient

Update client

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { UpdateClientResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.auth.updateClient("totam", {
  description: "beatae",
  metadata: {
    "molestiae": "modi",
    "qui": "impedit",
  },
  name: "Cory Emmerich",
  postLogoutRedirectUris: [
    "ad",
  ],
  public: false,
  redirectUris: [
    "sed",
    "iste",
    "dolor",
  ],
  trusted: false,
}).then((res: UpdateClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `clientId`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | Client ID                                                                |
| `updateClientRequest`                                                    | [shared.UpdateClientRequest](../../models/shared/updateclientrequest.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.UpdateClientResponse](../../models/operations/updateclientresponse.md)>**


## updateScope

Update scope

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { UpdateScopeResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.auth.updateScope("natus", {
  label: "laboriosam",
  metadata: {
    "saepe": "fuga",
    "in": "corporis",
    "iste": "iure",
    "saepe": "quidem",
  },
}).then((res: UpdateScopeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `scopeId`                                                              | *string*                                                               | :heavy_check_mark:                                                     | Scope ID                                                               |
| `updateScopeRequest`                                                   | [shared.UpdateScopeRequest](../../models/shared/updatescoperequest.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.UpdateScopeResponse](../../models/operations/updatescoperesponse.md)>**

