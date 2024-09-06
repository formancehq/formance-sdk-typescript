# V2BulkElementCreateTransaction

## Example Usage

```typescript
import { V2BulkElementCreateTransaction } from "@formance/formance-sdk/sdk/models/shared";

let value: V2BulkElementCreateTransaction = {
    action: "<value>",
    data: {
        metadata: {
            admin: "true",
        },
        postings: [
            {
                amount: BigInt("100"),
                asset: "COIN",
                destination: "users:002",
                source: "users:001",
            },
        ],
        reference: "ref:001",
        script: {
            plain:
                "vars {\n" +
                "account $user\n" +
                "}\n" +
                "send [COIN 10] (\n" +
                "	source = @world\n" +
                "	destination = $user\n" +
                ")\n" +
                "",
            vars: {
                user: "users:042",
            },
        },
    },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `action`                                                                    | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `data`                                                                      | [shared.V2PostTransaction](../../../sdk/models/shared/v2posttransaction.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `ik`                                                                        | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |