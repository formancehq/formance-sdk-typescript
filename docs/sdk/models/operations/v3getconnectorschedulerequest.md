# V3GetConnectorScheduleRequest

## Example Usage

```typescript
import { V3GetConnectorScheduleRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3GetConnectorScheduleRequest = {
  connectorID: "<id>",
  scheduleID: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `connectorID`      | *string*           | :heavy_check_mark: | The connector ID   |
| `scheduleID`       | *string*           | :heavy_check_mark: | The schedule ID    |