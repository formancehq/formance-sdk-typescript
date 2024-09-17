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
    createdAt: new Date("2023-09-04T15:20:39.639Z"),
    id: "<id>",
    updatedAt: new Date("2024-10-07T15:13:11.770Z"),
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `data`                                                        | [shared.V2Workflow](../../../sdk/models/shared/v2workflow.md) | :heavy_check_mark:                                            | N/A                                                           |