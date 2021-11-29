import {
  server,
  AllAssets,
  openTrustsFromFreighter,
  popup,
  popupTite,
  popupResult,
} from "./constants.js";
import { openpPopup } from "./utils.js";

export const openTrustAlbedo= async () => {
 const publicKey = await albedo.publicKey()
  .then(res => res.pubkey)
  .catch(e => console.error(e))
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
    const userSignedTransaction =  albedo.tx({
                                      xdr: xdr,
                                      network: 'public'
                                        })
                                      .then(res => res.result)
                                      .catch(e => console.error(e))

    const transactionToSubmit = StellarSdk.TransactionBuilder.fromXDR(
      userSignedTransaction,
      StellarSdk.Networks.PUBLIC
    );
    try {
      const response = await server.submitTransaction(transactionToSubmit);
      console.log(response);
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
}
