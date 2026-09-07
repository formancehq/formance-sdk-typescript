# V3Schedule

A recurring job a connector runs to fetch data from its provider

## Example Usage

```typescript
import { V3Schedule } from "@formance/formance-sdk/sdk/models/payments";

let value: V3Schedule = {
  connectorID: "<value>",
  createdAt: new Date("2025-10-15T12:12:09.859Z"),
  id: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the connector this schedule belongs to                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the schedule was created                                                                 |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the schedule                                                             |
| `pausedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the schedule was paused, absent while it is running                                      |
| `pausedReason`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Why the schedule was paused                                                                   |