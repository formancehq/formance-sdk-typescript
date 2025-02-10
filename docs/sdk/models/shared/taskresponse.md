# TaskResponse

OK

## Example Usage

```typescript
import { TaskResponse, TaskStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskResponse = {
  data: {
    connectorID: "<id>",
    createdAt: new Date("2024-11-21T01:28:47.404Z"),
    descriptor: {},
    id: "cdd2d039-1946-4518-8f94-f6bafe21ce7b",
    status: TaskStatus.Active,
    updatedAt: new Date("2023-06-13T17:11:29.127Z"),
  },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `data`                    | *shared.TaskResponseData* | :heavy_check_mark:        | N/A                       |