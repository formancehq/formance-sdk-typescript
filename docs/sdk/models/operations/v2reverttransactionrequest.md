# V2RevertTransactionRequest


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `ledger`                                                | *string*                                                | :heavy_check_mark:                                      | Name of the ledger.                                     | ledger001                                               |
| `id`                                                    | *BigInt*                                                | :heavy_check_mark:                                      | Transaction ID.                                         | 1234                                                    |
| `force`                                                 | *boolean*                                               | :heavy_minus_sign:                                      | Force revert                                            |                                                         |
| `atEffectiveDate`                                       | *boolean*                                               | :heavy_minus_sign:                                      | Revert transaction at effective date of the original tx |                                                         |