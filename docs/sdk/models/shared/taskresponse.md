# TaskResponse

## Example Usage

```typescript
import { PaymentStatus, TaskResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskResponse = {
    data: {
        connectorID: "<value>",
        createdAt: new Date("2022-01-28T03:06:17.946Z"),
        descriptor: {},
        id: "00ae6b6b-c9b8-4f75-9eac-55a9741d3113",
        state: {},
        status: PaymentStatus.Failed,
        updatedAt: new Date("2022-07-20T14:30:27.937Z"),
    },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `data`                    | *shared.TaskResponseData* | :heavy_check_mark:        | N/A                       |