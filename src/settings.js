function createSettingsPopup(){
    const html = `
        <div class="npu-settings-overlay">
            <div class="npu-settings-popup">

            </div>
        </div>
    `
        modules.forEach(moduleName => {
            const module = require(`./modules/${moduleName}`)
            //storage.get('moduleConfig', moduleName, 'enabled')

            Object.values(settings).map(([setting, [hungarianName, type]]) => {
                const div = document.createElement('div')
                const enableCheckbox = document.createElement('input')
                
                const label = document.createElement('label')
                label.innerText = hungarianName
                switch(type) {
                    case 'bool': 
                        return 
                }
            })
        });
}