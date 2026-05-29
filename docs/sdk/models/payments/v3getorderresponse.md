# V3GetOrderResponse

## Example Usage

```typescript
import {
  V3GetOrderResponse,
  V3OrderDirectionEnum,
  V3OrderStatusEnum,
  V3OrderTypeEnum,
  V3TimeInForceEnum,
} from "@formance/formance-sdk/sdk/models/payments";

let value: V3GetOrderResponse = {
  v3Order: {
    v3OrderDirectionEnum: V3OrderDirectionEnum.Sell,
    v3OrderStatusEnum: V3OrderStatusEnum.Expired,
    v3OrderTypeEnum: V3OrderTypeEnum.Unknown,
    v3TimeInForceEnum: V3TimeInForceEnum.GoodUntilDateTime,
    baseQuantityOrdered: 625656n,
    connectorID: "<value>",
    createdAt: new Date("2024-01-21T16:55:46.625Z"),
    destinationAsset: "<value>",
    id: "<id>",
    provider: "<value>",
    reference: "<value>",
    sourceAsset: "<value>",
    updatedAt: new Date("2026-10-21T09:19:11.680Z"),
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `v3Order`                                                                                                                                                                                                                                                           | [payments.V3Order](../../../sdk/models/payments/v3order.md)                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                  | A trade order submitted to an exchange-style PSP. Orders are read-only<br/>in the Formance API: they are fetched from the underlying connector.<br/>Status transitions are captured via the `adjustments` array; each<br/>adjustment is a point-in-time snapshot from the PSP.<br/> |