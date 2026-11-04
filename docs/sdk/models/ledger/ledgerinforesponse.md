# LedgerInfoResponse

## Example Usage

```typescript
import { LedgerInfoResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: LedgerInfoResponse = {
  data: {
    name: "ledger001",
    storage: {
      migrations: [
        {
          name: "migrations:001",
          version: "11",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [ledger.LedgerInfo](../../../sdk/models/ledger/ledgerinfo.md)                     | :heavy_minus_sign:                                                                | Runtime information about a ledger, including the state of its storage migrations |