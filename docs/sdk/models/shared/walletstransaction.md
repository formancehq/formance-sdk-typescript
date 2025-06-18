# WalletsTransaction

## Example Usage

```typescript
import { WalletsTransaction } from "@formance/formance-sdk/sdk/models/shared";

let value: WalletsTransaction = {
  id: 705470,
  metadata: {},
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
    "key1": {
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
  postings: [
    {
      amount: 100n,
      asset: "COIN",
      destination: "users:002",
      source: "users:001",
    },
  ],
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
  timestamp: new Date("2025-03-31T07:55:46.485Z"),
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                                                                                | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `ledger`                                                                                            | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `metadata`                                                                                          | Record<string, *string*>                                                                            | :heavy_check_mark:                                                                                  | Metadata associated with the wallet.                                                                |                                                                                                     |
| `postCommitVolumes`                                                                                 | Record<string, Record<string, [shared.WalletsVolume](../../../sdk/models/shared/walletsvolume.md)>> | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `postings`                                                                                          | [shared.Posting](../../../sdk/models/shared/posting.md)[]                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `preCommitVolumes`                                                                                  | Record<string, Record<string, [shared.WalletsVolume](../../../sdk/models/shared/walletsvolume.md)>> | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `reference`                                                                                         | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 | ref:001                                                                                             |
| `timestamp`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |                                                                                                     |