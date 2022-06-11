const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const {
  accountingDocumentService,
} = require("@sap/cloud-sdk-vdm-accounting-document-service");

const { operationalAcctgDocItemCubeApi } = accountingDocumentService();


const short = require("short-uuid");
const uuid = require("uuid");
const SapCfAxios = require("sap-cf-axios").default;

const { and } = require("@sap-cloud-sdk/core");


const {
  yy1PurchasorderhistoryCdsService,
} = require("./external/generate/yy-1-purchasorderhistory-cds-service/");


const url = "/sap/bc/srt/scs_ext/sap/journalentrybulkchangerequest_";

const httpClient1 = {
  request: function (url, data, callback, exheaders, exoptions) {
    axios({
      method: "POST",
      url: url,
      data: data,
      headers: exheaders,
    })
      .then((result) => {
        callback(null, result, result.data);
      })
      .catch((e) => {
        callback(e);
      });
  },
};

const options = {
  httpClient: httpClient1,
  forceSoap12Headers: true,
};


const xssec = require("@sap/xssec");
const passport = require("passport");
const soap = require("soap");
const xsenv = require("@sap/xsenv");

xsenv.loadEnv();
const services = xsenv.getServices({
  griractionuaa: { tag: "xsuaa" },
});

const destinationName = "O5P";
const axios = SapCfAxios(destinationName);

const UAA_CREDENTIALS = services.griractionuaa;

passport.use("JWT", new xssec.JWTStrategy(UAA_CREDENTIALS));
app.use(passport.initialize());
app.use(
  passport.authenticate("JWT", {
    session: false,
  })
);

app.use(bodyParser.json());

var finresult = [];

var invoiceblock = function (req, res) {
  if (
    req.authInfo.checkScope(UAA_CREDENTIALS.xsappname + ".scopeforgriraction")
  ) {
    var httpClient1 = {
      request: function (url, data, callback, exheaders, exoptions) {
        axios({
          method: "POST",
          url: url,
          data: data,
          headers: exheaders,
        })
          .then((result) => {
            callback(null, result, result.data);
          })
          .catch((e) => {
            callback(e);
          });
      },
    };

    var options = {
      httpClient: httpClient1,
      forceSoap12Headers: true,
    };

    soap.createClient(
      "./external/JOURNALENTRYBULKCHANGEREQUEST_.wsdl",
      options,
      function (err, client) {
        if (err) {
          console.log("soap client creation failed");
          console.log(err);
          res.status(500).send(err.toString());
        } else {
          client.setEndpoint(url);

          var sid = short.generate();
          var id = uuid.v1();
          var date1 = new Date().toISOString();

          var args = {
            MessageHeader: { ID: sid, UUID: id, CreationDateTime: date1 },
            JournalEntryHeader: {
              MessageHeader: { ID: sid, CreationDateTime: date1 },
              HeaderKey: {
                AccountingDocument: "5100000050",
                CompanyCode: "1310",
                FiscalYear: "2022",
              },
              DocumentHeaderTextChange: {
                DocumentHeaderText: "hello1",
                FieldValueChangeIsRequested: true,
              },
            },
            JournalEntryDebtorCreditorItem: {
              MessageHeader: { ID: sid, CreationDateTime: date1 },
              ItemKey: {
                AccountingDocument: "5100000050",
                CompanyCode: "1310",
                FiscalYear: "2022",
                AccountingDocumentItemID: "1",
              },
              PaymentBlockingReasonCodeChange: {
                PaymentBlockingReasonCode: "A",
                FieldValueChangeIsRequested: true,
              },
            },
          };

          client.addSoapHeader(
            { MessageID: id },
            "http://www.w3.org/2005/08/addressing",
            "wsa",
            "http://www.w3.org/2005/08/addressing"
          );

          client.JournalEntryBulkChangeRequest_In(args, function (err, result) {
            if (err) {
              console.log("soap call failed");
              console.log(err);
              res.status(500).send(err.toString());
            } else {
              res.status(200).send("Journal Entry sent successfully!");
            }
          });
        }
      }
    );
  } else {
    res.status(403).send("Forbidden");
  }
};

app.get("/srv/grir", invoiceblock);

app.get("/srv", function (req, res) {
  console.log(req.body);
  res.status(200).end("griraction");

});

