# AddMetadataToAccountRequest

## Example Usage

```typescript
import { AddMetadataToAccountRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: AddMetadataToAccountRequest = {
  address: "users:001",
  ledger: "ledger001",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `requestBody`                                                                                                | Record<string, *any*>                                                                                        | :heavy_check_mark:                                                                                           | metadata                                                                                                     |                                                                                                              |
| `address`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Exact address of the account. It must match the following regular expressions pattern:<br/>```<br/>^\w+(:\w+)*$<br/>```<br/> | users:001                                                                                                    |
| `ledger`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Name of the ledger.                                                                                          | ledger001                                                                                                    |