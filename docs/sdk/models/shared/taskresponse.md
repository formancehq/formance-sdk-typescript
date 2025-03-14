# TaskResponse

OK

## Example Usage

```typescript
import { TaskResponse, TaskStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskResponse = {
  data: {
    connectorID: "<id>",
    createdAt: new Date("2024-07-06T01:15:14.096Z"),
    descriptor: {},
    id: "0c8174e4-f85d-4b6a-bcdd-2d0391946518",
    status: TaskStatus.Terminated,
    updatedAt: new Date("2023-11-25T20:02:18.063Z"),
  },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `data`                    | *shared.TaskResponseData* | :heavy_check_mark:        | N/A                       |