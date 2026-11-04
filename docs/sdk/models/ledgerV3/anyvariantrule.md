# AnyVariantRule

Rule scoped to every variant. `log` is the full MirrorLogEntry — use `has(log.<variant>)` guards to read variant-specific fields.


## Example Usage

```typescript
import { AnyVariantRule } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: AnyVariantRule = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `actions`                                                                       | [ledgerV3.AnyVariantAction](../../../sdk/models/ledgerV3/anyvariantaction.md)[] | :heavy_minus_sign:                                                              | N/A                                                                             |
| `match`                                                                         | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |