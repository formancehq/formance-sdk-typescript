# TaskResponse

OK

## Example Usage

```typescript
import { PaymentStatus, TaskResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskResponse = {
  data: {
    connectorID: "<id>",
    createdAt: new Date("2025-03-24T12:42:40.886Z"),
    descriptor: {},
    id: "020d92cf-ee09-4495-8277-f04dadac73c9",
    state: {},
    status: PaymentStatus.DisputeWon,
    updatedAt: new Date("2025-11-16T14:38:37.631Z"),
  },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `data`                    | *shared.TaskResponseData* | :heavy_check_mark:        | N/A                       |