import React from "react"

import HeroOne from "./PageComponents/HeroOne"
import ImageByContent from "./PageComponents/ImageByContent"
import ContentBlockOne from "./PageComponents/ContentBlockOne"

const PageComponentGroups = props => {
  const { components } = props
  const allPageComponents =
    components?.acfMainTemplateFields?.pageComponents?.length > 0 ? (
      <>
        {components?.acfMainTemplateFields?.pageComponents.map(
          (component, index) => {
            switch (component?.fieldGroupName) {
              case "Page_Acfmaintemplatefields_PageComponents_HeroOne":
                return <HeroOne key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ImageByContent":
                return <ImageByContent key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ContentBlockOne":
                return <ContentBlockOne key={index} data={component} />

              default:
                return (
                  <p>Cannot find this component {component.fieldGroupName}</p>
                )
            }
          }
        )}
      </>
    ) : (
      <p>This page has no content</p>
    )

  return <>{allPageComponents}</>
}

export default PageComponentGroups
