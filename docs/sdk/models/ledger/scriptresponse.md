# ScriptResponse

## Example Usage

```typescript
import { ErrorsEnum, ScriptResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: ScriptResponse = {
  errorsEnum: ErrorsEnum.InsufficientFund,
  transaction: {
    aggregatedVolumes: {
      "orders:1": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
      "orders:2": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
    },
    aggregatedVolumes1: {
      "orders:1": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
      "orders:2": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
    },
    postings: [
      {
        amount: 100n,
        asset: "COIN",
        destination: "users:002",
        source: "users:001",
      },
    ],
    reference: "ref:001",
    timestamp: new Date("2024-12-30T14:12:54.438Z"),
    txid: 811899n,
  },
  details:
    "https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9",
  errorMessage: "account had insufficient funds",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `errorsEnum`                                                                                 | [ledger.ErrorsEnum](../../../sdk/models/ledger/errorsenum.md)                                | :heavy_minus_sign:                                                                           | N/A                                                                                          | INSUFFICIENT_FUND                                                                            |
| `transaction`                                                                                | [ledger.Transaction](../../../sdk/models/ledger/transaction.md)                              | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `details`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9 |
| `errorMessage`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | account had insufficient funds                                                               |