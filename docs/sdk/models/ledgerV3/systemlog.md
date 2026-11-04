# SystemLog

System log entry, shared by single-log responses, ledger-log lists,
prepared-query logData, and JSON events. The system payload keeps its
named variant (apply, createLedger, deleteLedger, etc.). A ledger log
inside payload.apply.log uses the flat LedgerLog contract.
Non-apply system payload variants are not exhaustively described here.


## Example Usage

```typescript
import { SystemLog } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: SystemLog = {
  payload: {
    apply: {
      log: {
        data: {
          "targetType": "ACCOUNT",
          "targetId": "users:alice",
          "metadata": {
            "category": "premium",
          },
        },
        type: "SET_METADATA",
      },
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `payload`                                                                                                                                                                            | [ledgerV3.Payload](../../../sdk/models/ledgerV3/payload.md)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                   | Named system payload variants are preserved as supplied, including<br/>nested fields and future sibling variants. Only apply is typed here;<br/>other variants remain open-ended (EN-2781).<br/> |
| `responseSignature`                                                                                                                                                                  | Record<string, *any*>                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `sequence`                                                                                                                                                                           | *number*                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                   | N/A                                                                                                                                                                                  |