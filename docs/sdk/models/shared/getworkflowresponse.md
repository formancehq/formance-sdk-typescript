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
    createdAt: new Date("2022-10-26T20:39:23.963Z"),
    id: "<id>",
    updatedAt: new Date("2023-08-19T20:54:27.128Z"),
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `data`                                                    | [shared.Workflow](../../../sdk/models/shared/workflow.md) | :heavy_check_mark:                                        | N/A                                                       |