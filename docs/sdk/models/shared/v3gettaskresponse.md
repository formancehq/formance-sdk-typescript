# V3GetTaskResponse

## Example Usage

```typescript
import { V3GetTaskResponse, V3TaskStatusEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3GetTaskResponse = {
  data: {
    createdAt: new Date("2024-09-06T07:42:18.122Z"),
    id: "<id>",
    status: V3TaskStatusEnum.Succeeded,
    updatedAt: new Date("2023-08-09T13:08:06.938Z"),
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `data`                                                | [shared.V3Task](../../../sdk/models/shared/v3task.md) | :heavy_check_mark:                                    | N/A                                                   |