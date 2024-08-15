# V2Account

## Example Usage

```typescript
import { V2Account } from "@formance/formance-sdk/sdk/models/shared";

let value: V2Account = {
    address: "users:001",
    effectiveVolumes: {
        USD: {
            balance: BigInt("90"),
            input: BigInt("100"),
            output: BigInt("10"),
        },
        EUR: {
            balance: BigInt("90"),
            input: BigInt("100"),
            output: BigInt("10"),
        },
    },
    metadata: {
        admin: "true",
    },
    volumes: {
        USD: {
            balance: BigInt("90"),
            input: BigInt("100"),
            output: BigInt("10"),
        },
        EUR: {
            balance: BigInt("90"),
            input: BigInt("100"),
            output: BigInt("10"),
        },
    },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `address`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | users:001                                                                                                      |
| `effectiveVolumes`                                                                                             | Record<string, [shared.V2Volume](../../../sdk/models/shared/v2volume.md)>                                      | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>},<br/>"EUR": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>} |
| `metadata`                                                                                                     | Record<string, *string*>                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | {<br/>"admin": "true"<br/>}                                                                                    |
| `volumes`                                                                                                      | Record<string, [shared.V2Volume](../../../sdk/models/shared/v2volume.md)>                                      | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>},<br/>"EUR": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>} |