# Orchestration
(*orchestration*)

### Available Operations

* [cancelEvent](#cancelevent) - Cancel a running workflow
* [createTrigger](#createtrigger) - Create trigger
* [createWorkflow](#createworkflow) - Create workflow
* [deleteTrigger](#deletetrigger) - Delete trigger
* [deleteWorkflow](#deleteworkflow) - Delete a flow by id
* [getInstance](#getinstance) - Get a workflow instance by id
* [getInstanceHistory](#getinstancehistory) - Get a workflow instance history by id
* [getInstanceStageHistory](#getinstancestagehistory) - Get a workflow instance stage history
* [getWorkflow](#getworkflow) - Get a flow by id
* [listInstances](#listinstances) - List instances of a workflow
* [listTriggers](#listtriggers) - List triggers
* [listTriggersOccurrences](#listtriggersoccurrences) - List triggers occurrences
* [listWorkflows](#listworkflows) - List registered workflows
* [orchestrationgetServerInfo](#orchestrationgetserverinfo) - Get server info
* [readTrigger](#readtrigger) - Read trigger
* [runWorkflow](#runworkflow) - Run workflow
* [sendEvent](#sendevent) - Send an event to a running workflow
* [testTrigger](#testtrigger) - Test trigger
* [v2CancelEvent](#v2cancelevent) - Cancel a running workflow
* [v2CreateTrigger](#v2createtrigger) - Create trigger
* [v2CreateWorkflow](#v2createworkflow) - Create workflow
* [v2DeleteTrigger](#v2deletetrigger) - Delete trigger
* [v2DeleteWorkflow](#v2deleteworkflow) - Delete a flow by id
* [v2GetInstance](#v2getinstance) - Get a workflow instance by id
* [v2GetInstanceHistory](#v2getinstancehistory) - Get a workflow instance history by id
* [v2GetInstanceStageHistory](#v2getinstancestagehistory) - Get a workflow instance stage history
* [v2GetServerInfo](#v2getserverinfo) - Get server info
* [v2GetWorkflow](#v2getworkflow) - Get a flow by id
* [v2ListInstances](#v2listinstances) - List instances of a workflow
* [v2ListTriggers](#v2listtriggers) - List triggers
* [v2ListTriggersOccurrences](#v2listtriggersoccurrences) - List triggers occurrences
* [v2ListWorkflows](#v2listworkflows) - List registered workflows
* [v2ReadTrigger](#v2readtrigger) - Read trigger
* [v2RunWorkflow](#v2runworkflow) - Run workflow
* [v2SendEvent](#v2sendevent) - Send an event to a running workflow

## cancelEvent

Cancel a running workflow

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.cancelEvent({
    instanceID: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CancelEventRequest](../../sdk/models/operations/canceleventrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CancelEventResponse](../../sdk/models/operations/canceleventresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createTrigger

Create trigger

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.createTrigger({
    event: "string",
    vars: {
      "key": "string",
    },
    workflowID: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.TriggerData](../../sdk/models/shared/triggerdata.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateTriggerResponse](../../sdk/models/operations/createtriggerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createWorkflow

Create a workflow

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.createWorkflow({
    stages: [
      {
        "key": "string",
      },
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.CreateWorkflowRequest](../../sdk/models/shared/createworkflowrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateWorkflowResponse](../../sdk/models/operations/createworkflowresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteTrigger

Read trigger

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.deleteTrigger({
    triggerID: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteTriggerRequest](../../sdk/models/operations/deletetriggerrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteTriggerResponse](../../sdk/models/operations/deletetriggerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteWorkflow

Delete a flow by id

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.deleteWorkflow({
    flowId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteWorkflowRequest](../../sdk/models/operations/deleteworkflowrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteWorkflowResponse](../../sdk/models/operations/deleteworkflowresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getInstance

Get a workflow instance by id

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.getInstance({
    instanceID: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetInstanceRequest](../../sdk/models/operations/getinstancerequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetInstanceResponse](../../sdk/models/operations/getinstanceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getInstanceHistory

Get a workflow instance history by id

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.getInstanceHistory({
    instanceID: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetInstanceHistoryRequest](../../sdk/models/operations/getinstancehistoryrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetInstanceHistoryResponse](../../sdk/models/operations/getinstancehistoryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getInstanceStageHistory

Get a workflow instance stage history

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.getInstanceStageHistory({
    instanceID: "string",
    number: 600636,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetInstanceStageHistoryRequest](../../sdk/models/operations/getinstancestagehistoryrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetInstanceStageHistoryResponse](../../sdk/models/operations/getinstancestagehistoryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getWorkflow

Get a flow by id

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.getWorkflow({
    flowId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetWorkflowRequest](../../sdk/models/operations/getworkflowrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetWorkflowResponse](../../sdk/models/operations/getworkflowresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listInstances

List instances of a workflow

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.listInstances({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListInstancesRequest](../../sdk/models/operations/listinstancesrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListInstancesResponse](../../sdk/models/operations/listinstancesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listTriggers

List triggers

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.listTriggers();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListTriggersResponse](../../sdk/models/operations/listtriggersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listTriggersOccurrences

List triggers occurrences

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.listTriggersOccurrences({
    triggerID: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.ListTriggersOccurrencesRequest](../../sdk/models/operations/listtriggersoccurrencesrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.ListTriggersOccurrencesResponse](../../sdk/models/operations/listtriggersoccurrencesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listWorkflows

List registered workflows

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.listWorkflows();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListWorkflowsResponse](../../sdk/models/operations/listworkflowsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## orchestrationgetServerInfo

Get server info

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.orchestrationgetServerInfo();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.OrchestrationgetServerInfoResponse](../../sdk/models/operations/orchestrationgetserverinforesponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## readTrigger

Read trigger

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.readTrigger({
    triggerID: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ReadTriggerRequest](../../sdk/models/operations/readtriggerrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ReadTriggerResponse](../../sdk/models/operations/readtriggerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## runWorkflow

Run workflow

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.runWorkflow({
    requestBody: {
      "key": "string",
    },
    workflowID: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.RunWorkflowRequest](../../sdk/models/operations/runworkflowrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.RunWorkflowResponse](../../sdk/models/operations/runworkflowresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## sendEvent

Send an event to a running workflow

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.sendEvent({
    requestBody: {
      name: "string",
    },
    instanceID: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.SendEventRequest](../../sdk/models/operations/sendeventrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.SendEventResponse](../../sdk/models/operations/sendeventresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## testTrigger

Test trigger

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.testTrigger({
    requestBody: {
      "key": "string",
    },
    triggerID: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.TestTriggerRequest](../../sdk/models/operations/testtriggerrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.TestTriggerResponse](../../sdk/models/operations/testtriggerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## v2CancelEvent

Cancel a running workflow

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.v2CancelEvent({
    instanceID: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.V2CancelEventRequest](../../sdk/models/operations/v2canceleventrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.V2CancelEventResponse](../../sdk/models/operations/v2canceleventresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## v2CreateTrigger

Create trigger

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.v2CreateTrigger({
    event: "string",
    vars: {
      "key": "string",
    },
    workflowID: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [shared.V2TriggerData](../../sdk/models/shared/v2triggerdata.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.V2CreateTriggerResponse](../../sdk/models/operations/v2createtriggerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## v2CreateWorkflow

Create a workflow

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.v2CreateWorkflow({
    stages: [
      {
        "key": "string",
      },
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.V2CreateWorkflowRequest](../../sdk/models/shared/v2createworkflowrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.V2CreateWorkflowResponse](../../sdk/models/operations/v2createworkflowresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## v2DeleteTrigger

Read trigger

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.v2DeleteTrigger({
    triggerID: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.V2DeleteTriggerRequest](../../sdk/models/operations/v2deletetriggerrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.V2DeleteTriggerResponse](../../sdk/models/operations/v2deletetriggerresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.V2Error   | 404              | application/json |
| errors.SDKError  | 400-600          | */*              |

## v2DeleteWorkflow

Delete a flow by id

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.v2DeleteWorkflow({
    flowId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.V2DeleteWorkflowRequest](../../sdk/models/operations/v2deleteworkflowrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.V2DeleteWorkflowResponse](../../sdk/models/operations/v2deleteworkflowresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.V2Error   | 400,404          | application/json |
| errors.SDKError  | 400-600          | */*              |

## v2GetInstance

Get a workflow instance by id

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.v2GetInstance({
    instanceID: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.V2GetInstanceRequest](../../sdk/models/operations/v2getinstancerequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.V2GetInstanceResponse](../../sdk/models/operations/v2getinstanceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## v2GetInstanceHistory

Get a workflow instance history by id

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.v2GetInstanceHistory({
    instanceID: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.V2GetInstanceHistoryRequest](../../sdk/models/operations/v2getinstancehistoryrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.V2GetInstanceHistoryResponse](../../sdk/models/operations/v2getinstancehistoryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## v2GetInstanceStageHistory

Get a workflow instance stage history

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.v2GetInstanceStageHistory({
    instanceID: "string",
    number: 465454,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.V2GetInstanceStageHistoryRequest](../../sdk/models/operations/v2getinstancestagehistoryrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.V2GetInstanceStageHistoryResponse](../../sdk/models/operations/v2getinstancestagehistoryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## v2GetServerInfo

Get server info

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.v2GetServerInfo();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.V2GetServerInfoResponse](../../sdk/models/operations/v2getserverinforesponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## v2GetWorkflow

Get a flow by id

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.v2GetWorkflow({
    flowId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.V2GetWorkflowRequest](../../sdk/models/operations/v2getworkflowrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.V2GetWorkflowResponse](../../sdk/models/operations/v2getworkflowresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## v2ListInstances

List instances of a workflow

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.v2ListInstances({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.V2ListInstancesRequest](../../sdk/models/operations/v2listinstancesrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.V2ListInstancesResponse](../../sdk/models/operations/v2listinstancesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## v2ListTriggers

List triggers

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.v2ListTriggers();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.V2ListTriggersResponse](../../sdk/models/operations/v2listtriggersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## v2ListTriggersOccurrences

List triggers occurrences

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.v2ListTriggersOccurrences({
    triggerID: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.V2ListTriggersOccurrencesRequest](../../sdk/models/operations/v2listtriggersoccurrencesrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.V2ListTriggersOccurrencesResponse](../../sdk/models/operations/v2listtriggersoccurrencesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## v2ListWorkflows

List registered workflows

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.v2ListWorkflows();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.V2ListWorkflowsResponse](../../sdk/models/operations/v2listworkflowsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## v2ReadTrigger

Read trigger

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.v2ReadTrigger({
    triggerID: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.V2ReadTriggerRequest](../../sdk/models/operations/v2readtriggerrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.V2ReadTriggerResponse](../../sdk/models/operations/v2readtriggerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## v2RunWorkflow

Run workflow

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.v2RunWorkflow({
    requestBody: {
      "key": "string",
    },
    workflowID: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.V2RunWorkflowRequest](../../sdk/models/operations/v2runworkflowrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.V2RunWorkflowResponse](../../sdk/models/operations/v2runworkflowresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## v2SendEvent

Send an event to a running workflow

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.orchestration.v2SendEvent({
    requestBody: {
      name: "string",
    },
    instanceID: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.V2SendEventRequest](../../sdk/models/operations/v2sendeventrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.V2SendEventResponse](../../sdk/models/operations/v2sendeventresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
