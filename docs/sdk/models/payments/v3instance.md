# V3Instance

## Example Usage

```typescript
import { V3Instance } from "@formance/formance-sdk/sdk/models/payments";

let value: V3Instance = {
  connectorID: "<value>",
  createdAt: new Date("2024-05-29T12:43:25.924Z"),
  id: "<id>",
  scheduleID: "<id>",
  terminated: false,
  updatedAt: new Date("2024-04-27T17:49:57.637Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the connector this run belongs to                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the run started                                                                          |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Why the run failed, absent when it succeeded                                                  |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the run                                                                  |
| `scheduleID`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the schedule that started this run                                              |
| `terminated`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the run has finished, successfully or not                                             |
| `terminatedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the run finished, absent while it is still running                                       |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the run was last updated                                                                 |