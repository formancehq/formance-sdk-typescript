# V2CreateWorkflowResponse

## Example Usage

```typescript
import { V2CreateWorkflowResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2CreateWorkflowResponse = {
    data: {
        config: {
            stages: [
                {
                    key: "<value>",
                },
            ],
        },
        createdAt: new Date("2023-05-21T06:19:25.029Z"),
        id: "<id>",
        updatedAt: new Date("2022-09-07T14:59:09.178Z"),
    },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `data`                                                        | [shared.V2Workflow](../../../sdk/models/shared/v2workflow.md) | :heavy_check_mark:                                            | N/A                                                           |