"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yy1PurchasorderhistoryCdsService = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Yy1_PurchasorderhistoryApi_1 = require("./Yy1_PurchasorderhistoryApi");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function yy1PurchasorderhistoryCdsService(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new Yy1PurchasorderhistoryCdsService((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
exports.yy1PurchasorderhistoryCdsService = yy1PurchasorderhistoryCdsService;
class Yy1PurchasorderhistoryCdsService {
    constructor(deSerializers) {
        this.apis = {};
        this.deSerializers = deSerializers;
    }
    initApi(key, ctor) {
        if (!this.apis[key]) {
            this.apis[key] = new ctor(this.deSerializers);
        }
        return this.apis[key];
    }
    get yy1_PurchasorderhistoryApi() {
        return this.initApi('yy1_PurchasorderhistoryApi', Yy1_PurchasorderhistoryApi_1.Yy1_PurchasorderhistoryApi);
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map