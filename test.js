// const {registerDestination} = require('@sap-cloud-sdk/connectivity')

// const {yy1PurchasorderhistoryCdsService}= require('./external/generate/yy-1-purchasorderhistory-cds-service/')
// const {Yy1_Purchasorderhistory}= require('./external/generate/yy-1-purchasorderhistory-cds-service/')
// url = '/sap/bc/srt/scs_ext/sap/journalentrybulkchangerequest_';
// destination =     {
//         name: "O5P",
//         url: "https://my300018.saps4hanacloud.cn/sap/bc/srt/scs_ext/sap/journalentrybulkchangerequest_",
//         username: "INTSITUAUTO_USER",
//         password: "Jl98765432198765432!",
//         forwardAuthToken: true
//     };

// registerDestination(destination);


//  yy1PurchasorderhistoryCdsService().yy1_PurchasorderhistoryApi.requestBuilder().getAll().top(5).execute('O5P').then((result)=>{
//      console.log(result);
//  }).catch((err)=>{console.log(err)});
    

// var invoiceblockfunc =  function(){        
                            
//     var httpClient1 = {
//         request: function (url, data, callback, exheaders, exoptions) {
//             axios({
//                 method: 'POST',
//                 url: url,
//                 data: data,
//                 headers: exheaders

//             }).then((result) => {
//                 callback(null, result, result.data);
//             }).catch((e) => {
//                 callback(e);
//             });
//         }
//     }

//     var options = {
//         httpClient:httpClient1,
//         forceSoap12Headers: true
//       };

// soap.createClient('./external/JOURNALENTRYBULKCHANGEREQUEST_.wsdl',options,function(err,client){
//     if(err){
//         console.log('soap client creation failed');
//         console.log(err);   
//         return 'err'
//     }
//         else{

// client.setEndpoint(url);


// return client ;

// }

// });

// }



// var sid =short.generate();
// var id = uuid.v1();
// var date1 =new Date().toISOString();

// var args = {'MessageHeader':{'ID':sid,'UUID':id,'CreationDateTime':date1},'JournalEntryHeader':{'MessageHeader':{'ID':sid,'CreationDateTime':date1},'HeaderKey':{'AccountingDocument':doc,'CompanyCode':comp,'FiscalYear':year},'DocumentHeaderTextChange':{'DocumentHeaderText':'hello1','FieldValueChangeIsRequested':true}},'JournalEntryDebtorCreditorItem':{'MessageHeader':{'ID':sid,'CreationDateTime':date1},'ItemKey':{'AccountingDocument':doc,'CompanyCode':comp,'FiscalYear':year,'AccountingDocumentItemID':item},'PaymentBlockingReasonCodeChange':{'PaymentBlockingReasonCode':'A','FieldValueChangeIsRequested':true}}};
// client.addSoapHeader({MessageID:id},'http://www.w3.org/2005/08/addressing','wsa','http://www.w3.org/2005/08/addressing');
// var client = invoiceblockfunc();
// if (client != 'err'){

// client.JournalEntryBulkChangeRequest_In(args,function(err,result){
//     if(err){
//         console.log('soap call failed');
//         console.log(err);
//         return 'invoice black failed';
//        }else{ return 'invocie block request sent';}
//     });}

const soap = require('soap');

const short = require('short-uuid');
const uuid = require('uuid');
var sid =short.generate();
var id = uuid.v1();

var date1 =new Date().toISOString();

var args = {'MessageHeader':{'ID':sid,'UUID':id,'CreationDateTime':date1},'JournalEntryHeader':{'MessageHeader':{'ID':sid,'CreationDateTime':date1},'HeaderKey':{'AccountingDocument':'5100000050','CompanyCode':'1310','FiscalYear':'2022'},'DocumentHeaderTextChange':{'DocumentHeaderText':'hello1','FieldValueChangeIsRequested':true}},'JournalEntryDebtorCreditorItem':{'MessageHeader':{'ID':sid,'CreationDateTime':date1},'ItemKey':{'AccountingDocument':'5100000050','CompanyCode':'1310','FiscalYear':'2022','AccountingDocumentItemID':'1'},'PaymentBlockingReasonCodeChange':{'PaymentBlockingReasonCode':'A','FieldValueChangeIsRequested':true}}};


function getsoapclient() { return new Promise(function(resolve,reject){

    var options = {
        forceSoap12Headers: true
      };
      soap.createClient('./external/JOURNALENTRYBULKCHANGEREQUEST_.wsdl',options,function(err,client){
          if(err){reject(err)}else(resolve(client));
      })
    
});}

soap.createClientAsync
getsoapclient().then((client)=>{
    client.setEndpoint('https://my300018-api.saps4hanacloud.cn/sap/bc/srt/scs_ext/sap/journalentrybulkchangerequest_');
    client.setSecurity(new soap.BasicAuthSecurity('SCPTRIAL','Jl98765432198765432!'));
    client.addSoapHeader({MessageID:id},'http://www.w3.org/2005/08/addressing','wsa','http://www.w3.org/2005/08/addressing');
    client.addSoapHeader({CreationDateTime:date1});
    client.setSOAPAction('JOURNALENTRYBULKCHANGEREQUEST_.binding.JournalEntryBulkChangeRequest_In');
    client.JournalEntryBulkChangeRequest_In(args,function(err,result){

        if(err){console.log(err);}else{
            
            console.log('success');
            console.log(result);}
    
      });

}).catch(err=>{console.log(err)})

