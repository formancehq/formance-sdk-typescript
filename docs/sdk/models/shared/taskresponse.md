# TaskResponse

OK

## Example Usage

```typescript
import { TaskResponse, TaskStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskResponse = {
  data: {
    connectorID: "<id>",
    createdAt: new Date("2025-03-18T01:23:01.719Z"),
    descriptor: {},
    id: "843d5b9c-ce89-4155-98c9-f5db2d82a9a3",
    status: TaskStatus.Stopped,
    updatedAt: new Date("2026-08-30T13:05:32.300Z"),
  },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `data`                    | *shared.TaskResponseData* | :heavy_check_mark:        | N/A                       |