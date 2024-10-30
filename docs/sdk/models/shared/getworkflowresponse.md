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
    createdAt: new Date("2024-03-10T15:41:52.150Z"),
    id: "<id>",
    updatedAt: new Date("2023-10-30T13:36:21.210Z"),
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `data`                                                    | [shared.Workflow](../../../sdk/models/shared/workflow.md) | :heavy_check_mark:                                        | N/A                                                       |