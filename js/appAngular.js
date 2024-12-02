const { Component, NgModule } = ng.core;
    const { BrowserModule } = ng.platformBrowser;
    const { platformBrowserDynamic } = ng.platformBrowserDynamic;

    

@Component({
    selector: 'app-root',
    template: `
      <h1>Hola Mundo</h1>
      <p>Con Angular desde CDN</p>
    `
  })
  class AppComponent {}

  
  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
  })
  class AppModule {}

  
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));