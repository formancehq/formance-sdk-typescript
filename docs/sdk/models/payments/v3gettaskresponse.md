# V3GetTaskResponse

## Example Usage

```typescript
import { V3GetTaskResponse, V3TaskStatusEnum } from "@formance/formance-sdk/sdk/models/payments";

let value: V3GetTaskResponse = {
  v3Task: {
    v3TaskStatusEnum: V3TaskStatusEnum.Succeeded,
    createdAt: new Date("2024-06-02T17:40:37.509Z"),
    id: "<id>",
    updatedAt: new Date("2026-04-03T04:28:43.868Z"),
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `v3Task`                                                  | [payments.V3Task](../../../sdk/models/payments/v3task.md) | :heavy_check_mark:                                        | N/A                                                       |