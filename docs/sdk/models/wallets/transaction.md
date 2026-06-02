# Transaction

## Example Usage

```typescript
import { Transaction } from "@formance/formance-sdk/sdk/models/wallets";

let value: Transaction = {
  id: 265587,
  metadata: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  postCommitVolumes: {
    "key": {
      "USD": {
        balance: 90n,
        input: 100n,
        output: 10n,
      },
      "EUR": {
        balance: 90n,
        input: 100n,
        output: 10n,
      },
    },
  },
  postings: [],
  preCommitVolumes: {
    "key": {
      "USD": {
        balance: 90n,
        input: 100n,
        output: 10n,
      },
      "EUR": {
        balance: 90n,
        input: 100n,
        output: 10n,
      },
    },
  },
  reference: "ref:001",
  timestamp: new Date("2025-01-28T21:52:56.020Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `ledger`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | Metadata associated with the wallet.                                                          |                                                                                               |
| `postCommitVolumes`                                                                           | Record<string, Record<string, [wallets.Volume](../../../sdk/models/wallets/volume.md)>>       | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `postings`                                                                                    | [wallets.Posting](../../../sdk/models/wallets/posting.md)[]                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `preCommitVolumes`                                                                            | Record<string, Record<string, [wallets.Volume](../../../sdk/models/wallets/volume.md)>>       | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `reference`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | ref:001                                                                                       |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |