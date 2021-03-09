import { withPluginApi } from "discourse/lib/plugin-api";
export default {
  name: "customize-ressourcerie",
  initialize(){
    withPluginApi("0.8.7", api => {
        let ressourcerie_category_pattern = /c\/ressourerie/;

        api.onPageChange((url, title) => {
          if(url.match(ressourcerie_category_pattern)) {
            $("#create-topic .d-button-label").text("Partager une ressource");
            // note: this does NOT work if we directly refresh said category and open the composer, because the composers text takes precedence
            // this does work if we browse in the category then open the composer
            $(".composer-action-title .action-title").text("Partager une ressource");
          }
        });

    });
  }
}
