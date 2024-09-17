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
    createdAt: new Date("2023-10-07T00:13:15.043Z"),
    id: "<id>",
    updatedAt: new Date("2022-01-11T14:50:15.791Z"),
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `data`                                                    | [shared.Workflow](../../../sdk/models/shared/workflow.md) | :heavy_check_mark:                                        | N/A                                                       |