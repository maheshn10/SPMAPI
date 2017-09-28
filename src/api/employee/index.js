import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Employee, { schema } from './model'

const router = new Router()
const { FirstName, LastName, MiddleName, Sufix, DisplayName, FormalName, Title, BirthName, Initials, Prefix, Gender, MaritalStatus, MaritalStatusSince, SecondNationality, ThirdNationality, NativePreferredLanguage, ChallengeStatus, CertificateStartDate, CertificateEndDate } = schema.tree

/**
 * @api {post} /employees Create employee
 * @apiName CreateEmployee
 * @apiGroup Employee
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam FirstName Employee's FirstName.
 * @apiParam LastName Employee's LastName.
 * @apiParam MiddleName Employee's MiddleName.
 * @apiParam Sufix Employee's Sufix.
 * @apiParam DisplayName Employee's DisplayName.
 * @apiParam FormalName Employee's FormalName.
 * @apiParam Title Employee's Title.
 * @apiParam BirthName Employee's BirthName.
 * @apiParam Initials Employee's Initials.
 * @apiParam Prefix Employee's Prefix.
 * @apiParam Gender Employee's Gender.
 * @apiParam MaritalStatus Employee's MaritalStatus.
 * @apiParam MaritalStatusSince Employee's MaritalStatusSince.
 * @apiParam SecondNationality Employee's SecondNationality.
 * @apiParam ThirdNationality Employee's ThirdNationality.
 * @apiParam NativePreferredLanguage Employee's NativePreferredLanguage.
 * @apiParam ChallengeStatus Employee's ChallengeStatus.
 * @apiParam CertificateStartDate Employee's CertificateStartDate.
 * @apiParam CertificateEndDate Employee's CertificateEndDate.
 * @apiSuccess {Object} employee Employee's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Employee not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ FirstName, LastName, MiddleName, Sufix, DisplayName, FormalName, Title, BirthName, Initials, Prefix, Gender, MaritalStatus, MaritalStatusSince, SecondNationality, ThirdNationality, NativePreferredLanguage, ChallengeStatus, CertificateStartDate, CertificateEndDate }),
  create)

/**
 * @api {get} /employees Retrieve employees
 * @apiName RetrieveEmployees
 * @apiGroup Employee
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} employees List of employees.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 master access only.
 */
router.get('/',
  master(),
  query(),
  index)

/**
 * @api {get} /employees/:id Retrieve employee
 * @apiName RetrieveEmployee
 * @apiGroup Employee
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object} employee Employee's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Employee not found.
 * @apiError 401 master access only.
 */
router.get('/:id',
  master(),
  show)

/**
 * @api {put} /employees/:id Update employee
 * @apiName UpdateEmployee
 * @apiGroup Employee
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam FirstName Employee's FirstName.
 * @apiParam LastName Employee's LastName.
 * @apiParam MiddleName Employee's MiddleName.
 * @apiParam Sufix Employee's Sufix.
 * @apiParam DisplayName Employee's DisplayName.
 * @apiParam FormalName Employee's FormalName.
 * @apiParam Title Employee's Title.
 * @apiParam BirthName Employee's BirthName.
 * @apiParam Initials Employee's Initials.
 * @apiParam Prefix Employee's Prefix.
 * @apiParam Gender Employee's Gender.
 * @apiParam MaritalStatus Employee's MaritalStatus.
 * @apiParam MaritalStatusSince Employee's MaritalStatusSince.
 * @apiParam SecondNationality Employee's SecondNationality.
 * @apiParam ThirdNationality Employee's ThirdNationality.
 * @apiParam NativePreferredLanguage Employee's NativePreferredLanguage.
 * @apiParam ChallengeStatus Employee's ChallengeStatus.
 * @apiParam CertificateStartDate Employee's CertificateStartDate.
 * @apiParam CertificateEndDate Employee's CertificateEndDate.
 * @apiSuccess {Object} employee Employee's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Employee not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ FirstName, LastName, MiddleName, Sufix, DisplayName, FormalName, Title, BirthName, Initials, Prefix, Gender, MaritalStatus, MaritalStatusSince, SecondNationality, ThirdNationality, NativePreferredLanguage, ChallengeStatus, CertificateStartDate, CertificateEndDate }),
  update)

/**
 * @api {delete} /employees/:id Delete employee
 * @apiName DeleteEmployee
 * @apiGroup Employee
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Employee not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
