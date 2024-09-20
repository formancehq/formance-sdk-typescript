# TaskResponse

## Example Usage

```typescript
import { PaymentStatus, TaskResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskResponse = {
  data: {
    connectorID: "<value>",
    createdAt: new Date("2023-01-04T05:33:12.060Z"),
    descriptor: {},
    id: "6bcdb35f-f2e4-4b27-937a-8cd9e7319c17",
    state: {},
    status: PaymentStatus.Refunded,
    updatedAt: new Date("2024-07-25T02:38:16.388Z"),
  },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `data`                    | *shared.TaskResponseData* | :heavy_check_mark:        | N/A                       |