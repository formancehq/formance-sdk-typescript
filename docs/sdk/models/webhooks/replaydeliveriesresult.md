# ReplayDeliveriesResult

Outcome of a bulk replay, counting the deliveries it moved

## Example Usage

```typescript
import { ReplayDeliveriesResult } from "@formance/formance-sdk/sdk/models/webhooks";

let value: ReplayDeliveriesResult = {
  createdAtTo: new Date("2026-02-06T07:18:09.677Z"),
  expedited: 684871,
  hasMore: true,
  replayed: 647389,
  skipped: 601878,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAtTo`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Upper time bound actually applied, echoed so a paginated replay stays on a fixed window       |
| `expedited`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of already-pending deliveries whose next attempt was brought forward to now            |
| `hasMore`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether further deliveries match and can be processed with the returned cursor                |
| `nextCursor`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Cursor to pass to the next replay call to continue where this one stopped                     |
| `replayed`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of failed deliveries moved back to pending and scheduled for a new retry cycle         |
| `skipped`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of candidates left untouched, because their status changed before the replay applied   |