/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreateRequestBuilder, DeleteRequestBuilder, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, ODataBatchRequestBuilder, UpdateRequestBuilder, BatchChangeSet } from '@sap-cloud-sdk/odata-v2';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import { Yy1_Purchasorderhistory } from './index';

/**
 * Batch builder for operations supported on the Yy 1 Purchasorderhistory Cds Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(...requests: Array<ReadYy1PurchasorderhistoryCdsServiceRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>>): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(requests: Array<ReadYy1PurchasorderhistoryCdsServiceRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>>): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(first: undefined | ReadYy1PurchasorderhistoryCdsServiceRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT> | Array<ReadYy1PurchasorderhistoryCdsServiceRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>>, ...rest: Array<ReadYy1PurchasorderhistoryCdsServiceRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>>): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultYy1PurchasorderhistoryCdsServicePath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Yy 1 Purchasorderhistory Cds Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(...requests: Array<WriteYy1PurchasorderhistoryCdsServiceRequestBuilder<DeSerializersT>>): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(requests: Array<WriteYy1PurchasorderhistoryCdsServiceRequestBuilder<DeSerializersT>>): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(first: undefined | WriteYy1PurchasorderhistoryCdsServiceRequestBuilder<DeSerializersT> | Array<WriteYy1PurchasorderhistoryCdsServiceRequestBuilder<DeSerializersT>>, ...rest: Array<WriteYy1PurchasorderhistoryCdsServiceRequestBuilder<DeSerializersT>>): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultYy1PurchasorderhistoryCdsServicePath = '/sap/opu/odata/sap/YY1_PURCHASORDERHISTORY_CDS';
export type ReadYy1PurchasorderhistoryCdsServiceRequestBuilder<DeSerializersT extends DeSerializers> = GetAllRequestBuilder<Yy1_Purchasorderhistory<DeSerializersT>, DeSerializersT> | GetByKeyRequestBuilder<Yy1_Purchasorderhistory<DeSerializersT>, DeSerializersT>;
export type WriteYy1PurchasorderhistoryCdsServiceRequestBuilder<DeSerializersT extends DeSerializers> = CreateRequestBuilder<Yy1_Purchasorderhistory<DeSerializersT>, DeSerializersT> | UpdateRequestBuilder<Yy1_Purchasorderhistory<DeSerializersT>, DeSerializersT> | DeleteRequestBuilder<Yy1_Purchasorderhistory<DeSerializersT>, DeSerializersT>;
