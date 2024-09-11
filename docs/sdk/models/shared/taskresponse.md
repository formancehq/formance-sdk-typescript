# TaskResponse

## Example Usage

```typescript
import { PaymentStatus, TaskResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskResponse = {
  data: {
    connectorID: "<value>",
    createdAt: new Date("2023-10-16T06:53:36.471Z"),
    descriptor: {},
    id: "b8f759ea-c55a-4974-9d31-1352965bb8a7",
    state: {},
    status: PaymentStatus.Succeeded,
    updatedAt: new Date("2022-01-01T14:21:40.383Z"),
  },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `data`                    | *shared.TaskResponseData* | :heavy_check_mark:        | N/A                       |