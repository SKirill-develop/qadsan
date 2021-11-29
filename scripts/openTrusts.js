import {
  server,
  AllAssets,
  openTrustsFromFreighter,
  popup,
  popupTite,
  popupResult,
  loader,
} from "./constants.js";
import { openpPopup } from "./utils.js";

const retrievePublicKey = async () => {
  let publicKey = "";
  let error = "";
  try {
    publicKey = await window.freighterApi.getPublicKey();
  } catch (e) {
    error = e;
  }
  if (error) {
    return error;
  }
  return publicKey;
};

const userSignTransaction = async (xdr) => {
  let signedTransaction = "";
  let error = "";
  try {
    signedTransaction = await window.freighterApi.signTransaction(xdr);
  } catch (e) {
    error = e;
  }
  if (error) {
    return error;
  }
  return signedTransaction;
};

export const trustAsset = async () => {
  const publicKey = await retrievePublicKey();
  server.loadAccount(publicKey).then(async (account) => {
    const optionalFee = await server.feeStats();
    const avgFee = optionalFee.fee_charged.mode;
    const fee = (avgFee * 1.1).toFixed(0);
    const builder = new StellarSdk.TransactionBuilder(account, {
      fee,
      networkPassphrase: StellarSdk.Networks.PUBLIC,
    });
    AllAssets.forEach((asset) => {
      builder.addOperation(
        StellarSdk.Operation.changeTrust({
          asset: asset,
        })
      );
    });
    let transaction = builder
      .addMemo(StellarSdk.Memo.text("QADSAN GAME HAS STARTED"))
      .setTimeout(180)
      .build();
    let xdr = transaction.toXDR();
    const userSignedTransaction = await userSignTransaction(xdr);
    const transactionToSubmit = StellarSdk.TransactionBuilder.fromXDR(
      userSignedTransaction,
      StellarSdk.Networks.PUBLIC
    );
    try {
      const response = await server.submitTransaction(transactionToSubmit);
      console.log(response);
      loader.classList.add('not-active');
      openpPopup({
        popup: popup,
        title: popupTite,
        result: popupResult,
        hash: response.hash,
      });
    } catch (err) {
      console.error(err);
    }
  });

  openTrustsFromFreighter.disabled = false;
};
