# AddMetadataOnTransactionRequest


## Fields

| Field                 | Type                  | Required              | Description           | Example               |
| --------------------- | --------------------- | --------------------- | --------------------- | --------------------- |
| `ledger`              | *string*              | :heavy_check_mark:    | Name of the ledger.   | ledger001             |
| `txid`                | *BigInt*              | :heavy_check_mark:    | Transaction ID.       | 1234                  |
| `requestBody`         | Record<string, *any*> | :heavy_minus_sign:    | metadata              |                       |