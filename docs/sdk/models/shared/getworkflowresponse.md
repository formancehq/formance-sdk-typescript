# GetWorkflowResponse

## Example Usage

```typescript
import { GetWorkflowResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetWorkflowResponse = {
  data: {
    config: {
      stages: [
        {
          "key": "<value>",
        },
      ],
    },
    createdAt: new Date("2023-05-21T07:27:53.872Z"),
    id: "<id>",
    updatedAt: new Date("2024-10-21T22:27:43.595Z"),
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `data`                                                    | [shared.Workflow](../../../sdk/models/shared/workflow.md) | :heavy_check_mark:                                        | N/A                                                       |