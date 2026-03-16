# V3PaymentServiceUserConnection

## Example Usage

```typescript
import { V3ConnectionStatusEnum, V3PaymentServiceUserConnection } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentServiceUserConnection = {
  connectionID: "<id>",
  connectorID: "<id>",
  createdAt: new Date("2026-04-22T04:11:40.625Z"),
  dataUpdatedAt: new Date("2026-09-06T06:30:52.852Z"),
  status: V3ConnectionStatusEnum.Error,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connectionID`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dataUpdatedAt`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.V3ConnectionStatusEnum](../../../sdk/models/shared/v3connectionstatusenum.md)         | :heavy_check_mark:                                                                            | N/A                                                                                           |