# AnyVariantRuleRead

Rule scoped to every variant. `log` is the full MirrorLogEntry — use `has(log.<variant>)` guards to read variant-specific fields.


## Example Usage

```typescript
import { AnyVariantRuleRead } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: AnyVariantRuleRead = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `actions`                                                                               | [ledgerV3.AnyVariantActionRead](../../../sdk/models/ledgerV3/anyvariantactionread.md)[] | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `match`                                                                                 | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |