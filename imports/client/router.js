import { Router } from 'meteor/akryum:vue-router2';
import Index from '/imports/client/views/public/Index.vue';
import Page from '/imports/client/views/public/Page.vue';

Router.configure(router => {
    router.addRoutes([{
        path: "/",
        name: "Index",
        components: {
            default: Index,
        }
    }, {
        path: "/page",
        name: "Page",
        components: {
            default: Page,
        }
    }, ]);
});