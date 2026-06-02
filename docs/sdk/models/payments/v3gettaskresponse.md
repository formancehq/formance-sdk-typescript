# V3GetTaskResponse

## Example Usage

```typescript
import { V3GetTaskResponse, V3TaskStatusEnum } from "@formance/formance-sdk/sdk/models/payments";

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

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `data`                                                    | [payments.V3Task](../../../sdk/models/payments/v3task.md) | :heavy_check_mark:                                        | N/A                                                       |