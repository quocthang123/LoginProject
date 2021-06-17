import { HttpHeaders } from '@angular/common/http';

//Define Server API
export const API_URL = `http://localhost:8864/api`;

//Define constants languages for I18N
export const EN = `en`;
export const KO = `ko`;
export const VI = `vi`;

//Define js have to load file
// export const SELECT2 = `assets/vendor/select2/select2.min.js`;
// export const TILT = `assets/vendor/tilt/tilt.jquery.min.js`;
// export const AUIGridLicense = `assets/js/AUIGrid/AUIGridLicense.js'`;
// export const AUIGrid = `assets/js/AUIGrid/AUIGrid.js`;

export class Constants {
    static get serverApi() { return API_URL}
    static get KO() { return KO}
    static get EN() { return EN}
    static get VI() { return VI}
}