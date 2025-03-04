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
      ],
    },
    createdAt: new Date("2025-01-31T07:02:42.733Z"),
    id: "<id>",
    updatedAt: new Date("2023-02-17T10:11:30.743Z"),
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `data`                                                        | [shared.V2Workflow](../../../sdk/models/shared/v2workflow.md) | :heavy_check_mark:                                            | N/A                                                           |