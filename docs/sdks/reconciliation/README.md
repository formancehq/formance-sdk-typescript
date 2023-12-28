# Reconciliation
(*reconciliation*)

### Available Operations

* [createPolicy](#createpolicy) - Create a policy
* [deletePolicy](#deletepolicy) - Delete a policy
* [getPolicy](#getpolicy) - Get a policy
* [getReconciliation](#getreconciliation) - Get a reconciliation
* [listPolicies](#listpolicies) - List policies
* [listReconciliations](#listreconciliations) - List reconciliations
* [reconcile](#reconcile) - Reconcile using a policy
* [reconciliationgetServerInfo](#reconciliationgetserverinfo) - Get server info

## createPolicy

Create a policy

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.reconciliation.createPolicy({
    ledgerName: "default",
    ledgerQuery: {
      "key": "string",
    },
    name: "XXX",
    paymentsPoolID: "XXX",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.PolicyRequest](../../models/shared/policyrequest.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreatePolicyResponse](../../models/operations/createpolicyresponse.md)>**


## deletePolicy

Delete a policy by its id.

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.reconciliation.deletePolicy({
    policyID: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.DeletePolicyRequest](../../models/operations/deletepolicyrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DeletePolicyResponse](../../models/operations/deletepolicyresponse.md)>**


## getPolicy

Get a policy

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.reconciliation.getPolicy({
    policyID: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetPolicyRequest](../../models/operations/getpolicyrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetPolicyResponse](../../models/operations/getpolicyresponse.md)>**


## getReconciliation

Get a reconciliation

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.reconciliation.getReconciliation({
    reconciliationID: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetReconciliationRequest](../../models/operations/getreconciliationrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetReconciliationResponse](../../models/operations/getreconciliationresponse.md)>**


## listPolicies

List policies

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.reconciliation.listPolicies({
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListPoliciesRequest](../../models/operations/listpoliciesrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListPoliciesResponse](../../models/operations/listpoliciesresponse.md)>**


## listReconciliations

List reconciliations

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.reconciliation.listReconciliations({
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListReconciliationsRequest](../../models/operations/listreconciliationsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListReconciliationsResponse](../../models/operations/listreconciliationsresponse.md)>**


## reconcile

Reconcile using a policy

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.reconciliation.reconcile({
    reconciliationRequest: {
      reconciledAtLedger: new Date("2021-01-01T00:00:00.000Z"),
      reconciledAtPayments: new Date("2021-01-01T00:00:00.000Z"),
    },
    policyID: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.ReconcileRequest](../../models/operations/reconcilerequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ReconcileResponse](../../models/operations/reconcileresponse.md)>**


## reconciliationgetServerInfo

Get server info

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.reconciliation.reconciliationgetServerInfo();


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

**Promise<[operations.ReconciliationgetServerInfoResponse](../../models/operations/reconciliationgetserverinforesponse.md)>**

