# AnyVariantAction

## Example Usage

```typescript
import { AnyVariantAction } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: AnyVariantAction = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `drop`                                                                                | [ledgerV3.DropAction](../../../sdk/models/ledgerV3/dropaction.md)                     | :heavy_minus_sign:                                                                    | Turns the entry into a fill-gap that preserves log-ID and tx-ID continuity.           |
| `rewriteAddress`                                                                      | [ledgerV3.RewriteAddressAction](../../../sdk/models/ledgerV3/rewriteaddressaction.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |