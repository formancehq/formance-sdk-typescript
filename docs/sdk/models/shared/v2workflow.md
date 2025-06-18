# V2Workflow

## Example Usage

```typescript
import { V2Workflow } from "@formance/formance-sdk/sdk/models/shared";

let value: V2Workflow = {
  config: {
    stages: [
      {
        "key": "<value>",
      },
      {},
    ],
  },
  createdAt: new Date("2025-03-28T23:58:29.371Z"),
  id: "<id>",
  updatedAt: new Date("2024-02-05T04:29:43.512Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `config`                                                                                      | [shared.V2WorkflowConfig](../../../sdk/models/shared/v2workflowconfig.md)                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |