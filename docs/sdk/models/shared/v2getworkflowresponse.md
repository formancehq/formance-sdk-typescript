# V2GetWorkflowResponse

## Example Usage

```typescript
import { V2GetWorkflowResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2GetWorkflowResponse = {
  data: {
    config: {
      stages: [
        {
          "key": "<value>",
        },
        {},
      ],
    },
    createdAt: new Date("2024-12-15T04:22:54.021Z"),
    id: "<id>",
    updatedAt: new Date("2024-02-08T04:15:31.810Z"),
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `data`                                                        | [shared.V2Workflow](../../../sdk/models/shared/v2workflow.md) | :heavy_check_mark:                                            | N/A                                                           |