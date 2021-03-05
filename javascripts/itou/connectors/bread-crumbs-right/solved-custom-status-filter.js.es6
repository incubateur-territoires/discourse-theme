import I18n from "I18n";
import DiscourseUrl from "discourse/lib/url";
import { getOwner } from "discourse-common/lib/get-owner";

export default {
  shouldRender(args, component) {
    const router = getOwner(this).lookup("router:main");
    if (
      router.currentPath === "discovery.categories"
    ) {
      return false;
    } else if (component.siteSettings.allow_solved_on_all_topics) {
      return true;
    } else {
      const controller = getOwner(this).lookup(
        "controller:navigation/category"
      );
      return controller && controller.get("category.enable_accepted_answers");
    }
  },

  actions: {
    changeStatus(newStatus) {
      let location = window.location;
      let queryStrings = location.search;
      let params = queryStrings.startsWith("?")
        ? queryStrings.substr(1).split("&")
        : [];

      params = params.filter((param) => !param.startsWith("solved="));

      if (newStatus && newStatus !== "all") {
        newStatus = newStatus === "solved" ? "yes" : "no";
        params.push(`solved=${newStatus}`);
      }

      queryStrings = params.length > 0 ? `?${params.join("&")}` : "";
      DiscourseUrl.routeTo(
        `${location.pathname}${queryStrings}${location.hash}`
      );
    }
  },
};
