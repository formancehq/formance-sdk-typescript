# AnyVariantActionRead

## Example Usage

```typescript
import { AnyVariantActionRead } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: AnyVariantActionRead = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `drop`                                                                                        | [ledgerV3.DropAction](../../../sdk/models/ledgerV3/dropaction.md)                             | :heavy_minus_sign:                                                                            | Turns the entry into a fill-gap that preserves log-ID and tx-ID continuity.                   |
| `rewriteAddress`                                                                              | [ledgerV3.RewriteAddressActionRead](../../../sdk/models/ledgerV3/rewriteaddressactionread.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |