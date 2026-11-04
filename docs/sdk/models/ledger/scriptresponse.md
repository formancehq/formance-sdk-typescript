# ScriptResponse

## Example Usage

```typescript
import { ScriptResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: ScriptResponse = {
  details:
    "https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9",
  errorCode: "INSUFFICIENT_FUND",
  errorMessage: "account had insufficient funds",
  transaction: {
    postCommitVolumes: {
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
    preCommitVolumes: {
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
    reference: "ref:001",
    timestamp: new Date("2024-12-23T18:02:59.726Z"),
    txid: 482425n,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `details`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Optional link carrying additional context about the error, such as a Numscript playground URL reproducing it | https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9                 |
| `errorCode`                                                                                                  | [ledger.ErrorsEnum](../../../sdk/models/ledger/errorsenum.md)                                                | :heavy_minus_sign:                                                                                           | Machine-readable error code identifying the failure                                                          | INSUFFICIENT_FUND                                                                                            |
| `errorMessage`                                                                                               | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Human-readable description of the error                                                                      | account had insufficient funds                                                                               |
| `transaction`                                                                                                | [ledger.Transaction](../../../sdk/models/ledger/transaction.md)                                              | :heavy_minus_sign:                                                                                           | A transaction recorded in the ledger, carrying its postings and metadata                                     |                                                                                                              |