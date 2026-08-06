# Reconciliation.V1

## Overview

### Available Operations

* [acceptAlert](#acceptalert) - Accept an alert (accepted_by_business)
* [ackAlert](#ackalert) - Acknowledge an alert
* [createPolicy](#createpolicy) - Create a policy
* [createRule](#createrule) - Create a rule
* [deletePolicy](#deletepolicy) - Delete a policy
* [deleteRule](#deleterule) - Delete a rule (cascades to evaluations + alerts + alert events)
* [evaluateRule](#evaluaterule) - Evaluate a rule now
* [getAlert](#getalert) - Get an alert
* [getEvaluation](#getevaluation) - Get an evaluation
* [getPolicy](#getpolicy) - Get a policy
* [getReconciliation](#getreconciliation) - Get a reconciliation
* [getRule](#getrule) - Get a rule
* [getServerInfoReconciliation](#getserverinforeconciliation) - Get server info
* [listAlertEvents](#listalertevents) - List alert events (append-only timeline)
* [listAlerts](#listalerts) - List alerts
* [listEvaluations](#listevaluations) - List evaluations
* [listPolicies](#listpolicies) - List policies
* [listReconciliations](#listreconciliations) - List reconciliations
* [listRules](#listrules) - List rules
* [patchRule](#patchrule) - Patch a rule (partial update)
* [reconcile](#reconcile) - Reconcile using a policy
* [resolveAlert](#resolvealert) - Resolve an alert (fixed_by_booking)
* [snoozeAlert](#snoozealert) - Snooze an alert's notifications until a future instant
* [unsnoozeAlert](#unsnoozealert) - Lift a snooze early

## acceptAlert

Accept an alert (accepted_by_business)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="acceptAlert" method="post" path="/api/reconciliation/alerts/{alertID}/accept" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.acceptAlert({
    acceptAlertRequest: {
      by: "<value>",
      note: "<value>",
    },
    alertID: "5550ef95-072d-4bbb-9d3b-6a9dd307b2bd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1AcceptAlert } from "@formance/formance-sdk/funcs/reconciliationV1AcceptAlert.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1AcceptAlert(sdk, {
    acceptAlertRequest: {
      by: "<value>",
      note: "<value>",
    },
    alertID: "5550ef95-072d-4bbb-9d3b-6a9dd307b2bd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1AcceptAlert failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AcceptAlertRequest](../../sdk/models/operations/acceptalertrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AcceptAlertResponse](../../sdk/models/operations/acceptalertresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## ackAlert

Acknowledge an alert

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ackAlert" method="post" path="/api/reconciliation/alerts/{alertID}/ack" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.ackAlert({
    ackAlertRequest: {
      by: "ops@buildr.com",
    },
    alertID: "5439ab64-6482-49fb-993f-3411bfe19fef",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1AckAlert } from "@formance/formance-sdk/funcs/reconciliationV1AckAlert.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1AckAlert(sdk, {
    ackAlertRequest: {
      by: "ops@buildr.com",
    },
    alertID: "5439ab64-6482-49fb-993f-3411bfe19fef",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1AckAlert failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AckAlertRequest](../../sdk/models/operations/ackalertrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AckAlertResponse](../../sdk/models/operations/ackalertresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## createPolicy

Create a policy

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createPolicy" method="post" path="/api/reconciliation/policies" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.createPolicy({
    ledgerName: "default",
    ledgerQuery: {
      "key": "<value>",
    },
    name: "XXX",
    paymentsPoolID: "XXX",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1CreatePolicy } from "@formance/formance-sdk/funcs/reconciliationV1CreatePolicy.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1CreatePolicy(sdk, {
    ledgerName: "default",
    ledgerQuery: {
      "key": "<value>",
    },
    name: "XXX",
    paymentsPoolID: "XXX",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1CreatePolicy failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [reconciliation.PolicyRequest](../../sdk/models/reconciliation/policyrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreatePolicyResponse](../../sdk/models/operations/createpolicyresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## createRule

Create a rule

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createRule" method="post" path="/api/reconciliation/rules" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.createRule({
    name: "<value>",
    schedule: {
      expr: "*/15 * * * *",
      kind: "on_demand",
      safetyMargin: "30s",
      tz: "UTC",
    },
    templateKind: "ledger_vs_pool_drift",
    templateSpec: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1CreateRule } from "@formance/formance-sdk/funcs/reconciliationV1CreateRule.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1CreateRule(sdk, {
    name: "<value>",
    schedule: {
      expr: "*/15 * * * *",
      kind: "on_demand",
      safetyMargin: "30s",
      tz: "UTC",
    },
    templateKind: "ledger_vs_pool_drift",
    templateSpec: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1CreateRule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [reconciliation.RuleRequest](../../sdk/models/reconciliation/rulerequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateRuleResponse](../../sdk/models/operations/createruleresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## deletePolicy

Delete a policy by its id.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deletePolicy" method="delete" path="/api/reconciliation/policies/{policyID}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.deletePolicy({
    policyID: "XXX",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1DeletePolicy } from "@formance/formance-sdk/funcs/reconciliationV1DeletePolicy.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1DeletePolicy(sdk, {
    policyID: "XXX",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1DeletePolicy failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeletePolicyRequest](../../sdk/models/operations/deletepolicyrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeletePolicyResponse](../../sdk/models/operations/deletepolicyresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## deleteRule

Delete a rule (cascades to evaluations + alerts + alert events)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteRule" method="delete" path="/api/reconciliation/rules/{ruleID}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.deleteRule({
    ruleID: "3254b217-2184-4bf4-bbc8-b529fa29bd7c",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1DeleteRule } from "@formance/formance-sdk/funcs/reconciliationV1DeleteRule.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1DeleteRule(sdk, {
    ruleID: "3254b217-2184-4bf4-bbc8-b529fa29bd7c",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1DeleteRule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteRuleRequest](../../sdk/models/operations/deleterulerequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteRuleResponse](../../sdk/models/operations/deleteruleresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## evaluateRule

Evaluate a rule now

### Example Usage

<!-- UsageSnippet language="typescript" operationID="evaluateRule" method="post" path="/api/reconciliation/rules/{ruleID}/evaluate" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.evaluateRule({
    evaluateRuleRequest: {
      safetyMargin: "30s",
      sourcePITs: {
        "ledger:main#0": new Date("2026-06-30T23:59:59Z"),
        "pool:acct#0": new Date("2026-06-30T23:00:00Z"),
      },
    },
    ruleID: "e9d27cb2-b7fc-4383-b319-936c01a66703",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1EvaluateRule } from "@formance/formance-sdk/funcs/reconciliationV1EvaluateRule.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1EvaluateRule(sdk, {
    evaluateRuleRequest: {
      safetyMargin: "30s",
      sourcePITs: {
        "ledger:main#0": new Date("2026-06-30T23:59:59Z"),
        "pool:acct#0": new Date("2026-06-30T23:00:00Z"),
      },
    },
    ruleID: "e9d27cb2-b7fc-4383-b319-936c01a66703",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1EvaluateRule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EvaluateRuleRequest](../../sdk/models/operations/evaluaterulerequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EvaluateRuleResponse](../../sdk/models/operations/evaluateruleresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getAlert

Get an alert

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAlert" method="get" path="/api/reconciliation/alerts/{alertID}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.getAlert({
    alertID: "c7c54af9-81a4-4208-844b-4f25f89cf8a1",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1GetAlert } from "@formance/formance-sdk/funcs/reconciliationV1GetAlert.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1GetAlert(sdk, {
    alertID: "c7c54af9-81a4-4208-844b-4f25f89cf8a1",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1GetAlert failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAlertRequest](../../sdk/models/operations/getalertrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAlertResponse](../../sdk/models/operations/getalertresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getEvaluation

Get an evaluation

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getEvaluation" method="get" path="/api/reconciliation/evaluations/{evaluationID}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.getEvaluation({
    evaluationID: "121717d3-a7d1-444d-9d11-6ea2dc0d3db5",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1GetEvaluation } from "@formance/formance-sdk/funcs/reconciliationV1GetEvaluation.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1GetEvaluation(sdk, {
    evaluationID: "121717d3-a7d1-444d-9d11-6ea2dc0d3db5",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1GetEvaluation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEvaluationRequest](../../sdk/models/operations/getevaluationrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetEvaluationResponse](../../sdk/models/operations/getevaluationresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getPolicy

Get a policy

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPolicy" method="get" path="/api/reconciliation/policies/{policyID}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.getPolicy({
    policyID: "XXX",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1GetPolicy } from "@formance/formance-sdk/funcs/reconciliationV1GetPolicy.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1GetPolicy(sdk, {
    policyID: "XXX",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1GetPolicy failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPolicyRequest](../../sdk/models/operations/getpolicyrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPolicyResponse](../../sdk/models/operations/getpolicyresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getReconciliation

Get a reconciliation

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getReconciliation" method="get" path="/api/reconciliation/reconciliations/{reconciliationID}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.getReconciliation({
    reconciliationID: "XXX",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1GetReconciliation } from "@formance/formance-sdk/funcs/reconciliationV1GetReconciliation.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1GetReconciliation(sdk, {
    reconciliationID: "XXX",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1GetReconciliation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetReconciliationRequest](../../sdk/models/operations/getreconciliationrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetReconciliationResponse](../../sdk/models/operations/getreconciliationresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getRule

Get a rule

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRule" method="get" path="/api/reconciliation/rules/{ruleID}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.getRule({
    ruleID: "fd71d712-041d-4271-b7c5-c9adac177f52",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1GetRule } from "@formance/formance-sdk/funcs/reconciliationV1GetRule.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1GetRule(sdk, {
    ruleID: "fd71d712-041d-4271-b7c5-c9adac177f52",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1GetRule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRuleRequest](../../sdk/models/operations/getrulerequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetRuleResponse](../../sdk/models/operations/getruleresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getServerInfoReconciliation

Get server info

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getServerInfo_reconciliation" method="get" path="/api/reconciliation/_info" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.getServerInfoReconciliation();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1GetServerInfoReconciliation } from "@formance/formance-sdk/funcs/reconciliationV1GetServerInfoReconciliation.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1GetServerInfoReconciliation(sdk);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1GetServerInfoReconciliation failed:", res.error);
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

**Promise\<[operations.GetServerInfoReconciliationResponse](../../sdk/models/operations/getserverinforeconciliationresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listAlertEvents

Returns a page of the events recorded for this alert — every evaluation
that touched it plus every manual transition. The list is append-only;
events are never modified or deleted. Ordered most-recent-first and
cursor-paginated: a long-lived alert's timeline is unbounded (one row per
failing evaluation), so callers must page through it.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAlertEvents" method="get" path="/api/reconciliation/alerts/{alertID}/events" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.listAlertEvents({
    alertID: "259536e6-acd5-4e38-9154-10e46ea2bc63",
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    pageSize: 100,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1ListAlertEvents } from "@formance/formance-sdk/funcs/reconciliationV1ListAlertEvents.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1ListAlertEvents(sdk, {
    alertID: "259536e6-acd5-4e38-9154-10e46ea2bc63",
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    pageSize: 100,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1ListAlertEvents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAlertEventsRequest](../../sdk/models/operations/listalerteventsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAlertEventsResponse](../../sdk/models/operations/listalerteventsresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listAlerts

List alerts

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAlerts" method="get" path="/api/reconciliation/alerts" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.listAlerts({
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    pageSize: 100,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1ListAlerts } from "@formance/formance-sdk/funcs/reconciliationV1ListAlerts.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1ListAlerts(sdk, {
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    pageSize: 100,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1ListAlerts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAlertsRequest](../../sdk/models/operations/listalertsrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAlertsResponse](../../sdk/models/operations/listalertsresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listEvaluations

List evaluations

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listEvaluations" method="get" path="/api/reconciliation/evaluations" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.listEvaluations({
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    pageSize: 100,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1ListEvaluations } from "@formance/formance-sdk/funcs/reconciliationV1ListEvaluations.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1ListEvaluations(sdk, {
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    pageSize: 100,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1ListEvaluations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListEvaluationsRequest](../../sdk/models/operations/listevaluationsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListEvaluationsResponse](../../sdk/models/operations/listevaluationsresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listPolicies

List policies

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPolicies" method="get" path="/api/reconciliation/policies" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.listPolicies({
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    pageSize: 100,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1ListPolicies } from "@formance/formance-sdk/funcs/reconciliationV1ListPolicies.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1ListPolicies(sdk, {
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    pageSize: 100,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1ListPolicies failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPoliciesRequest](../../sdk/models/operations/listpoliciesrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPoliciesResponse](../../sdk/models/operations/listpoliciesresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listReconciliations

List reconciliations

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listReconciliations" method="get" path="/api/reconciliation/reconciliations" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.listReconciliations({
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    pageSize: 100,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1ListReconciliations } from "@formance/formance-sdk/funcs/reconciliationV1ListReconciliations.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1ListReconciliations(sdk, {
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    pageSize: 100,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1ListReconciliations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListReconciliationsRequest](../../sdk/models/operations/listreconciliationsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListReconciliationsResponse](../../sdk/models/operations/listreconciliationsresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listRules

List rules

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listRules" method="get" path="/api/reconciliation/rules" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.listRules({
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    pageSize: 100,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1ListRules } from "@formance/formance-sdk/funcs/reconciliationV1ListRules.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1ListRules(sdk, {
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    pageSize: 100,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1ListRules failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListRulesRequest](../../sdk/models/operations/listrulesrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListRulesResponse](../../sdk/models/operations/listrulesresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## patchRule

Patch a rule (partial update)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchRule" method="patch" path="/api/reconciliation/rules/{ruleID}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.patchRule({
    rulePatchRequest: {
      schedule: {
        expr: "*/15 * * * *",
        kind: "cron",
        safetyMargin: "30s",
        tz: "UTC",
      },
    },
    ruleID: "0b4aa7b1-cc5d-4700-91ec-4983510fef86",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1PatchRule } from "@formance/formance-sdk/funcs/reconciliationV1PatchRule.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1PatchRule(sdk, {
    rulePatchRequest: {
      schedule: {
        expr: "*/15 * * * *",
        kind: "cron",
        safetyMargin: "30s",
        tz: "UTC",
      },
    },
    ruleID: "0b4aa7b1-cc5d-4700-91ec-4983510fef86",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1PatchRule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchRuleRequest](../../sdk/models/operations/patchrulerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchRuleResponse](../../sdk/models/operations/patchruleresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## reconcile

Reconcile using a policy

### Example Usage

<!-- UsageSnippet language="typescript" operationID="reconcile" method="post" path="/api/reconciliation/policies/{policyID}/reconciliation" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.reconcile({
    reconciliationRequest: {
      reconciledAtLedger: new Date("2021-01-01T00:00:00.000Z"),
      reconciledAtPayments: new Date("2021-01-01T00:00:00.000Z"),
    },
    policyID: "XXX",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1Reconcile } from "@formance/formance-sdk/funcs/reconciliationV1Reconcile.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1Reconcile(sdk, {
    reconciliationRequest: {
      reconciledAtLedger: new Date("2021-01-01T00:00:00.000Z"),
      reconciledAtPayments: new Date("2021-01-01T00:00:00.000Z"),
    },
    policyID: "XXX",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1Reconcile failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ReconcileRequest](../../sdk/models/operations/reconcilerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ReconcileResponse](../../sdk/models/operations/reconcileresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## resolveAlert

Resolve an alert (fixed_by_booking)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="resolveAlert" method="post" path="/api/reconciliation/alerts/{alertID}/resolve" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.resolveAlert({
    resolveAlertRequest: {
      by: "<value>",
    },
    alertID: "53527ec3-b39f-4eee-ac1d-6e2bad87f240",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1ResolveAlert } from "@formance/formance-sdk/funcs/reconciliationV1ResolveAlert.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1ResolveAlert(sdk, {
    resolveAlertRequest: {
      by: "<value>",
    },
    alertID: "53527ec3-b39f-4eee-ac1d-6e2bad87f240",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1ResolveAlert failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ResolveAlertRequest](../../sdk/models/operations/resolvealertrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ResolveAlertResponse](../../sdk/models/operations/resolvealertresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## snoozeAlert

Mutes the alert's webhook notifications until `until`. The alert keeps
failing, keeps its status, and keeps counting against period-green —
only its notifications are suppressed, even if the discrepancy changes.
The first failing evaluation at or after `until` clears the snooze and
notifies once. Re-snoozing overwrites the window. Rejects RESOLVED
alerts and a non-future `until`.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="snoozeAlert" method="post" path="/api/reconciliation/alerts/{alertID}/snooze" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.snoozeAlert({
    snoozeAlertRequest: {
      by: "ops@buildr.com",
      until: new Date("2026-07-17T12:27:27.142Z"),
    },
    alertID: "96529a25-9005-499e-a0ec-daa0ae32f4cb",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1SnoozeAlert } from "@formance/formance-sdk/funcs/reconciliationV1SnoozeAlert.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1SnoozeAlert(sdk, {
    snoozeAlertRequest: {
      by: "ops@buildr.com",
      until: new Date("2026-07-17T12:27:27.142Z"),
    },
    alertID: "96529a25-9005-499e-a0ec-daa0ae32f4cb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1SnoozeAlert failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SnoozeAlertRequest](../../sdk/models/operations/snoozealertrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SnoozeAlertResponse](../../sdk/models/operations/snoozealertresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## unsnoozeAlert

Clears an active snooze before its window elapses. Idempotent —
unsnoozing an alert that is not snoozed returns it unchanged.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="unsnoozeAlert" method="post" path="/api/reconciliation/alerts/{alertID}/unsnooze" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.reconciliation.v1.unsnoozeAlert({
    unsnoozeAlertRequest: {
      by: "ops@buildr.com",
    },
    alertID: "a1f12fdd-d9de-483a-b3c6-41ec79a76231",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { reconciliationV1UnsnoozeAlert } from "@formance/formance-sdk/funcs/reconciliationV1UnsnoozeAlert.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await reconciliationV1UnsnoozeAlert(sdk, {
    unsnoozeAlertRequest: {
      by: "ops@buildr.com",
    },
    alertID: "a1f12fdd-d9de-483a-b3c6-41ec79a76231",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reconciliationV1UnsnoozeAlert failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UnsnoozeAlertRequest](../../sdk/models/operations/unsnoozealertrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UnsnoozeAlertResponse](../../sdk/models/operations/unsnoozealertresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| reconciliation.ErrorsErrorResponse | default                            | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |