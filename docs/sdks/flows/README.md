# flows

### Available Operations

* [flowsgetServerInfo](#flowsgetserverinfo) - Get server info
* [cancelEvent](#cancelevent) - Cancel a running workflow
* [createWorkflow](#createworkflow) - Create workflow
* [getInstance](#getinstance) - Get a workflow instance by id
* [getInstanceHistory](#getinstancehistory) - Get a workflow instance history by id
* [getInstanceStageHistory](#getinstancestagehistory) - Get a workflow instance stage history
* [getWorkflow](#getworkflow) - Get a flow by id
* [listInstances](#listinstances) - List instances of a workflow
* [listWorkflows](#listworkflows) - List registered workflows
* [runWorkflow](#runworkflow) - Run workflow
* [sendEvent](#sendevent) - Send an event to a running workflow

## flowsgetServerInfo

Get server info

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { FlowsgetServerInfoResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.flows.flowsgetServerInfo().then((res: FlowsgetServerInfoResponse) => {
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

**Promise<[operations.FlowsgetServerInfoResponse](../../models/operations/flowsgetserverinforesponse.md)>**


## cancelEvent

Cancel a running workflow

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { CancelEventResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.flows.cancelEvent("architecto").then((res: CancelEventResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `instanceID`                                                 | *string*                                                     | :heavy_check_mark:                                           | The instance id                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CancelEventResponse](../../models/operations/canceleventresponse.md)>**


## createWorkflow

Create a workflow

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { CreateWorkflowResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.flows.createWorkflow({
  name: "Lela Orn",
  stages: [
    {
      "corporis": "explicabo",
    },
  ],
}).then((res: CreateWorkflowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.CreateWorkflowRequest](../../models/shared/createworkflowrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateWorkflowResponse](../../models/operations/createworkflowresponse.md)>**


## getInstance

Get a workflow instance by id

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetInstanceResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.flows.getInstance("nobis").then((res: GetInstanceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `instanceID`                                                 | *string*                                                     | :heavy_check_mark:                                           | The instance id                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetInstanceResponse](../../models/operations/getinstanceresponse.md)>**


## getInstanceHistory

Get a workflow instance history by id

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetInstanceHistoryResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.flows.getInstanceHistory("enim").then((res: GetInstanceHistoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `instanceID`                                                 | *string*                                                     | :heavy_check_mark:                                           | The instance id                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetInstanceHistoryResponse](../../models/operations/getinstancehistoryresponse.md)>**


## getInstanceStageHistory

Get a workflow instance stage history

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetInstanceStageHistoryResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.flows.getInstanceStageHistory("omnis", 363711).then((res: GetInstanceStageHistoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `instanceID`                                                 | *string*                                                     | :heavy_check_mark:                                           | The instance id                                              |
| `number`                                                     | *number*                                                     | :heavy_check_mark:                                           | The stage number                                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetInstanceStageHistoryResponse](../../models/operations/getinstancestagehistoryresponse.md)>**


## getWorkflow

Get a flow by id

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetWorkflowResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.flows.getWorkflow("minima").then((res: GetWorkflowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `flowId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The flow id                                                  |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetWorkflowResponse](../../models/operations/getworkflowresponse.md)>**


## listInstances

List instances of a workflow

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ListInstancesResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.flows.listInstances(false, "excepturi").then((res: ListInstancesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `running`                                                    | *boolean*                                                    | :heavy_minus_sign:                                           | Filter running instances                                     |
| `workflowID`                                                 | *string*                                                     | :heavy_minus_sign:                                           | A workflow id                                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListInstancesResponse](../../models/operations/listinstancesresponse.md)>**


## listWorkflows

List registered workflows

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ListWorkflowsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.flows.listWorkflows().then((res: ListWorkflowsResponse) => {
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

**Promise<[operations.ListWorkflowsResponse](../../models/operations/listworkflowsresponse.md)>**


## runWorkflow

Run workflow

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { RunWorkflowResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.flows.runWorkflow("accusantium", {
  "culpa": "doloribus",
  "sapiente": "architecto",
}, false).then((res: RunWorkflowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `workflowID`                                                 | *string*                                                     | :heavy_check_mark:                                           | The flow id                                                  |
| `requestBody`                                                | Record<string, *string*>                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `wait`                                                       | *boolean*                                                    | :heavy_minus_sign:                                           | Wait end of the workflow before return                       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RunWorkflowResponse](../../models/operations/runworkflowresponse.md)>**


## sendEvent

Send an event to a running workflow

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { SendEventResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.flows.sendEvent("mollitia", {
  name: "Cecilia Crooks",
}).then((res: SendEventResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `instanceID`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | The instance id                                                                    |
| `requestBody`                                                                      | [operations.SendEventRequestBody](../../models/operations/sendeventrequestbody.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.SendEventResponse](../../models/operations/sendeventresponse.md)>**

