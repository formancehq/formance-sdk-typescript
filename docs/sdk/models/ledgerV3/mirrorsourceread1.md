# MirrorSourceRead1

## Example Usage

```typescript
import { MirrorSourceRead1 } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: MirrorSourceRead1 = {
  http: {},
  ledgerName: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `batchSize`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `http`                                                                                        | [ledgerV3.HttpMirrorSourceRead](../../../sdk/models/ledgerV3/httpmirrorsourceread.md)         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `ledgerName`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `postgres`                                                                                    | [ledgerV3.PostgresMirrorSourceRead](../../../sdk/models/ledgerV3/postgresmirrorsourceread.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `rewriteRules`                                                                                | [ledgerV3.MirrorRewriteRuleRead](../../../sdk/models/ledgerV3/mirrorrewriteruleread.md)[]     | :heavy_minus_sign:                                                                            | N/A                                                                                           |