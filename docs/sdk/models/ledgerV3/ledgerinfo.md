# LedgerInfo

## Example Usage

```typescript
import { LedgerInfo } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: LedgerInfo = {
  accountTypes: {
    "key": {
      name: "<value>",
      pattern: "<value>",
      persistence: "EPHEMERAL",
      segmentTypes: {
        "key": {
          regex: "[A-Z]{2}[0-9]{14}",
          type: "uint64",
        },
      },
    },
  },
  defaultEnforcementMode: "STRICT",
  mode: "MIRROR",
  name: "<value>",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `accountTypes`                                                                                                | Record<string, [ledgerV3.AccountTypeInfo](../../../sdk/models/ledgerV3/accounttypeinfo.md)>                   | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `createdAt`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `defaultEnforcementMode`                                                                                      | [ledgerV3.LedgerInfoDefaultEnforcementMode](../../../sdk/models/ledgerV3/ledgerinfodefaultenforcementmode.md) | :heavy_check_mark:                                                                                            | Default enforcement for unmatched accounts; defaults to STRICT                                                |
| `deletedAt`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_minus_sign:                                                                                            | Soft deletion timestamp; omitted for active ledgers                                                           |
| `metadata`                                                                                                    | Record<string, *ledgerV3.MetadataValue*>                                                                      | :heavy_minus_sign:                                                                                            | Enriched typed ledger metadata                                                                                |
| `metadataSchema`                                                                                              | [ledgerV3.LedgerMetadataSchema](../../../sdk/models/ledgerV3/ledgermetadataschema.md)                         | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `mirrorSource`                                                                                                | *ledgerV3.MirrorSourceReadUnion*                                                                              | :heavy_minus_sign:                                                                                            | Detached credential-safe mirror configuration returned by ledger reads                                        |
| `mirrorSyncProgress`                                                                                          | [ledgerV3.MirrorSyncProgress](../../../sdk/models/ledgerV3/mirrorsyncprogress.md)                             | :heavy_minus_sign:                                                                                            | Sync progress for MIRROR ledgers (populated at read time)                                                     |
| `mode`                                                                                                        | [ledgerV3.LedgerInfoMode](../../../sdk/models/ledgerV3/ledgerinfomode.md)                                     | :heavy_check_mark:                                                                                            | Ledger mode, including the default NORMAL value                                                               |
| `name`                                                                                                        | *string*                                                                                                      | :heavy_check_mark:                                                                                            | Name of the ledger                                                                                            |