using { myproduct as myprod  } from '../db/Schama';

service helloword {

    //function display (input1: String) returns String;
    entity product as projection on myprod.product;
    entity supplier as projection on myprod.supplier;
    // function addition (input1:Integer,input2:Integer) returns Integer;
    

}