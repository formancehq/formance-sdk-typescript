# AuditItem

One order within a proposal.

## Example Usage

```typescript
import { AuditItem } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: AuditItem = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `logSequence`                                                                            | *number*                                                                                 | :heavy_minus_sign:                                                                       | Sequence of the log produced by this order (0 for idempotent replay or failed proposals) |
| `orderIndex`                                                                             | *number*                                                                                 | :heavy_minus_sign:                                                                       | Zero-based position of this order within the proposal                                    |
| `serializedOrder`                                                                        | *string*                                                                                 | :heavy_minus_sign:                                                                       | Hex-encoded deterministic serialized bytes of the order at apply time                    |