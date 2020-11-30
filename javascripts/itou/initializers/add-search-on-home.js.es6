import { withPluginApi } from "discourse/lib/plugin-api";
export default {
  name: "add-search-on-home",
  initialize(){
    withPluginApi("0.8", api => {
      api.registerConnectorClass('above-main-container', 'search-banner', {
        setupComponent(args, component) {
          var topMenuRoutes = Discourse.SiteSettings.top_menu.split('|').map(function(route) {return '/' + route});
          var homeRoute = topMenuRoutes[0];

          api.onPageChange((url, title) => {
            var home = url === "/" || url.match(/^\/\?/) || url === homeRoute
            var showBannerHere = home

            if (showBannerHere){
              component.set('displaySearchBanner', true);
              $('html').addClass('display-search-banner');
            } else {
              component.set('displaySearchBanner', false);
              $('html').removeClass('display-search-banner');
            }

            component.set('show_for', true);
          });
        }
      });
    });
  }
}
