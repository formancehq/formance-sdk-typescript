# Info

## Example Usage

```typescript
import { Info } from "@formance/formance-sdk/sdk/models/connectivity";

let value: Info = {
  buildDate: "<value>",
  commit: "<value>",
  version: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `buildDate`                                                  | *string*                                                     | :heavy_check_mark:                                           | Source commit timestamp (`org.opencontainers.image.created`) |
| `commit`                                                     | *string*                                                     | :heavy_check_mark:                                           | Git commit SHA of the build                                  |
| `version`                                                    | *string*                                                     | :heavy_check_mark:                                           | Build version of the API binary (the image tag)              |