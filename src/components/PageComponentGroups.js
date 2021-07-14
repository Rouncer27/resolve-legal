import React from "react"

import HeroOne from "./PageComponents/HeroOne"
import ImageByContent from "./PageComponents/ImageByContent"
import ContentBlockOne from "./PageComponents/ContentBlockOne"
import ThreeColumnsContent from "./PageComponents/ThreeColumnsContent"
import SocialMediaIcons from "./PageComponents/SocialMediaIcons"
import Testimonials from "./PageComponents/Testimonials"
import LinkBoxes from "./PageComponents/LinkBoxes"
import CalloutAction from "./PageComponents/CalloutAction"
import TitleOne from "./PageComponents/TitleOne"
import TitleTwo from "./PageComponents/TitleTwo"
import TitleThree from "./PageComponents/TitleThree"
import TitleSimpleContent from "./PageComponents/TitleSimpleContent"
import HeroPage from "./PageComponents/HeroPage"
import ImageSimpleContent from "./PageComponents/ImageSimpleContent"
import Logos from "./PageComponents/Logos"
import WysiwygImages from "./PageComponents/WysiwygImages"
import Directory from "./PageComponents/Directory"
import ImageLinks from "./PageComponents/ImageLinks"

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

              case "Page_Acfmaintemplatefields_PageComponents_ThreeColumnsContent":
                return <ThreeColumnsContent key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_SocialMediaIcons":
                return <SocialMediaIcons key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_Testimonials":
                return <Testimonials key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_LinkBoxes":
                return <LinkBoxes key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_CalloutAction":
                return <CalloutAction key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_TitleOne":
                return <TitleOne key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_TitleTwo":
                return <TitleTwo key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_TitleThree":
                return <TitleThree key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_TitleSimpleContent":
                return <TitleSimpleContent key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_HeroPage":
                return <HeroPage key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ImageSimpleContent":
                return <ImageSimpleContent key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_Logos":
                return <Logos key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_WysiwygImages":
                return <WysiwygImages key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_Directory":
                return <Directory key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ImageLinks":
                return <ImageLinks key={index} data={component} />

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
