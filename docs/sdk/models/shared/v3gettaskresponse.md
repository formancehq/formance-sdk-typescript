# V3GetTaskResponse

## Example Usage

```typescript
import { V3GetTaskResponse, V3TaskStatusEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3GetTaskResponse = {
  data: {
    createdAt: new Date("2025-01-17T13:38:13.412Z"),
    id: "<id>",
    status: V3TaskStatusEnum.Processing,
    updatedAt: new Date("2026-04-03T04:28:43.868Z"),
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `data`                                                | [shared.V3Task](../../../sdk/models/shared/v3task.md) | :heavy_check_mark:                                    | N/A                                                   |