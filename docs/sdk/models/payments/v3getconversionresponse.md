# V3GetConversionResponse

## Example Usage

```typescript
import { V3GetConversionResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3GetConversionResponse = {
  data: {
    connectorID: "<value>",
    createdAt: new Date("2026-06-25T14:25:12.022Z"),
    destinationAsset: "<value>",
    id: "<id>",
    provider: "<value>",
    reference: "<value>",
    sourceAmount: 906994n,
    sourceAsset: "<value>",
    status: "UNKNOWN",
    updatedAt: new Date("2024-11-03T20:29:35.101Z"),
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                                                                                                                                                | [payments.V3Conversion](../../../sdk/models/payments/v3conversion.md)                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                    | A currency or asset conversion executed on a PSP (e.g. Coinbase Prime<br/>transfer between a USD and USDC wallet). Conversions are read-only in<br/>the Formance API: they are fetched from the underlying connector.<br/>Unlike orders, conversions do not carry an adjustment history —<br/>Formance records the final state only.<br/> |