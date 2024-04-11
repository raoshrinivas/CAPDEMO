sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'productcart.project1',
            componentId: 'productList',
            contextPath: '/product'
        },
        CustomPageDefinitions
    );
});