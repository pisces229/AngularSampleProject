## app
    core (核心)
    shared (共用)
    page (頁面)
### core (核心)
    guard (路由守衛)
        [name].guard.ts
    handler (處理程序)
        [name].handler.ts
    interceptor (攔截器)
        [name].interceptor.ts
### shared (共用)
    component (元件)
        [name]
            [name].component.ts
            [name].component.html
            [name].component.scss
            [name]-model.ts  
            [name].service.ts
    pipe (Pipe)
        [name].pipe.ts
    model (資料結構)
        [name]-model.ts
    service (服務)
        [name].service.ts
    store (狀態管理)
        [name]-store.service.ts
    shared-component.module.ts
    shared-pipe.module.ts
### page (頁面)
    [parent] (頁面模組)
        [child] (頁面)
            [child].component.ts
            [child].component.html
            [child].component.scss
        [parent]-model.ts
        [parent].service.ts 
        [parent]-store.service.ts 
        [parent]-routing-path.ts
        [parent]-routing.module.ts
        [parent].module.ts

### json2ts
http://json2ts.com/
