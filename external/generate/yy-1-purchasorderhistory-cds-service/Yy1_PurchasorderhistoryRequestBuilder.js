"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yy1_PurchasorderhistoryRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the [[Yy1_Purchasorderhistory]] entity.
 */
class Yy1_PurchasorderhistoryRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `Yy1_Purchasorderhistory` entity based on its keys.
     * @param purchaseOrder Key property. See [[Yy1_Purchasorderhistory.purchaseOrder]].
     * @param purchaseOrderItem Key property. See [[Yy1_Purchasorderhistory.purchaseOrderItem]].
     * @param accountAssignmentNumber Key property. See [[Yy1_Purchasorderhistory.accountAssignmentNumber]].
     * @param purchasingHistoryDocumentType Key property. See [[Yy1_Purchasorderhistory.purchasingHistoryDocumentType]].
     * @param purchasingHistoryDocumentYear Key property. See [[Yy1_Purchasorderhistory.purchasingHistoryDocumentYear]].
     * @param purchasingHistoryDocument Key property. See [[Yy1_Purchasorderhistory.purchasingHistoryDocument]].
     * @param purchasingHistoryDocumentItem Key property. See [[Yy1_Purchasorderhistory.purchasingHistoryDocumentItem]].
     * @returns A request builder for creating requests to retrieve one `Yy1_Purchasorderhistory` entity based on its keys.
     */
    getByKey(purchaseOrder, purchaseOrderItem, accountAssignmentNumber, purchasingHistoryDocumentType, purchasingHistoryDocumentYear, purchasingHistoryDocument, purchasingHistoryDocumentItem) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            PurchaseOrder: purchaseOrder,
            PurchaseOrderItem: purchaseOrderItem,
            AccountAssignmentNumber: accountAssignmentNumber,
            PurchasingHistoryDocumentType: purchasingHistoryDocumentType,
            PurchasingHistoryDocumentYear: purchasingHistoryDocumentYear,
            PurchasingHistoryDocument: purchasingHistoryDocument,
            PurchasingHistoryDocumentItem: purchasingHistoryDocumentItem
        });
    }
    /**
     * Returns a request builder for querying all `Yy1_Purchasorderhistory` entities.
     * @returns A request builder for creating requests to retrieve all `Yy1_Purchasorderhistory` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.Yy1_PurchasorderhistoryRequestBuilder = Yy1_PurchasorderhistoryRequestBuilder;
//# sourceMappingURL=Yy1_PurchasorderhistoryRequestBuilder.js.map