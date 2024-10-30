# CreateWorkflowResponse

## Example Usage

```typescript
import { CreateWorkflowResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: CreateWorkflowResponse = {
  data: {
    config: {
      stages: [
        {
          "key": "<value>",
        },
      ],
    },
    createdAt: new Date("2023-08-13T14:07:32.789Z"),
    id: "<id>",
    updatedAt: new Date("2024-10-24T16:17:24.086Z"),
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `data`                                                    | [shared.Workflow](../../../sdk/models/shared/workflow.md) | :heavy_check_mark:                                        | N/A                                                       |