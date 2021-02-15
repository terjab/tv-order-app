import { generatePath } from 'react-router'

export const HOMEPAGE = '/'
export const PACKAGE_DETAIL = '/:packageId'
export const ORDER = '/:packageId/order'
export const getPackageDetailRoute = packageId =>
  generatePath(PACKAGE_DETAIL, { packageId })
