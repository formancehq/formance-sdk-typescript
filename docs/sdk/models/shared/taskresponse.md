# TaskResponse

## Example Usage

```typescript
import { PaymentStatus, TaskResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskResponse = {
  data: {
    connectorID: "<value>",
    createdAt: new Date("2023-01-09T07:15:52.390Z"),
    descriptor: {},
    id: "2cbfd817-584d-4d59-96e2-bf23bc793715",
    state: {},
    status: PaymentStatus.Expired,
    updatedAt: new Date("2024-10-16T10:02:37.797Z"),
  },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `data`                    | *shared.TaskResponseData* | :heavy_check_mark:        | N/A                       |