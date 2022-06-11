/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { Yy1_Purchasorderhistory } from './Yy1_Purchasorderhistory';

/**
 * Request builder class for operations supported on the [[Yy1_Purchasorderhistory]] entity.
 */
export class Yy1_PurchasorderhistoryRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<Yy1_Purchasorderhistory<T>, T> {
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
  getByKey(purchaseOrder: DeserializedType<T, 'Edm.String'>, purchaseOrderItem: DeserializedType<T, 'Edm.String'>, accountAssignmentNumber: DeserializedType<T, 'Edm.String'>, purchasingHistoryDocumentType: DeserializedType<T, 'Edm.String'>, purchasingHistoryDocumentYear: DeserializedType<T, 'Edm.String'>, purchasingHistoryDocument: DeserializedType<T, 'Edm.String'>, purchasingHistoryDocumentItem: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<Yy1_Purchasorderhistory<T>, T> {
    return new GetByKeyRequestBuilder<Yy1_Purchasorderhistory<T>, T>(this.entityApi, {
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
  getAll(): GetAllRequestBuilder<Yy1_Purchasorderhistory<T>, T> {
    return new GetAllRequestBuilder<Yy1_Purchasorderhistory<T>, T>(this.entityApi);
  }
}
