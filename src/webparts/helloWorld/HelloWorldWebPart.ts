import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneToggle
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloWorldWebPart.module.scss';
import * as strings from 'HelloWorldWebPartStrings';

export interface IHelloWorldWebPartProps {
  description: string;
  test: string,
    checkbox: boolean,
  dropdown: string,
  toggle: boolean
}

export default class HelloWorldWebPart extends BaseClientSideWebPart <IHelloWorldWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.helloWorld }">
    <div class="${ styles.container }">
      <div class="${ styles.row }">
        <div class="${ styles.column }">
          <span class="${ styles.title }">Welcome to SharePoint!</span>
  <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
  <p>Dropdown sélectionné: ${ this.properties.dropdown } </p>
  <p>Checkbox cochée? ${this.properties.checkbox ? 'BLABLA TRUE' : 'BLA FALSE'}</p> 
    <p class="${ styles.description }">${escape(this.properties.description)}</p>
      <a href="https://aka.ms/spfx" class="${ styles.button }">
        <span class="${ styles.label }">Learn more</span>
          </a>
          </div>
          </div>
          </div>
          </div>`;
  }

  protected get dataVersion(): Version {
  return Version.parse('1.0');
}

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
  return {
    pages: [
      {
        header: {
          description: strings.PropertyPaneDescription
        },
        groups: [
          {
            groupName: strings.BasicGroupName,
            groupFields: [
              PropertyPaneTextField('description', {
                label: strings.DescriptionFieldLabel
              }),
              PropertyPaneTextField('test', {
                label: strings.MultiLineTextField,
                multiline: true
              }),
              PropertyPaneCheckbox('checkbox', {
                    text: strings.TestCheckbox
              }),
              PropertyPaneDropdown('dropdown', {
                  label: strings.TestDropdown,
                  options: [
                    { key: '1', text: strings.Emails },
                    { key: '2', text: strings.Tasks },
                    { key: '3', text: strings.Events }
                  ]
              }),
              PropertyPaneToggle('toggle', {
                label: strings.TestToggle,
                onText: strings.On,
                offText: strings.Off
            })
            ]
          }
        ]
      }
    ]
  };
}
}
