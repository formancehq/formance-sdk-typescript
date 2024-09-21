# TaskResponse

## Example Usage

```typescript
import { PaymentStatus, TaskResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskResponse = {
  data: {
    connectorID: "<value>",
    createdAt: new Date("2022-05-10T08:24:22.560Z"),
    descriptor: {},
    id: "2d4ad9fb-18bc-40bd-ab87-8be9eb184455",
    state: {},
    status: PaymentStatus.Dispute,
    updatedAt: new Date("2022-10-22T13:11:01.959Z"),
  },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `data`                    | *shared.TaskResponseData* | :heavy_check_mark:        | N/A                       |