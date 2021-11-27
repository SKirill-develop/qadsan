import { server, AllAssets} from "./constants.js";

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
  const publicKey = await retrievePublicKey()
  server.loadAccount(publicKey)
      .then(async account => {
          const fee = 300
          const builder = new StellarSdk.TransactionBuilder(account, { fee, networkPassphrase: StellarSdk.Networks.PUBLIC });
          AllAssets.forEach((asset) => {
            builder.addOperation(
              StellarSdk.Operation.changeTrust({
                  asset: asset
              }))
          })
          let transaction = builder.setTimeout(180).build();
          let xdr = transaction.toXDR()
          const userSignedTransaction = await userSignTransaction(xdr);
          const transactionToSubmit = StellarSdk.TransactionBuilder.fromXDR(
              userSignedTransaction,
              StellarSdk.Networks.PUBLIC
          );
          console.log(transactionToSubmit)
          try {
              const response = await server.submitTransaction(transactionToSubmit);
              console.log(response);
          } catch (err) {
              console.error(err);
          }
      })
}

