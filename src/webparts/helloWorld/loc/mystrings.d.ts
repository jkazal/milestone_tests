declare interface IHelloWorldWebPartStrings {
  TestToggle: any;
  TestDropdown: string;
  TestCheckbox: string;
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'HelloWorldWebPartStrings' {
  const strings: IHelloWorldWebPartStrings;
  strings.TestCheckbox = "chien";
  export = strings;
}
