# V3GetTaskResponse

## Example Usage

```typescript
import { V3GetTaskResponse, V3TaskStatusEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3GetTaskResponse = {
  data: {
    createdAt: new Date("2025-08-16T09:25:12.558Z"),
    id: "<id>",
    status: V3TaskStatusEnum.Processing,
    updatedAt: new Date("2025-11-11T12:54:59.231Z"),
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `data`                                                | [shared.V3Task](../../../sdk/models/shared/v3task.md) | :heavy_check_mark:                                    | N/A                                                   |