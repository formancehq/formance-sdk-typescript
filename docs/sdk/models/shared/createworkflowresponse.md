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
    createdAt: new Date("2024-08-15T10:02:19.627Z"),
    id: "<id>",
    updatedAt: new Date("2023-06-24T02:43:59.746Z"),
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `data`                                                    | [shared.Workflow](../../../sdk/models/shared/workflow.md) | :heavy_check_mark:                                        | N/A                                                       |