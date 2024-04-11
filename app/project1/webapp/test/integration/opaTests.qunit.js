sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'productcart/project1/test/integration/FirstJourney',
		'productcart/project1/test/integration/pages/productList',
		'productcart/project1/test/integration/pages/productObjectPage'
    ],
    function(JourneyRunner, opaJourney, productList, productObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('productcart/project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheproductList: productList,
					onTheproductObjectPage: productObjectPage
                }
            },
            opaJourney.run
        );
    }
);