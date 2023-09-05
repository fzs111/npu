const utils = require("./utils");
const storage = require("./storage");
const modules = require("./moduleNames")

(async () => {
  if(!utils.isNeptunPage() && !module.runOutsideNeptun)
    return

  await storage.initialize();

  modules.forEach(moduleName => {
    const module = require(`./modules/${moduleName}`)

    if (
      storage.get('moduleConfig', moduleName, 'enabled') &&
      module.shouldActivate()
    ) {
      module.initialize();
    }
  });
})();
