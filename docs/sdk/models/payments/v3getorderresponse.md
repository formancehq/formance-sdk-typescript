# V3GetOrderResponse

## Example Usage

```typescript
import { V3GetOrderResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3GetOrderResponse = {
  data: {
    baseQuantityOrdered: 822213n,
    connectorID: "<value>",
    createdAt: new Date("2026-10-13T19:35:43.823Z"),
    destinationAsset: "<value>",
    direction: "UNKNOWN",
    id: "<id>",
    provider: "<value>",
    reference: "<value>",
    sourceAsset: "<value>",
    status: "PARTIALLY_FILLED",
    timeInForce: "IMMEDIATE_OR_CANCEL",
    type: "UNKNOWN",
    updatedAt: new Date("2026-10-21T09:19:11.680Z"),
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                                                                                              | [payments.V3Order](../../../sdk/models/payments/v3order.md)                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                  | A trade order submitted to an exchange-style PSP. Orders are read-only<br/>in the Formance API: they are fetched from the underlying connector.<br/>Status transitions are captured via the `adjustments` array; each<br/>adjustment is a point-in-time snapshot from the PSP.<br/> |