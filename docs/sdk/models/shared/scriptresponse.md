# ScriptResponse

## Example Usage

```typescript
import { ErrorsEnum, ScriptResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ScriptResponse = {
  details:
    "https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9",
  errorCode: ErrorsEnum.InsufficientFund,
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
    timestamp: new Date("2023-12-24T18:02:59.726Z"),
    txid: 482425n,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `details`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9 |
| `errorCode`                                                                                  | [shared.ErrorsEnum](../../../sdk/models/shared/errorsenum.md)                                | :heavy_minus_sign:                                                                           | N/A                                                                                          | INSUFFICIENT_FUND                                                                            |
| `errorMessage`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | account had insufficient funds                                                               |
| `transaction`                                                                                | [shared.Transaction](../../../sdk/models/shared/transaction.md)                              | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |