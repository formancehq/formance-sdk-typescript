<!-- Start SDK Example Usage -->


```typescript
import { SDK } from "@formance/formance-sdk";

(async () => {
    const sdk = new SDK();

    const res = await sdk.sdk.getVersions();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->