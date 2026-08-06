# Evidence

## Example Usage

```typescript
import { Evidence } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: Evidence = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `additionalProperties`                                                               | Record<string, *any*>                                                                | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `evidence`                                                                           | Record<string, *any*>                                                                | :heavy_minus_sign:                                                                   | Full breakdown. Present on FAIL entries.                                             |
| `fingerprint`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `passed`                                                                             | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `proof`                                                                              | Record<string, *string*>                                                             | :heavy_minus_sign:                                                                   | Compact green-proof (observed balance integers as strings). Present on PASS entries. |