# TaskResponse

## Example Usage

```typescript
import { PaymentStatus, TaskResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskResponse = {
  data: {
    connectorID: "<value>",
    createdAt: new Date("2022-09-11T06:04:00.033Z"),
    descriptor: {},
    id: "383c2beb-4773-473c-8d72-f64d1db1f2c4",
    state: {},
    status: PaymentStatus.Cancelled,
    updatedAt: new Date("2022-03-24T14:14:41.960Z"),
  },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `data`                    | *shared.TaskResponseData* | :heavy_check_mark:        | N/A                       |