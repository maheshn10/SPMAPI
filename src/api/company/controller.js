import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Company } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Company.create(body)
    .then((company) => company.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Company.find(query, select, cursor)
    .then((companies) => companies.map((company) => company.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Company.findById(params.id)
    .then(notFound(res))
    .then((company) => company ? company.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Company.findById(params.id)
    .then(notFound(res))
    .then((company) => company ? _.merge(company, body).save() : null)
    .then((company) => company ? company.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Company.findById(params.id)
    .then(notFound(res))
    .then((company) => company ? company.remove() : null)
    .then(success(res, 204))
    .catch(next)