app.post("/srv", function (req, res) {


  if (
    req.authInfo.checkScope(UAA_CREDENTIALS.xsappname + ".scopeforgriraction")
  ) {
    var con = req.body.input.dataContext;
    var jcon = null;

    if (typeof con == "string") {
      jcon = JSON.parse(con);
    } else {
      jcon = con;
    }

    var po = jcon.C_GRIRACCOUNTRECONCILIATION.PURCHASINGDOCUMENT;
    var poitem = jcon.C_GRIRACCOUNTRECONCILIATION.PURCHASINGDOCUMENTITEM;
    var porg = jcon.C_GRIRACCOUNTRECONCILIATION.PURCHASINGORGANIZATION;

    var pohisapi =
      yy1PurchasorderhistoryCdsService().yy1_PurchasorderhistoryApi;


    pohisapi
      .requestBuilder()
      .getAll()
      .select(
        pohisapi.schema.PURCHASING_HISTORY_DOCUMENT_YEAR,
        pohisapi.schema.PURCHASING_HISTORY_DOCUMENT,
        pohisapi.schema.PURCHASING_HISTORY_DOCUMENT_ITEM
      )
      .filter(
        and(
          pohisapi.schema.PURCHASE_ORDER.equals(po),
          pohisapi.schema.PURCHASE_ORDER_ITEM.equals(poitem),
          pohisapi.schema.PURCHASING_HISTORY_DOCUMENT_TYPE.equals("2")
        )
      )
      .execute({ destinationName: "O5P" })
      .then((re) => {
        re.forEach((reh) => {

          operationalAcctgDocItemCubeApi
            .requestBuilder()
            .getAll()
            .filter(
              and(
                operationalAcctgDocItemCubeApi.schema.REFERENCE_DOCUMENT_TYPE.equals(
                  "RMRP"
                ),
                operationalAcctgDocItemCubeApi.schema.ORIGINAL_REFERENCE_DOCUMENT.equals(
                  reh.purchasingHistoryDocument.concat(
                    reh.purchasingHistoryDocumentYear
                  )
                )
              ),
              operationalAcctgDocItemCubeApi.schema.FINANCIAL_ACCOUNT_TYPE.equals(
                "K"
              )
            )
            .select(
              operationalAcctgDocItemCubeApi.schema.COMPANY_CODE,
              operationalAcctgDocItemCubeApi.schema.FISCAL_YEAR,
              operationalAcctgDocItemCubeApi.schema.ACCOUNTING_DOCUMENT,
              operationalAcctgDocItemCubeApi.schema.ACCOUNTING_DOCUMENT_ITEM,
              operationalAcctgDocItemCubeApi.schema.POSTING_KEY,
              operationalAcctgDocItemCubeApi.schema.SUPPLIER,
              operationalAcctgDocItemCubeApi.schema.PAYMENT_BLOCKING_REASON
            )
            .execute({ destinationName: "O5P" })
            .then((invoice) => {

              invoice.forEach((each) => {

                if (each.paymentBlockingReason == "") {
                  var sid = short.generate();
                  var id = uuid.v1();
                  var date1 = new Date().toISOString();
                  var doc = each.accountingDocument;
                  var year = each.fiscalYear;
                  var item = each.accountingDocumentItem;
                  var comp = each.companyCode;
                  var args = {
                    MessageHeader: {
                      ID: sid,
                      UUID: id,
                      CreationDateTime: date1,
                    },
                    JournalEntryHeader: {
                      MessageHeader: { ID: sid, CreationDateTime: date1 },
                      HeaderKey: {
                        AccountingDocument: doc,
                        CompanyCode: comp,
                        FiscalYear: year,
                      },
                      DocumentHeaderTextChange: {
                        DocumentHeaderText: "hello1",
                        FieldValueChangeIsRequested: true,
                      },
                    },
                    JournalEntryDebtorCreditorItem: {
                      MessageHeader: { ID: sid, CreationDateTime: date1 },
                      ItemKey: {
                        AccountingDocument: doc,
                        CompanyCode: comp,
                        FiscalYear: year,
                        AccountingDocumentItemID: item,
                      },
                      PaymentBlockingReasonCodeChange: {
                        PaymentBlockingReasonCode: "A",
                        FieldValueChangeIsRequested: true,
                      },
                    },
                  };

                  soap
                    .createClientAsync(
                      "./external/JOURNALENTRYBULKCHANGEREQUEST_.wsdl",
                      options,
                      url
                    )
                    .then((client) => {
                      client.setEndpoint(
                        "/sap/bc/srt/scs_ext/sap/journalentrybulkchangerequest_"
                      );
                      client.addSoapHeader(
                        { MessageID: id },
                        "http://www.w3.org/2005/08/addressing",
                        "wsa",
                        "http://www.w3.org/2005/08/addressing"
                      );
                      client.JournalEntryBulkChangeRequest_In(
                        args,
                        function (err, result) {
                          if (err) {
                            console.log("soap call failed");
                            // console.log(err);
                            finresult.push({
                              company: comp,
                              doc: doc,
                              year: year,
                              result: "block failed",
                            });
                            // console.log(finresult);
                          } else {
                            //    console.log(result);
                            finresult.push({
                              company: comp,
                              doc: doc,
                              year: year,
                              result: "request sent",
                            });

                          }
                        }
                      );
                    })
                    .catch((err) => {
                      console.log(err);
                      finresult.push({
                        company: comp,
                        doc: doc,
                        year: year,
                        result: "soap client err",
                      });
                    });
                } else {
                  finresult.push({
                    company: comp,
                    doc: doc,
                    year: year,
                    result: "already blocked",
                  });

                }
              });
            });
        });
      })
      .catch((err) => {

        finresult.push({
          company: porg,
          doc: po,
          year: poitem,
          result: "failed get history item",
        });
        // console.log(finresult);
      });

        console.log(finresult);
        res.status(200).send({'result':finresult});
        finresult = [];
    
  } else {
    res.status(403).end("Forbidden");
  }
});

const port = process.env.PORT || 5001;
app.listen(port, function () {
  console.info("Listening on http://localhost:" + port);
});
