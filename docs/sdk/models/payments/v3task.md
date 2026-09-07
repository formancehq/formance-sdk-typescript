# V3Task

An asynchronous unit of work, tracking an operation that completes in the background

## Example Usage

```typescript
import { V3Task } from "@formance/formance-sdk/sdk/models/payments";

let value: V3Task = {
  createdAt: new Date("2024-07-20T21:21:34.912Z"),
  id: "<id>",
  status: "FAILED",
  updatedAt: new Date("2026-10-24T17:33:09.488Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Identifier of the connector the task runs against                                             |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the task was created                                                                     |
| `createdObjectID`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | Identifier of the object the task created, once it has succeeded                              |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Why the task failed, absent when it succeeded                                                 |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the task                                                                 |
| `status`                                                                                      | [payments.V3TaskStatusEnum](../../../sdk/models/payments/v3taskstatusenum.md)                 | :heavy_check_mark:                                                                            | Where a task stands, from processing through to succeeded or failed                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the task was last updated                                                                |