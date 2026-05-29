# TaskResponse

OK

## Example Usage

```typescript
import { TaskResponse, TaskStatus } from "@formance/formance-sdk/sdk/models/payments";

let value: TaskResponse = {
  data: {
    taskStatus: TaskStatus.Pending,
    connectorID: "<id>",
    createdAt: new Date("2024-09-13T00:38:53.817Z"),
    descriptor: {
      account: "43228632",
      name: "<value>",
    },
    id: "fd64fde9-c147-4fef-aad8-fc2a4c1fe2b8",
    updatedAt: new Date("2025-08-07T08:20:37.485Z"),
  },
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `data`             | *any*              | :heavy_check_mark: | N/A                |