<!-- Start SDK Example Usage -->


```typescript
import { Formance } from "@formance/formance-sdk";
import { GetVersionsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.getVersions().then((res: GetVersionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->