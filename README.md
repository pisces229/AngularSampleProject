## 功能分層
> app
> * core
> > 核心功能
> > * guard
> > > 路由守衛
> > > * [name].guard.ts
> > * interceptor
> > > AJAX攔截器
> > > * [name].interceptor
> > * service
> > > 核心服務
> > > * [name].service.ts
> > * store
> > > 核心服務狀態管理
> > > * [name]-store.service.ts
> > * model
> > > 核心服務資料結構
> > > * [name]
> > > > * [name]-model.ts
> * shared
> > 共用功能
> > * component
> > > 共用組件
> > > * [name]
> > > > * [name].component.ts
> > > > * [name].component.html
> > > > * [name].component.scss
> > * service
> > > 共用邏輯服務
> > > * [name].service.ts
> > * store
> > > 共用邏輯服務狀態管理
> > > * [name]-store.service.ts
> > * model
> > > 共用邏輯服務資料結構
> > > * [name]
> > > > * [name]-model.ts
> > * directive
> > > 共用Directive
> > > * [name].directive.ts
> > * pipe
> > > 共用Pipe
> > > * [name].pipe.ts
> > * util
> > > 共用方法
> > > * [name]-util.service.ts
> * page
> > 頁面功能
> > * component
> > > 頁面組件
> > > * [name]
> > > > * [name].component.ts
> > > > * [name].component.html
> > > > * [name].component.scss
> > * service
> > > 頁面組件服務
> > > * [name].service.ts
> > * store
> > > 頁面組件服務狀態管理
> > > * [name]-store.service.ts
> > * model
> > > 頁面組件服務資料結構
> > > * [name]
> > > > * [name]-model.ts
