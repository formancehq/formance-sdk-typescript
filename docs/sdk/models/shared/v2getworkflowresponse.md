# V2GetWorkflowResponse

## Example Usage

```typescript
import { V2GetWorkflowResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2GetWorkflowResponse = {
    data: {
        config: {
            stages: [
                {
                    key: "<value>",
                },
            ],
        },
        createdAt: new Date("2023-06-28T14:00:09.683Z"),
        id: "<id>",
        updatedAt: new Date("2022-08-08T18:22:23.273Z"),
    },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `data`                                                        | [shared.V2Workflow](../../../sdk/models/shared/v2workflow.md) | :heavy_check_mark:                                            | N/A                                                           |