export default async (context, locale) => {
  let items = [];
  await fetch(process.env.APP_URL + 'api/lang.json')
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    items = data;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  return await Promise.resolve(items)
}

// export default {
//   selectBrands: 'Select Brands',
//   back: 'Back',
//   next: 'Next',
//   SelectSearchProducts: 'Select/Search Products',
//   ProductsName: 'Products Name',
//   Remove: 'Remove',
//   Update:'Update',
//   ComparePrices:'Compare Prices',
//   TotalAmount:'Total Amount',
//   Quantity:'Quantity',
//   Action:'Action',
//   SaveGenerateQuote:'Save & Generate Quote',
//   Search:'Search',
//   Brands:'Brands',
//   UnitPrice:'Unit Price',
//   TotalPrice:'Total Price',
//   DownloadSubmit:'Download & Submit',
//   Name:'Name',
//   Phone:'Phone',
//   Adress:'Adress',
//   Password:'Password',
//   logout:'logout',
//   Login:'Login',
//   Register:'Register',
//   PleaseLogintoContinue: 'Please Login to Continue.',
//   PleaseRegistertoContinue: 'Please Register to Continue.',
//   InvoiceDetails:'Invoice Details'
// }
