<!-- Start SDK Example Usage [usage] -->
```typescript
import { Formance } from "@formance/formance-sdk";

const formance = new Formance({
    security: {
        clientID: "<YOUR_CLIENT_ID_HERE>",
        clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
});

async function run() {
    const result = await formance.getOIDCWellKnowns();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->