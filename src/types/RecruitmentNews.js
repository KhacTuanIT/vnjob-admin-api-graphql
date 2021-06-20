const { gql } = require("apollo-server");

module.exports = gql`
    type RecruitmentNews {
        id: Int!
        org_id: Int
        author_id: Int
        major_id: Int
        title: String
        content: String
        address: String
        city: String
        start_time: date
        end_time: date
        interview_start_time: date
        interview_end_time: date
    }

    type Query {
        recruitmentnews: [RecruitmentNews]
    }

    input CreateRecruitmentNewsInput {
        org_id: Int
        author_id: Int
        major_id: Int
        title: String
        content: String
        address: String
        city: String
        start_time: date
        end_time: date
        interview_start_time: date
        interview_end_time: date
    }

    input UpdateRecruitmentNewsInput {
        org_id: Int
        author_id: Int
        major_id: Int
        title: String
        content: String
        address: String
        city: String
        start_time: date
        end_time: date
        interview_start_time: date
        interview_end_time: date
    }

    type DeletePayload {
        id: Int!
    }

    type {
        createRecruitmentNews(input: CreateRecruitmentNewsInput!): RecruitmentNews!
        updateRecruitmentNews(id: Int, input: UpdateRecruitmentNewsInput!): RecruitmentNews!
        deleteRecruitmentNews(id: Int): DeletePayload!
    }
`;
