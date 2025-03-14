# V2BulkResponse

## Example Usage

```typescript
import { V2BulkResponse, V2ErrorsEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V2BulkResponse = {
  data: [
    {
      data: {
        id: BigInt("274295"),
        metadata: {
          "admin": "true",
        },
        postCommitEffectiveVolumes: {
          "orders:1": {
            "USD": {
              balance: BigInt("90"),
              input: BigInt("100"),
              output: BigInt("10"),
            },
          },
          "orders:2": {
            "USD": {
              balance: BigInt("90"),
              input: BigInt("100"),
              output: BigInt("10"),
            },
          },
        },
        postCommitVolumes: {
          "orders:1": {
            "USD": {
              balance: BigInt("90"),
              input: BigInt("100"),
              output: BigInt("10"),
            },
          },
          "orders:2": {
            "USD": {
              balance: BigInt("90"),
              input: BigInt("100"),
              output: BigInt("10"),
            },
          },
        },
        postings: [
          {
            amount: BigInt("100"),
            asset: "COIN",
            destination: "users:002",
            source: "users:001",
          },
        ],
        preCommitEffectiveVolumes: {
          "orders:1": {
            "USD": {
              balance: BigInt("90"),
              input: BigInt("100"),
              output: BigInt("10"),
            },
          },
          "orders:2": {
            "USD": {
              balance: BigInt("90"),
              input: BigInt("100"),
              output: BigInt("10"),
            },
          },
        },
        preCommitVolumes: {
          "orders:1": {
            "USD": {
              balance: BigInt("90"),
              input: BigInt("100"),
              output: BigInt("10"),
            },
          },
          "orders:2": {
            "USD": {
              balance: BigInt("90"),
              input: BigInt("100"),
              output: BigInt("10"),
            },
          },
        },
        reference: "ref:001",
        reverted: false,
        timestamp: new Date("2025-02-08T05:12:43.428Z"),
      },
      logID: 30192,
      responseType: "<value>",
    },
  ],
  details:
    "https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9",
  errorCode: V2ErrorsEnum.Validation,
  errorMessage: "[VALIDATION] invalid 'cursor' query param",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | *shared.V2BulkElementResult*[]                                                               | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `details`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9 |
| `errorCode`                                                                                  | [shared.V2ErrorsEnum](../../../sdk/models/shared/v2errorsenum.md)                            | :heavy_check_mark:                                                                           | N/A                                                                                          | VALIDATION                                                                                   |
| `errorMessage`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | [VALIDATION] invalid 'cursor' query param                                                    |