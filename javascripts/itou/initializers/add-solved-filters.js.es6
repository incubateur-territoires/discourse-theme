import { withPluginApi } from "discourse/lib/plugin-api";
export default {
  name: "add-solved-filters-initializer",
  initialize(){
    withPluginApi("0.8.7", api => {

      api.addNavigationBarItem({
        name: "solved",
        displayName: "Résolus",
        href: "?solved=yes",
        customFilter: (category, args, router) => { return category }
      });

      api.addNavigationBarItem({
        name: "unsolved",
        displayName: "Non résolus",
        href: "?solved=no",
        customFilter: (category, args, router) => { return category }
      });

    });
  }
}
