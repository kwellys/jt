import CMS from 'netlify-cms'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import AboutUsPreview from './preview-templates/AboutUsPreview'
import ProjectPreview from './preview-templates/ProjectPreview'
import ServicePreview from './preview-templates/ServicePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndustriesPagePreview from './preview-templates/IndPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutUsPreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('index-page', IndexPagePreview)
CMS.registerPreviewTemplate('project', ProjectPreview)
CMS.registerPreviewTemplate('service', ServicePreview)
CMS.registerPreviewTemplate('ind-page', IndustriesPagePreview)