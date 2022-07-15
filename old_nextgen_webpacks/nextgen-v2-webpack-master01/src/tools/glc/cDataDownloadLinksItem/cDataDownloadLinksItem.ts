var cDataDownloadLinksItem = {
  getComponent: function (extendedTool, items, toolbar, menu) {
    var block = extendedTool.owningBlock.blockConfig;

    var text = block.text;
    var outboundlink = block.link;

    var menuItem = {
      extendedTool: extendedTool,
      text: text,
      handler: function () {
        var blockConfig = this.extendedTool.owningBlock.blockConfig;

        var link = document.createElement('a');
        link.setAttribute('href', outboundlink);
        link.setAttribute('target', '__blank');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        //delete link;
      },
    };

    return menuItem;
  },
};

export var toolName = 'cDataDownloadLinksItem';
export var tool = cDataDownloadLinksItem;
