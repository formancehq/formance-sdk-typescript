# GetWorkflowResponse

## Example Usage

```typescript
import { GetWorkflowResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetWorkflowResponse = {
    data: {
        config: {
            stages: [
                {
                    key: "<value>",
                },
            ],
        },
        createdAt: new Date("2023-12-12T20:43:47.769Z"),
        id: "<id>",
        updatedAt: new Date("2023-01-02T00:36:43.280Z"),
    },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `data`                                                    | [shared.Workflow](../../../sdk/models/shared/workflow.md) | :heavy_check_mark:                                        | N/A                                                       |