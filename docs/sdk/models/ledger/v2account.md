# V2Account

An account in the ledger, identified by its address and carrying its metadata and volumes

## Example Usage

```typescript
import { V2Account } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2Account = {
  address: "users:001",
  effectiveVolumes: {
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
  firstUsage: new Date("2023-01-01T00:00:00Z"),
  insertionDate: new Date("2023-01-01T00:00:00Z"),
  metadata: {
    "admin": "true",
  },
  updatedAt: new Date("2023-01-01T00:00:00Z"),
  volumes: {
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
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `address`                                                                                                                                          | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The account address, a colon-separated segmented path such as users:001                                                                            | users:001                                                                                                                                          |
| `effectiveVolumes`                                                                                                                                 | Record<string, [ledger.V2Volume](../../../sdk/models/ledger/v2volume.md)>                                                                          | :heavy_minus_sign:                                                                                                                                 | Volumes per asset for a single account                                                                                                             | {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>},<br/>"EUR": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>} |
| `firstUsage`                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                      | :heavy_minus_sign:                                                                                                                                 | Transaction time of the earliest transaction touching this account. Inserting a backdated transaction can move it earlier                          | 2023-01-01T00:00:00Z                                                                                                                               |
| `insertionDate`                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                      | :heavy_minus_sign:                                                                                                                                 | When the account was first written to the ledger, on the request-time axis                                                                         | 2023-01-01T00:00:00Z                                                                                                                               |
| `metadata`                                                                                                                                         | Record<string, *string*>                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Arbitrary key/value pairs attached to the account. Metadata is bi-temporal, so a point-in-time query returns the metadata as it stood at that time | {<br/>"admin": "true"<br/>}                                                                                                                        |
| `updatedAt`                                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                      | :heavy_minus_sign:                                                                                                                                 | When the account was last modified, for example by a metadata change                                                                               | 2023-01-01T00:00:00Z                                                                                                                               |
| `volumes`                                                                                                                                          | Record<string, [ledger.V2Volume](../../../sdk/models/ledger/v2volume.md)>                                                                          | :heavy_minus_sign:                                                                                                                                 | Volumes per asset for a single account                                                                                                             | {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>},<br/>"EUR": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>} |