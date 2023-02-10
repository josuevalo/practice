const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

const calculateSalesTax = function(salesData, taxRates) {

  let finalObject = {};

  for (let sale of salesData) {

    let add = 0;
    for (let sal of sale.sales) {
      add += sal;
    }
    let province = sale.province;
    let tax = taxRates[province];
    let totalTaxes = tax * add;

    if (!finalObject[sale.name]) {

      finalObject[sale.name] = {};
      finalObject[sale.name].totalSales = add;
      finalObject[sale.name].totalTaxes = totalTaxes;
    } else {
      finalObject[sale.name].totalSales += add;
      finalObject[sale.name].totalTaxes += totalTaxes;
    }
  }

  console.log(finalObject)

};
calculateSalesTax(companySalesData, salesTaxRates);