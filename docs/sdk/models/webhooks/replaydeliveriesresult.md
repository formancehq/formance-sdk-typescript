# ReplayDeliveriesResult

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
| `createdAtTo`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `expedited`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `hasMore`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nextCursor`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `replayed`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `skipped`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |