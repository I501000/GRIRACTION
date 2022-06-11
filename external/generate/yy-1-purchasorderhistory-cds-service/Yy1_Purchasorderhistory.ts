/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';

/**
 * This class represents the entity "YY1_purchasorderhistory" of service "YY1_PURCHASORDERHISTORY_CDS".
 */
export class Yy1_Purchasorderhistory<T extends DeSerializers = DefaultDeSerializers> extends Entity implements Yy1_PurchasorderhistoryType<T> {
  /**
   * Technical entity name for Yy1_Purchasorderhistory.
   */
  static _entityName = 'YY1_purchasorderhistory';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/YY1_PURCHASORDERHISTORY_CDS';
  /**
   * All key fields of the Yy1_Purchasorderhistory entity
   */
  static _keys = ['PurchaseOrder', 'PurchaseOrderItem', 'AccountAssignmentNumber', 'PurchasingHistoryDocumentType', 'PurchasingHistoryDocumentYear', 'PurchasingHistoryDocument', 'PurchasingHistoryDocumentItem'];
  /**
   * Purchasing Document Number.
   * Maximum length: 10.
   */
  purchaseOrder!: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number of Purchasing Document.
   * Maximum length: 5.
   */
  purchaseOrderItem!: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequential Number of Account Assignment.
   * Maximum length: 2.
   */
  accountAssignmentNumber!: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction/event type, purchase order history.
   * Maximum length: 1.
   */
  purchasingHistoryDocumentType!: DeserializedType<T, 'Edm.String'>;
  /**
   * Material Document Year.
   * Maximum length: 4.
   */
  purchasingHistoryDocumentYear!: DeserializedType<T, 'Edm.String'>;
  /**
   * Number of Material Document.
   * Maximum length: 10.
   */
  purchasingHistoryDocument!: DeserializedType<T, 'Edm.String'>;
  /**
   * Item in Material Document.
   * Maximum length: 4.
   */
  purchasingHistoryDocumentItem!: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order History Category.
   * Maximum length: 1.
   * @nullable
   */
  purchasingHistoryCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Movement Type (Inventory Management).
   * Maximum length: 3.
   * @nullable
   */
  goodsMovementType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Date in the Document.
   * @nullable
   */
  postingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Currency Key.
   * Maximum length: 5.
   * @nullable
   */
  currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Debit/Credit Indicator.
   * Maximum length: 1.
   * @nullable
   */
  debitCreditCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * "Delivery Completed" Indicator.
   * @nullable
   */
  isCompletelyDelivered?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Fiscal Year of a Reference Document.
   * Maximum length: 4.
   * @nullable
   */
  referenceDocumentFiscalYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document No. of a Reference Document.
   * Maximum length: 10.
   * @nullable
   */
  referenceDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item of a Reference Document.
   * Maximum length: 4.
   * @nullable
   */
  referenceDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Number.
   * Maximum length: 40.
   * @nullable
   */
  material?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plant.
   * Maximum length: 4.
   * @nullable
   */
  plant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reversal of GR allowed for GR-based IV despite invoice.
   * @nullable
   */
  rvslOfGoodsReceiptIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Number of the Document Condition.
   * Maximum length: 10.
   * @nullable
   */
  pricingDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax on Sales/Purchases Code.
   * Maximum length: 2.
   * @nullable
   */
  taxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Date in Document.
   * @nullable
   */
  documentDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Valuation Type.
   * Maximum length: 10.
   * @nullable
   */
  inventoryValuationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Document Number.
   * Maximum length: 16.
   * @nullable
   */
  documentReferenceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit of Measure From Delivery Note.
   * Maximum length: 3.
   * @nullable
   */
  deliveryQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material number.
   * Maximum length: 40.
   * @nullable
   */
  manufacturerMaterial?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Day On Which Accounting Document Was Entered.
   * @nullable
   */
  accountingDocumentCreationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Amount in Local Currency.
   * @nullable
   */
  purOrdAmountInCompanyCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Amount in Document Currency.
   * @nullable
   */
  purchaseOrderAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Quantity in purchase order price unit.
   * @nullable
   */
  qtyInPurchaseOrderPriceUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * GR/IR account clearing value in local currency.
   * @nullable
   */
  grirAcctClrgAmtInCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Goods Receipt Blocked Stock in Order Unit.
   * @nullable
   */
  gdsRcptBlkdStkQtyInOrdQtyUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Quantity in GR blocked stock in order price unit.
   * @nullable
   */
  gdsRcptBlkdStkQtyInOrdPrcUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Invoice Value Entered (in Local Currency).
   * @nullable
   */
  invoiceAmtInCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Compliance with Shipping Instructions.
   * Maximum length: 2.
   * @nullable
   */
  shipgInstrnSupplierCompliance?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Value in Foreign Currency.
   * @nullable
   */
  invoiceAmountInFrgnCurrency?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Quantity in Unit of Measure from Delivery Note.
   * @nullable
   */
  quantityInDeliveryQtyUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Clearing value on GR/IR clearing account (transac. currency).
   * @nullable
   */
  grirAcctClrgAmtInTransacCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Quantity.
   * @nullable
   */
  quantityInBaseUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Clearing Value on GR/IR Account in PO Currency.
   * @nullable
   */
  grirAcctClrgAmtInOrdTrnsacCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Invoice Amount in PO Currency.
   * @nullable
   */
  invoiceAmtInPurOrdTransacCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Valuated Goods Receipt Blocked Stock in Order Unit.
   * @nullable
   */
  vltdGdsRcptBlkdStkQtyInOrdUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Quantity in Valuated GR Blocked Stock in Order Price Unit.
   * @nullable
   */
  vltdGdsRcptBlkdQtyInOrdPrcUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Acceptance At Origin.
   * @nullable
   */
  isToBeAcceptedAtOrigin?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Exchange Rate Difference Amount.
   * @nullable
   */
  exchangeRateDifferenceAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Currency Key.
   * Maximum length: 5.
   * @nullable
   */
  documentCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Key.
   * Maximum length: 5.
   * @nullable
   */
  companyCodeCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  purchaseOrderQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Price Unit (Purchasing).
   * Maximum length: 3.
   * @nullable
   */
  orderPriceUnit?: DeserializedType<T, 'Edm.String'> | null;
}

