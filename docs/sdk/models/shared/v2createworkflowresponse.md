# V2CreateWorkflowResponse

## Example Usage

```typescript
import { V2CreateWorkflowResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2CreateWorkflowResponse = {
  data: {
    config: {
      stages: [
        {
          "key": "<value>",
        },
      ],
    },
    createdAt: new Date("2023-11-09T02:50:43.300Z"),
    id: "<id>",
    updatedAt: new Date("2024-05-02T07:25:31.700Z"),
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `data`                                                        | [shared.V2Workflow](../../../sdk/models/shared/v2workflow.md) | :heavy_check_mark:                                            | N/A                                                           |