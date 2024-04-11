sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'productcart.project1',
            componentId: 'productObjectPage',
            contextPath: '/product'
        },
        CustomPageDefinitions
    );
});