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
| `configIds`                                                                                   | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Restrict the replay to deliveries targeting these webhook configurations                      |
| `createdAtFrom`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Replay deliveries created at or after this time                                               |
| `createdAtTo`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Replay deliveries created at or before this time. Defaults to now when omitted                |
| `cursor`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Pagination cursor from a previous replay response, used to continue a large replay            |
| `pageSize`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | Maximum number of deliveries to process in this call                                          |
| `statuses`                                                                                    | [webhooks.Status](../../../sdk/models/webhooks/status.md)[]                                   | :heavy_minus_sign:                                                                            | Restrict the replay to deliveries in these statuses                                           |