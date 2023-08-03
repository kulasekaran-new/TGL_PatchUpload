import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import { LicenseManager } from "../../../node_modules/ag-grid-enterprise"

if (environment.production) {
  enableProdMode();
}

//LicenseManager.setLicenseKey("For_Trialing_ag-Grid_Only-Not_For_Real_Development_Or_Production_Projects-Valid_Until-18_December_2021_[v2]_MTYzOTc4NTYwMDAwMA==6e38e7593a6595db67c06381988ed88e");
LicenseManager.setLicenseKey("For_Trialing_ag-Grid_Only-Not_For_Real_Development_Or_Production_Projects-Valid_Until-29_October_2022_[v2]_MTY2Njk5ODAwMDAwMA==4fc6e481022c3132e74713f396ba7e48")
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => alert(err));
