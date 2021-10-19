/**
 * 功能权限接口
 */
import request from '@/utils/request'

export const getSysPermissionList = () => {
  return request({
    method: 'POST',
    url: 'getSysPermissionList'
  })
}
