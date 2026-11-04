# V2LedgerInfoResponse

## Example Usage

```typescript
import { V2LedgerInfoResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2LedgerInfoResponse = {
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
| `data`                                                                            | [ledger.V2LedgerInfo](../../../sdk/models/ledger/v2ledgerinfo.md)                 | :heavy_minus_sign:                                                                | Runtime information about a ledger, including the state of its storage migrations |