export interface Yy1_PurchasorderhistoryType<T extends DeSerializers = DefaultDeSerializers> {
  purchaseOrder: DeserializedType<T, 'Edm.String'>;
  purchaseOrderItem: DeserializedType<T, 'Edm.String'>;
  accountAssignmentNumber: DeserializedType<T, 'Edm.String'>;
  purchasingHistoryDocumentType: DeserializedType<T, 'Edm.String'>;
  purchasingHistoryDocumentYear: DeserializedType<T, 'Edm.String'>;
  purchasingHistoryDocument: DeserializedType<T, 'Edm.String'>;
  purchasingHistoryDocumentItem: DeserializedType<T, 'Edm.String'>;
  purchasingHistoryCategory?: DeserializedType<T, 'Edm.String'> | null;
  goodsMovementType?: DeserializedType<T, 'Edm.String'> | null;
  postingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  debitCreditCode?: DeserializedType<T, 'Edm.String'> | null;
  isCompletelyDelivered?: DeserializedType<T, 'Edm.Boolean'> | null;
  referenceDocumentFiscalYear?: DeserializedType<T, 'Edm.String'> | null;
  referenceDocument?: DeserializedType<T, 'Edm.String'> | null;
  referenceDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  material?: DeserializedType<T, 'Edm.String'> | null;
  plant?: DeserializedType<T, 'Edm.String'> | null;
  rvslOfGoodsReceiptIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  pricingDocument?: DeserializedType<T, 'Edm.String'> | null;
  taxCode?: DeserializedType<T, 'Edm.String'> | null;
  documentDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  inventoryValuationType?: DeserializedType<T, 'Edm.String'> | null;
  documentReferenceId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  manufacturerMaterial?: DeserializedType<T, 'Edm.String'> | null;
  accountingDocumentCreationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  quantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  purOrdAmountInCompanyCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  purchaseOrderAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  qtyInPurchaseOrderPriceUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  grirAcctClrgAmtInCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  gdsRcptBlkdStkQtyInOrdQtyUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  gdsRcptBlkdStkQtyInOrdPrcUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  invoiceAmtInCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  shipgInstrnSupplierCompliance?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAmountInFrgnCurrency?: DeserializedType<T, 'Edm.Decimal'> | null;
  quantityInDeliveryQtyUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  grirAcctClrgAmtInTransacCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  quantityInBaseUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  grirAcctClrgAmtInOrdTrnsacCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  invoiceAmtInPurOrdTransacCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  vltdGdsRcptBlkdStkQtyInOrdUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  vltdGdsRcptBlkdQtyInOrdPrcUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  isToBeAcceptedAtOrigin?: DeserializedType<T, 'Edm.Boolean'> | null;
  exchangeRateDifferenceAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  documentCurrency?: DeserializedType<T, 'Edm.String'> | null;
  companyCodeCurrency?: DeserializedType<T, 'Edm.String'> | null;
  baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  orderPriceUnit?: DeserializedType<T, 'Edm.String'> | null;
}
