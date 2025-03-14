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
    createdAt: new Date("2024-12-06T16:11:58.639Z"),
    id: "<id>",
    updatedAt: new Date("2024-07-03T22:38:25.548Z"),
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `data`                                                        | [shared.V2Workflow](../../../sdk/models/shared/v2workflow.md) | :heavy_check_mark:                                            | N/A                                                           |