# TaskResponse

OK

## Example Usage

```typescript
import { TaskResponse, TaskStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskResponse = {
  data: {
    connectorID: "<id>",
    createdAt: new Date("2023-01-28T08:10:11.447Z"),
    descriptor: {},
    id: "6b3b80c8-174e-44f8-95db-6acdd2d03919",
    status: TaskStatus.Stopped,
    updatedAt: new Date("2023-12-12T09:44:42.528Z"),
  },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `data`                    | *shared.TaskResponseData* | :heavy_check_mark:        | N/A                       |