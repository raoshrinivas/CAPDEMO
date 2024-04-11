namespace myproduct;
using { managed  } from '@sap/cds/common';

type PriceDetails
{
    price : Integer;
    discount  : Integer
}

aspect additioninfo{
    mfsdate :  String;
    mfedate : String;
}


entity product: managed {
    key id     : String;
        name   : String;
       // cost : PriceDetails

}

entity supplier {
    key id           : String;
        suppliername : String;
        address      : String;
        email        : String;
}
