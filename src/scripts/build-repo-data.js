/*
Copyright 2022 Expedia, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const {queryRepositoriesByTopic} = require('./github/github-queries');
const {writeJsonFile} = require('./filesystem/fs-utils');

const EXPEDIA_ORG = 'ExpediaGroup'
const TOPIC_FEATURED_REPO = 'oss-portal-featured'
const TOPIC_LISTED_REPO = 'oss-portal-listed'

/**
 * Queries the repositories in the Expedia Group GitHub organization and writes them as JSON to the file at the given path.
 * The repositories are searched by topic:
 * - {@link TOPIC_LISTED_REPO} if the repo should be shown in the portal
 * - {@link TOPIC_FEATURED_REPO} if the repo should be particularly highlighted in the portal
 * @param {string} filePath the json file that will be written
 * @returns {Promise<void | Error>} a promise resolving to <code>undefined</code> in case of success or rejecting with an error
 */
exports.queryAndDumpRepositories = async (organization = EXPEDIA_ORG, filePath = 'static/repos.json') => {
    const featuredRepos = await queryRepositoriesByTopic(organization, TOPIC_FEATURED_REPO)
        .then(flagAsFeatured(true))
    const listedRepos = await queryRepositoriesByTopic(organization, TOPIC_LISTED_REPO)
        .then(flagAsFeatured(false))
    await writeJsonFile(filePath, featuredRepos.concat(listedRepos))
}

function flagAsFeatured(featured) {
    return (repositories) => repositories.map(repo => ({...repo, featured: featured}))
}
