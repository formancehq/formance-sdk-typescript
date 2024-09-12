# Workflow

## Example Usage

```typescript
import { Workflow } from "@formance/formance-sdk/sdk/models/shared";

let value: Workflow = {
  config: {
    stages: [
      {
        "key": "<value>",
      },
    ],
  },
  createdAt: new Date("2024-09-17T19:59:01.544Z"),
  id: "<id>",
  updatedAt: new Date("2023-04-13T05:32:59.331Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `config`                                                                                      | [shared.WorkflowConfig](../../../sdk/models/shared/workflowconfig.md)                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |