export default async (context, locale) => {
  let items = [];
  await fetch(process.env.APP_URL + 'api/lang.json?urdu=1')
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
//   selectBrands: 'برانڈز کو منتخب کریں۔',
//   back: 'پیچھے',
//   next: 'اگے',
//   SelectSearchProducts: 'مصنوعات کو منتخب/تلاش کریں۔',
//   ProductsName: 'پروڈکٹ کا نام',
//   Remove: 'منسوخ',
//   Update:'اپ ڈیٹ',
//   ComparePrices:'قیمتوں کا موازنہ کریں۔',
//   TotalAmount:'کل رقم',
//   Quantity:'مقدار',
//   Action:'عمل',
//   SaveGenerateQuote:'محفوظ اور اقتباس تیار کریں۔',
//   Search:'تلاش کریں',
//   Brands:'برانڈز',
//   UnitPrice:'یونٹ کی قیمت',
//   TotalPrice:'کل قیمت',
//   DownloadSubmit:'ڈاؤن لوڈ اور جمع کرائیں',
//   Name:'نام',
//   Phone:'فون',
//   Adress:'پتہ',
//   Password:'پاس ورڈ',
//   logout:'لاگ آوٹ',
//   Login:'لاگ ان',
//   Register:'رجسٹر ',
//   PleaseLogintoContinue: 'جاری رکھنے کے لئے لاگ ان کریں',
//   PleaseRegistertoContinue: 'جاری رکھنے کے لئے رجسٹر کریں',
//   Invoices:'رسیدیں',
//   InvoiceDetails:'انوائس کی تفصیلات',
//   Products:'مصنوعات',
    //  Customers:'گاہکوں'
// }
