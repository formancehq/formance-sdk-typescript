# TaskResponse

## Example Usage

```typescript
import { PaymentStatus, TaskResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskResponse = {
  data: {
    connectorID: "<value>",
    createdAt: new Date("2024-03-01T06:19:32.936Z"),
    descriptor: {},
    id: "4bb5659e-2e0a-46cb-87a8-c78494922664",
    state: {},
    status: PaymentStatus.Pending,
    updatedAt: new Date("2022-01-28T15:41:52.745Z"),
  },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `data`                    | *shared.TaskResponseData* | :heavy_check_mark:        | N/A                       |