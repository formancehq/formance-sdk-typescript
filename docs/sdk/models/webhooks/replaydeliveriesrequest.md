# ReplayDeliveriesRequest

## Example Usage

```typescript
import { ReplayDeliveriesRequest } from "@formance/formance-sdk/sdk/models/webhooks";

let value: ReplayDeliveriesRequest = {
  createdAtFrom: new Date("2026-03-24T09:54:13.168Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `configIds`                                                                                   | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAtFrom`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAtTo`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `cursor`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `pageSize`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `statuses`                                                                                    | [webhooks.Status](../../../sdk/models/webhooks/status.md)[]                                   | :heavy_minus_sign:                                                                            | N/A                                                                                           |