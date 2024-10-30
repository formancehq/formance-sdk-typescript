# TaskResponse

OK

## Example Usage

```typescript
import { PaymentStatus, TaskResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskResponse = {
  data: {
    connectorID: "<id>",
    createdAt: new Date("2022-01-29T05:00:23.216Z"),
    descriptor: {},
    id: "c8174e4f-85db-46ac-add2-d0391946518f",
    state: {},
    status: PaymentStatus.Failed,
    updatedAt: new Date("2024-11-13T22:33:54.853Z"),
  },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `data`                    | *shared.TaskResponseData* | :heavy_check_mark:        | N/A                       |