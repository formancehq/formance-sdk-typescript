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
    createdAt: new Date("2024-09-17T19:59:01.544Z"),
    id: "<id>",
    updatedAt: new Date("2023-04-13T05:32:59.331Z"),
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `data`                                                    | [shared.Workflow](../../../sdk/models/shared/workflow.md) | :heavy_check_mark:                                        | N/A                                                       |